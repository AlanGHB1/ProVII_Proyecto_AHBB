# 🎓 Hidalgo Academy Merch - SPA

Una Single Page Application (SPA) moderna desarrollada con Vue 3, Vite y Pinia. Simula una tienda completa de útiles escolares, uniformes y papelería para la ficticia "Hidalgo Academy".

---

## 🚀 Despliegue en Vivo

El proyecto se encuentra desplegado y funcionando en **Netlify**:
👉 [**https://cozy-pasca-d4a742.netlify.app/**](https://cozy-pasca-d4a742.netlify.app/)

## 🛠️ Tecnologías y Herramientas

- **Framework Core:** Vue 3 (Composition API)
- **Tooling/Bundler:** Vite
- **Manejo de Estado Centralizado:** Pinia
- **Enrutamiento:** Vue Router
- **Estilizado:** CSS Puro Nativo (Variables CSS, Flexbox, Grid, Animaciones simples y Glassmorphism UI).

## ✨ Características Principales

- **Landing Page Dinámica:** Navegación fluida (Hero section, beneficios, productos destacados, galería visual, testimonios de estudiantes, preguntas frecuentes - FAQ y footer).
- **Catálogo Interactivo:** Vista dedicada de productos donde convergen el listado, filtrado y búsqueda.
- **Búsqueda y Filtros en Tiempo Real:** Filtros por categoría de papelería/uniformes y barra de búsqueda inteligente por texto.
- **Carrito de Compras (Slide-in):** Panel lateral deslizable moderno para gestionar los pedidos, cantidades, ver montos calculados y simular el cierre de compra. Todo manejado de manera reactiva global por Pinia.
- **Sistema de Favoritos ❤️:** Funcionalidad para "darle me gusta" a productos (tanto en página principal como en catálogo) y enviarlos a un almacén de Favoritos independiente para su lectura rápida en otra vista del router.
- **Información Local Estructurada:** Todo el catálogo se nutre de un JSON local customizado (`productos_ah.js`), que consolida las categorías, imágenes (desde Unsplash enfocadas a papelería) y sus precios.
- **Completamente Responsive:** Se adapta a dispositivos de forma óptima usando Media Queries organizadas de manera Mobile-First y Flexbox flexible.
- **Split por Componentes:** Reutilización de fragmentos granulares (ej. `TarjetaProducto_ah.vue`) para optimizar el mantenimiento y legibilidad.

## 📂 Organización de las Carpetas

La arquitectura del proyecto está orientada al orden bajo el patrón clásico de Vue:

```text
src/
├── assets/         # CSS global y tokens de colores (main_ah.css)
├── components/     # Agrupación atómica de partes de la UI
│   ├── carrito/    # Elementos y lógica visual del carrito
│   ├── catalogo/   # Barras de busquedad, filtros y tarjetas
│   ├── landing/    # Bloques gigantes del home (Hero, FAQ)
│   ├── layout/     # Partes estáticas (Navbar, Footer)
│   └── ui/         # Componentes repetibles y genéricos
├── data/           # Mock JSON de los 10 productos (productos_ah.js)
├── router/         # Rutas de navegación global (index_ah.js)
├── stores/         # Estados Pinia (Catalogo, Carrito y Favoritos)
└── views/          # Las 3 páginas anclas de la app.
```

## 🏗️ Cómo levantar localmente

Dadas las facilidades de Vite, arrancar el entorno de desarrollo es transparente. Solo asegúrate de tener [Node.js](https://nodejs.org/) instalado.

1. Instalar los paquetes npm necesarios:

```bash
npm install
```

2. Ejecutar el servidor de desarrollo local (Hot Module Replacement activado):

```bash
npm run dev
```

3. Compilar los binarios minimizados de producción (genera una carpeta `dist` lista para plataformas estáticas):

```bash
npm run build
```

---

_Proyecto elaborado para integrar progresivamente vistas locales reactivas antes de conectar un backend real._
