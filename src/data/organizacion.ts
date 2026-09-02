export const ORGANIZACION = {
  nombre: 'Yaocalli Consultoría y Estrategia',
  nombreCorto: 'Yaocalli',
  descripcion:
    'Inteligencia de datos, análisis político y diseño de política pública. Encuestas, cartografía, índices de priorización y sistemas de decisión para gobiernos y campañas.',
  posicionamiento: 'La casa donde el dato se vuelve decisión.',
  ciudad: 'Pachuca de Soto',
  estado: 'Hidalgo',
  pais: 'México',
  areaServida: ['Hidalgo', 'México'],
  knowsAbout: [
    'encuestas de opinión pública',
    'cartografía electoral',
    'análisis territorial',
    'índices de priorización',
    'sistemas de información geográfica',
    'escucha digital y análisis de actores',
    'tableros de indicadores',
  ],
} as const;

export const NAV_PRINCIPAL = [
  { etiqueta: 'Servicios', href: '/servicios/' },
  { etiqueta: 'Casos', href: '/casos/' },
  { etiqueta: 'Metodología', href: '/metodologia/' },
  { etiqueta: 'Publicaciones', href: '/publicaciones/' },
  { etiqueta: 'Quiénes somos', href: '/quienes-somos/' },
] as const;

export const NAV_LEGAL = [
  { etiqueta: 'Aviso de privacidad', href: '/aviso-de-privacidad/' },
  { etiqueta: 'Protección de datos', href: '/proteccion-de-datos/' },
] as const;

export const PILARES_EDITORIALES = [
  'Método a la vista',
  'Territorio y datos',
  'Decisión pública',
  'Ventana 2027',
] as const;

// Cifras verificadas contra src/data/casos.ts y contra la conciliación de datos
// documentada en ../../CONFLICTOS_DE_DATOS.md, sección "Cifras por sistema y proyecto".
// "tipo" describe la clase de proyecto (levantamiento, sistema, entrega), no una
// fuente puntual — a propósito, para no sobre-especificar de qué proyecto exacto
// sale cada cifra.
export const CIFRAS_CAPACIDAD: {
  numero?: number;
  valor: string;
  etiqueta: string;
  tipo: string;
  icono: string;
  destacado?: boolean;
}[] = [
  { numero: 84, valor: '84', etiqueta: 'municipios cubiertos en un levantamiento estatal', tipo: 'Levantamiento en campo', icono: 'map' },
  { numero: 34818, valor: '34,818', etiqueta: 'encuestas levantadas en un solo operativo', tipo: 'Levantamiento en campo', icono: 'bar-chart', destacado: true },
  { numero: 2765, valor: '2,765', etiqueta: 'encuestas realizadas a nivel municipal', tipo: 'Levantamiento en campo', icono: 'clipboard' },
  { numero: 1547, valor: '1,547', etiqueta: 'rutas trackeadas con GPS', tipo: 'Análisis territorial', icono: 'network' },
  { numero: 1037, valor: '1,037', etiqueta: 'usuarios activos combinados en sistemas propios', tipo: 'Sistemas propios', icono: 'users', destacado: true },
  { numero: 900, valor: '900', etiqueta: 'trámites administrativos digitalizados', tipo: 'Análisis para digitalización y simplificación', icono: 'file-text' },
  { valor: 'Menos de 2 meses', etiqueta: 'para construir un sistema propio en producción', tipo: 'Entrega de software', icono: 'cpu' },
];

/** Usuarios activos por sistema propio — "tomarlos de todos", no de uno solo. */
export const USUARIOS_POR_SISTEMA = [
  { etiqueta: 'AID-RUTS — gestión de trámites', valor: 600, destacado: true },
  { etiqueta: 'Sistema municipal de índice y presupuesto', valor: 190 },
  { etiqueta: 'Portal municipal de PMDU y PPDU', valor: 127 },
  { etiqueta: 'Sistema de censo de transporte', valor: 120 },
] as const;

/** Encuestas y registros de instrumentos municipales de índice, presupuesto y
 * diagnóstico. El censo de transporte (34,818) se muestra aparte, en las cifras
 * de capacidad: mezclarlo aquí aplastaría el resto de las barras en la gráfica. */
export const ENCUESTAS_POR_PROYECTO = [
  { etiqueta: 'Percepción y posicionamiento (serie)', valor: 1996, destacado: true },
  { etiqueta: 'Encuesta inicial de diagnóstico', valor: 769 },
  { etiqueta: 'Presupuesto participativo', valor: 507 },
  { etiqueta: 'Índice de atención social', valor: 453 },
] as const;
