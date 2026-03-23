/**
 * usuario.ts — Interfaz de datos para el modelo Usuario
 */

export interface IUsuario {
  id: string;
  nombre: string;
  apellido: string;
  correo: string;
  contrasena: string;
  rol: 'administrador' | 'profesor';
  fechaCreacion: string;
}

export interface IRegistroUsuario {
  nombre: string;
  apellido: string;
  correo: string;
  contrasena: string;
}

export interface IClaveSesion {
  id: string;
}
