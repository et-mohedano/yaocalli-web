export interface Caso {
  slug: string;
  titulo: string;
  /** true si la institución se nombra explícitamente; false si se anonimiza por confidencialidad */
  institucionPublica: boolean;
  institucion: string;
  anio?: string;
  serviciosSlugs: string[];
  escala: { etiqueta: string; valor: string }[];
  elProblema: string;
  queSeHizo: string[];
  resultado: string;
  visualizacionDescripcion: string;
  metaDescripcion: string;
  /** referencias públicas reales (dashboard en vivo, documento metodológico, etc.) */
  enlaces?: { etiqueta: string; href: string }[];
}

export const casos: Caso[] = [
  {
    slug: 'auditoria-territorial-transporte-movilidad',
    titulo: 'Auditoría territorial de transporte y movilidad a escala estatal',
    institucionPublica: false,
    institucion: 'Instancia estatal de movilidad y transporte (anonimizada por confidencialidad)',
    serviciosSlugs: ['encuestas-y-opinion-publica', 'cartografia-y-analisis-territorial', 'software-y-automatizacion'],
    escala: [
      { etiqueta: 'Cobertura territorial', valor: '84 municipios' },
      { etiqueta: 'Personal en campo', valor: '80 encuestadores simultáneos' },
      { etiqueta: 'Rutas trackeadas con GPS', valor: '1,547' },
      { etiqueta: 'Encuestas levantadas', valor: '34,818' },
    ],
    elProblema:
      'La instancia necesitaba instrumentar una auditoría territorial masiva de infraestructura y percepción del transporte público y privado con cobertura de todo el estado, y con un control de calidad que pudiera verificarse, no solo declararse.',
    queSeHizo: [
      'Se construyó un backend en Django sobre infraestructura contenerizada con Docker y Docker Compose, con base de datos relacional y geoespacial en PostgreSQL y PostGIS.',
      'Se desarrolló una aplicación móvil offline-first en React Native para el equipo de campo, con inicio de sesión único, catálogos locales y sincronización asíncrona al recuperar conexión.',
      'Se coordinó a más de 80 encuestadores simultáneos en territorio, con un equipo de gabinete dedicado a control de calidad, limpieza de datos y eliminación de duplicados, hasta levantar 34,818 encuestas.',
      'Se dio seguimiento georreferenciado, municipio por municipio, al avance del levantamiento en los 84 municipios del estado.',
      'Se importaron 1,547 trazas completas de ruta en formato GPX recolectadas con rastreadores GPS, y se generaron buffers geográficos con la Red Nacional de Caminos para calcular cobertura espacial cruzada con datos demográficos de INEGI a nivel microlocal.',
      'Se construyeron matrices de correlación estadística sobre las encuestas de percepción para medir eficiencia y satisfacción del usuario del transporte.',
    ],
    resultado:
      'La instancia terminó con una auditoría verificable a escala estatal y con la capacidad instalada —aplicación de campo, base geoespacial y modelo de control de calidad— para repetir el ejercicio en periodos futuros. Es, entre los proyectos documentados, el único que combina campo a gran escala, análisis geoespacial fino y desarrollo de software propio en un mismo operativo.',
    visualizacionDescripcion:
      'Cobertura de 84 municipios con seguimiento georreferenciado del avance del levantamiento en tiempo real.',
    metaDescripcion:
      'Censo territorial de transporte en 84 municipios: 34,818 encuestas, 1,547 rutas trackeadas con GPS y análisis geoespacial con PostGIS.',
  },
  {
    slug: 'indice-municipal-prioridad-asistencia-social',
    titulo: 'Índice Municipal de Prioridad para la Asistencia Social (IMPAS)',
    institucionPublica: true,
    institucion: 'Sistema Municipal para el Desarrollo Integral de la Familia de Mineral de la Reforma, Hidalgo',
    anio: 'Ejercicio fiscal 2026, anexo técnico',
    serviciosSlugs: ['indices-y-priorizacion', 'tableros-y-visualizacion', 'software-y-automatizacion'],
    escala: [
      { etiqueta: 'Escala del índice', valor: '0 a 100 puntos' },
      { etiqueta: 'Registros valorados', valor: '453' },
      { etiqueta: 'Usuarios del sistema', valor: '190' },
      { etiqueta: 'Margen de ajuste colegiado', valor: '−5 a +5 puntos, con evidencia y acta' },
    ],
    elProblema:
      'El organismo necesitaba ordenar con criterios verificables la asignación de los apoyos de asistencia social. El problema tenía dos caras: una sustantiva, cómo identificar quién necesita más; y una operativa, cómo hacerlo de forma homogénea entre casos y entre personas aplicadoras, dejando rastro de la decisión.',
    queSeHizo: [
      'Se diseñó un instrumento de valoración, focalización y prelación que traduce la condición social de una persona solicitante y de su hogar a una escala continua de 0 a 100 puntos, integrada por seis dimensiones ponderadas: condición económica del hogar, inseguridad alimentaria, condición de vulnerabilidad prioritaria, red de apoyo y apoyos sociales, condiciones de salud y funcionalidad, y condiciones de vivienda.',
      'El puntaje clasifica cada solicitud en cuatro niveles de prioridad —muy alta, alta, media y baja— que orientan la incorporación al padrón, la periodicidad sugerida de atención y, en su caso, la canalización a otras instancias.',
      'Se construyeron seis componentes de soporte: el instrumento de valoración, la escala de 100 puntos, un ajuste cualitativo colegiado documentado de −5 a +5 puntos, banderas automáticas de revisión, una plataforma de soporte con expediente digital y motor de reglas versionado, y un sistema de indicadores de proceso, focalización, producto, resultado, equidad y auditoría.',
      'Cada dimensión y reactivo del instrumento se fundamentó documentalmente en cuatro escalas territoriales —internacional, nacional, estatal y municipal—, con una matriz de trazabilidad que permite remitir cualquier pregunta aplicada en ventanilla a un referente identificable y a una regla de cálculo verificable.',
      'La plataforma lleva valorados 453 registros y opera con 190 personas usuarias entre capturistas, dictaminadoras y consulta directiva. El mismo sistema municipal aloja además el instrumento de presupuesto participativo, con 507 respuestas capturadas a la fecha.',
    ],
    resultado:
      'El Índice no funciona como un mecanismo de decisión automática: calcula un puntaje base con reglas explícitas y versionadas, genera banderas de revisión, ordena la prelación y conserva un margen acotado de ajuste colegiado que solo procede con evidencia documentada. No sustituye la valoración social profesional: la ordena, la hace comparable y le da un registro trazable.',
    visualizacionDescripcion:
      'Escala continua de 0 a 100 puntos con cuatro niveles de prioridad, cada uno con su regla de cálculo documentada.',
    metaDescripcion:
      'Índice Municipal de Prioridad para la Asistencia Social: escala de 0 a 100 puntos, seis dimensiones ponderadas y banderas automáticas de revisión.',
    enlaces: [
      { etiqueta: 'Ver documento técnico completo', href: 'https://docs.google.com/document/d/1UvUchSzvMvM2f6FEoZ0d5tv3zio_IrAT/edit?usp=sharing' },
    ],
  },
  {
    slug: 'diagnostico-participativo-presupuesto-2027',
    titulo: 'Diagnóstico participativo para el anteproyecto de presupuesto 2027',
    institucionPublica: true,
    institucion:
      'Secretaría de Bienestar para la Comunidad, Dirección de Desarrollo Social, Inclusión y Aprendizaje, Presidencia Municipal de Mineral de la Reforma, Hidalgo',
    anio: 'Anteproyecto de presupuesto 2027',
    serviciosSlugs: ['encuestas-y-opinion-publica', 'indices-y-priorizacion', 'tableros-y-visualizacion'],
    escala: [
      { etiqueta: 'Marco muestral', valor: '1,733 inscripciones, 183 grupos, 16 sedes' },
      { etiqueta: 'Muestra recomendada', valor: '600 casos, ±3.2 puntos porcentuales' },
      { etiqueta: 'Respuestas capturadas', valor: '507' },
      { etiqueta: 'Dimensiones analizadas', valor: '6, con clave Centro × taller' },
    ],
    elProblema:
      'La Secretaría necesitaba sustentar con evidencia el anteproyecto de presupuesto 2027 de su red de Centros Comunitarios de Aprendizaje, en un municipio que pasó de 127,404 a 202,749 habitantes en una década —59.1% de crecimiento, tres veces el de la capital estatal— con una demanda de equipamiento comunitario que no llega de forma gradual, sino en bloques simultáneos por la instalación de fraccionamientos de interés social.',
    queSeHizo: [
      'Se diseñaron tres instrumentos dirigidos a personas usuarias, instructoras y administradoras de los Centros Comunitarios de Aprendizaje, sobre un marco común de seis dimensiones —condiciones físicas, equipamiento, oferta formativa, gestión y seguridad, resultados percibidos, y priorización presupuestal— con clave de vinculación Centro por taller para permitir el cruce sistemático entre los tres instrumentos.',
      'El marco muestral se construyó desde el concentrado de matrícula del ciclo anterior: 1,733 inscripciones en 183 grupos y 16 sedes. Se definieron dos escenarios de muestra, con el recomendado en 600 casos y un margen de ±3.2 puntos porcentuales a nivel municipal; para instructoras y administradoras se optó por diseño censal, porque la muestra probabilística habría agotado casi toda la población.',
      'Se aplicó una estrategia de análisis en cinco capas: depuración y ponderación, validación psicométrica, construcción de índices dimensionales de 0 a 100 con reducción de dimensionalidad por componentes principales, contraste entre instrumentos con modelos de respuesta ordinal, y un Índice de Prioridad Presupuestal que traduce la evidencia en un ordenamiento auditable de necesidades por sede y por rubro.',
      'El control de calidad incluyó capacitación certificada de seis horas para todo el personal aplicador, identificador operativo no nominativo, un umbral de consistencia interna de alfa de Cronbach de al menos 0.70 por escala, y prueba cognitiva previa con personas del perfil real antes del levantamiento definitivo.',
      'A la fecha se han capturado 507 respuestas del instrumento de presupuesto participativo, en el mismo sistema municipal que aloja el Índice de Prioridad para la Asistencia Social.',
    ],
    resultado:
      'El valor del diagnóstico no está en conseguir más presupuesto, sino en asignar mejor el que ya existe. El Índice de Prioridad Presupuestal ordena las necesidades de la red de Centros Comunitarios de forma auditable, y la redundancia entre los tres instrumentos es la que sostiene esa asignación: cuando convergen, la evidencia es robusta; cuando divergen, la divergencia misma señala dónde verificar en campo.',
    visualizacionDescripcion:
      'Dashboard interactivo con fichas por centro comunitario, índices de prioridad y filtros por tipología, prioridad, sexo y grupo etario.',
    metaDescripcion:
      'Diagnóstico participativo para el presupuesto 2027 de los Centros Comunitarios de Aprendizaje de Mineral de la Reforma: muestra, índices y resultados.',
    enlaces: [
      { etiqueta: 'Ver resultados en el dashboard', href: 'https://et-mohedano.github.io/presupuesto-participativo/' },
      { etiqueta: 'Ver diseño metodológico completo', href: 'https://docs.google.com/document/d/1Z0PG-mjy7a8rSW69V2_EUBZuy3AaTKHYd-c2J53ByB4/edit?usp=sharing' },
    ],
  },
  {
    slug: 'aid-ruts-redes-complejidad-tramites',
    titulo: 'AID-RUTS: análisis de redes de complejidad en trámites gubernamentales',
    institucionPublica: false,
    institucion: 'Dependencias de gobierno estatal y municipal, incluidas universidades y enlaces institucionales (anonimizadas por confidencialidad)',
    serviciosSlugs: ['software-y-automatizacion', 'tableros-y-visualizacion'],
    escala: [
      { etiqueta: 'Usuarios activos diarios', valor: 'Más de 600' },
      { etiqueta: 'Trámites digitalizados', valor: 'Más de 900' },
      { etiqueta: 'Tiempo de construcción', valor: 'Menos de 2 meses' },
      { etiqueta: 'Alcance', valor: 'Nivel estatal y municipal' },
    ],
    elProblema:
      'Las dependencias necesitaban optimizar sus trámites y servicios mediante un mapeo analítico del flujo real de la administración pública, en lugar de intervenir a ciegas sobre la normativa existente.',
    queSeHizo: [
      'Se desarrolló, en menos de dos meses, un sistema de administración gubernamental que conectó a más de 600 usuarios activos diarios a nivel estatal y municipal.',
      'Se cargaron y digitalizaron más de 900 trámites administrativos con sus requisitos normativos.',
      'Se diseñó un modelo de redes de complejidad: nodos y relaciones para estudiar el árbol de requisitos y la complejidad burocrática de cada trámite.',
      'Mediante análisis de grafos se identificaron cuellos de botella normativos y duplicidades, lo que permitió priorizar qué trámites intervenir dentro de la Estrategia Anual de Simplificación Administrativa y Digitalización.',
      'Se construyeron paneles interactivos en Power BI y Looker Studio para la visualización y el reporte ejecutivo del avance.',
    ],
    resultado:
      'El sistema pasó de una intuición sobre "qué trámite está mal" a un modelo de redes que señala, con evidencia, dónde está la complejidad real. Es la demostración más clara de velocidad de entrega del portafolio: un sistema en producción con cientos de usuarios diarios en menos de dos meses.',
    visualizacionDescripcion:
      'Modelo de nodos y relaciones que mapea el árbol de requisitos y la complejidad burocrática de más de 900 trámites.',
    metaDescripcion:
      'AID-RUTS: sistema de gestión de trámites con más de 600 usuarios diarios y análisis de redes de complejidad para priorizar la simplificación administrativa.',
  },
];

export function getCasoBySlug(slug: string): Caso | undefined {
  return casos.find((c) => c.slug === slug);
}
