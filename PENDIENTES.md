# Pendientes — Yaocalli Consultoría y Estrategia

Todo lo que hace falta del cliente, todo lo que se asumió al construir y todo lo que queda provisional. Ordenado por cuánto bloquea el lanzamiento real.

## Bloquean el lanzamiento (el sitio compila y funciona, pero con datos de marcador)

1. **Dominio.** No existe todavía (confirmado en los tres documentos de especificación). El sitio usa `https://www.yaocalli.mx` como marcador en `astro.config.mjs` (`site`), en el `Layout.astro` (canonical, Open Graph) y en los JSON-LD. **Sustituir en cuanto se registre** y volver a generar `sitemap.xml`.
2. **Número de WhatsApp.** Constante `WHATSAPP_NUMERO = 'PENDIENTE'` en `src/utils/contacto.ts`. Sin este número el botón de WhatsApp y la barra fija móvil no funcionan. El documento 02 ya trae el formato exacto del enlace y el mensaje precargado — solo falta el número.
3. **Correo institucional del dominio propio.** Constante `CORREO_CONTACTO` en `src/utils/contacto.ts`, marcada como pendiente. Se usa en el pie, en contacto y en el JSON-LD de organización.
4. **Teléfono de contacto** (para la página de contacto y el JSON-LD). Pendiente.
5. **Domicilio fiscal / dirección.** El documento 04 (SEO) indica que si no hay oficina con atención al público, se debe **ocultar la dirección** y declarar solo área de cobertura (estado de Hidalgo). Se aplicó esa regla por defecto: el JSON-LD no incluye `address` todavía. Si sí hay oficina, agregarla en `src/data/organizacion.ts` y en el JSON-LD de `ProfessionalService`.
6. **Bandeja de destino del formulario de contacto.** El formulario de `/contacto/` está construido con validación en el cliente pero el envío real (endpoint, servicio de correo, o integración con algo como Formspree/un backend propio) queda como `TODO` explícito en `src/components/forms/ContactForm.astro`. Decidir el mecanismo antes de producción.
7. **Perfil de LinkedIn** (único canal social mencionado en la fuente, usado en `sameAs` del JSON-LD y en el pie). Falta la URL real.

## Confidencialidad y contenido (afectan qué se publica, no si el sitio funciona)

8. **Casos publicados como anónimos.** Los casos A y D se publicaron **sin nombre de institución** porque las fuentes no confirman que sea publicable (ver `CONFLICTOS_DE_DATOS.md`, sección 2). Si el cliente autoriza nombrarlas, actualizar `src/data/casos.ts`.
9. **Divulgabilidad de las cifras del inicio y del desglose por sistema** (84 municipios, 34,818 encuestas, 1,547 rutas, y las diez cifras de `USUARIOS_POR_SISTEMA` / `ENCUESTAS_POR_PROYECTO` en `src/data/organizacion.ts` — 600, 190, 127, 120, 1996, 769, 507, 453). Todas provienen de proyectos con institución o fueron dadas directamente por el cliente en conversación (ver `CONFLICTOS_DE_DATOS.md`, secciones 1 y 7) y deben confirmarse como cifras públicas antes de lanzar.
10. ~~Cuarto caso~~ — **resuelto.** El caso C (Diagnóstico participativo para el presupuesto 2027) ya se publicó en `/casos/diagnostico-participativo-presupuesto-2027/`, con institución nombrada (igual que el caso B) porque el cliente compartió el dashboard público y el documento metodológico — ver `CONFLICTOS_DE_DATOS.md`, sección 3.1. **Casos de Fase 2 que siguen pendientes:** E, F (OIT), G, H, I de `REFERENCIA_Casos_y_Contenido_Yaocalli.md`. El caso F (OIT) es, según la propia fuente, "el caso que más peso tiene" para el perfil de verificación administrativa — buen candidato a agregarse pronto.
11. **Segundo caso para el servicio de escucha digital.** La fuente señala explícitamente que este servicio "se sostiene sobre un solo proyecto descrito de forma genérica" (Caso I). La ficha de servicio se redactó igual, pero sin caso propio en `/casos/`. Falta decidir si se desagrega el Caso I en aplicaciones concretas o se documenta un proyecto nuevo.
12. **Equipo.** Los documentos fuente hablan en primera persona del plural pero no identifican integrantes ni cuántas personas son. La página `/quienes-somos/` se redactó con la capacidad instalada y la trayectoria (lo que sí está confirmado), **sin fichas individuales de personas**, hasta tener esa información.
13. **Material fotográfico.** El manual de identidad marca como "supuesto por validar" si existe banco fotográfico de proyectos anteriores. Se asumió que **no existe todavía** y el sitio se resolvió con los recursos gráficos propios de marca (retícula cartográfica, barra de índice, escalinata) en vez de fotografía, tal como el propio manual sugiere como alternativa válida. Si aparece material fotográfico real, hay tomas específicas listadas en el manual (sección 6) para incorporar.
14. **Vigencia de las cifras y estado de los proyectos.** `REFERENCIA_Casos_y_Contenido_Yaocalli.md` pide confirmar que ningún proyecto citado terminó, cambió de alcance o quedó desactualizado desde que se escribieron los documentos fuente.

## Supuestos tomados para poder construir (documentados también en cada documento fuente)

15. **Perfil de cliente principal.** Se asumió que el peso comercial mayor está en gobiernos municipales/estatales (no en campañas), tal como ordena el inicio en el wireframe del doc. 02. El propio documento marca esto como "supuesto por validar": si el peso real está en campañas, el inicio debe reordenarse con el servicio de encuestas primero.
16. **Venta consultiva sin precios públicos.** Se asumió que no hay ningún producto de precio cerrado (doc. 02, sección 01). No se construyó carrito, precios ni checkout, conforme al documento.
17. **Ciudad y área de cobertura:** Pachuca de Soto, Hidalgo, con cobertura de todo el estado — dato confirmado en el documento 04 y usado en JSON-LD y SEO local.

## Filtros y funcionalidades diferidas a Fase 2 (documento 02, explícito)

18. Filtros en el listado de casos.
19. Metodología dividida en cuatro subpáginas (se publicó como una sola página en V1, tal como pide el documento).
20. Mapa interactivo de cobertura territorial.
21. Suscripción a notas metodológicas.
22. Versión en inglés.
23. Área privada de cliente.
24. **Calculadora pública de tamaño de muestra** — señalada por el propio documento como la pieza de Fase 2 de mayor potencial.
25. Biblioteca de documentos descargables.
26. Fichas técnicas en PDF descargables de cada servicio (el documento 02 las pide como "el verdadero objeto de conversión", pero requieren diseño editorial de PDF fuera del alcance de este build de código; se dejó el enlace de descarga como placeholder marcado `TODO` en cada ficha de servicio).

27. **Imagen de Open Graph en SVG, no PNG.** `public/images/marca/yaocalli-og.svg` es un marcador vectorial funcional, pero Facebook y LinkedIn no siempre renderizan bien SVG en las vistas previas de enlace. Antes de lanzar, exportar una versión PNG/JPG de 1200×630 px con el mismo diseño (herramienta de diseño, no de código) y actualizar `ogImage` en `src/layouts/Layout.astro`.

## Desviaciones del manual de identidad pedidas directamente por el cliente

Estas decisiones se tomaron por instrucción explícita del cliente en la conversación de construcción, no por
criterio propio, y valdría la pena que las revise el equipo de diseño de la marca en la próxima actualización
del manual de identidad (`1_Manual_de_Identidad_Yaocalli.html`):

28. **Tipografía más grande que la especificada.** El manual fija el cuerpo en 17.5px. Se subió la base de
    `html` a 112.5% (equivalente a una raíz de 18px) y el cuerpo a 19px, lo que escala también la escala
    tipográfica completa de Tailwind. El título del inicio pasó de 38/58px a 42/64px. Ningún color ni fuente
    cambió, solo el tamaño.
29. **Iconografía propia.** El manual no incluye un sistema de iconos; se creó uno (`src/components/ui/Icon.astro`)
    con trazos simples en `currentColor`, sin dependencia externa, para ilustrar servicios, cifras, canales de
    contacto y prácticas de protección de datos.
30. **Gráficas de datos.** Se agregaron `BarChart.astro` y `DonutChart.astro` (SVG/CSS puro, sin librería) para
    visualizar cifras reales ya presentes en el contenido: los dos escenarios de muestra del primer artículo del
    blog, y las seis dimensiones ponderadas del IMPAS en su ficha de servicio y su caso. Ninguna cifra nueva se
    inventó; solo se visualizaron las que ya estaban documentadas en `src/data/casos.ts`.
31. **Efectos de interacción en el inicio.** El título principal se escribe con efecto de máquina de escribir
    (`TypewriterHeading.astro`) y el encabezado oscuro tiene un resplandor que sigue al cursor. Ambos respetan
    `prefers-reduced-motion` y el texto real permanece en el DOM (vía `aria-label`) para accesibilidad y SEO
    aunque JavaScript esté desactivado. El mismo componente (`Hero.astro`) se aplicó a los encabezados de todas
    las páginas del sitio, para que el efecto sea consistente en todo el sitio y no solo en el inicio.
32. ~~GeoJSON real de los 84 municipios de Hidalgo~~ — **resuelto.** El cliente proporcionó `limite_municipal.json`
    (límites municipales oficiales, INEGI, 84 municipios de Hidalgo, ~2000 puntos por polígono, 16 MB), movido a
    `scripts/fuente-datos/` (fuera de `src/`, no se sirve al navegador). `scripts/build-hidalgo-map.mjs` lo
    simplifica (algoritmo de Douglas-Peucker, epsilon proporcional al tamaño de cada municipio) y lo proyecta a
    coordenadas SVG, generando `src/data/hidalgo-municipios.json`. **Si el GeoJSON fuente cambia o se necesita
    más o menos detalle**, ajustar `EPSILON_BASE` en el script y volver a correr
    `node scripts/build-hidalgo-map.mjs` desde `yaocalli-web/`.
33. **Cifras nuevas de usuarios y encuestas, dadas por el cliente en conversación, no en los documentos fuente.**
    `USUARIOS_POR_SISTEMA` y `ENCUESTAS_POR_PROYECTO` en `src/data/organizacion.ts` (600 / 190 / 127 / 120 usuarios
    por sistema; 1,996 / 769 / 507 / 453 encuestas y registros; más 34,818 encuestas y 1,547 rutas del censo de
    transporte). Ver el detalle de a qué sistema corresponde cada una en `CONFLICTOS_DE_DATOS.md`, sección 7. Las
    tarjetas de cifras del inicio ya no muestran una fuente puntual, sino el tipo de proyecto ("Levantamiento en
    campo", "Proyecto de gobierno estatal y municipal", etc.), a petición del cliente.
34. **Censo de población por municipio en el hover del mapa — el nombre del municipio SÍ se muestra aquí.**
    El cliente proporcionó `conjunto_de_datos_iter_13CSV20.csv` (Censo de Población y Vivienda 2020, Iter de
    INEGI, estado de Hidalgo), movido también a `scripts/fuente-datos/`. `scripts/build-hidalgo-map.mjs` lo cruza
    por municipio (columna `MUN`) con el GeoJSON y agrega, por cada uno de los 84 municipios en
    `src/data/hidalgo-municipios.json`: nombre, población total, población por sexo, tres grupos de edad, grado
    promedio de escolaridad y viviendas habitadas. Al pasar el cursor sobre un municipio en el mapa del inicio
    (`src/components/ui/HidalgoMap.astro`) se muestra su nombre real y esos datos, con una gráfica de barras
    mujeres/hombres. **Esto es una excepción deliberada** a la regla de no nombrar municipios individuales: esa
    regla existe para no revelar en qué municipio se hizo un caso de cliente confidencial (ver `CONFLICTOS_DE_DATOS.md`,
    sección 2), y el censo es dato público de INEGI sin ninguna relación con los casos — los cuatro puntos
    destacados del mapa se eligen por posición en la lista, no por qué municipio corresponde a qué proyecto.
    Estas cifras no estaban en ningún documento de especificación — hay que confirmarlas contra la fuente real
    (base de datos de cada sistema) antes de publicarlas, y decidir si conviene nombrar cada sistema con más
    detalle del que se usó aquí (deliberadamente genérico, sin nombrar municipios).
35. **Enlaces a Google Docs desde el caso B (IMPAS) y el caso C (Presupuesto participativo) dependen de que el
    permiso "cualquiera con el enlace" siga activo.** `src/data/casos.ts` enlaza directamente a dos documentos de
    Google Docs (el documento técnico del IMPAS y el diseño metodológico del presupuesto 2027). Si alguien revoca
    el acceso público, edita el documento a "solo restringido" o lo borra, el enlace del sitio empezará a pedir
    inicio de sesión o dará error, sin que el sitio lo detecte. Antes de lanzar a producción, considerar exportar
    ambos documentos a PDF y alojarlos en `public/` para no depender de un permiso de Google que puede cambiar
    fuera del control del sitio.
36. **El dashboard de `desdelacomunidad.com/resultadosencuesta/dashboard/` no tiene caso propio.** Se enlazó desde
    la ficha de servicio de encuestas y opinión pública como ejemplo en vivo, no como caso, porque los documentos
    fuente no traen el problema/método/resultado de ese proyecto específico — solo se puede confirmar que es un
    dashboard de percepción para Mineral de la Reforma. Si el cliente da ese contexto, se puede convertir en un
    quinto caso.

## Notas técnicas de la construcción

- El prompt maestro pedía `tailwind.config.mjs`; la versión instalada es **Tailwind CSS v4**, que usa configuración en CSS (`@theme` dentro de `src/styles/global.css`) en vez de archivo de configuración JS. Se optó por la vía moderna recomendada por Astro/Tailwind en 2026 en vez de forzar el `tailwind.config.mjs` v3, que quedaría obsoleto. Todos los tokens del manual de identidad están ahí, sin inventar ninguno.
- Los documentos fuente no mencionan Open Graph ni Twitter Card (confirmado por el agente de extracción de SEO), pero el prompt maestro sí los exige como mínimo de SEO (paso 8) y son estándar de la industria — se implementaron igual, sin que eso contradiga ninguna instrucción explícita del documento 04.
