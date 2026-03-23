/**
 * index.ts — Punto de entrada único para todos los tipos del proyecto
 * Re-exporta todas las interfaces y tipos para importación centralizada.
 */

// ─── Entidades principales ────────────────────────────
export * from './usuario';
export * from './curso';
export * from './inscripcion';
export * from './horario';
export * from './prelacion';
export * from './certificado';
export * from './factura';
export * from './periodo';

// ─── Tipos de API ─────────────────────────────────────
export * from './api';
