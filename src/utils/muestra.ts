// Cálculo de tamaño de muestra con corrección por población finita, el mismo
// método descrito en la ficha de servicio de encuestas y opinión pública y en
// /publicaciones/cuantas-encuestas-hacen-falta-para-medir-un-municipio/.
//
// n0 = (Z² · p · q) / e²                    — tamaño sin corregir (universo infinito)
// n  = (n0 · N) / (n0 + N − 1)               — corregido por población finita N
// n_operativa = n / (1 − tasaNoRespuesta)    — muestra a levantar en campo

export const Z_POR_CONFIANZA: Record<number, number> = {
  90: 1.645,
  95: 1.96,
  97: 2.17,
  99: 2.576,
};

export function tamanoBase(nivelConfianza: number, margenError: number, p = 0.5): number {
  const z = Z_POR_CONFIANZA[nivelConfianza];
  return (z * z * p * (1 - p)) / (margenError * margenError);
}

export function tamanoMuestra(nivelConfianza: number, margenError: number, universo: number, p = 0.5): number {
  const n0 = tamanoBase(nivelConfianza, margenError, p);
  return (n0 * universo) / (n0 + universo - 1);
}

export function muestraOperativa(muestraNecesaria: number, tasaNoRespuesta: number): number {
  return muestraNecesaria / (1 - tasaNoRespuesta);
}
