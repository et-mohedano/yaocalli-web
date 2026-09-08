// Propuestas técnicas personalizadas para un posible cliente concreto — pensadas
// para enviarse como enlace privado, no para navegación pública del sitio: no se
// agregan a NAV_PRINCIPAL y se excluyen del sitemap (ver astro.config.mjs). Sigue
// el mismo patrón de catálogo que src/data/casos.ts y src/data/servicios.ts.
//
// Las cifras de censo (INEGI 2020) viven en src/data/hidalgo-municipios.json y se
// leen desde ahí (una sola fuente para el mismo dato). Aquí solo se agrega lo que
// ese archivo no trae: condición social, cartografía electoral e historial
// electoral, con fuente y fecha de corte citadas en cada campo — igual que en las
// notas del blog (ver /publicaciones/que-se-puede-saber-de-tu-municipio-sin-encuestas/).

export interface LocalidadPropuesta {
  nombre: string;
  poblacion: number;
}

export interface EleccionMunicipal {
  anio: number;
  cargo: string;
  ganador: { candidato?: string; partidoOCoalicion: string; votos?: number; porcentaje?: number };
  segundoLugar?: { candidato?: string; partidoOCoalicion: string; votos?: number; porcentaje?: number };
  participacion?: number;
  listaNominalDeLaEleccion?: number;
  fuente: string;
  fuenteHref: string;
  /** Wikipedia u otra fuente no oficial — sin acta de cómputo del IEEH, se declara explícitamente en la página */
  fuenteSecundaria?: boolean;
}

export interface Propuesta {
  slug: string;
  /** clave de municipio en hidalgo-municipios.json (mapa.municipios[].nombre) */
  nombreMunicipio: string;
  estado: string;
  cargoClienta: string;
  /** nombre completo, tal como lo publica la fuente oficial citada en fuenteNombreClienta */
  nombreClienta: string;
  periodoClienta: string;
  fuenteNombreClienta: string;
  fuenteNombreClientaHref: string;
  tituloSEO: string;
  metaDescripcion: string;

  /**
   * Cifras del Censo de Población y Vivienda 2020 (INEGI) que no vienen ya en
   * hidalgo-municipios.json (ese archivo solo trae población por sexo, tres
   * grupos de edad, escolaridad y viviendas habitadas — lo suficiente para el
   * hover del mapa de cobertura). Extraídas directamente de
   * scripts/fuente-datos/conjunto_de_datos_iter_13CSV20.csv, fila del total
   * municipal (MUN, LOC=0000), mismas fuente y fecha de corte.
   */
  censoAdicional: {
    pob18ymas: number;
    pob18ymasFem: number;
    pob18ymasMas: number;
    poblacion15ymas: number;
    pea: number;
    peaFem: number;
    peaMas: number;
    peInactiva: number;
    ocupada: number;
    desocupada: number;
    analfabetismo15ymas: number;
    sinDerechohabiencia: number;
    totalHogares: number;
    totalViviendas: number;
  };

  localidadesPrincipales: LocalidadPropuesta[];
  totalLocalidadesConDato: number;

  marginacion?: {
    indice: number;
    grado: string;
    anio: number;
    lugarEstatalDe84?: number;
    fuente: string;
    fuenteHref: string;
  };
  rezagoSocial?: {
    grado: string;
    anio: number;
    fuente: string;
    fuenteHref: string;
  };
  pobreza?: {
    porcentaje: number;
    porcentajeExtrema: number;
    vulnerablePorCarencias: number;
    vulnerablePorIngresos: number;
    anio: number;
    fuente: string;
    fuenteHref: string;
  };
  seccionesElectorales?: {
    total: number;
    fuente: string;
    fuenteHref: string;
  };
  listaNominal?: {
    total: number;
    corte: string;
    fuente: string;
    fuenteHref: string;
  };
  historialElectoral: EleccionMunicipal[];
}

export const propuestas: Propuesta[] = [
  {
    slug: 'chapantongo',
    nombreMunicipio: 'Chapantongo',
    estado: 'Hidalgo',
    cargoClienta: 'síndica municipal',
    nombreClienta: 'Lic. Sayli Ecaterina Caballero García',
    periodoClienta: '2024–2027',
    fuenteNombreClienta: 'Ayuntamiento de Chapantongo, sitio oficial',
    fuenteNombreClientaHref: 'https://www.chapantongo.gob.mx/ayuntamiento-2024-2027/',
    tituloSEO: 'Diagnóstico de posicionamiento en Chapantongo, Hidalgo | Yaocalli',
    metaDescripcion:
      'Propuesta técnica de encuesta de posicionamiento y percepción para Chapantongo, Hidalgo: panorama del municipio, condición social y tamaño de muestra calculado con datos oficiales.',
    censoAdicional: {
      pob18ymas: 9007,
      pob18ymasFem: 4717,
      pob18ymasMas: 4290,
      poblacion15ymas: 9639,
      pea: 5733,
      peaFem: 2117,
      peaMas: 3616,
      peInactiva: 4554,
      ocupada: 5521,
      desocupada: 212,
      analfabetismo15ymas: 775,
      sinDerechohabiencia: 3961,
      totalHogares: 3887,
      totalViviendas: 6109,
    },
    localidadesPrincipales: [
      { nombre: 'Santa María Amealco', poblacion: 2113 },
      { nombre: 'Chapantongo (cabecera municipal)', poblacion: 2006 },
      { nombre: 'San Bartolo Ozocalpan', poblacion: 1672 },
      { nombre: 'Tlaunilolpan', poblacion: 1537 },
      { nombre: 'San Juan el Sabino', poblacion: 829 },
      { nombre: 'Zimapantongo', poblacion: 666 },
      { nombre: 'El Huizachal (San Isidro)', poblacion: 572 },
      { nombre: 'Colonia Félix Olvera', poblacion: 472 },
      { nombre: 'El Capulín', poblacion: 309 },
      { nombre: 'Puerto Vallarta', poblacion: 302 },
    ],
    totalLocalidadesConDato: 40,
    marginacion: {
      indice: 53.4246,
      grado: 'Medio',
      anio: 2020,
      fuente: 'INEGI, con datos de CONAPO — Índice de marginación por entidad federativa y municipio 2020',
      fuenteHref: 'https://www.inegi.org.mx/app/cuadroentidad/Hgo/2021/03/3_28',
    },
    seccionesElectorales: {
      total: 10,
      fuente:
        'INE, acuerdo de distritación electoral local, 6° Distrito de Hidalgo (secciones 0281 a 0290 — cifra tomada de un resumen de búsqueda, pendiente de confirmar palabra por palabra contra el documento completo)',
      fuenteHref: 'https://repositoriodocumental.ine.mx/xmlui/bitstream/handle/123456789/79546/CGor201504-29_ap_7_a1_3.pdf?sequence=4&isAllowed=y',
    },
    listaNominal: {
      total: 10100,
      corte: '29 de enero de 2026',
      fuente: 'telencuestas.com, con datos de DERFE-INE',
      fuenteHref: 'https://telencuestas.com/censos-electorales/mexico/hidalgo/chapantongo',
    },
    historialElectoral: [
      {
        anio: 2020,
        cargo: 'Presidencia municipal',
        ganador: {
          candidato: 'Carlos Enrique Tavera Guerrero',
          partidoOCoalicion: 'Coalición "Juntos Haremos Historia" (PVEM-Morena-PT-PES)',
        },
        fuente: 'Wikipedia, "Municipio de Chapantongo"',
        fuenteHref: 'https://es.wikipedia.org/wiki/Municipio_de_Chapantongo',
        fuenteSecundaria: true,
      },
      {
        anio: 2024,
        cargo: 'Presidencia municipal',
        ganador: {
          candidato: 'Eligio Figueroa Chávez',
          partidoOCoalicion: 'PVEM',
        },
        fuente: 'Wikipedia, "Municipio de Chapantongo"',
        fuenteHref: 'https://es.wikipedia.org/wiki/Municipio_de_Chapantongo',
        fuenteSecundaria: true,
      },
    ],
  },
];

export function getPropuestaBySlug(slug: string): Propuesta | undefined {
  return propuestas.find((p) => p.slug === slug);
}
