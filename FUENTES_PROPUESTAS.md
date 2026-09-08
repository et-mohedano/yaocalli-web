# Fuentes de datos — propuestas técnicas para prospectos

Este documento existe para que cualquier cifra de `src/pages/propuestas/[slug].astro` y `src/data/propuestas.ts`
se pueda rastrear hasta su fuente original antes de usarse en un documento definitivo o frente al cliente.
Sigue el mismo criterio de `CONFLICTOS_DE_DATOS.md`: declarar la fuente, la fecha de corte y el nivel de
confianza real, no solo la cifra.

Niveles de confianza usados abajo:

- **Primaria verificada** — se abrió la fuente oficial directamente y el dato se leyó de ahí.
- **Primaria citada, no abierta** — el documento oficial existe y se tiene su URL, pero el dato se tomó de un
  resumen (snippet de búsqueda) sin abrir y leer el documento completo.
- **Secundaria** — la fuente no es la autoridad oficial del dato (ej. Wikipedia, un agregador), aunque cite a
  una fuente primaria.

## Chapantongo, Hidalgo (`slug: chapantongo`)

### Censo de Población y Vivienda 2020 (INEGI)

**Confianza: primaria verificada.** Todas las cifras de población, sexo, edad, escolaridad, PEA, ocupación,
analfabetismo, derechohabiencia, hogares y viviendas se extrajeron directamente de
`scripts/fuente-datos/conjunto_de_datos_iter_13CSV20.csv` (Iter de INEGI para Hidalgo), fila del total municipal
de Chapantongo (`MUN = 017`, `LOC = 0000`). Es el mismo archivo fuente que usa `scripts/build-hidalgo-map.mjs`
para `src/data/hidalgo-municipios.json`; las cifras que no vienen en ese JSON procesado (18 años y más, PEA,
ocupación, analfabetismo, derechohabiencia, hogares) se guardaron aparte en `censoAdicional` dentro de
`src/data/propuestas.ts`, para no reprocesar el CSV en cada build.

Las diez localidades principales (Santa María Amealco, Chapantongo cabecera, San Bartolo Ozocalpan, etc.) y el
total de 40 localidades con dato de población vienen del mismo CSV, filas de localidad (`LOC` distinto de
`0000`, `9998` y `9999`).

### Marginación municipal (CONAPO 2020)

**Confianza: primaria verificada.**

- Índice: 53.4246. Grado: Medio.
- Fuente: INEGI, cuadro por entidad y municipio, que reproduce el "Índice de marginación por entidad federativa
  y municipio 2020" de CONAPO (corte: 29 de junio de 2021).
- URL: <https://www.inegi.org.mx/app/cuadroentidad/Hgo/2021/03/3_28>

⚠️ Se encontró una cifra contradictoria en Wikipedia (en inglés, artículo "Chapantongo"): "Índice de Marginación
Alto", atribuido incorrectamente a CONEVAL (CONEVAL mide pobreza, no marginación — son organismos distintos) y
sin valor numérico. Se descartó por ser secundaria, sin cifra y con atribución confusa.

### Pobreza municipal (CONEVAL)

**Sin publicar en la página, deliberadamente.** Una fuente secundaria (Wikipedia) cita 50.0% en pobreza
moderada y 18.7% en pobreza extrema para Chapantongo, sin poder confirmar el año exacto (contextualmente
parecería 2020) ni el documento oficial de origen — el archivo de CONEVAL con esa cifra es una imagen escaneada,
no extraíble como texto por las herramientas usadas en esta investigación. **Pendiente:** confirmar directamente
en el portal de datos abiertos de CONEVAL (estimaciones municipales de pobreza 2020) antes de publicar esta
cifra en cualquier documento.

También se encontró, con muy baja confianza (solo en un resumen de búsqueda, sin URL específica), la afirmación
de que Chapantongo ocupa el "lugar 65 de 84" en rezago social (2015). No se usó por no poder verificarse.

### Secciones electorales (INE)

**Confianza: primaria citada, no abierta.**

- 10 secciones electorales, numeradas de 0281 a 0290, dentro del 6° Distrito Electoral Local de Hidalgo.
- Fuente: acuerdo de distritación electoral local del INE.
- URL: <https://repositoriodocumental.ine.mx/xmlui/bitstream/handle/123456789/79546/CGor201504-29_ap_7_a1_3.pdf?sequence=4&isAllowed=y>
- La cifra viene de un resumen de búsqueda sobre ese documento, no de haberlo leído completo. Antes de usar esta
  cifra en un documento definitivo, confirmarla contra el PDF completo.

### Lista nominal

**Confianza: primaria citada, vía agregador verificado.**

- 10,100 electores (corte: 29 de enero de 2026) — mujeres 5,255 (52.0%), hombres 4,845 (48.0%), 0.42% de la
  lista nominal estatal.
- Fuente: telencuestas.com, que cita explícitamente a DERFE-INE como fuente primaria. Se abrió esta página
  directamente (no es solo un snippet).
- URL: <https://telencuestas.com/censos-electorales/mexico/hidalgo/chapantongo>
- Serie histórica 2022–2026 disponible en la misma página, no incorporada aquí.

### Historial electoral — presidencia municipal

**Confianza: secundaria (Wikipedia), sin acta oficial.**

- 2020–2024: Carlos Enrique Tavera Guerrero, coalición "Juntos Haremos Historia" (PVEM-Morena-PT-PES).
- 2024–2027: Eligio Figueroa Chávez, PVEM.
- Fuente para ambos: Wikipedia (es), artículo "Municipio de Chapantongo".
- URL: <https://es.wikipedia.org/wiki/Municipio_de_Chapantongo>
- No se encontraron votos, porcentajes ni participación para ningún proceso, tampoco resultados de 2016. El
  Instituto Estatal Electoral de Hidalgo (IEEH) tiene los cómputos oficiales en su portal, pero no se logró
  extraer el acta específica de Chapantongo en el tiempo de investigación disponible. **Pendiente:** solicitar o
  consultar directamente el acta de cómputo del IEEH antes de usar estas cifras en un documento definitivo.
- Se descartó una nota de El Bocón sobre la constancia de mayoría de Eligio Figueroa Chávez (la URL encontrada
  por búsqueda devolvía HTTP 404 al momento de la consulta) — no se cita en ningún lado del sitio.

### Síndica municipal actual

**Confianza: primaria verificada.**

- Lic. Sayli Ecaterina Caballero García, síndica municipal de Chapantongo, periodo 2024–2027.
- Fuente: sitio oficial del Ayuntamiento de Chapantongo.
- URL: <https://www.chapantongo.gob.mx/ayuntamiento-2024-2027/>
- Su afiliación partidista no se especifica en esa página y no se buscó ni se afirma en ningún lado del sitio.

### Investigación realizada

Toda la investigación externa (CONAPO, CONEVAL, INE, IEEH, Wikipedia, sitio oficial del municipio) se hizo con
búsqueda web el 8 de septiembre de 2026. Ninguna cifra de fuente externa se aproximó o inventó: donde no se
encontró una cifra con confianza razonable, se dejó fuera de la página (marcada como "en verificación") en vez
de citarse.
