/**
 * factura.ts — Interfaces para facturación (estructura futura)
 * Se define la estructura ahora para que la BD y el backend
 * estén preparados, aunque no se implemente la lógica todavía.
 */

/** Estado de una factura */
export type EstadoFactura_ahbb = 'pendiente' | 'pagada' | 'anulada';

/** Factura generada por una inscripción */
export interface IFactura_ahbb {
  id: string;
  inscripcionId: string | null;
  alumnoId: string;
  numeroFactura: string;
  monto: number;
  estado: EstadoFactura_ahbb;
  fechaEmision: string;
  fechaPago: string | null;
  creado_en: string;
}
