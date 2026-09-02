// Script de preparación de datos, se corre una sola vez (o cuando cambien las
// fuentes) con: node scripts/build-hidalgo-map.mjs
//
// Lee dos fuentes oficiales de INEGI, ambas en scripts/fuente-datos/ (no se
// suben al sitio, son solo insumo de este script):
//   1. limite_municipal.json — límites municipales, 84 municipios de Hidalgo,
//      ~2000 puntos por polígono, 16 MB.
//   2. conjunto_de_datos_iter_13CSV20.csv — Censo de Población y Vivienda 2020,
//      Iter (Integración territorial) del estado 13 (Hidalgo), 4 MB.
//
// Y genera una sola versión simplificada, proyectada y con el censo cruzado
// por municipio, lista para incrustar en el sitio sin pesar la página:
// src/data/hidalgo-municipios.json.
//
// Nota sobre nombres de municipio: aquí SÍ se conserva el nombre (a diferencia
// de una versión anterior de este script). La razón es que ahora el nombre
// alimenta un hover con datos públicos del censo — no tiene relación con qué
// municipio corresponde a qué caso de cliente, que sigue anonimizado en
// src/data/casos.ts. Ver PENDIENTES.md.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const GEOJSON_ORIGEN = path.resolve(__dirname, 'fuente-datos/limite_municipal.json');
const CSV_ORIGEN = path.resolve(__dirname, 'fuente-datos/conjunto_de_datos_iter_13CSV20.csv');
const DESTINO = path.resolve(__dirname, '../src/data/hidalgo-municipios.json');

const VIEWBOX_WIDTH = 1000;
// Cuántos puntos como máximo debe conservar el anillo más grande tras simplificar.
const EPSILON_BASE = 0.55;

function perpendicularDistance(p, a, b) {
  const [x, y] = p;
  const [x1, y1] = a;
  const [x2, y2] = b;
  const dx = x2 - x1;
  const dy = y2 - y1;
  if (dx === 0 && dy === 0) return Math.hypot(x - x1, y - y1);
  const t = ((x - x1) * dx + (y - y1) * dy) / (dx * dx + dy * dy);
  const projX = x1 + t * dx;
  const projY = y1 + t * dy;
  return Math.hypot(x - projX, y - projY);
}

function douglasPeucker(points, epsilon) {
  if (points.length < 3) return points;
  let maxDist = 0;
  let index = 0;
  const first = points[0];
  const last = points[points.length - 1];
  for (let i = 1; i < points.length - 1; i++) {
    const d = perpendicularDistance(points[i], first, last);
    if (d > maxDist) {
      maxDist = d;
      index = i;
    }
  }
  if (maxDist > epsilon) {
    const left = douglasPeucker(points.slice(0, index + 1), epsilon);
    const right = douglasPeucker(points.slice(index), epsilon);
    return left.slice(0, -1).concat(right);
  }
  return [first, last];
}

function ringArea(ring) {
  // Fórmula del cordón de zapato (shoelace), suficiente para comparar tamaños relativos.
  let area = 0;
  for (let i = 0; i < ring.length - 1; i++) {
    area += ring[i][0] * ring[i + 1][1] - ring[i + 1][0] * ring[i][1];
  }
  return Math.abs(area / 2);
}

function ringCentroid(ring) {
  let x = 0;
  let y = 0;
  for (const [px, py] of ring) {
    x += px;
    y += py;
  }
  return [x / ring.length, y / ring.length];
}

function ringLength(ring) {
  let len = 0;
  for (let i = 0; i < ring.length - 1; i++) {
    len += Math.hypot(ring[i + 1][0] - ring[i][0], ring[i + 1][1] - ring[i][1]);
  }
  return len;
}

// --- Censo: parseo del CSV del Iter (INEGI, Censo de Población y Vivienda 2020) ---
function num(v) {
  if (v === undefined) return null;
  const s = v.trim();
  if (s === '' || s === '*' || s.toUpperCase() === 'N/D') return null;
  const n = Number(s);
  return Number.isFinite(n) ? n : null;
}

console.log('Leyendo', CSV_ORIGEN);
const csvTexto = fs.readFileSync(CSV_ORIGEN, 'utf-8').replace(/^﻿/, '');
const csvLineas = csvTexto.split(/\r?\n/).filter(Boolean);
const csvHeader = csvLineas[0].split(',');
const idx = Object.fromEntries(csvHeader.map((nombreCol, i) => [nombreCol, i]));

const censoPorMun = new Map();
for (let i = 1; i < csvLineas.length; i++) {
  const cols = csvLineas[i].split(',');
  const mun = cols[idx.MUN];
  const loc = cols[idx.LOC];
  if (loc !== '0000' || mun === '000') continue; // solo totales de municipio, no la entidad ni localidades
  censoPorMun.set(mun, {
    nombre: cols[idx.NOM_MUN].trim(),
    pobtot: num(cols[idx.POBTOT]),
    pobfem: num(cols[idx.POBFEM]),
    pobmas: num(cols[idx.POBMAS]),
    pob0a14: num(cols[idx.POB0_14]),
    pob15a64: num(cols[idx.POB15_64]),
    pob65mas: num(cols[idx.POB65_MAS]),
    graproes: num(cols[idx.GRAPROES]),
    tvivhab: num(cols[idx.TVIVHAB]),
  });
}
console.log('Municipios con censo encontrados:', censoPorMun.size);

// --- Geografía: lectura del GeoJSON de límites municipales ---
console.log('Leyendo', GEOJSON_ORIGEN);
const geojson = JSON.parse(fs.readFileSync(GEOJSON_ORIGEN, 'utf-8'));
const features = geojson.features.filter((f) => f.properties.CVE_ENT === '13');
console.log('Municipios de Hidalgo encontrados en el GeoJSON:', features.length);

// --- Paso 1: bounding box global, con corrección de aspecto por latitud ---
let minLng = Infinity;
let maxLng = -Infinity;
let minLat = Infinity;
let maxLat = -Infinity;
for (const f of features) {
  const rings = f.geometry.type === 'Polygon' ? [f.geometry.coordinates[0]] : f.geometry.coordinates.map((p) => p[0]);
  for (const ring of rings) {
    for (const [lng, lat] of ring) {
      if (lng < minLng) minLng = lng;
      if (lng > maxLng) maxLng = lng;
      if (lat < minLat) minLat = lat;
      if (lat > maxLat) maxLat = lat;
    }
  }
}
const latMedRad = ((minLat + maxLat) / 2) * (Math.PI / 180);
const lngScale = Math.cos(latMedRad);
const rawWidth = (maxLng - minLng) * lngScale;
const rawHeight = maxLat - minLat;
const viewBoxHeight = Math.round((VIEWBOX_WIDTH * rawHeight) / rawWidth);

function project([lng, lat]) {
  const x = ((lng - minLng) * lngScale) / rawWidth * VIEWBOX_WIDTH;
  const y = (1 - (lat - minLat) / rawHeight) * viewBoxHeight; // se invierte: SVG crece hacia abajo
  return [Math.round(x * 10) / 10, Math.round(y * 10) / 10];
}

// --- Paso 2: simplificar cada municipio, construir el path SVG y cruzar el censo ---
const salida = { viewBox: `0 0 ${VIEWBOX_WIDTH} ${viewBoxHeight}`, fuenteCenso: 'INEGI, Censo de Población y Vivienda 2020', municipios: [] };
let totalPuntos = 0;
let sinCenso = 0;

for (const f of features) {
  const isMulti = f.geometry.type === 'MultiPolygon';
  const rings = isMulti ? f.geometry.coordinates.map((p) => p[0]) : [f.geometry.coordinates[0]];

  const anillosProyectados = rings.map((ring) => ring.map(project));
  // Epsilon proporcional al tamaño del anillo, para que un municipio chico no quede
  // reducido a un triángulo y uno grande no arrastre miles de puntos.
  const simplificados = anillosProyectados.map((ring) => {
    const xs = ring.map((p) => p[0]);
    const ys = ring.map((p) => p[1]);
    const size = Math.max(Math.max(...xs) - Math.min(...xs), Math.max(...ys) - Math.min(...ys));
    const epsilon = Math.max(0.35, size * 0.012) * (EPSILON_BASE / 0.55);
    return douglasPeucker(ring, epsilon);
  });

  const pathD = simplificados
    .map((ring) => `M${ring.map(([x, y]) => `${x},${y}`).join('L')}Z`)
    .join(' ');
  const longitud = Math.round(simplificados.reduce((acc, ring) => acc + ringLength(ring), 0));

  // Centroide: el anillo de mayor área (para descartar exclaves pequeños en el MultiPolygon).
  const anilloPrincipal = anillosProyectados.reduce((a, b) => (ringArea(a) > ringArea(b) ? a : b));
  const [cx, cy] = ringCentroid(anilloPrincipal);

  simplificados.forEach((r) => (totalPuntos += r.length));

  const censo = censoPorMun.get(f.properties.CVE_MUN);
  if (!censo) sinCenso++;

  salida.municipios.push({
    path: pathD,
    len: longitud,
    cx: Math.round(cx * 10) / 10,
    cy: Math.round(cy * 10) / 10,
    nombre: censo?.nombre ?? f.properties.NOMGEO,
    censo: censo
      ? {
          pobtot: censo.pobtot,
          pobfem: censo.pobfem,
          pobmas: censo.pobmas,
          pob0a14: censo.pob0a14,
          pob15a64: censo.pob15a64,
          pob65mas: censo.pob65mas,
          graproes: censo.graproes,
          tvivhab: censo.tvivhab,
        }
      : null,
  });
}

if (sinCenso > 0) console.warn('⚠️  Municipios sin cruce de censo (revisar claves MUN/CVE_MUN):', sinCenso);
console.log('Puntos totales tras simplificar:', totalPuntos, '(antes: ~168,748)');
fs.mkdirSync(path.dirname(DESTINO), { recursive: true });
fs.writeFileSync(DESTINO, JSON.stringify(salida));
const stats = fs.statSync(DESTINO);
console.log('Escrito', DESTINO, `(${Math.round(stats.size / 1024)} KB)`);
