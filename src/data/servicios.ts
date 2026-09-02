export interface Servicio {
  slug: string;
  nombre: string;
  /** nombre del icono en src/components/ui/Icon.astro */
  icono: string;
  h1: string;
  keywordObjetivo: string;
  tituloSEO: string;
  metaDescripcion: string;
  /** ~35 palabras, para inicio y listado de servicios */
  resumenListado: string;
  entregablesDestacados: [string, string, string];
  primerParrafo: string;
  paraQuien: string;
  queEntrega: string[];
  comoSeHace: { titulo: string; texto: string }[];
  fichaRigor: { etiqueta: string; valor: string }[];
  faqs: { pregunta: string; respuesta: string }[];
  casosSlugs: string[];
  publicacionesSlugs: string[];
  /** referencias públicas reales (dashboard en vivo, etc.), opcional */
  enlacesEjemplo?: { etiqueta: string; href: string }[];
}

export const servicios: Servicio[] = [
  {
    slug: 'encuestas-y-opinion-publica',
    icono: 'bar-chart',
    nombre: 'Encuestas y opinión pública',
    h1: 'Encuestas de percepción y evaluación de gestión',
    keywordObjetivo: 'encuesta percepción ciudadana municipio',
    tituloSEO: 'Encuestas de percepción ciudadana para municipios | Yaocalli',
    metaDescripcion:
      'Diseño, levantamiento y análisis de encuestas de percepción y evaluación de gestión en municipios de Hidalgo, con ficha técnica completa y control de calidad en campo.',
    resumenListado:
      'Diseño, levantamiento y análisis de encuestas de percepción y evaluación de gestión, con ficha técnica completa, control de calidad en campo verificable y bitácora auditable.',
    entregablesDestacados: [
      'Base de datos depurada y geolocalizada',
      'Ficha técnica completa',
      'Bitácora de campo auditable',
    ],
    primerParrafo:
      'Una encuesta de percepción ciudadana solo sirve si se puede defender. Yaocalli diseña, levanta y analiza encuestas de percepción, posicionamiento y evaluación de gestión para gobiernos municipales y estatales, y para campañas que necesitan medir el terreno antes de decidir. Cada cifra que se entrega viaja con su ficha técnica: universo, marco muestral, error por dominio y tasa de respuesta, no un número suelto.',
    paraQuien:
      'Gobiernos municipales y estatales que necesitan medir percepción ciudadana y evaluación de gestión con evidencia defendible ante cabildo o auditoría, y campañas que necesitan diagnóstico de posicionamiento durante el proceso electoral.',
    queEntrega: [
      'Base de datos depurada, con cada respuesta geolocalizada a nivel manzana o sección cuando el diseño lo permite',
      'Ficha técnica completa: universo, marco muestral, tipo de muestreo, error por dominio, efecto de diseño y tasa de respuesta',
      'Informe de resultados con lectura por tema y por corte territorial',
      'Bitácora de campo con identificador operativo no nominativo por persona encuestadora',
      'Evidencia de capacitación del equipo aplicador y del protocolo de consentimiento informado',
      'Semilla aleatoria documentada para la selección de la muestra, archivada antes del levantamiento',
    ],
    comoSeHace: [
      {
        titulo: 'Diseño del instrumento',
        texto: 'El cuestionario se construye a partir de la pregunta que la institución necesita responder, no de un formato genérico. Se evita la inducción de respuesta y, cuando el instrumento lo requiere, se somete a prueba cognitiva previa con un pequeño grupo antes del levantamiento definitivo.',
      },
      {
        titulo: 'Muestreo',
        texto: 'El marco muestral se construye desde fuentes oficiales disponibles para el municipio o el universo de interés. El tipo de muestreo, la afijación y la corrección por población finita se documentan antes de salir a campo, con la semilla aleatoria archivada para que la selección sea un hecho verificable.',
      },
      {
        titulo: 'Levantamiento en campo',
        texto: 'El equipo de encuestadores trabaja con aplicación móvil offline-first: captura sin conexión, sincronización asíncrona al recuperar señal y catálogos únicos para todo el operativo. Cada persona aplicadora recibe capacitación previa sobre lectura literal del reactivo y protocolo de consentimiento.',
      },
      {
        titulo: 'Control de calidad y limpieza',
        texto: 'Un equipo de gabinete, independiente del equipo de campo, revisa duplicidad, consistencia y patrones de llenado en escritorio. El identificador operativo no nominativo permite detectar si una persona respondió más de una vez sin comprometer su anonimato.',
      },
      {
        titulo: 'Procesamiento y ponderación',
        texto: 'Los datos se ponderan según el diseño muestral y se calculan los márgenes de error por dominio de interés, no solo a nivel global. El efecto de diseño se reporta cuando el muestreo no es simple aleatorio.',
      },
      {
        titulo: 'Entrega',
        texto: 'El cliente recibe la base depurada, la ficha técnica, el informe y, cuando aplica, un tablero de consulta de resultados que se detalla en el servicio de tableros y visualización.',
      },
    ],
    fichaRigor: [
      { etiqueta: 'Tamaño de muestra', valor: 'Se calcula según universo y error objetivo; orientativo, 380 a 600 casos a nivel municipal' },
      { etiqueta: 'Margen de error', valor: 'Definido por diseño, típicamente ±3.2 a ±4.4 puntos a nivel municipal con 95% de confianza' },
      { etiqueta: 'Nivel de confianza', valor: '95%, salvo que el proyecto requiera otro nivel' },
      { etiqueta: 'Tipo de muestreo', valor: 'Probabilístico, estratificado con afijación mixta cuando el universo lo permite' },
      { etiqueta: 'Cobertura territorial', valor: 'Desde una colonia hasta cobertura estatal completa; hasta 84 municipios en un solo operativo' },
      { etiqueta: 'Tiempo de levantamiento', valor: 'De 5 a 20 días hábiles según cobertura y tamaño de muestra' },
    ],
    faqs: [
      {
        pregunta: '¿Cuánto tarda un levantamiento en un municipio de 50 mil habitantes?',
        respuesta: 'Depende del tamaño de muestra y del número de encuestadores disponibles, pero un operativo de esa escala suele resolverse en 5 a 8 días hábiles de campo, más el tiempo de procesamiento y control de calidad.',
      },
      {
        pregunta: '¿Cómo se controla que el encuestador no llene el cuestionario en su casa?',
        respuesta: 'Con la aplicación móvil se registra la ubicación de cada captura, y el equipo de gabinete audita patrones de tiempo de respuesta y consistencia entre cuestionarios de una misma persona aplicadora. Es el mismo control que se usó en una auditoría estatal con 80 encuestadores simultáneos en campo.',
      },
      {
        pregunta: '¿Qué pasa si el margen de error resulta más alto de lo que necesitamos?',
        respuesta: 'El tamaño de muestra y el margen de error se acuerdan antes de levantar, no después. Si el presupuesto disponible implica un error mayor al deseado, se presentan escenarios alternativos de tamaño de muestra antes de iniciar el operativo, nunca al entregar el resultado.',
      },
      {
        pregunta: '¿Se puede repetir la misma encuesta el año siguiente y comparar?',
        respuesta: 'Sí. Documentar el instrumento, el marco muestral y la semilla aleatoria es justamente lo que permite volver a levantar con el mismo diseño y comparar resultados de forma válida entre periodos.',
      },
      {
        pregunta: '¿Los datos de las personas encuestadas quedan protegidos?',
        respuesta: 'Se aplica consentimiento informado antes de la captura de datos sensibles, identificador operativo no nominativo y reportes agregados sin datos identificables, conforme a la Ley General de Protección de Datos Personales en Posesión de Sujetos Obligados.',
      },
    ],
    casosSlugs: ['auditoria-territorial-transporte-movilidad', 'diagnostico-participativo-presupuesto-2027'],
    publicacionesSlugs: ['cuantas-encuestas-hacen-falta-para-medir-un-municipio', 'margen-de-error-nivel-de-confianza-y-efecto-de-diseno'],
    enlacesEjemplo: [{ etiqueta: 'Ver resultados de un levantamiento municipal en vivo', href: 'https://desdelacomunidad.com/resultadosencuesta/dashboard/' }],
  },
  {
    slug: 'cartografia-y-analisis-territorial',
    icono: 'map',
    nombre: 'Cartografía y análisis territorial',
    h1: 'Cartografía y análisis territorial',
    keywordObjetivo: 'cartografía electoral Hidalgo',
    tituloSEO: 'Cartografía electoral y análisis territorial | Yaocalli',
    metaDescripcion:
      'Cartografía electoral y análisis territorial con PostGIS: manzana, sección, colonia y municipio cruzados con INEGI y CONEVAL, con resolución fina.',
    resumenListado:
      'Mapas y análisis geoespacial a nivel manzana, sección, colonia y municipio, con capas oficiales de INEGI y CONEVAL cruzadas con levantamiento propio georreferenciado.',
    entregablesDestacados: [
      'Mapas por sección y manzana',
      'Cruce con capas oficiales',
      'Buffers de cobertura territorial',
    ],
    primerParrafo:
      'El promedio estatal esconde justo lo que hay que decidir. La cartografía electoral y el análisis territorial de Yaocalli trabajan a nivel de manzana, sección, colonia y municipio: se integran capas oficiales de INEGI y CONEVAL con levantamiento propio georreferenciado sobre infraestructura de PostgreSQL y PostGIS, para que la decisión se tome con resolución fina y no con la fotografía completa del estado.',
    paraQuien:
      'Gobiernos que necesitan priorizar intervención vial y de servicios por calle o por colonia, y actores del proceso electoral que necesitan entender el territorio a nivel de sección, no de municipio.',
    queEntrega: [
      'Mapas coropléticos por sección, colonia o manzana, según la unidad de análisis del proyecto',
      'Cruce de capas oficiales de INEGI, CONEVAL y CONAPO con datos propios de levantamiento',
      'Buffers geográficos calculados con la Red Nacional de Caminos para medir cobertura de servicios',
      'Importación y análisis de trazas de ruta en formato GPX cuando el proyecto incluye monitoreo de movilidad',
      'Informe territorial con lectura por unidad geográfica',
      'Tablero geográfico de consulta, cuando el proyecto lo requiere',
    ],
    comoSeHace: [
      {
        titulo: 'Delimitación de la unidad de análisis',
        texto: 'Se define desde el inicio si la decisión se toma por manzana, sección, colonia o municipio. La unidad de análisis determina qué capas y qué resolución de datos hacen falta, y se fija antes de integrar cualquier fuente.',
      },
      {
        titulo: 'Integración de capas oficiales',
        texto: 'Se incorporan capas de INEGI, CONEVAL y CONAPO —marginación, rezago social, censos de población y vivienda— sobre infraestructura geoespacial en PostgreSQL con PostGIS.',
      },
      {
        titulo: 'Recolección territorial propia',
        texto: 'Cuando el proyecto lo requiere, se recolectan trazas de ruta con rastreadores GPS en formato GPX o se monitorea georreferenciadamente el avance de un operativo de campo en tiempo real, municipio por municipio.',
      },
      {
        titulo: 'Modelado de buffers y cobertura',
        texto: 'Se generan buffers geográficos cruzando la Red Nacional de Caminos con los puntos de interés del proyecto —transporte, escuelas, centros de salud— para calcular cobertura espacial real, no en línea recta.',
      },
      {
        titulo: 'Cruce demográfico',
        texto: 'Las capas territoriales se cruzan con datos demográficos a nivel microlocal, con matrices de correlación estadística cuando el proyecto busca medir eficiencia o satisfacción por zona.',
      },
      {
        titulo: 'Entrega cartográfica',
        texto: 'El cliente recibe los mapas y capas en el formato que su equipo pueda usar —shapefile, GeoJSON o informe en PDF— y, cuando aplica, un tablero geográfico de consulta.',
      },
    ],
    fichaRigor: [
      { etiqueta: 'Unidad mínima de análisis', valor: 'Manzana, cuando la fuente lo permite; sección o colonia como unidad estándar' },
      { etiqueta: 'Fuentes oficiales integradas', valor: 'INEGI, CONEVAL, CONAPO y Red Nacional de Caminos' },
      { etiqueta: 'Infraestructura geoespacial', valor: 'PostgreSQL con extensión PostGIS' },
      { etiqueta: 'Formatos de entrada aceptados', valor: 'GPX de rastreo GPS, capas vectoriales y bases censales oficiales' },
      { etiqueta: 'Cobertura máxima demostrada', valor: '84 municipios en un solo operativo de monitoreo georreferenciado' },
      { etiqueta: 'Formato de entrega', valor: 'Shapefile, GeoJSON, informe en PDF o tablero geográfico' },
    ],
    faqs: [
      {
        pregunta: '¿Qué diferencia hay entre un mapa por municipio y uno por sección o manzana?',
        respuesta: 'El promedio municipal puede ocultar zonas con carencias muy distintas entre sí. Trabajar por sección o manzana permite priorizar la intervención donde realmente hace falta, en lugar de repartirla de forma pareja sobre todo el territorio.',
      },
      {
        pregunta: '¿De dónde salen los datos que se cruzan con el levantamiento propio?',
        respuesta: 'De fuentes públicas oficiales: índices de marginación y rezago social, censos de población y vivienda de INEGI, y la Red Nacional de Caminos. Cada capa se cita con su fuente y su fecha de corte.',
      },
      {
        pregunta: '¿Se puede monitorear el avance de un operativo de campo en tiempo real?',
        respuesta: 'Sí. Es parte del mismo sistema que se usó para dar seguimiento georreferenciado a más de 80 encuestadores simultáneos en 84 municipios durante una auditoría estatal.',
      },
      {
        pregunta: '¿Sirve para priorizar intervención vial y no solo para análisis electoral?',
        respuesta: 'Sí. El mismo modelo de buffers y cruce demográfico se usa para calcular un puntaje de prioridad de atención por calle y por colonia, integrando estado físico de la red vial y cercanía a servicios clave.',
      },
      {
        pregunta: '¿En qué formatos se entrega la cartografía?',
        respuesta: 'Shapefile o GeoJSON para equipos técnicos que ya trabajan con sistemas de información geográfica, o informe en PDF y tablero de consulta para equipos que necesitan lectura directa sin software especializado.',
      },
    ],
    casosSlugs: ['auditoria-territorial-transporte-movilidad'],
    publicacionesSlugs: ['que-se-puede-saber-de-tu-municipio-sin-encuestas', 'cartografia-electoral-la-seccion-importa'],
  },
  {
    slug: 'escucha-digital-y-analisis-de-actores',
    icono: 'radio',
    nombre: 'Escucha digital y análisis de actores',
    h1: 'Escucha digital y análisis de actores',
    keywordObjetivo: 'análisis de actores políticos metodología',
    tituloSEO: 'Escucha digital y análisis de actores | Yaocalli',
    metaDescripcion:
      'Monitoreo ético de redes y prensa digital con lenguaje natural, para detectar sentimiento, narrativas emergentes y mapear actores con evidencia real.',
    resumenListado:
      'Monitoreo de redes sociales, prensa digital y reseñas públicas con procesamiento de lenguaje natural, para identificar narrativas emergentes y mapear actores con evidencia, no con impresión.',
    entregablesDestacados: [
      'Monitoreo de menciones y sentimiento',
      'Mapa de actores y relaciones',
      'Detección de narrativas emergentes',
    ],
    primerParrafo:
      'Quién tiene influencia real en un territorio no siempre coincide con quién más se menciona. La escucha digital y el análisis de actores de Yaocalli combinan crawlers y captura ética de redes sociales, portales de noticias y prensa digital con procesamiento de lenguaje natural, para separar el ruido de la señal antes de decidir con quién conviene hablar.',
    paraQuien:
      'Gobiernos y campañas que necesitan entender el mapa de actores de un territorio y el estado de la conversación pública alrededor de un tema, sin depender de la impresión de quien está más cerca del escritorio.',
    queEntrega: [
      'Monitoreo de menciones en redes, prensa digital y reseñas públicas, con detección de sentimiento y emociones',
      'Modelado de temas latentes para identificar narrativas emergentes antes de que se vuelvan evidentes',
      'Mapa de actores con su red de relaciones y peso relativo en la conversación',
      'Análisis de similitud de discurso entre actores, para medir convergencia o divergencia de narrativas',
      'Reporte periódico o tablero de consulta, según la cadencia que necesite el proyecto',
    ],
    comoSeHace: [
      {
        titulo: 'Delimitación de fuentes y alcance ético',
        texto: 'Se define qué se monitorea —redes, prensa, reseñas públicas— y bajo qué límites, evitando cualquier captura que exponga datos personales identificables de terceros.',
      },
      {
        titulo: 'Recolección',
        texto: 'Crawlers y captura ética recorren las fuentes definidas de forma sistemática, sin intervenir en la conversación que analizan.',
      },
      {
        titulo: 'Procesamiento de lenguaje natural',
        texto: 'El texto se procesa para detectar sentimiento y emociones, y se calcula la complejidad de lectura del discurso analizado.',
      },
      {
        titulo: 'Modelado de temas y sentimiento',
        texto: 'Se aplica modelado de temas latentes para identificar narrativas emergentes, y se transforma el texto en vectores densos para calcular distancias de similitud entre discursos.',
      },
      {
        titulo: 'Mapeo de actores',
        texto: 'Con la información anterior se construye un mapa de relaciones entre actores, ponderado por presencia real en la conversación y no solo por cargo formal.',
      },
      {
        titulo: 'Entrega y lectura',
        texto: 'El resultado se entrega como reporte con lectura interpretativa o como tablero de consulta continua, según la cadencia que necesite el proyecto.',
      },
    ],
    fichaRigor: [
      { etiqueta: 'Fuentes monitoreadas', valor: 'Redes sociales, portales de noticias, prensa digital y reseñas públicas' },
      { etiqueta: 'Técnica de sentimiento', valor: 'Modelos de procesamiento de lenguaje natural para detección de sentimiento y emociones' },
      { etiqueta: 'Técnica de temas', valor: 'Modelado de temas latentes (LDA)' },
      { etiqueta: 'Técnica de similitud', valor: 'Vectorización de texto y distancia de coseno' },
      { etiqueta: 'Periodicidad de reporte', valor: 'Semanal, quincenal o continua en tablero, según el proyecto' },
      { etiqueta: 'Formato de entrega', valor: 'Reporte con lectura interpretativa o tablero interactivo' },
    ],
    faqs: [
      {
        pregunta: '¿Qué se entiende por captura ética y qué límites tiene?',
        respuesta: 'Se recolecta únicamente información pública y disponible en las fuentes monitoreadas, sin exponer datos personales identificables de terceros ni intervenir en la conversación que se analiza.',
      },
      {
        pregunta: '¿El análisis identifica a personas o solo patrones agregados?',
        respuesta: 'El producto es un patrón agregado —narrativas, sentimiento, mapa de actores públicos—, no un perfil individual de personas sin relevancia pública.',
      },
      {
        pregunta: '¿Sirve para monitorear prensa y no solo redes sociales?',
        respuesta: 'Sí. El monitoreo incluye portales de noticias y prensa digital además de redes sociales y reseñas públicas de dependencias gubernamentales.',
      },
      {
        pregunta: '¿Con qué frecuencia se actualiza el análisis?',
        respuesta: 'Depende de la necesidad del proyecto: puede ser un reporte puntual, una entrega periódica o un tablero de consulta continua.',
      },
    ],
    casosSlugs: [],
    publicacionesSlugs: ['reeleccion-de-alcaldes-en-2027', 'que-encuestas-necesita-una-campana-municipal'],
  },
  {
    slug: 'indices-y-priorizacion',
    icono: 'target',
    nombre: 'Índices y priorización',
    h1: 'Índices y priorización',
    keywordObjetivo: 'índice de priorización programas sociales',
    tituloSEO: 'Índices de priorización para programas sociales | Yaocalli',
    metaDescripcion:
      'Instrumentos de priorización con escala de 0 a 100, dimensiones ponderadas, banderas automáticas y memoria de cálculo auditable para decisión pública.',
    resumenListado:
      'Instrumentos de valoración y priorización con escala continua, dimensiones ponderadas y memoria de cálculo auditable: ordenan la decisión, no la sustituyen.',
    entregablesDestacados: [
      'Instrumento de valoración por dimensiones',
      'Escala continua de priorización',
      'Memoria de cálculo versionada',
    ],
    primerParrafo:
      'Cuando el presupuesto no alcanza para todos, alguien tiene que decidir a quién atender primero, y esa decisión necesita poder explicarse. Yaocalli diseña índices de priorización para programas sociales: instrumentos que traducen la condición de una persona, un hogar o un territorio a una escala continua, con dimensiones ponderadas y una memoria de cálculo que cualquier pregunta aplicada en ventanilla puede remitir a una regla verificable.',
    paraQuien:
      'Organismos de asistencia social y programas de desarrollo que necesitan ordenar con criterios verificables la asignación de apoyos, y dejar rastro de por qué una solicitud quedó en determinado nivel de prioridad.',
    queEntrega: [
      'Instrumento de valoración: cuestionario único por bloques ponderados más bloque administrativo y de revisión social',
      'Escala continua de priorización, con niveles de prioridad que orientan la incorporación al padrón',
      'Memoria de cálculo documentada y versionada, que sostiene cada regla de puntuación',
      'Banderas automáticas de revisión: expediente incompleto, duplicidad, caso sensible, evidencia insuficiente',
      'Margen de ajuste cualitativo colegiado, acotado y con acta, para la sensibilidad que la regla sola no captura',
      'Sistema de indicadores de proceso, focalización, producto, resultado, equidad y auditoría',
    ],
    comoSeHace: [
      {
        titulo: 'Revisión documental y fundamentación',
        texto: 'Cada dimensión y cada reactivo del instrumento se remiten a un referente identificable: metodologías internacionales de medición de carencias, índices nacionales de INEGI, CONAPO y CONEVAL, y el marco normativo estatal y municipal aplicable.',
      },
      {
        titulo: 'Diseño de dimensiones y ponderadores',
        texto: 'Se definen las dimensiones que componen el índice y el peso relativo de cada una, de modo que la suma ponderada refleje la prioridad real del caso y no solo la cantidad de reactivos respondidos.',
      },
      {
        titulo: 'Construcción del instrumento',
        texto: 'El cuestionario se organiza por bloques homogéneos y comparables entre personas aplicadoras, con conversión de escalas de severidad cuando distintas dimensiones usan métricas distintas.',
      },
      {
        titulo: 'Reglas de cálculo y banderas',
        texto: 'El puntaje se calcula con reglas explícitas y versionadas. Alertas automáticas marcan expediente incompleto, posible duplicidad, caso sensible o evidencia insuficiente para revisión antes de dictaminar.',
      },
      {
        titulo: 'Ajuste cualitativo colegiado',
        texto: 'Un margen acotado, típicamente de pocos puntos en cualquier dirección, permite sensibilidad ante circunstancias que el instrumento no captura, siempre con evidencia documentada y acta. El índice no decide de forma automática: ordena y hace comparable la valoración profesional.',
      },
      {
        titulo: 'Plataforma y expediente',
        texto: 'El proyecto deja instalado un expediente digital, el motor de reglas versionado, el dictamen, el padrón resultante y los reportes de seguimiento.',
      },
    ],
    fichaRigor: [
      { etiqueta: 'Escala del índice', valor: '0 a 100 puntos, continua' },
      { etiqueta: 'Dimensiones ponderadas', valor: 'Entre 5 y 6, según el instrumento y el programa' },
      { etiqueta: 'Margen de ajuste colegiado', valor: 'Acotado, documentado y con acta; no decide por sí solo' },
      { etiqueta: 'Fundamentación documental', valor: 'Cuatro escalas: internacional, nacional, estatal y municipal' },
      { etiqueta: 'Banderas automáticas', valor: 'Expediente, duplicidad, caso sensible, evidencia insuficiente, concentración territorial' },
      { etiqueta: 'Formato de entrega', valor: 'Instrumento, memoria de cálculo, plataforma de soporte y sistema de indicadores' },
    ],
    faqs: [
      {
        pregunta: '¿El índice decide automáticamente quién recibe el apoyo?',
        respuesta: 'No. Es un modelo de decisión pública asistida por evidencia: calcula un puntaje base con reglas explícitas, genera banderas de revisión y ordena la prelación, pero no sustituye la valoración social profesional. La ordena, la hace comparable y le da un registro trazable.',
      },
      {
        pregunta: '¿Se puede auditar por qué una persona quedó en determinado nivel de prioridad?',
        respuesta: 'Sí. Cada regla de cálculo está documentada y versionada, y cualquier pregunta aplicada en ventanilla se puede remitir a un fundamento documental identificable y a una regla de cálculo verificable.',
      },
      {
        pregunta: '¿Cómo se decide el peso de cada dimensión?',
        respuesta: 'Con base en la revisión documental previa y en el marco normativo del programa. El peso de cada dimensión queda documentado en la memoria de cálculo, no en un criterio implícito de quien aplica el instrumento.',
      },
      {
        pregunta: '¿Qué pasa si un caso necesita una excepción que el instrumento no contempla?',
        respuesta: 'Existe un margen de ajuste cualitativo colegiado, acotado y documentado con acta, que da sensibilidad al proceso sin abrir la puerta a la discrecionalidad no registrada.',
      },
      {
        pregunta: '¿El índice sustituye a la trabajadora o al trabajador social?',
        respuesta: 'No. El índice no sustituye la valoración social profesional: la ordena, la hace comparable entre casos y le proporciona un registro trazable.',
      },
    ],
    casosSlugs: ['indice-municipal-prioridad-asistencia-social', 'diagnostico-participativo-presupuesto-2027'],
    publicacionesSlugs: ['a-quien-apoyar-primero-presupuesto-social', 'marginacion-rezago-social-y-pobreza'],
  },
  {
    slug: 'tableros-y-visualizacion',
    icono: 'dashboard',
    nombre: 'Tableros y visualización',
    h1: 'Tableros de indicadores para decisión de gobierno',
    keywordObjetivo: 'tablero indicadores gobierno municipal',
    tituloSEO: 'Tableros de indicadores para gobierno municipal | Yaocalli',
    metaDescripcion:
      'Tableros interactivos en Power BI, Looker Studio o desarrollo propio, con fuente y fecha de corte visibles en cada gráfica del dato que se usa.',
    resumenListado:
      'Tableros interactivos que convierten encuestas, índices y bases administrativas en indicadores de seguimiento, con fuente y fecha de corte visibles en cada gráfica.',
    entregablesDestacados: [
      'Tablero interactivo por perfil de acceso',
      'Catálogo de indicadores documentado',
      'Capacitación de uso incluida',
    ],
    primerParrafo:
      'Un informe en PDF se lee una vez. Un tablero de indicadores se consulta cada lunes. Yaocalli construye tableros interactivos en Power BI, Looker Studio o desarrollo propio para que las encuestas, los índices y las bases administrativas de una dependencia se conviertan en algo que se usa para decidir, con la fuente y la fecha de corte visibles en cada gráfica.',
    paraQuien:
      'Direcciones y secretarías que ya tienen datos —encuestas, índices, bases administrativas— pero no una forma consistente de consultarlos, y necesitan que distintos niveles de la organización vean el corte de información que les corresponde.',
    queEntrega: [
      'Tablero interactivo en Power BI, Looker Studio o desarrollo propio a la medida',
      'Catálogo de indicadores con periodicidad de actualización definida',
      'Niveles de acceso diferenciados por dirección o perfil',
      'Documentación de fuente y fecha de corte visible en cada gráfica',
      'Escalas de color consistentes con la rampa cuantitativa, sin depender solo del color para leer un dato',
      'Capacitación de uso para el equipo que va a operar el tablero',
    ],
    comoSeHace: [
      {
        titulo: 'Definición del catálogo de indicadores',
        texto: 'Se define qué preguntas debe responder el tablero cada semana o cada mes, y de ahí se deriva el catálogo de indicadores, no al revés.',
      },
      {
        titulo: 'Integración y normalización de fuentes',
        texto: 'Las fuentes —encuestas, bases administrativas, índices, scripts de análisis provistos por distintas áreas— se integran y normalizan con procesos de extracción, transformación y carga hacia una base centralizada.',
      },
      {
        titulo: 'Diseño visual con reglas de marca',
        texto: 'Las series cuantitativas usan la rampa de color de menor a mayor intensidad, nunca codifican un dato solo por color, y cada gráfica lleva pie de fuente y fecha de corte.',
      },
      {
        titulo: 'Construcción del tablero',
        texto: 'Se construye el tablero interactivo con los niveles de acceso que la organización necesita: sala de dirección, seguimiento operativo, y consulta pública cuando aplica.',
      },
      {
        titulo: 'Validación con el equipo de la dependencia',
        texto: 'Antes de la entrega final, el equipo que va a operar el tablero valida que los indicadores respondan a las preguntas reales de su trabajo semanal.',
      },
      {
        titulo: 'Entrega y capacitación',
        texto: 'El tablero se entrega con documentación y capacitación de uso, para que la dependencia pueda operarlo sin depender de que alguien externo lo actualice.',
      },
    ],
    fichaRigor: [
      { etiqueta: 'Plataformas', valor: 'Power BI, Looker Studio, Tableau o desarrollo propio en Django o Laravel' },
      { etiqueta: 'Frecuencia de actualización', valor: 'Definida por proyecto: diaria, semanal o mensual' },
      { etiqueta: 'Niveles de acceso', valor: 'Configurables por dirección, área o perfil de usuario' },
      { etiqueta: 'Escala más usada', valor: 'Escalas coropléticas secuenciales; barras de índice en cuatro tramos' },
      { etiqueta: 'Fuentes ya integradas en proyectos previos', valor: 'Más de 200 scripts de análisis normalizados en una base centralizada' },
      { etiqueta: 'Formato de entrega', valor: 'Acceso al tablero, documentación técnica y capacitación de uso' },
    ],
    faqs: [
      {
        pregunta: '¿Qué diferencia hay entre un informe en PDF y un tablero?',
        respuesta: 'El informe responde la pregunta del día en que se escribió. El tablero se actualiza y responde la pregunta de cada lunes, con la fuente y la fecha de corte siempre visibles.',
      },
      {
        pregunta: '¿El tablero se actualiza solo o hay que cargar datos manualmente?',
        respuesta: 'Depende de la fuente. Cuando los datos vienen de un sistema con actualización periódica, el tablero se conecta y se actualiza de forma automática; cuando la fuente es manual, se define un proceso de carga documentado.',
      },
      {
        pregunta: '¿Puede tener niveles de acceso distintos por dirección?',
        respuesta: 'Sí. Es una práctica estándar de los tableros que se han construido para uso ejecutivo en dependencias con distintos niveles de responsabilidad sobre la misma información.',
      },
      {
        pregunta: '¿Funciona con las fuentes que ya tiene la dependencia?',
        respuesta: 'En la mayoría de los casos sí. El trabajo de integración y normalización está pensado justamente para partir de fuentes ya existentes —bases administrativas, encuestas previas, sistemas propios— antes de considerar levantar datos nuevos.',
      },
    ],
    casosSlugs: ['aid-ruts-redes-complejidad-tramites', 'indice-municipal-prioridad-asistencia-social', 'diagnostico-participativo-presupuesto-2027'],
    publicacionesSlugs: ['del-dato-al-tablero-que-ve-un-alcalde'],
  },
  {
    slug: 'software-y-automatizacion',
    icono: 'cpu',
    nombre: 'Software y automatización',
    h1: 'Software y automatización para campo y gobierno',
    keywordObjetivo: 'app de levantamiento encuestas campo offline',
    tituloSEO: 'App de levantamiento de encuestas en campo | Yaocalli',
    metaDescripcion:
      'Aplicaciones móviles offline-first, backends a la medida y automatización de trámites: sistemas que operan con el cliente, no informes que envejecen.',
    resumenListado:
      'Aplicaciones móviles offline-first, backends a la medida y automatización de procesos: el proyecto termina con un sistema que opera, no con un archivo que envejece.',
    entregablesDestacados: [
      'App móvil offline-first',
      'Backend contenerizado a la medida',
      'Transferencia de código y documentación',
    ],
    primerParrafo:
      'Cada proyecto de Yaocalli deja instalada la capacidad, no solo el resultado. El servicio de software y automatización construye aplicaciones móviles offline-first para levantamiento en campo, backends a la medida sobre infraestructura contenerizada y automatización de procesos administrativos, como el sistema que conectó a más de 600 usuarios activos diarios y digitalizó más de 900 trámites en menos de dos meses.',
    paraQuien:
      'Gobiernos y organizaciones que necesitan un sistema propio de captura, gestión o automatización, y quieren terminar el proyecto con la base de datos, la aplicación y la documentación en su poder, no con un entregable que depende de que alguien externo lo mantenga.',
    queEntrega: [
      'Aplicación móvil offline-first para captura en campo: inicio de sesión único, catálogos locales y sincronización asíncrona',
      'Backend a la medida, contenerizado con Docker y Docker Compose para portabilidad',
      'Base de datos relacional y, cuando el proyecto lo requiere, geoespacial con PostGIS',
      'Automatización de procesos administrativos repetitivos, con modelado de flujos cuando la complejidad lo justifica',
      'Documentación técnica completa y transferencia de código fuente',
      'Capacitación de operación para el equipo que va a usar el sistema todos los días',
    ],
    comoSeHace: [
      {
        titulo: 'Levantamiento de requerimientos',
        texto: 'Se define con el equipo operativo qué proceso real necesita resolverse, qué condiciones de conectividad enfrenta y quién va a usar el sistema todos los días.',
      },
      {
        titulo: 'Arquitectura y elección de stack',
        texto: 'Backend en Django o Laravel sobre infraestructura contenerizada con Docker, base de datos relacional en PostgreSQL y, cuando el proyecto lo exige, extensión geoespacial con PostGIS; frontend móvil en React Native cuando la operación es de campo.',
      },
      {
        titulo: 'Desarrollo iterativo',
        texto: 'El sistema se construye en iteraciones verificables, priorizando que el flujo crítico funcione primero y de forma confiable antes de sumar funciones secundarias.',
      },
      {
        titulo: 'Pruebas de campo o de carga',
        texto: 'Antes del despliegue definitivo se prueba el sistema en las condiciones reales que va a enfrentar: sincronización offline en campo, o múltiples usuarios simultáneos en un sistema administrativo.',
      },
      {
        titulo: 'Despliegue',
        texto: 'El sistema se despliega sobre la infraestructura acordada con el cliente, con la contenerización que permite moverlo entre entornos sin reescribir código.',
      },
      {
        titulo: 'Transferencia y documentación',
        texto: 'El proyecto termina con documentación técnica completa y transferencia del código fuente: el cliente se queda con un instrumento que opera, no con un desarrollo que depende de un proveedor externo indefinidamente.',
      },
    ],
    fichaRigor: [
      { etiqueta: 'Tiempo típico de entrega', valor: 'Desde menos de dos meses para sistemas administrativos hasta varios meses para plataformas de campo a gran escala' },
      { etiqueta: 'Arquitectura', valor: 'Backend en Django o Laravel, contenerizado con Docker y Docker Compose' },
      { etiqueta: 'Modo de operación offline', valor: 'Aplicación móvil en React Native con almacenamiento local en SQLite y sincronización asíncrona' },
      { etiqueta: 'Usuarios simultáneos demostrados', valor: 'Más de 600 usuarios activos diarios en un sistema propio' },
      { etiqueta: 'Volumen demostrado', valor: 'Más de 900 trámites administrativos digitalizados en un solo proyecto' },
      { etiqueta: 'Formato de transferencia', valor: 'Código fuente, documentación técnica y capacitación de operación' },
    ],
    faqs: [
      {
        pregunta: '¿El sistema queda en propiedad del cliente al terminar el proyecto?',
        respuesta: 'Sí. La transferencia de código fuente y la documentación técnica son parte de la entrega: el cliente termina con un instrumento que opera, no con un desarrollo que depende de un proveedor externo de forma indefinida.',
      },
      {
        pregunta: '¿Funciona sin conexión a internet en campo?',
        respuesta: 'Sí, cuando el proyecto lo requiere. Las aplicaciones de campo se construyen offline-first: capturan sin conexión y sincronizan de forma asíncrona en cuanto se recupera señal.',
      },
      {
        pregunta: '¿Cuánto tarda en construirse un sistema a la medida?',
        respuesta: 'Depende del alcance. Un sistema de administración gubernamental con más de 600 usuarios diarios se construyó en menos de dos meses; proyectos con captura de campo a gran escala toman más tiempo por la fase de prueba en condiciones reales.',
      },
      {
        pregunta: '¿Dan mantenimiento después de la entrega?',
        respuesta: 'La transferencia incluye la documentación necesaria para que el equipo del cliente opere el sistema de forma autónoma. El acompañamiento posterior a la entrega se define por proyecto.',
      },
      {
        pregunta: '¿Pueden integrarlo con lo que ya tiene la dependencia?',
        respuesta: 'En la mayoría de los casos sí, mediante integración a las bases de datos o sistemas existentes. Se evalúa caso por caso durante el levantamiento de requerimientos.',
      },
    ],
    casosSlugs: ['aid-ruts-redes-complejidad-tramites', 'auditoria-territorial-transporte-movilidad'],
    publicacionesSlugs: ['ochenta-encuestadores-en-campo-control-de-calidad'],
  },
];

export function getServicioBySlug(slug: string): Servicio | undefined {
  return servicios.find((s) => s.slug === slug);
}
