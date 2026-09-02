import { ORGANIZACION } from '../data/organizacion';
import { CORREO_CONTACTO, LINKEDIN_URL } from './contacto';

const SITIO = 'https://www.yaocalli.mx';

/** JSON-LD de organización — 4_Guia_SEO_y_Medicion_Yaocalli.html, bloque 1, "en todas las páginas". */
export function jsonLdOrganizacion() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: ORGANIZACION.nombre,
    description: ORGANIZACION.descripcion,
    url: `${SITIO}/`,
    logo: `${SITIO}/images/marca/yaocalli-simbolo.svg`,
    email: CORREO_CONTACTO,
    areaServed: ORGANIZACION.areaServida.map((nombre) => ({
      '@type': nombre === ORGANIZACION.estado ? 'State' : 'Country',
      name: nombre,
    })),
    knowsAbout: ORGANIZACION.knowsAbout,
    ...(LINKEDIN_URL !== 'PENDIENTE' ? { sameAs: [LINKEDIN_URL] } : {}),
  };
}

/** JSON-LD de servicio — bloque 2, "en cada ficha". */
export function jsonLdServicio(serviceType: string, description: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType,
    provider: { '@type': 'ProfessionalService', name: ORGANIZACION.nombre },
    areaServed: { '@type': 'State', name: ORGANIZACION.estado },
    audience: { '@type': 'Audience', audienceType: 'Gobiernos municipales y estatales, campañas políticas' },
    description,
  };
}

/** JSON-LD de nota metodológica — bloque 3, "en cada publicación". */
export function jsonLdArticulo(opts: {
  titulo: string;
  descripcion: string;
  fechaPublicacion: string;
  fechaModificacion: string;
  autor: string;
  slug: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: opts.titulo,
    description: opts.descripcion,
    datePublished: opts.fechaPublicacion,
    dateModified: opts.fechaModificacion,
    author: { '@type': 'Person', name: opts.autor },
    publisher: {
      '@type': 'Organization',
      name: ORGANIZACION.nombre,
      logo: { '@type': 'ImageObject', url: `${SITIO}/images/marca/yaocalli-simbolo.svg` },
    },
    mainEntityOfPage: `${SITIO}/publicaciones/${opts.slug}/`,
  };
}

/** JSON-LD de preguntas frecuentes — bloque 4, "en fichas de servicio". Solo describe lo visible en pantalla. */
export function jsonLdFaq(items: { pregunta: string; respuesta: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.pregunta,
      acceptedAnswer: { '@type': 'Answer', text: item.respuesta },
    })),
  };
}
