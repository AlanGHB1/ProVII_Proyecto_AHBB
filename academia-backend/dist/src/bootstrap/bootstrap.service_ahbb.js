"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var BootstrapService_ahbb_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.BootstrapService_ahbb = void 0;
const common_1 = require("@nestjs/common");
const bcrypt = __importStar(require("bcrypt"));
const prisma_service_1 = require("../prisma.service");
let BootstrapService_ahbb = BootstrapService_ahbb_1 = class BootstrapService_ahbb {
    prisma_ahbb;
    logger = new common_1.Logger(BootstrapService_ahbb_1.name);
    constructor(prisma_ahbb) {
        this.prisma_ahbb = prisma_ahbb;
    }
    async onModuleInit() {
        this.logger.log('Preparando datos base de la aplicación...');
        try {
            const usuarios = await this.sembrarUsuariosBase_ahbb();
            await this.sembrarCursosDemo_ahbb(usuarios.profesores, usuarios.alumnos);
            await this.sembrarCatalogoBase_ahbb();
            this.logger.log('Datos base listos para testing.');
        }
        catch (error) {
            const mensaje_ahbb = error instanceof Error ? error.message : 'Error desconocido';
            this.logger.error(`Fallo preparando datos base: ${mensaje_ahbb}`);
            throw error;
        }
    }
    async sembrarUsuariosBase_ahbb() {
        const totalUsuarios_ahbb = await this.prisma_ahbb.td_usuario_ahbb.count();
        if (totalUsuarios_ahbb > 0) {
            const todos_usuarios = await this.prisma_ahbb.td_usuario_ahbb.findMany();
            const admin = todos_usuarios.find(u => u.rol_ahbb === 'ADMIN');
            const profesores = todos_usuarios.filter(u => u.rol_ahbb === 'PROFESOR').map(u => u.id_usuario_ahbb);
            const alumnos = todos_usuarios.filter(u => u.rol_ahbb === 'ALUMNO').map(u => u.id_usuario_ahbb);
            return { admin, profesores, alumnos };
        }
        const [adminHash_ahbb, profHash_ahbb, alumHash_ahbb] = await Promise.all([
            bcrypt.hash('admin123', 10),
            bcrypt.hash('prof123', 10),
            bcrypt.hash('alum123', 10),
        ]);
        const usuarios_creados = await this.prisma_ahbb.$transaction([
            this.prisma_ahbb.td_usuario_ahbb.create({ data: { cedula_ahbb: 'V-10000001', nombre_ahbb: 'Administrador', apellido_ahbb: 'H&B', correo_ahbb: 'admin@academiah-b.edu', contrasena_ahbb: adminHash_ahbb, rol_ahbb: 'ADMIN', estadoCuenta_ahbb: 'ACTIVO' } }),
            this.prisma_ahbb.td_usuario_ahbb.create({ data: { cedula_ahbb: 'V-10000002', nombre_ahbb: 'Carlos', apellido_ahbb: 'Mendez', correo_ahbb: 'carlos@academiah-b.edu', contrasena_ahbb: profHash_ahbb, rol_ahbb: 'PROFESOR', estadoCuenta_ahbb: 'ACTIVO' } }),
            this.prisma_ahbb.td_usuario_ahbb.create({ data: { cedula_ahbb: 'V-10000003', nombre_ahbb: 'Ana', apellido_ahbb: 'Borges', correo_ahbb: 'ana@academiah-b.edu', contrasena_ahbb: profHash_ahbb, rol_ahbb: 'PROFESOR', estadoCuenta_ahbb: 'ACTIVO' } }),
            this.prisma_ahbb.td_usuario_ahbb.create({ data: { cedula_ahbb: 'V-10000004', nombre_ahbb: 'Luis', apellido_ahbb: 'Carmona', correo_ahbb: 'luis@academiah-b.edu', contrasena_ahbb: profHash_ahbb, rol_ahbb: 'PROFESOR', estadoCuenta_ahbb: 'ACTIVO' } }),
            this.prisma_ahbb.td_usuario_ahbb.create({ data: { cedula_ahbb: 'V-20000001', nombre_ahbb: 'Maria', apellido_ahbb: 'Garcia', correo_ahbb: 'maria@estudiante.edu', contrasena_ahbb: alumHash_ahbb, rol_ahbb: 'ALUMNO', estadoCuenta_ahbb: 'ACTIVO', requiereCambioContrasena_ahbb: false } }),
            this.prisma_ahbb.td_usuario_ahbb.create({ data: { cedula_ahbb: 'V-20000002', nombre_ahbb: 'Javier', apellido_ahbb: 'Silva', correo_ahbb: 'javier@estudiante.edu', contrasena_ahbb: alumHash_ahbb, rol_ahbb: 'ALUMNO', estadoCuenta_ahbb: 'ACTIVO', requiereCambioContrasena_ahbb: false } }),
            this.prisma_ahbb.td_usuario_ahbb.create({ data: { cedula_ahbb: 'V-20000003', nombre_ahbb: 'Elena', apellido_ahbb: 'Rojas', correo_ahbb: 'elena@estudiante.edu', contrasena_ahbb: alumHash_ahbb, rol_ahbb: 'ALUMNO', estadoCuenta_ahbb: 'ACTIVO', requiereCambioContrasena_ahbb: false } }),
            this.prisma_ahbb.td_usuario_ahbb.create({ data: { cedula_ahbb: 'V-20000004', nombre_ahbb: 'Diego', apellido_ahbb: 'Perez', correo_ahbb: 'diego@estudiante.edu', contrasena_ahbb: alumHash_ahbb, rol_ahbb: 'ALUMNO', estadoCuenta_ahbb: 'ACTIVO', requiereCambioContrasena_ahbb: false } }),
        ]);
        this.logger.log('Usuarios base creados: 1 Admin, 3 Profesores, 4 Alumnos.');
        return {
            admin: usuarios_creados[0],
            profesores: [usuarios_creados[1].id_usuario_ahbb, usuarios_creados[2].id_usuario_ahbb, usuarios_creados[3].id_usuario_ahbb],
            alumnos: [usuarios_creados[4].id_usuario_ahbb, usuarios_creados[5].id_usuario_ahbb, usuarios_creados[6].id_usuario_ahbb, usuarios_creados[7].id_usuario_ahbb]
        };
    }
    async sembrarCursosDemo_ahbb(profesoresIds_ahbb, alumnosIds_ahbb) {
        await this.prisma_ahbb.$executeRawUnsafe('TRUNCATE TABLE "td_curso_ahbb" RESTART IDENTITY CASCADE;');
        this.logger.log('Cursos previos eliminados y contador de IDs reiniciado para consistencia.');
        const cursos_ahbb = [
            {
                nombre: 'Diplomado en Alta Relojería de Precisión',
                inicio: new Date('2025-10-13T08:00:00'),
                dias: ['LUNES', 'MIERCOLES'],
                horas: 80,
                profesor: profesoresIds_ahbb[0],
                inscritos: [
                    { id: alumnosIds_ahbb[0], estatus: 'APROBADO' },
                    { id: alumnosIds_ahbb[1], estatus: 'APROBADO' }
                ],
                desc: 'Especialización técnica en mecanismos de complicación suiza y restauración de calibres vintage.',
                temario: '• Fundamentos de relojería mecánica\n• Despiece y limpieza de calibres automáticos\n• Teoría de escapes e isocronismo\n• Restauración de espirales y volantes\n• Complicaciones: Calendario perpetuo y cronógrafos'
            },
            {
                nombre: 'Maestría en Orfebrería y Engaste de Autor',
                inicio: new Date('2025-11-04T08:00:00'),
                dias: ['MARTES', 'JUEVES'],
                horas: 100,
                profesor: profesoresIds_ahbb[1],
                inscritos: [
                    { id: alumnosIds_ahbb[2], estatus: 'APROBADO' },
                    { id: alumnosIds_ahbb[3], estatus: 'APROBADO' }
                ],
                desc: 'Taller práctico avanzado centrado en la creación de piezas únicas y técnicas de engaste complejas.',
                temario: '• Metalurgia de aleaciones preciosas\n• Soldadura de precisión con soplete de hidrógeno\n• Engaste en pavé y micro-pavé bajo microscopio\n• Acabados superficiales: Mateado, pulido espejo y satinado\n• Diseño y forja de estructuras orgánicas'
            },
            {
                nombre: 'Especialista en Gemología y Tasación de Diamantes',
                inicio: new Date('2026-01-12T08:00:00'),
                dias: ['LUNES', 'VIERNES'],
                horas: 60,
                profesor: profesoresIds_ahbb[0],
                inscritos: [
                    { id: alumnosIds_ahbb[0], estatus: 'APROBADO' },
                    { id: alumnosIds_ahbb[2], estatus: 'APROBADO' }
                ],
                desc: 'Identificación científica de gemas y valoración comercial basada en estándares internacionales.',
                temario: '• Cristalografía y propiedades físicas de los minerales\n• Uso avanzado del refractómetro y espectroscopio\n• Clasificación del diamante (Las 4 Cs: Carat, Cut, Clarity, Color)\n• Detección de tratamientos y piedras sintéticas\n• Metodología de valoración y redacción de informes técnicos'
            },
            {
                nombre: 'Modelado y Escultura en Cera para Joyería',
                inicio: new Date('2026-02-10T08:00:00'),
                dias: ['MARTES', 'MIERCOLES'],
                horas: 40,
                profesor: profesoresIds_ahbb[2],
                inscritos: [
                    { id: alumnosIds_ahbb[1], estatus: 'APROBADO' },
                    { id: alumnosIds_ahbb[3], estatus: 'REPROBADO' }
                ],
                desc: 'Técnicas de talla directa en ceras duras y modelado en ceras blandas para microfusión.',
                temario: '• Propiedades de las ceras de modelar\n• Talla de anillos solitarios y con montura\n• Texturizado y modelado figurativo\n• Preparación de modelos para el proceso de cera perdida\n• Técnicas de retoque y unión térmica'
            },
            {
                nombre: 'Taller de Microfusión Industrial Controlada',
                inicio: new Date('2026-04-06T08:00:00'),
                dias: ['LUNES', 'MIERCOLES'],
                horas: 120,
                profesor: profesoresIds_ahbb[1],
                inscritos: [
                    { id: alumnosIds_ahbb[0], estatus: 'INSCRITO' },
                    { id: alumnosIds_ahbb[1], estatus: 'INSCRITO' }
                ],
                desc: 'Curso intensivo sobre el proceso completo de fundición al vacío y centrífuga.',
                temario: '• Elaboración de árboles de colada eficientes\n• Cálculo de metal y contracción térmica\n• Revestimientos y ciclos de horneado\n• Proceso de colado al vacío vs centrífuga\n• Limpieza química y recuperación de metales'
            },
            {
                nombre: 'Marketing Estratégico para Joyerías de Lujo',
                inicio: new Date('2026-04-13T08:00:00'),
                dias: ['LUNES', 'VIERNES'],
                horas: 30,
                profesor: profesoresIds_ahbb[2],
                inscritos: [
                    { id: alumnosIds_ahbb[2], estatus: 'OYENTE' },
                    { id: alumnosIds_ahbb[3], estatus: 'OYENTE' }
                ],
                desc: 'Posicionamiento de marca y estrategias de venta digital para el sector premium.',
                temario: '• Branding y psicología del consumidor de lujo\n• Fotografía publicitaria con dispositivos móviles\n• Gestión de redes sociales (Instagram y Pinterest)\n• E-commerce y pasarelas de pago internacionales\n• Experiencia de desempaque (Packaging) y fidelización'
            },
            {
                nombre: 'Diseño CAD 3D Avanzado con Rhinoceros y Matrix',
                inicio: new Date('2026-04-07T08:00:00'),
                dias: ['MARTES', 'JUEVES'],
                horas: 90,
                profesor: profesoresIds_ahbb[2],
                inscritos: [
                    { id: alumnosIds_ahbb[0], estatus: 'INSCRITO' },
                    { id: alumnosIds_ahbb[2], estatus: 'INSCRITO' }
                ],
                desc: 'Modelado paramétrico y diseño generativo aplicado a la joyería contemporánea.',
                temario: '• Interfaz y comandos de Rhinoceros 7\n• Herramientas específicas de MatrixGold para engastes\n• Modelado de superficies orgánicas complejas\n• Renderizado fotorrealista para pre-venta\n• Exportación y optimización de mallas para impresión 3D'
            },
            {
                nombre: 'Restauración y Conservación de Joyas Antiguas',
                inicio: new Date('2026-05-18T08:00:00'),
                dias: ['LUNES', 'MIERCOLES'],
                horas: 50,
                profesor: profesoresIds_ahbb[1],
                inscritos: [],
                desc: 'Intervención ética en piezas históricas, respetando pátinas y técnicas originales.',
                temario: '• Análisis metalúrgico no destructivo\n• Limpieza ultrasónica y electrolítica controlada\n• Recreación de componentes perdidos mediante forja\n• Estabilización de gemas y esmaltes antiguos\n• Documentación fotográfica y ficha técnica de restauración'
            },
            {
                nombre: 'Técnicas de Esmaltado a Fuego sobre Metales',
                inicio: new Date('2026-06-02T08:00:00'),
                dias: ['MARTES', 'JUEVES'],
                horas: 45,
                profesor: profesoresIds_ahbb[2],
                inscritos: [
                    { id: alumnosIds_ahbb[1], estatus: 'INSCRITO' }
                ],
                desc: 'Arte del vidrio fusionado sobre plata y cobre mediante técnicas clásicas.',
                temario: '• Preparación y molienda de esmaltes vítreos\n• Técnica Cloisonné (alvéolos con hilos de plata)\n• Técnica Champlevé (grabado y excavado)\n• Control de temperatura en horno de joyería\n• Pulido y acabado de superficies esmaltadas'
            },
            {
                nombre: 'Afinación de Metales Preciosos y Procesos Galvánicos',
                inicio: new Date('2026-06-15T08:00:00'),
                dias: ['LUNES', 'VIERNES'],
                horas: 35,
                profesor: profesoresIds_ahbb[0],
                inscritos: [],
                desc: 'Refinación química de oro/plata y recubrimientos de alta calidad (Rodio y Oro).',
                temario: '• Precipitación de oro fino mediante procesos químicos\n• Preparación de baños galvánicos (Dorados y Rodiados)\n• Electropulido y desengrase electrolítico\n• Control de micras y calidad del depósito\n• Gestión de residuos tóxicos y seguridad en el laboratorio'
            }
        ];
        for (const c_ahbb of cursos_ahbb) {
            const curso_ahbb = await this.prisma_ahbb.td_curso_ahbb.create({
                data: {
                    nombre_ahbb: c_ahbb.nombre,
                    tematica_ahbb: 'Joyería Profesional',
                    descripcion_ahbb: c_ahbb.desc,
                    temarioTexto_ahbb: c_ahbb.temario,
                    fechaInicio_ahbb: c_ahbb.inicio,
                    horasDefinidas_ahbb: c_ahbb.horas,
                    diasDefinidos_ahbb: 0,
                    topeEstudiantes_ahbb: 20,
                    isPublished_ahbb: true,
                    estadoAprobacion_ahbb: 'ACTIVO',
                    id_usuario_curso_ahbb: c_ahbb.profesor,
                    horarios: {
                        create: c_ahbb.dias.map(d => ({
                            diaSemana_ahbb: d,
                            horaInicio_ahbb: '08:00',
                            horaFin_ahbb: '11:00'
                        }))
                    }
                }
            });
            const arrayDias_ahbb = `{${c_ahbb.dias.join(',')}}`;
            const arrayInicio_ahbb = `{${c_ahbb.dias.map(() => '08:00').join(',')}}`;
            const arrayFin_ahbb = `{${c_ahbb.dias.map(() => '11:00').join(',')}}`;
            await this.prisma_ahbb.$queryRawUnsafe(`
        SELECT fn_generar_sesiones_curso_ahbb(
          ${curso_ahbb.id_curso_ahbb}::INT,
          '${c_ahbb.inicio.toISOString().split('T')[0]}'::DATE,
          '${arrayDias_ahbb}'::TEXT[],
          '${arrayInicio_ahbb}'::TEXT[],
          '${arrayFin_ahbb}'::TEXT[],
          ${c_ahbb.horas}::NUMERIC
        )
      `);
            for (const ins of c_ahbb.inscritos) {
                await this.prisma_ahbb.td_inscripcion_ahbb.create({
                    data: {
                        id_usuario_inscripcion_ahbb: ins.id,
                        id_curso_inscripcion_ahbb: curso_ahbb.id_curso_ahbb,
                        estatus_ahbb: ins.estatus,
                        intento_ahbb: 1
                    }
                });
            }
        }
        this.logger.log('Escenario de pruebas con 10 cursos realistas y temarios profesionales configurado.');
    }
    async sembrarCatalogoBase_ahbb() {
        const totalProductos_ahbb = await this.prisma_ahbb.td_producto_ahbb.count();
        if (totalProductos_ahbb > 0)
            return;
        await this.prisma_ahbb.td_producto_ahbb.createMany({
            data: [
                { nombre_ahbb: 'Sueter Azul H&B', descripcion_ahbb: 'Sueter cómodo, ideal para el frío en los pasillos de la academia. Color Azul Oficial H&B.', precio_ahbb: 25, stock_ahbb: 50, categoria_ahbb: 'ropa', imagen_ahbb: '/img/SueterH&B_Azul.jpg', estado_producto_ahbb: 'activo' },
                { nombre_ahbb: 'Sueter Rojo H&B', descripcion_ahbb: 'Sueter cómodo, ideal para el frío en los pasillos de la academia. Color Rojo H&B.', precio_ahbb: 25, stock_ahbb: 45, categoria_ahbb: 'ropa', imagen_ahbb: '/img/SueterH&B_Rojo.jpg', estado_producto_ahbb: 'activo' },
                { nombre_ahbb: 'Sueter Mostaza H&B', descripcion_ahbb: 'Sueter cómodo estilo urbano. Color Mostaza.', precio_ahbb: 25, stock_ahbb: 30, categoria_ahbb: 'ropa', imagen_ahbb: '/img/SueterH&B_mostaza.jpg', estado_producto_ahbb: 'activo' },
                { nombre_ahbb: 'Franela Azul H&B', descripcion_ahbb: 'Franela fresca 100% algodón. Color Azul Oficial H&B.', precio_ahbb: 15, stock_ahbb: 100, categoria_ahbb: 'ropa', imagen_ahbb: '/img/franelaH&B_Azul.jpg', estado_producto_ahbb: 'activo' },
                { nombre_ahbb: 'Franela Roja H&B', descripcion_ahbb: 'Franela fresca 100% algodón. Color Rojo Vibrante.', precio_ahbb: 15, stock_ahbb: 100, categoria_ahbb: 'ropa', imagen_ahbb: '/img/franelaH&B_Rojo.jpg', estado_producto_ahbb: 'activo' },
                { nombre_ahbb: 'Franela Mostaza H&B', descripcion_ahbb: 'Franela fresca 100% algodón. Color Mostaza.', precio_ahbb: 15, stock_ahbb: 100, categoria_ahbb: 'ropa', imagen_ahbb: '/img/franelaH&B_mostaza.jpg', estado_producto_ahbb: 'activo' },
                { nombre_ahbb: 'Lapicero H&B Azul', descripcion_ahbb: 'Bolígrafo oficial de la Academia H&B. Cuerpo Azul.', precio_ahbb: 2.5, stock_ahbb: 300, categoria_ahbb: 'papeleria', imagen_ahbb: '/img/lapiceroH&B_Azul.jpg', estado_producto_ahbb: 'activo' },
                { nombre_ahbb: 'Lapicero H&B Rojo', descripcion_ahbb: 'Bolígrafo oficial de la Academia H&B. Cuerpo Rojo.', precio_ahbb: 2.5, stock_ahbb: 300, categoria_ahbb: 'papeleria', imagen_ahbb: '/img/lapiceroH&B_Rojo.jpg', estado_producto_ahbb: 'activo' },
                { nombre_ahbb: 'Lapicero H&B Mostaza', descripcion_ahbb: 'Bolígrafo oficial de la Academia H&B. Cuerpo Mostaza.', precio_ahbb: 2.5, stock_ahbb: 300, categoria_ahbb: 'papeleria', imagen_ahbb: '/img/lapiceroH&B_mostaza.jpg', estado_producto_ahbb: 'activo' },
            ],
        });
        this.logger.log('Tienda poblada con 9 productos iniciales.');
    }
};
exports.BootstrapService_ahbb = BootstrapService_ahbb;
exports.BootstrapService_ahbb = BootstrapService_ahbb = BootstrapService_ahbb_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], BootstrapService_ahbb);
//# sourceMappingURL=bootstrap.service_ahbb.js.map