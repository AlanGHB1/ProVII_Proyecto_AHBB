/**
 * inscripcionesServicio_ahbb.js — Servicio de inscripciones
 * Capa intermedia entre el store y la fuente de datos.
 *
 * Modo LocalStorage: CRUD en el navegador (actual).
 * Modo API: llama a endpoints del backend NestJS (futuro).
 */

import { MODO_API_AHBB, apiCliente_ahbb } from './api_ahbb';
import {
  obtenerDato_ahbb,
  guardarDato_ahbb,
  generarId_ahbb,
} from '../helpers/almacenamiento_ahbb';

const CLAVE_LS_AHBB = 'certificaciones_inscripciones_ahbb';

// ─── Funciones auxiliares (modo LS) ───────────────────

const leerInscripcionesLS_ahbb = () =>
  obtenerDato_ahbb(CLAVE_LS_AHBB, []);

const guardarInscripcionesLS_ahbb = (inscripciones_ahbb) =>
  guardarDato_ahbb(CLAVE_LS_AHBB, inscripciones_ahbb);

// ─── Servicio público ─────────────────────────────────

/**
 * Obtiene todas las inscripciones.
 */
export const obtenerInscripciones_ahbb = async () => {
  if (MODO_API_AHBB) {
    const respuesta_ahbb = await apiCliente_ahbb.get('/inscripciones');
    return respuesta_ahbb.data;
  }
  return leerInscripcionesLS_ahbb();
};

/**
 * Obtiene las inscripciones de un alumno específico.
 */
export const obtenerInscripcionesPorAlumno_ahbb = async (alumnoId_ahbb) => {
  if (MODO_API_AHBB) {
    const respuesta_ahbb = await apiCliente_ahbb.get(
      `/inscripciones/historial/${alumnoId_ahbb}`,
    );
    return respuesta_ahbb.data;
  }
  const inscripciones_ahbb = leerInscripcionesLS_ahbb();
  return inscripciones_ahbb.filter((i) => i.alumnoId === alumnoId_ahbb);
};

/**
 * Obtiene las inscripciones de un curso específico.
 */
export const obtenerInscripcionesPorCurso_ahbb = async (cursoId_ahbb) => {
  if (MODO_API_AHBB) {
    const respuesta_ahbb = await apiCliente_ahbb.get(
      `/inscripciones/curso/${cursoId_ahbb}`,
    );
    return respuesta_ahbb.data;
  }
  const inscripciones_ahbb = leerInscripcionesLS_ahbb();
  return inscripciones_ahbb.filter((i) => i.cursoId === cursoId_ahbb);
};

/**
 * Crea una nueva inscripción.
 * Valida: tope de estudiantes, no duplicar si ya aprobó, prelaciones.
 */
export const crearInscripcion_ahbb = async (datos_ahbb) => {
  if (MODO_API_AHBB) {
    try {
      const respuesta_ahbb = await apiCliente_ahbb.post('/inscripciones', datos_ahbb);
      return { exito: true, inscripcion: respuesta_ahbb.data, mensaje: 'Inscripción exitosa' };
    } catch {
      return { exito: false, inscripcion: null, mensaje: 'Error al crear inscripción.' };
    }
  }

  // Modo LocalStorage
  const inscripciones_ahbb = leerInscripcionesLS_ahbb();

  // Verificar si ya tiene inscripción activa en ese curso
  const yaInscrito_ahbb = inscripciones_ahbb.some(
    (i) =>
      i.alumnoId === datos_ahbb.alumnoId &&
      i.cursoId === datos_ahbb.cursoId &&
      !['aprobado', 'reprobado'].includes(i.estado),
  );
  if (yaInscrito_ahbb) {
    return { exito: false, inscripcion: null, mensaje: 'Ya tienes una inscripción activa en este curso.' };
  }

  // Verificar si ya aprobó este curso
  const yaAprobo_ahbb = inscripciones_ahbb.some(
    (i) =>
      i.alumnoId === datos_ahbb.alumnoId &&
      i.cursoId === datos_ahbb.cursoId &&
      i.estado === 'aprobado',
  );
  if (yaAprobo_ahbb) {
    return { exito: false, inscripcion: null, mensaje: 'Ya aprobaste este curso. No puedes inscribirte de nuevo.' };
  }

  // Contar intentos previos
  const intentosPrevios_ahbb = inscripciones_ahbb.filter(
    (i) => i.alumnoId === datos_ahbb.alumnoId && i.cursoId === datos_ahbb.cursoId,
  ).length;

  const nuevaInscripcion_ahbb = {
    id: generarId_ahbb(),
    alumnoId: datos_ahbb.alumnoId,
    cursoId: datos_ahbb.cursoId,
    estado: 'inscrito',
    fechaInscripcion: new Date().toISOString(),
    fechaFinalizacion: null,
    notaFinal: null,
    intento: intentosPrevios_ahbb + 1,
    observaciones: datos_ahbb.observaciones ?? '',
    creado_en: new Date().toISOString(),
    actualizado_en: new Date().toISOString(),
  };

  inscripciones_ahbb.push(nuevaInscripcion_ahbb);
  guardarInscripcionesLS_ahbb(inscripciones_ahbb);

  return { exito: true, inscripcion: nuevaInscripcion_ahbb, mensaje: 'Inscripción exitosa' };
};

/**
 * Actualiza el estado académico de una inscripción.
 */
export const actualizarEstadoInscripcion_ahbb = async (
  inscripcionId_ahbb,
  nuevoEstado_ahbb,
  notaFinal_ahbb,
) => {
  if (MODO_API_AHBB) {
    try {
      await apiCliente_ahbb.patch(`/inscripciones/${inscripcionId_ahbb}/estado`, {
        estado: nuevoEstado_ahbb,
        notaFinal: notaFinal_ahbb,
      });
      return true;
    } catch {
      return false;
    }
  }

  // Modo LocalStorage
  const inscripciones_ahbb = leerInscripcionesLS_ahbb();
  const indice_ahbb = inscripciones_ahbb.findIndex((i) => i.id === inscripcionId_ahbb);
  if (indice_ahbb === -1) return false;

  const existente_ahbb = inscripciones_ahbb[indice_ahbb];
  inscripciones_ahbb[indice_ahbb] = Object.assign({}, existente_ahbb, {
    estado: nuevoEstado_ahbb,
    notaFinal: notaFinal_ahbb ?? existente_ahbb.notaFinal,
    fechaFinalizacion:
      nuevoEstado_ahbb === 'aprobado' || nuevoEstado_ahbb === 'reprobado'
        ? new Date().toISOString()
        : null,
    actualizado_en: new Date().toISOString(),
  });

  guardarInscripcionesLS_ahbb(inscripciones_ahbb);
  return true;
};
