# Conflictos de datos — Yaocalli Consultoría y Estrategia

Este proyecto no es un catálogo de productos con precios, así que la "regla del precio más alto" del prompt maestro no aplica tal cual. Aquí se documenta la reconciliación de **cifras, casos y datos de negocio** entre los tres documentos fuente (`REFERENCIA_Casos_y_Contenido_Yaocalli.md`) y los cinco documentos de especificación (`0_Benchmark`, `1_Manual_de_Identidad`, `2_Arquitectura_y_Wireframes`, `3_Plan_de_Contenidos`, `4_Guia_SEO_y_Medicion`).

## 1. Cifras de capacidad (página de inicio)

El wireframe de inicio (doc. 02) pide exactamente 4 cifras: **"84 municipios cubiertos" · "80 encuestadores en campo" · "900 trámites analizados" · "600 usuarios diarios"**. Se cruzaron contra el banco de cifras de `REFERENCIA_Casos_y_Contenido_Yaocalli.md` (sección 3):

| Cifra | Fuente | Consistencia |
|---|---|---|
| 84 municipios | Caso A (auditoría territorial) | ✅ Coincide exacto |
| 80 encuestadores | Caso A | ✅ Coincide exacto |
| 900 trámites digitalizados | Caso D (AID-RUTS, nombre corregido — ver sección 7) | ✅ Coincide exacto |
| 600 usuarios activos diarios | Caso D (AID-RUTS, nombre corregido — ver sección 7) | ✅ Coincide exacto |

**No hubo conflicto entre fuentes** — las cuatro cifras aparecen idénticas en el wireframe y en el banco de cifras. ⚠️ Sí queda pendiente su **divulgabilidad**: son cifras de proyectos con institución (Caso A "pendiente de confirmar si es publicable con nombre"; Caso D sin institución identificada). Se publican en el sitio *sin nombrar a la institución*, como permite el propio banco de cifras, pero requieren confirmación final de que son públicas antes de lanzar a producción. Ver `PENDIENTES.md`.

**Actualización posterior, a petición del cliente:** las cuatro cifras de la página de inicio se sustituyeron por "84 municipios" · "34,818 encuestas" · "1,547 rutas trackeadas" · "1,037 usuarios combinados en 4 sistemas", porque el cliente pidió no concentrar la narrativa de usuarios en un solo sistema. El detalle completo de esta corrección está en la sección 7.

## 2. Selección de los casos publicados

El documento 02 (Arquitectura) limitaba la Versión 1 a **tres casos publicables**, mientras que `REFERENCIA_Casos_y_Contenido_Yaocalli.md` documenta nueve (A–I). Regla de cobertura aplicada originalmente: cubrir el mayor número de líneas de servicio con casos que ya tienen las cifras usadas en el inicio, priorizando institución identificada cuando exista. **Se agregó un cuarto caso (C) después de la Versión 1** — ver el punto 4 de esta sección — porque el cliente proporcionó enlaces públicos reales que lo respaldan.

| Caso elegido | Por qué | Confidencialidad aplicada |
|---|---|---|
| **A — Auditoría territorial de transporte y movilidad** | Sostiene las cifras "84 municipios" y "80 encuestadores" del inicio; cubre encuestas, cartografía y software a la vez | ⚠️ Institución no confirmada en la fuente → se publica **anonimizada** ("instancia estatal de movilidad") |
| **B — Índice Municipal de Prioridad para la Asistencia Social (IMPAS)** | Único caso con institución identificada y confirmada en la fuente (DIF Mineral de la Reforma); mejor caso de índices y priorización | ✅ Se publica **con nombre de institución**, tal como está en la fuente |
| **C — Diagnóstico participativo para el presupuesto 2027** | Agregado después de la V1: el cliente compartió el dashboard de resultados en vivo y el documento de diseño metodológico (ver punto 4), ambos con la institución nombrada en la propia página pública | ✅ Se publica **con nombre de institución** (Secretaría de Bienestar para la Comunidad, Mineral de la Reforma), igual que el caso B |
| **D — AID-RUTS** (nombre corregido por el cliente; la fuente decía "Roots ID") | Sostiene las cifras "900 trámites" y "600 usuarios" del inicio; mejor demostración de velocidad de entrega en software | ⚠️ Sin institución identificada en la fuente → se publica **anonimizada** ("dependencias estatales y municipales") |

Quedan fuera del sitio por ahora (van a `PENDIENTES.md` como material para Fase 2): Caso E, F (OIT), G, H, I. El caso C, que originalmente estaba en esta lista de pendientes, ya se publicó — ver el punto 4 de esta sección.

## 3.1 Enlaces públicos reales agregados por el cliente

El cliente proporcionó cuatro enlaces reales y pidió ubicarlos en el sitio. Se verificó cada uno (con el navegador, ya que dos son Google Docs que `WebFetch` no puede leer sin sesión) antes de decidir dónde colocarlo:

| Enlace | Qué es, verificado | Dónde se colocó |
|---|---|---|
| `docs.google.com/document/d/1UvUchSzvMvM2f6FEoZ0d5tv3zio_IrAT` | Título real del documento: "Indice_Municipal_de_Prioridad_para_la_Asistencia_Social_2026_formato" — es el documento técnico del IMPAS | Enlace "Ver documento técnico completo" en el caso B (IMPAS) |
| `docs.google.com/document/d/1Z0PG-mjy7a8rSW69V2_EUBZuy3AaTKHYd-c2J53ByB4` | Título real: "Diseno_Metodologico_CCA_Presupuesto_2027_consolidado" — coincide exacto con la fuente `Diseno_Metodologico_CCA_Presupuesto_2027_consolidado` citada en `REFERENCIA_Casos_y_Contenido_Yaocalli.md` para el Caso C | Enlace "Ver diseño metodológico completo" en el nuevo caso C |
| `et-mohedano.github.io/presupuesto-participativo/` | Dashboard en vivo del diagnóstico participativo de presupuesto 2027, institución visible en la propia página: Secretaría de Bienestar para la Comunidad, Mineral de la Reforma — confirma y hace público el Caso C | Enlace "Ver resultados en el dashboard" en el nuevo caso C; motivó publicarlo como caso completo |
| `desdelacomunidad.com/resultadosencuesta/dashboard/` | Dashboard de resultados de un levantamiento de percepción general para Mineral de la Reforma (vista general + análisis geográfico + módulo de IA), sin documentación de metodología asociada en los documentos fuente | Enlace "Ver resultados de un levantamiento municipal en vivo" en la ficha de servicio de encuestas y opinión pública — no se convirtió en un caso propio porque no hay material de fuente (problema/método/resultado) suficiente para redactarlo sin inventar |

**Nota sobre la última fila.** El dashboard de `desdelacomunidad.com` corresponde probablemente a las cifras de "encuesta inicial de diagnóstico" (769) y "percepción y posicionamiento" (1,996) de la sección 7 de esta tabla, pero eso no está confirmado documentalmente — se dejó como enlace de ejemplo, no como afirmación de que es exactamente esa fuente.

## 3. Servicio de escucha digital y análisis de actores

`REFERENCIA_Casos_y_Contenido_Yaocalli.md` (sección 4) marca este servicio como **"Insuficiente: falta un segundo caso o hay que desagregar el I"**. Regla aplicada: se publica la ficha de servicio igual (el mapa del sitio del doc. 02 la exige), redactada a partir del Caso I y del inventario técnico de PLN de la sección 5, pero **sin ficha de caso propia** en la Versión 1 (no está entre los 3 casos elegidos). Marcado en `PENDIENTES.md`.

## 4. Datos de negocio (dominio, teléfono, correo, dirección, WhatsApp)

Los tres documentos que podrían traerlos (`0_Benchmark`, `2_Arquitectura`, `4_Guia_SEO`) coinciden en que **ninguno existe todavía**: son placeholders entre corchetes (`[dominio]`, `[+52...]`, `[correo institucional]`, `[calle y número]`). No hay conflicto — es ausencia total y unánime en las tres fuentes. Se usan constantes claramente marcadas como pendientes en el código (ver `src/utils/contacto.ts` y `PENDIENTES.md`).

## 5. Extensión de los artículos de blog

El prompt maestro genérico (paso 6) pide 800–1,200 palabras para los dos primeros artículos. El documento 03 (`Plan_de_Contenidos`, específico de este proyecto) especifica **1,200 a 1,800 palabras** como requisito técnico obligatorio de toda nota. Regla de resolución: **el documento específico del proyecto manda sobre la plantilla genérica del prompt maestro** — se usó el rango 1,200–1,800 palabras.

## 6. Sin más conflictos numéricos

El resto de cifras citadas en fichas de servicio y casos (dimensiones del IMPAS, escenarios de muestra del Caso C, etc.) aparecen una sola vez en una sola fuente (`REFERENCIA_Casos_y_Contenido_Yaocalli.md`), sin versión contradictoria en los documentos de especificación. No se encontraron discrepancias adicionales que resolver.

## 7. Corrección directa del cliente: nombre del sistema y cifras por sistema/proyecto

El cliente corrigió en conversación, después de la primera versión del sitio, dos cosas que **sustituyen** lo que traía `REFERENCIA_Casos_y_Contenido_Yaocalli.md`:

1. **Nombre real del sistema.** El Caso D no se llama "Roots ID" — su nombre real es **AID-RUTS**. Se corrigió el `slug`, el título y toda mención en `src/data/casos.ts`, `src/data/servicios.ts` y `src/data/organizacion.ts`. Regla aplicada: **la corrección directa del cliente manda sobre el nombre que traía el documento fuente**, porque el documento fuente es un borrador de trabajo y el cliente es quien conoce el nombre real de su propio sistema.
2. **Las cifras de "usuarios" e "encuestas" del inicio contaban un solo sistema.** El cliente señaló que la cifra de 600 usuarios (antes atribuida solo a AID-RUTS) debía **desglosarse entre todos los sistemas propios**, no presentarse como si fuera la única fuente. Cifras nuevas, dadas directamente por el cliente y no documentadas en los archivos fuente originales:

| Cifra | Concepto | Dónde se usa |
|---|---|---|
| 600 | Usuarios de AID-RUTS (gestión de trámites) | `USUARIOS_POR_SISTEMA`, caso AID-RUTS |
| 190 | Usuarios del sistema municipal que aloja el índice de atención social y el presupuesto participativo | `USUARIOS_POR_SISTEMA`, caso IMPAS |
| 127 | Usuarios del portal municipal de Pachuca para su PMDU y PPDU | `USUARIOS_POR_SISTEMA` |
| 120 | Usuarios del sistema de censo de transporte | `USUARIOS_POR_SISTEMA` |
| 34,818 | Encuestas del censo territorial de transporte (Caso A) | Cifra de capacidad del inicio, escala del Caso A |
| 1,547 | Rutas trackeadas con GPS (Caso A) | Cifra de capacidad del inicio, escala del Caso A |
| 1,996 | Encuestas de percepción y posicionamiento (serie recurrente) | `ENCUESTAS_POR_PROYECTO` |
| 769 | Encuestados de la encuesta inicial de diagnóstico | `ENCUESTAS_POR_PROYECTO` |
| 2,765 | Suma de 769 + 1,996 — "encuestas realizadas a nivel municipal" | Cifra de capacidad del inicio (agregada a petición del cliente, para que estas dos también tuvieran una tarjeta propia arriba, no solo en la gráfica de desglose) |
| 507 | Respuestas del presupuesto participativo | `ENCUESTAS_POR_PROYECTO`; escala del caso C (Diagnóstico participativo); mencionado también en caso IMPAS por compartir la misma plataforma |
| 453 | Registros valorados por el índice de atención social | `ENCUESTAS_POR_PROYECTO`, escala del caso IMPAS |

**Ajuste adicional a petición del cliente:** la tarjeta de "900 trámites administrativos digitalizados" traía la etiqueta genérica "Proyecto de gobierno estatal y municipal"; se cambió a "Análisis para digitalización y simplificación" para describir mejor el tipo de trabajo (el modelo de redes de complejidad de AID-RUTS), no solo el nivel de gobierno.

**Regla de agrupación aplicada, siguiendo instrucción explícita del cliente ("no manejes los nombres de los municipios como tal, pero sí destaca estas cifras"):** ningún municipio se nombra; las cifras se agrupan por sistema o por proyecto, de forma genérica. El censo de transporte (34,818 encuestas) se muestra por separado del resto de encuestas de índice/diagnóstico (1,996 / 769 / 507 / 453) porque mezclarlas en la misma gráfica de barras habría aplastado visualmente las cuatro cifras menores. **Estas diez cifras nunca aparecieron en los documentos fuente originales — vienen directamente del cliente y deben confirmarse igual que cualquier otra cifra antes de publicarse en producción** (ver `PENDIENTES.md`).
