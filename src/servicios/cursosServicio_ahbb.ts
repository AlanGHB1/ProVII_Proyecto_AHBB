/**
 * cursosServicio_ahbb.ts — Servicio de cursos
 * Capa intermedia entre el store y la fuente de datos.
 *
 * Modo LocalStorage: CRUD completo en el navegador (actual).
 * Modo API: llama a endpoints del backend NestJS (futuro).
 */

import { MODO_API_AHBB, apiCliente_ahbb } from './api_ahbb';
import type { ICurso, ICursoFormulario } from '../types';
import {
  obtenerDato_ahbb,
  guardarDato_ahbb,
  generarId_ahbb,
  CLAVES_STORAGE_AHBB,
} from '../helpers/almacenamiento_ahbb';

// ─── Funciones auxiliares (modo LS) ───────────────────

/** Lee la lista de cursos desde LocalStorage */
const leerCursosLS_ahbb = (): ICurso[] =>
  obtenerDato_ahbb<ICurso[]>(CLAVES_STORAGE_AHBB.CURSOS, []);

/** Guarda la lista de cursos en LocalStorage */
const guardarCursosLS_ahbb = (cursos_ahbb: ICurso[]): void =>
  guardarDato_ahbb<ICurso[]>(CLAVES_STORAGE_AHBB.CURSOS, cursos_ahbb);

// ─── Servicio público ─────────────────────────────────

/**
 * Obtiene todos los cursos.
 */
export const obtenerCursos_ahbb = async (): Promise<ICurso[]> => {
  if (MODO_API_AHBB) {
    const respuesta_ahbb = await apiCliente_ahbb.get<ICurso[]>('/cursos');
    return respuesta_ahbb.data;
  }
  return leerCursosLS_ahbb();
};

/**
 * Obtiene un curso por su ID.
 */
export const obtenerCursoPorId_ahbb = async (id_ahbb: string): Promise<ICurso | null> => {
  if (MODO_API_AHBB) {
    try {
      const respuesta_ahbb = await apiCliente_ahbb.get<ICurso>(`/cursos/${id_ahbb}`);
      return respuesta_ahbb.data;
    } catch {
      return null;
    }
  }
  const cursos_ahbb = leerCursosLS_ahbb();
  return cursos_ahbb.find((c) => c.id === id_ahbb) ?? null;
};

/**
 * Crea un nuevo curso.
 */
export const crearCurso_ahbb = async (datosCurso_ahbb: ICursoFormulario): Promise<ICurso> => {
  if (MODO_API_AHBB) {
    const respuesta_ahbb = await apiCliente_ahbb.post<ICurso>('/cursos', datosCurso_ahbb);
    return respuesta_ahbb.data;
  }

  // Modo LocalStorage
  const cursos_ahbb = leerCursosLS_ahbb();
  const nuevoCurso_ahbb: ICurso = {
    id: generarId_ahbb(),
    ...datosCurso_ahbb,
    estudiantesInscritos: 0,
    fechaCreacion: new Date().toISOString(),
  };
  cursos_ahbb.push(nuevoCurso_ahbb);
  guardarCursosLS_ahbb(cursos_ahbb);
  return nuevoCurso_ahbb;
};

/**
 * Actualiza un curso existente.
 */
export const actualizarCurso_ahbb = async (
  id_ahbb: string,
  datosCurso_ahbb: Partial<ICursoFormulario>,
): Promise<boolean> => {
  if (MODO_API_AHBB) {
    try {
      await apiCliente_ahbb.put(`/cursos/${id_ahbb}`, datosCurso_ahbb);
      return true;
    } catch {
      return false;
    }
  }

  // Modo LocalStorage
  const cursos_ahbb = leerCursosLS_ahbb();
  const indice_ahbb = cursos_ahbb.findIndex((c) => c.id === id_ahbb);
  if (indice_ahbb === -1) return false;

  cursos_ahbb[indice_ahbb] = { ...cursos_ahbb[indice_ahbb], ...datosCurso_ahbb } as ICurso;
  guardarCursosLS_ahbb(cursos_ahbb);
  return true;
};

/**
 * Elimina un curso por su ID.
 */
export const eliminarCurso_ahbb = async (id_ahbb: string): Promise<boolean> => {
  if (MODO_API_AHBB) {
    try {
      await apiCliente_ahbb.delete(`/cursos/${id_ahbb}`);
      return true;
    } catch {
      return false;
    }
  }

  // Modo LocalStorage
  const cursos_ahbb = leerCursosLS_ahbb();
  const filtrados_ahbb = cursos_ahbb.filter((c) => c.id !== id_ahbb);
  if (filtrados_ahbb.length === cursos_ahbb.length) return false;

  guardarCursosLS_ahbb(filtrados_ahbb);
  return true;
};

/**
 * Inicializa los cursos desde LocalStorage con datos de ejemplo si es la primera vez.
 * Solo aplica en modo LS.
 */
export const inicializarCursos_ahbb = (cursosIniciales_ahbb: ICurso[]): ICurso[] => {
  if (MODO_API_AHBB) return []; // En modo API, los cursos vienen del servidor

  const cursosExistentes_ahbb = obtenerDato_ahbb<ICurso[] | null>(
    CLAVES_STORAGE_AHBB.CURSOS,
    null,
  );

  if (cursosExistentes_ahbb === null) {
    guardarCursosLS_ahbb(cursosIniciales_ahbb);
    return [...cursosIniciales_ahbb];
  }

  return cursosExistentes_ahbb;
};
