# Yaocalli Consultoría y Estrategia — sitio web

Sitio construido en Astro a partir de la especificación en `../PROMPT_MAESTRO_CONSTRUCCION_ASTRO.md` y los cinco documentos de `../*.html`. Antes de tocar nada, lee `../PENDIENTES.md` (qué falta del cliente) y `../CONFLICTOS_DE_DATOS.md` (cómo se reconciliaron las cifras y los casos).

**Stack:** Astro 7 · Tailwind CSS v4 (tokens en `src/styles/global.css`, sin `tailwind.config.mjs` — ver nota técnica en `PENDIENTES.md`) · TypeScript estricto · pnpm · Content Collections para el blog · `@astrojs/sitemap`.

## Instalación

```bash
pnpm install
```

## Desarrollo

```bash
pnpm dev
```

Sitio disponible en `http://localhost:4321`.

## Compilación

```bash
pnpm build     # genera ./dist — debe compilar sin errores
pnpm preview   # sirve ./dist localmente para revisar el build de producción
pnpm astro check   # verificación de tipos (requiere typescript ^5, no 7 — ver nota abajo)
```

> `@astrojs/check` (el verificador de tipos) todavía no soporta la API programática de TypeScript 7. Si `pnpm add` actualiza `typescript` a la v7, el comando `astro check` fallará con un error de compatibilidad. Solución: `pnpm add -D typescript@^5`.

## Estructura

```
src/
├── components/
│   ├── layout/     Header, Footer, WhatsAppBar (barra fija solo en móvil)
│   ├── ui/         Button, Logo, Icon, FaqAccordion, IndexBar, BarChart, DonutChart,
│   │               TypewriterHeading, Portico (CTA de cierre), StatCard
│   ├── service/    ServiceCard, FichaTecnica
│   ├── case/       CaseCard
│   ├── blog/       ArticleCard
│   └── forms/      ContactForm
├── content/blog/   Notas del calendario editorial (Markdown + frontmatter)
├── content.config.ts   Esquema de la colección `blog`
├── data/           servicios.ts, casos.ts, organizacion.ts — el "catálogo" del sitio
├── layouts/Layout.astro   <head>, SEO, JSON-LD, Header/Footer/WhatsAppBar
├── pages/          Una carpeta por sección del mapa del sitio (ver documento 02)
├── utils/          contacto.ts (WhatsApp/correo), seo.ts (bloques JSON-LD)
└── styles/global.css   Tokens de marca (@theme) — colores, tipografía, retícula
```

## Cómo agregar un servicio

Los seis servicios son fijos (documento 02, mapa del sitio) — no se agregan ni quitan sin cambiar la arquitectura. Para editar uno, modifica su objeto en `src/data/servicios.ts`: cada campo (`queEntrega`, `comoSeHace`, `fichaRigor`, `faqs`, etc.) alimenta una sección distinta de `src/pages/servicios/[slug].astro`. La página se regenera sola en el siguiente build.

## Cómo agregar un caso de estudio

1. Añade un objeto a `src/data/casos.ts` siguiendo la interfaz `Caso`.
2. Decide `institucionPublica` (¿se puede nombrar la institución?) — si hay duda, anonimiza y anótalo en `../PENDIENTES.md`.
3. Enlázalo desde el servicio correspondiente agregando su `slug` al arreglo `casosSlugs` de ese servicio en `servicios.ts`.
4. La ruta `/casos/[slug]/` se genera sola vía `getStaticPaths`.

## Cómo agregar una nota al blog

1. Crea un archivo en `src/content/blog/tu-slug.md` con el frontmatter que exige `src/content.config.ts` (`title`, `keyword`, `pilar`, `pubDate`, `description`, `servicioRelacionado`, opcionalmente `tiempoLectura`).
2. Si la nota ya se puede escribir completa, omite `proximamente` (por defecto es `false`) y escribe el cuerpo siguiendo la anatomía de 7 pasos del documento 03: pregunta real → respuesta en el primer párrafo → método → ejemplo con números reales y fuente → límites declarados → fuentes citadas → puente a un servicio, sin ruego. Extensión objetivo: 1,200–1,800 palabras.
3. Si todavía no se escribe, dale `proximamente: true` y deja el cuerpo vacío: aparece en `/publicaciones/` como tarjeta atenuada, sin generar una página propia (el filtro está en `getStaticPaths` de `src/pages/publicaciones/[slug].astro`).
4. Para que aparezca ligada a un servicio, agrega su slug a `publicacionesSlugs` en `src/data/servicios.ts`.

## Cómo actualizar el mapa de cobertura y el censo por municipio

`src/components/ui/HidalgoMap.astro` no lee las fuentes de INEGI directamente — lee una versión ya procesada
(`src/data/hidalgo-municipios.json`) generada por `scripts/build-hidalgo-map.mjs` a partir de dos archivos que
viven en `scripts/fuente-datos/` (fuera de `src/`, no se sirven al navegador, son solo insumo del script):

- `limite_municipal.json` — límites municipales oficiales de Hidalgo (INEGI), 16 MB, ~2000 puntos por polígono.
- `conjunto_de_datos_iter_13CSV20.csv` — Censo de Población y Vivienda 2020, Iter de INEGI para Hidalgo, 4 MB.

Para regenerar el archivo procesado (por ejemplo si INEGI publica una actualización de límites o del censo):

```bash
node scripts/build-hidalgo-map.mjs
```

El script simplifica cada polígono con el algoritmo de Douglas-Peucker (menos puntos, misma silueta reconocible),
proyecta las coordenadas geográficas a un `viewBox` de SVG, calcula la longitud de cada trazo (para la animación
de "dibujado") y su centroide (para el punto), y cruza el censo por municipio (columna `MUN` del CSV, `CVE_MUN`
del GeoJSON). El resultado sí guarda el nombre de cada municipio y sus cifras de censo — se usan en el hover del
mapa — pero eso es independiente de la confidencialidad de los casos de cliente, que sigue anonimizada en
`src/data/casos.ts`. Ver `PENDIENTES.md`, punto 34, para el porqué de esa distinción.

## Cómo publicar

Este build no incluye configuración de despliegue (no se pidió en el alcance). Al elegir hosting (Netlify, Vercel, Cloudflare Pages u otro con soporte para Astro estático):

1. Registra el dominio real y actualiza `site` en `astro.config.mjs` (hoy usa el marcador `https://www.yaocalli.mx`).
2. Resuelve todos los puntos de `../PENDIENTES.md` marcados como "bloquean el lanzamiento" (WhatsApp, correo, teléfono, destino del formulario de contacto).
3. `pnpm build` y sube el contenido de `dist/`.
4. Verifica que `sitemap-index.xml` y `robots.txt` respondan con el dominio final, no con el marcador.

## Documentos de referencia

- `../PROMPT_MAESTRO_CONSTRUCCION_ASTRO.md` — instrucciones de construcción originales.
- `../REFERENCIA_Casos_y_Contenido_Yaocalli.md` — materia prima de los casos y cifras.
- `../0_Benchmark_Yaocalli.html` a `../4_Guia_SEO_y_Medicion_Yaocalli.html` — especificación de marca, arquitectura, contenidos y SEO. Mandan sobre cualquier criterio propio del código.
