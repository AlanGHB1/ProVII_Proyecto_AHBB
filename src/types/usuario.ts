/**
 * usuario.ts — Interfaces de datos para el modelo Usuario
 * Incluye usuario base, registro, sesión, y perfiles extendidos
 * para profesor y alumno.
 */

import type { TipoRol_ahbb } from '../constantes/roles_ahbb';

/** Estado de la cuenta del usuario */
export type EstadoUsuario_ahbb = 'activo' | 'inactivo' | 'bloqueado';

export interface IUsuario {
  id: string;
  nombre: string;
  apellido: string;
  correo: string;
  contrasena: string;
  rol: TipoRol_ahbb;
  estado: EstadoUsuario_ahbb;
  requiereCambioContrasena: boolean;
  avatarUrl?: string;
  fechaCreacion: string;
}

export interface IRegistroUsuario {
  nombre: string;
  apellido: string;
  correo: string;
  contrasena: string;
  rol?: TipoRol_ahbb;
}

export interface IClaveSesion {
  id: string;
}

/** Datos extendidos del perfil de profesor */
export interface IPerfilProfesor_ahbb {
  id: string;
  usuarioId: string;
  especialidad: string;
  biografia: string;
  firmaUrl: string;
  firmaActiva: boolean;
}

/** Datos extendidos del perfil de alumno */
export interface IPerfilAlumno_ahbb {
  id: string;
  usuarioId: string;
  cedula: string;
  telefono: string;
  direccion: string;
  fechaNacimiento: string;
  datosCompletos: boolean;
}
