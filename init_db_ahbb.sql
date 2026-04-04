-- Active: 1769018023464@@127.0.0.1@5432@db_academia_ahbb
-- ==============================================================================
-- SISTEMA DE CERTIFICACIONES ACADÉMICAS 
SELECT
    1
FROM
    pg_database
WHERE
    datname = 'db_academia_ahbb';

CREATE DATABASE db_academia_ahbb
WITH
    OWNER = 'postgres' ENCODING = 'UTF8' TABLESPACE = pg_default CONNECTION
LIMIT
    = -1;

-- ==============================================================================

-- 1. TABLA DE USUARIOS (Consolida Admin, Profesor y Alumno)
CREATE TABLE Usuarios_ahbb (
    id_usuarios_ahbb SERIAL PRIMARY KEY,
    cedula_ahbb VARCHAR(20) UNIQUE NOT NULL,
    nombre_ahbb VARCHAR(100) NOT NULL,
    apellido_ahbb VARCHAR(100) NOT NULL,
    correo_ahbb VARCHAR(150) UNIQUE NOT NULL,
    clave_ahbb VARCHAR(255) NOT NULL, 
    rol_ahbb VARCHAR(20) NOT NULL CHECK (rol_ahbb IN ('admin', 'profesor', 'alumno')),
    estado_usuario_ahbb VARCHAR(25) DEFAULT 'pendiente' CHECK (estado_usuario_ahbb IN ('pendiente', 'activo', 'inactivo', 'requiere_cambio_clave')),
    firma_digital_ahbb VARCHAR(255) NULL, 
    creado_por_admin_ahbb BOOLEAN DEFAULT FALSE 
);

-- 2. TABLA DE SUSCRIPCIONES (Maneja los pagos de los alumnos)
CREATE TABLE Suscripciones_ahbb (
    id_suscripciones_ahbb SERIAL PRIMARY KEY,
    id_usuarios_ahbb INT NOT NULL REFERENCES Usuarios_ahbb(id_usuarios_ahbb) ON DELETE CASCADE,
    nro_operacion_pago_ahbb VARCHAR(50) NOT NULL,
    fecha_pago_ahbb TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    estado_pago_ahbb VARCHAR(20) DEFAULT 'en_revision' CHECK (estado_pago_ahbb IN ('en_revision', 'aprobado', 'rechazado')),
    fecha_vencimiento_ahbb DATE NULL 
);

-- 3. TABLA DE CURSOS 
CREATE TABLE Cursos_ahbb (
    id_cursos_ahbb SERIAL PRIMARY KEY,
    id_usuarios_ahbb INT NOT NULL REFERENCES Usuarios_ahbb(id_usuarios_ahbb), 
    titulo_ahbb VARCHAR(150) NOT NULL,
    descripcion_ahbb TEXT,
    temario_ahbb TEXT NOT NULL, 
    fecha_inicio_ahbb DATE NOT NULL,
    fecha_fin_ahbb DATE NOT NULL,
    duracion_dias_ahbb INT,  
    duracion_horas_ahbb INT, 
    tope_alumnos_ahbb INT DEFAULT 5 CHECK (tope_alumnos_ahbb >= 1), 
    plantilla_certificado_ahbb VARCHAR(255), 
    estado_curso_ahbb VARCHAR(20) DEFAULT 'activo' CHECK (estado_curso_ahbb IN ('activo', 'inactivo', 'bloqueado_admin'))
);

-- 4. TABLA DE HORARIOS 
CREATE TABLE Horarios_Cursos_ahbb (
    id_horarios_cursos_ahbb SERIAL PRIMARY KEY,
    id_cursos_ahbb INT NOT NULL REFERENCES Cursos_ahbb(id_cursos_ahbb) ON DELETE CASCADE,
    dia_semana_ahbb INT NOT NULL CHECK (dia_semana_ahbb BETWEEN 1 AND 7), 
    hora_inicio_ahbb TIME NOT NULL,
    hora_fin_ahbb TIME NOT NULL
);

-- 5. TABLA DE PRELACIONES 
CREATE TABLE Prelaciones_ahbb (
    id_prelaciones_ahbb SERIAL PRIMARY KEY,
    id_curso_objetivo_ahbb INT NOT NULL REFERENCES Cursos_ahbb(id_cursos_ahbb) ON DELETE CASCADE,
    id_curso_requisito_ahbb INT NOT NULL REFERENCES Cursos_ahbb(id_cursos_ahbb) ON DELETE CASCADE,
    UNIQUE(id_curso_objetivo_ahbb, id_curso_requisito_ahbb) 
);

-- 6. TABLA DE INSCRIPCIONES 
CREATE TABLE Inscripciones_ahbb (
    id_inscripciones_ahbb SERIAL PRIMARY KEY,
    id_cursos_ahbb INT NOT NULL REFERENCES Cursos_ahbb(id_cursos_ahbb) ON DELETE CASCADE,
    id_usuarios_ahbb INT NOT NULL REFERENCES Usuarios_ahbb(id_usuarios_ahbb) ON DELETE CASCADE, 
    fecha_inscripcion_ahbb TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    estado_inscripcion_ahbb VARCHAR(20) DEFAULT 'activa' CHECK (estado_inscripcion_ahbb IN ('activa', 'pendiente', 'inactiva')),
    estado_academico_ahbb VARCHAR(20) DEFAULT 'inscrito' CHECK (estado_academico_ahbb IN ('inscrito', 'oyente', 'aprobado', 'reprobado')),
    UNIQUE(id_cursos_ahbb, id_usuarios_ahbb) 
);

-- 7. TABLA DE CERTIFICADOS 
CREATE TABLE Certificados_ahbb (
    id_certificados_ahbb SERIAL PRIMARY KEY,
    id_inscripciones_ahbb INT NOT NULL REFERENCES Inscripciones_ahbb(id_inscripciones_ahbb) ON DELETE CASCADE,
    hash_qr_ahbb VARCHAR(255) UNIQUE NOT NULL, 
    fecha_emision_ahbb TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- ==============================================================================
-- TIENDA DE LA ACADEMIA (E-COMMERCE)
-- ==============================================================================

-- 8. TABLA DE PRODUCTOS (El catálogo)
CREATE TABLE Productos_ahbb (
    id_productos_ahbb SERIAL PRIMARY KEY,
    nombre_ahbb VARCHAR(150) NOT NULL,
    descripcion_ahbb TEXT,
    precio_ahbb DECIMAL(10, 2) NOT NULL CHECK (precio_ahbb >= 0),
    stock_ahbb INT NOT NULL DEFAULT 0 CHECK (stock_ahbb >= 0),
    -- Categorías definidas por CHECK como si fuera un Enum
    categoria_ahbb VARCHAR(50) NOT NULL CHECK (categoria_ahbb IN ('camisas', 'gorras', 'papeleria', 'accesorios', 'otros')),
    imagen_ahbb VARCHAR(255),
    estado_producto_ahbb VARCHAR(20) DEFAULT 'activo' CHECK (estado_producto_ahbb IN ('activo', 'inactivo'))
);

-- 9. TABLA DE CARRITO DE COMPRAS (Artículos pendientes por comprar del usuario)
CREATE TABLE Carrito_ahbb (
    id_carrito_ahbb SERIAL PRIMARY KEY,
    id_usuarios_ahbb INT NOT NULL REFERENCES Usuarios_ahbb(id_usuarios_ahbb) ON DELETE CASCADE,
    id_productos_ahbb INT NOT NULL REFERENCES Productos_ahbb(id_productos_ahbb) ON DELETE CASCADE,
    cantidad_ahbb INT NOT NULL DEFAULT 1 CHECK (cantidad_ahbb >= 1),
    fecha_agregado_ahbb TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    UNIQUE(id_usuarios_ahbb, id_productos_ahbb) -- Si agrega el mismo producto, en el backend haces un UPDATE sumando cantidad
);

-- 10. TABLA DE FACTURAS (Historial de compras concretadas)
CREATE TABLE Facturas_ahbb (
    id_facturas_ahbb SERIAL PRIMARY KEY,
    id_usuarios_ahbb INT NOT NULL REFERENCES Usuarios_ahbb(id_usuarios_ahbb) ON DELETE CASCADE,
    nro_referencia_pago_ahbb VARCHAR(50) NOT NULL, -- El pago móvil o transferencia de los productos
    fecha_factura_ahbb TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    total_ahbb DECIMAL(10, 2) NOT NULL CHECK (total_ahbb >= 0),
    estado_factura_ahbb VARCHAR(20) DEFAULT 'pagada' CHECK (estado_factura_ahbb IN ('pendiente', 'pagada', 'cancelada'))
);

-- 11. TABLA DETALLES DE FACTURA (El desglose de lo que compró)
CREATE TABLE Detalles_Facturas_ahbb (
    id_detalles_facturas_ahbb SERIAL PRIMARY KEY,
    id_facturas_ahbb INT NOT NULL REFERENCES Facturas_ahbb(id_facturas_ahbb) ON DELETE CASCADE,
    id_productos_ahbb INT NOT NULL REFERENCES Productos_ahbb(id_productos_ahbb),
    cantidad_ahbb INT NOT NULL CHECK (cantidad_ahbb >= 1),
    precio_unitario_ahbb DECIMAL(10, 2) NOT NULL CHECK (precio_unitario_ahbb >= 0) -- Se guarda el precio al momento de la compra
);