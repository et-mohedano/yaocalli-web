// Datos de contacto de la firma. Todo lo marcado PENDIENTE falta confirmarlo
// con el cliente antes de lanzar a producción — ver PENDIENTES.md.

/** PENDIENTE: número real de WhatsApp, formato internacional sin signos, ej. "52771XXXXXXX". */
export const WHATSAPP_NUMERO = 'PENDIENTE';

/** PENDIENTE: correo institucional del dominio propio. */
export const CORREO_CONTACTO = 'contacto@yaocalli.mx';

/** PENDIENTE: teléfono de contacto en formato visible. */
export const TELEFONO_CONTACTO = 'PENDIENTE';

/** PENDIENTE: URL del perfil de LinkedIn de la firma. */
export const LINKEDIN_URL = 'PENDIENTE';

export const CIUDAD = 'Pachuca de Soto';
export const ESTADO = 'Hidalgo';
export const COBERTURA = 'Todo el estado de Hidalgo';

const numeroDisponible = WHATSAPP_NUMERO !== 'PENDIENTE';

/** Enlace de WhatsApp con mensaje precargado para un servicio específico. */
export function linkWhatsappServicio(servicio: string): string {
  const texto = `Hola, escribo desde [institución]. Necesito información sobre ${servicio}.`;
  const numero = numeroDisponible ? WHATSAPP_NUMERO : '52XXXXXXXXXX';
  return `https://wa.me/${numero}?text=${encodeURIComponent(texto)}`;
}

/** Enlace de WhatsApp genérico, sin servicio preseleccionado. */
export function linkWhatsappGeneral(): string {
  const texto = 'Hola, escribo desde [institución]. Tengo una duda sobre sus servicios.';
  const numero = numeroDisponible ? WHATSAPP_NUMERO : '52XXXXXXXXXX';
  return `https://wa.me/${numero}?text=${encodeURIComponent(texto)}`;
}

export function mailtoContacto(asunto?: string): string {
  return asunto ? `mailto:${CORREO_CONTACTO}?subject=${encodeURIComponent(asunto)}` : `mailto:${CORREO_CONTACTO}`;
}
