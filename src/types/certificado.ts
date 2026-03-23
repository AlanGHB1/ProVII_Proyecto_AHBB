/**
 * certificado.ts — Interfaces para certificados y plantillas
 * Modelo del certificado emitido al aprobar un curso,
 * y de las plantillas configurables para diseño del certificado.
 */

/** Estado del certificado */
export type EstadoCertificado_ahbb = 'generado' | 'entregado' | 'anulado';

/** Certificado emitido a un alumno por un curso aprobado */
export interface ICertificado_ahbb {
  id: string;
  inscripcionId: string;
  codigoVerificacion: string;     // Código único para QR
  urlVerificacion: string | null; // Ruta pública de validación (futuro)
  pdfUrl: string | null;          // URL del PDF generado (futuro)
  datosQr: string | null;         // Datos codificados en el QR
  estado: EstadoCertificado_ahbb;
  fechaEmision: string;
  creado_en: string;
}

/** Vista enriquecida del certificado (con datos del curso y alumno) */
export interface ICertificadoDetalle_ahbb extends ICertificado_ahbb {
  nombreCurso: string;
  nombreProfesor: string;
  nombreAlumno: string;
  apellidoAlumno: string;
  cedulaAlumno: string;
  duracionHorasCurso: number;
  temarioCurso: string;
  firmaProfesorUrl: string | null;
}

/** Plantilla de certificado */
export interface IPlantillaCertificado_ahbb {
  id: string;
  nombre: string;
  imagenFondoUrl: string | null;    // Imagen base del certificado
  marcaAguaUrl: string | null;      // Marca de agua
  imagenGeneralUrl: string | null;  // Imagen general (admin)
  configuracion: IConfiguracionPlantilla_ahbb | null;
  creadaPor: string;                // ID del usuario que la creó
  bloqueada: boolean;               // Admin puede bloquear
  activa: boolean;
  creado_en: string;
  actualizado_en: string;
}

/** Configuración de posiciones y estilos dentro de la plantilla */
export interface IConfiguracionPlantilla_ahbb {
  posicionNombre?: { x: number; y: number };
  posicionCurso?: { x: number; y: number };
  posicionFecha?: { x: number; y: number };
  posicionQr?: { x: number; y: number };
  posicionFirma?: { x: number; y: number };
  fuenteNombre?: string;
  tamanioFuente?: number;
}

/** Resultado de validación de un certificado por QR (futuro) */
export interface IValidacionCertificado_ahbb {
  valido: boolean;
  certificado: ICertificadoDetalle_ahbb | null;
  mensaje: string;
}
