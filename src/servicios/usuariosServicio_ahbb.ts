/**
 * usuariosServicio_ahbb.ts — Servicio de gestión de usuarios
 * Operaciones administrativas sobre usuarios (CRUD).
 *
 * Modo LocalStorage: lee/escribe en el navegador (actual).
 * Modo API: llama a endpoints del backend NestJS (futuro).
 */

import { MODO_API_AHBB, apiCliente_ahbb } from './api_ahbb';
import type { IUsuario } from '../types';
import type { TipoRol_ahbb } from '../constantes/roles_ahbb';
import {
  obtenerDato_ahbb,
  guardarDato_ahbb,
  CLAVES_STORAGE_AHBB,
} from '../helpers/almacenamiento_ahbb';
import type { EstadoUsuario_ahbb } from '../types/usuario';

// ─── Funciones auxiliares (modo LS) ───────────────────

const leerUsuariosLS_ahbb = (): IUsuario[] =>
  obtenerDato_ahbb<IUsuario[]>(CLAVES_STORAGE_AHBB.USUARIOS, []);

const guardarUsuariosLS_ahbb = (usuarios_ahbb: IUsuario[]): void =>
  guardarDato_ahbb<IUsuario[]>(CLAVES_STORAGE_AHBB.USUARIOS, usuarios_ahbb);

// ─── Servicio público ─────────────────────────────────

/**
 * Obtiene todos los usuarios (filtro opcional por rol).
 */
export const obtenerUsuariosPorRol_ahbb = async (
  rol_ahbb?: TipoRol_ahbb,
): Promise<IUsuario[]> => {
  if (MODO_API_AHBB) {
    const parametros_ahbb = rol_ahbb ? { params: { rol: rol_ahbb } } : {};
    const respuesta_ahbb = await apiCliente_ahbb.get<IUsuario[]>('/usuarios', parametros_ahbb);
    return respuesta_ahbb.data;
  }

  const usuarios_ahbb = leerUsuariosLS_ahbb();
  if (!rol_ahbb) return usuarios_ahbb;
  return usuarios_ahbb.filter((u) => u.rol === rol_ahbb);
};

/**
 * Obtiene un usuario por su ID.
 */
export const obtenerUsuarioPorId_ahbb = async (id_ahbb: string): Promise<IUsuario | null> => {
  if (MODO_API_AHBB) {
    try {
      const respuesta_ahbb = await apiCliente_ahbb.get<IUsuario>(`/usuarios/${id_ahbb}`);
      return respuesta_ahbb.data;
    } catch {
      return null;
    }
  }
  const usuarios_ahbb = leerUsuariosLS_ahbb();
  return usuarios_ahbb.find((u) => u.id === id_ahbb) ?? null;
};

/**
 * Actualiza el estado de un usuario (activo, inactivo, bloqueado).
 */
export const actualizarEstadoUsuario_ahbb = async (
  id_ahbb: string,
  estado_ahbb: EstadoUsuario_ahbb,
): Promise<boolean> => {
  if (MODO_API_AHBB) {
    try {
      await apiCliente_ahbb.patch(`/usuarios/${id_ahbb}/estado`, { estado: estado_ahbb });
      return true;
    } catch {
      return false;
    }
  }

  // Modo LocalStorage
  const usuarios_ahbb = leerUsuariosLS_ahbb();
  const indice_ahbb = usuarios_ahbb.findIndex((u) => u.id === id_ahbb);
  if (indice_ahbb === -1) return false;

  usuarios_ahbb[indice_ahbb] = Object.assign({}, usuarios_ahbb[indice_ahbb], { estado: estado_ahbb });
  guardarUsuariosLS_ahbb(usuarios_ahbb);
  return true;
};

/**
 * Actualiza los datos del perfil de un usuario.
 */
export const actualizarPerfilUsuario_ahbb = async (
  id_ahbb: string,
  datosActualizar_ahbb: Partial<Pick<IUsuario, 'nombre' | 'apellido' | 'correo' | 'avatarUrl'>>,
): Promise<boolean> => {
  if (MODO_API_AHBB) {
    try {
      await apiCliente_ahbb.put(`/usuarios/${id_ahbb}`, datosActualizar_ahbb);
      return true;
    } catch {
      return false;
    }
  }

  // Modo LocalStorage
  const usuarios_ahbb = leerUsuariosLS_ahbb();
  const indice_ahbb = usuarios_ahbb.findIndex((u) => u.id === id_ahbb);
  if (indice_ahbb === -1) return false;

  usuarios_ahbb[indice_ahbb] = Object.assign({}, usuarios_ahbb[indice_ahbb], datosActualizar_ahbb);
  guardarUsuariosLS_ahbb(usuarios_ahbb);
  return true;
};

/**
 * Elimina un usuario por su ID (soft delete en API, real en LS).
 */
export const eliminarUsuario_ahbb = async (id_ahbb: string): Promise<boolean> => {
  if (MODO_API_AHBB) {
    try {
      await apiCliente_ahbb.delete(`/usuarios/${id_ahbb}`);
      return true;
    } catch {
      return false;
    }
  }

  // Modo LocalStorage
  const usuarios_ahbb = leerUsuariosLS_ahbb();
  const filtrados_ahbb = usuarios_ahbb.filter((u) => u.id !== id_ahbb);
  if (filtrados_ahbb.length === usuarios_ahbb.length) return false;

  guardarUsuariosLS_ahbb(filtrados_ahbb);
  return true;
};
