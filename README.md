# Proyecto Programación VIII - Academia H&B

Este repositorio consolida el desarrollo del sistema para la **Academia H&B**, compuesto por un servidor backend (NestJS) y un cliente web (Vue/Quasar).

## Requisitos Previos

Asegúrate de contar con lo siguiente instalado en tu sistema antes de iniciar:

1. **Node.js** (Versión 18 o superior recomendada).
2. **PostgreSQL** instalado y ejecutándose localmente o accesible en la red.
3. Git (opcional pero recomendado para el clonado del repositorio).

## Instalación de Dependencias

Dado que el proyecto está estructurado con múltiples carpetas (raíz, frontend, backend), debes instalar las dependencias de Node en cada una de ellas de forma independiente.

Abre una terminal y ejecuta:

```bash
# 1. Instalar dependencias organizativas en la raíz (ej. concurrently)
npm install

# 2. Instalar dependencias del Backend
cd academia-backend
npm install
cd ..

# 3. Instalar dependencias del Frontend
cd academia-h&b
npm install
cd ..
```

## Configuración de Entorno

Antes de correr la aplicación, el Backend asume ciertos datos de configuración, particularmente para comunicarse con PostgreSQL.

1. Ve al directorio `academia-backend`.
2. Asegurate de que el archivo `.env` o la base de datos se corresponde a local (si no tienes un archivo `.env`, puedes crear uno a partir de un template usando `DATABASE_URL="postgresql://usuario:clave@localhost:5432/academia_db?schema=public"`).
*Nota: Los scripts automáticos (`db:prepare:dev`) intentarán pre-crear la base de datos y correr las migraciones por ti usando Prisma.*

## Cómo levantar el proyecto localmente

El proyecto dispone de un script central (un Batch para Windows y un alias en el `package.json` raíz) que inicia de manera simultánea ambas partes (Backend y Frontend), y además prepara la base de datos si hiciere falta.

Posiciónate en la carpeta raíz (`Proyecto_Prog_VIII`) y ejecuta:

```bash
npm run dev
```

Este comando invocará automáticamente a `run-dev.bat`. Lo que hará bajo el capó es:
1. Preparará la base de datos aplicando migraciones y procedimientos almacenados (usando el servidor SQL de la carpeta backend).
2. Levantará tu base de datos simulada y aplicará casos de demo (si está configurada).
3. Lanzará el servidor Frontend (Quasar) en una pestaña. 
4. Lanzará el servidor Backend (NestJS) en otra pestaña simultánea.

**El navegador debería abrirse por defecto en:** `http://localhost:9000`

---

## Solución de Problemas Comunes

- **Error al acceder a base de datos de Prisma:** Si el backend arroja errores de que no encuentra la DB, revisa tus variables de entorno (`.env`) verificando que la contraseña, usuario y puerto de PostgreSQL en la variable `DATABASE_URL` sean correctos.
- **Doble puerto en uso:** Si se cierra el proceso de forma anormal, a veces los puertos `9000` (frontend) o el puerto del backend (generalmente `3000`) quedan ocupados. Mata los procesos de NodeJS o usa el Monitor de Recursos de Windows para cerrarlos antes de volver a intentar `npm run dev`.
