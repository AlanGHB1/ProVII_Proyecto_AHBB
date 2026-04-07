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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuariosService = void 0;
const common_1 = require("@nestjs/common");
const crypto_1 = require("crypto");
const promises_1 = require("fs/promises");
const path_1 = require("path");
const xlsx = __importStar(require("xlsx"));
const nodemailer = __importStar(require("nodemailer"));
const bcrypt = __importStar(require("bcrypt"));
const prisma_service_1 = require("../prisma.service");
const validacion_pago_util_ahbb_1 = require("../common/utils/validacion-pago.util_ahbb");
let UsuariosService = class UsuariosService {
    prisma_ahbb;
    constructor(prisma_ahbb) {
        this.prisma_ahbb = prisma_ahbb;
    }
    async obtenerTodos_ahbb(rolFiltro_ahbb) {
        const rolNormalizado_ahbb = rolFiltro_ahbb
            ? this.normalizarRolInterno_ahbb(rolFiltro_ahbb)
            : undefined;
        const usuarios_ahbb = await this.prisma_ahbb.td_usuario_ahbb.findMany({
            where: rolNormalizado_ahbb
                ? { rol_ahbb: rolNormalizado_ahbb }
                : undefined,
            orderBy: { creadoEn_ahbb: 'desc' },
        });
        return usuarios_ahbb.map((usuario_ahbb) => this.mapearUsuarioPublico_ahbb(usuario_ahbb));
    }
    async encontrarPorCorreo_ahbb(correo_ahbb) {
        return this.prisma_ahbb.td_usuario_ahbb.findUnique({
            where: { correo_ahbb },
        });
    }
    async hashearContrasena_ahbb(contrasenaPlana_ahbb) {
        if (!contrasenaPlana_ahbb || contrasenaPlana_ahbb.length < 4) {
            throw new common_1.BadRequestException('La contraseña es demasiado corta para ser procesada.');
        }
        const hash_ahbb = await bcrypt.hash(contrasenaPlana_ahbb, 10);
        if (!hash_ahbb || hash_ahbb.length !== 60 || !hash_ahbb.startsWith('$2b$')) {
            throw new Error('Error crítico de seguridad: El hash generado es inválido.');
        }
        const coincide_ahbb = await bcrypt.compare(contrasenaPlana_ahbb, hash_ahbb);
        if (!coincide_ahbb) {
            throw new Error('Error crítico de seguridad: Falló la verificación inmediata del hash.');
        }
        return hash_ahbb;
    }
    async crearUsuario_ahbb(datos_ahbb) {
        const rolNormalizado_ahbb = this.normalizarRolInterno_ahbb(datos_ahbb.rol || 'ALUMNO');
        if (rolNormalizado_ahbb === 'ALUMNO' && datos_ahbb.referenciaPagoMovil) {
            (0, validacion_pago_util_ahbb_1.validarReferenciaPago_ahbb)(datos_ahbb.referenciaPagoMovil);
        }
        const nuevoUsuario_ahbb = await this.prisma_ahbb.td_usuario_ahbb.create({
            data: {
                cedula_ahbb: datos_ahbb.cedula,
                nombre_ahbb: datos_ahbb.nombre,
                apellido_ahbb: datos_ahbb.apellido,
                correo_ahbb: datos_ahbb.correo.toLowerCase(),
                contrasena_ahbb: datos_ahbb.contrasena,
                rol_ahbb: rolNormalizado_ahbb,
                estadoCuenta_ahbb: datos_ahbb.estadoCuenta ??
                    (rolNormalizado_ahbb === 'ALUMNO'
                        ? 'PENDIENTE_APROBACION'
                        : 'ACTIVO'),
                requiereCambioContrasena_ahbb: Boolean(datos_ahbb.requiereCambioContrasena),
                referenciaPagoMovil_ahbb: datos_ahbb.referenciaPagoMovil ?? null,
            },
        });
        return this.mapearUsuarioPublico_ahbb(nuevoUsuario_ahbb);
    }
    async obtenerPerfilPorId_ahbb(id_usuario_ahbb) {
        const usuario_ahbb = await this.prisma_ahbb.td_usuario_ahbb.findUnique({
            where: { id_usuario_ahbb },
        });
        if (!usuario_ahbb) {
            throw new common_1.NotFoundException('Usuario no encontrado.');
        }
        return this.mapearUsuarioPublico_ahbb(usuario_ahbb);
    }
    async obtenerUsuarioPorId_ahbb(id_usuario_ahbb) {
        return this.prisma_ahbb.td_usuario_ahbb.findUnique({
            where: { id_usuario_ahbb },
        });
    }
    async actualizarContrasena_ahbb(id_usuario_ahbb, hashContrasena_ahbb) {
        await this.prisma_ahbb.td_usuario_ahbb.update({
            where: { id_usuario_ahbb },
            data: {
                contrasena_ahbb: hashContrasena_ahbb,
                requiereCambioContrasena_ahbb: false,
            },
        });
    }
    async actualizarPerfil_ahbb(id_usuario_ahbb, datos_ahbb) {
        const usuarioActualizado_ahbb = await this.prisma_ahbb.td_usuario_ahbb.update({
            where: { id_usuario_ahbb },
            data: {
                nombre_ahbb: datos_ahbb.nombre_ahbb ?? datos_ahbb.nombre,
                apellido_ahbb: datos_ahbb.apellido_ahbb ?? datos_ahbb.apellido,
                cedula_ahbb: datos_ahbb.cedula_ahbb ?? datos_ahbb.cedula,
                correo_ahbb: (datos_ahbb.correo_ahbb ?? datos_ahbb.correo)?.toLowerCase?.(),
            },
        });
        return this.mapearUsuarioPublico_ahbb(usuarioActualizado_ahbb);
    }
    async actualizarEstadoCuenta_ahbb(id_usuario_ahbb, estadoCuenta_ahbb) {
        const estadoNuevo_ahbb = estadoCuenta_ahbb.toUpperCase();
        const usuarioActual_ahbb = await this.prisma_ahbb.td_usuario_ahbb.findUnique({
            where: { id_usuario_ahbb },
        });
        const usuarioActualizado_ahbb = await this.prisma_ahbb.td_usuario_ahbb.update({
            where: { id_usuario_ahbb },
            data: { estadoCuenta_ahbb: estadoNuevo_ahbb },
        });
        if (estadoNuevo_ahbb === 'INACTIVO' && usuarioActual_ahbb) {
            try {
                const transporter = nodemailer.createTransport({
                    service: 'gmail',
                    auth: { user: process.env.MAIL_USER, pass: process.env.MAIL_PASS },
                });
                await transporter.sendMail({
                    from: '"Academia H&B" <no-reply@academiahb.com>',
                    to: usuarioActual_ahbb.correo_ahbb,
                    subject: 'Aviso importante sobre tu cuenta — Academia H&B',
                    html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
              <div style="background: #7f1d1d; color: white; padding: 24px; text-align: center; border-radius: 8px 8px 0 0;">
                <h1 style="margin:0;">🎓 Academia <span style="color: #f59e0b;">H&amp;B</span></h1>
              </div>
              <div style="padding: 24px; background: #fef2f2;">
                <h2 style="color:#7f1d1d;">Su cuenta se encuentra inactiva</h2>
                <p>Estimado/a <strong>${usuarioActual_ahbb.nombre_ahbb} ${usuarioActual_ahbb.apellido_ahbb}</strong>,</p>
                <p>Le informamos que su cuenta en Academia H&amp;B ha sido <strong>desactivada temporalmente</strong>.</p>
                <p>Esto puede deberse a alguna de las siguientes razones:</p>
                <ul style="color: #374151;">
                  <li>🔍 <strong>Actividad sospechosa</strong> detectada en su cuenta que requiere verificación.</li>
                  <li>💳 <strong>Insolvencia de membresía</strong>: el pago correspondiente al período actual no ha sido confirmado.</li>
                </ul>
                <p>Si considera que esto es un error o desea regularizar su situación, por favor contacte a la administración de la Academia.</p>
                <div style="background:#e5e7eb;padding:16px;border-radius:8px;margin-top:16px;color:#374151;">
                  <strong>Nota:</strong> Su acceso al sistema estará restringido hasta que su cuenta sea reactivada por un administrador.
                </div>
              </div>
            </div>
          `,
                });
            }
            catch (emailErr) {
                console.error('Error al enviar correo de cuenta inactiva:', emailErr);
            }
        }
        return this.mapearUsuarioPublico_ahbb(usuarioActualizado_ahbb);
    }
    async eliminarUsuario_ahbb(id_usuario_ahbb) {
        await this.prisma_ahbb.td_usuario_ahbb.delete({
            where: { id_usuario_ahbb },
        });
        return { exito: true };
    }
    async validarCargaMasivaUsuarios_ahbb(usuarios_ahbb) {
        const errores_ahbb = [];
        const correosVistos_ahbb = new Set();
        const cedulasVistas_ahbb = new Set();
        const correosDuplicados_ahbb = new Set();
        const cedulasDuplicadas_ahbb = new Set();
        usuarios_ahbb.forEach((usuario_ahbb, indice_ahbb) => {
            const correo_ahbb = String(usuario_ahbb.correo_ahbb ?? '')
                .trim()
                .toLowerCase();
            const cedula_ahbb = String(usuario_ahbb.cedula_ahbb ?? '').trim();
            if (!correo_ahbb ||
                !cedula_ahbb ||
                !usuario_ahbb.nombre_ahbb ||
                !usuario_ahbb.apellido_ahbb) {
                errores_ahbb.push(`Fila ${indice_ahbb + 1}: faltan campos obligatorios.`);
            }
            if (correosVistos_ahbb.has(correo_ahbb)) {
                correosDuplicados_ahbb.add(correo_ahbb);
            }
            if (cedulasVistas_ahbb.has(cedula_ahbb)) {
                cedulasDuplicadas_ahbb.add(cedula_ahbb);
            }
            correosVistos_ahbb.add(correo_ahbb);
            cedulasVistas_ahbb.add(cedula_ahbb);
        });
        if (correosDuplicados_ahbb.size) {
            errores_ahbb.push(`Existen correos repetidos DENTRO del propio archivo Excel: ${Array.from(correosDuplicados_ahbb).join(', ')}`);
        }
        if (cedulasDuplicadas_ahbb.size) {
            errores_ahbb.push(`Existen cédulas repetidas DENTRO del propio archivo Excel: ${Array.from(cedulasDuplicadas_ahbb).join(', ')}`);
        }
        if (correosVistos_ahbb.size || cedulasVistas_ahbb.size) {
            const usuariosExistentes_ahbb = await this.prisma_ahbb.td_usuario_ahbb.findMany({
                where: {
                    OR: [
                        { correo_ahbb: { in: Array.from(correosVistos_ahbb) } },
                        { cedula_ahbb: { in: Array.from(cedulasVistas_ahbb) } },
                    ],
                },
                select: { correo_ahbb: true, cedula_ahbb: true },
            });
            usuariosExistentes_ahbb.forEach((usuario_ahbb) => {
                if (correosVistos_ahbb.has(usuario_ahbb.correo_ahbb)) {
                    errores_ahbb.push(`El correo "${usuario_ahbb.correo_ahbb}" ya se encuentra registrado en otra cuenta del sistema.`);
                }
                if (cedulasVistas_ahbb.has(usuario_ahbb.cedula_ahbb)) {
                    errores_ahbb.push(`La cédula "${usuario_ahbb.cedula_ahbb}" ya le pertenece a otro usuario existente.`);
                }
            });
        }
        return {
            exito: errores_ahbb.length === 0,
            totalRegistros_ahbb: usuarios_ahbb.length,
            errores_ahbb,
        };
    }
    async crearUsuariosMasivos_ahbb(usuarios_ahbb) {
        const validacion_ahbb = await this.validarCargaMasivaUsuarios_ahbb(usuarios_ahbb);
        if (!validacion_ahbb.exito) {
            throw new common_1.BadRequestException(validacion_ahbb);
        }
        const usuariosCreados_ahbb = await this.prisma_ahbb.$transaction(usuarios_ahbb.map((usuario_ahbb) => this.prisma_ahbb.td_usuario_ahbb.create({
            data: {
                cedula_ahbb: usuario_ahbb.cedula_ahbb,
                nombre_ahbb: usuario_ahbb.nombre_ahbb,
                apellido_ahbb: usuario_ahbb.apellido_ahbb,
                correo_ahbb: usuario_ahbb.correo_ahbb.toLowerCase(),
                contrasena_ahbb: usuario_ahbb.contrasena_ahbb,
                rol_ahbb: this.normalizarRolInterno_ahbb(usuario_ahbb.rol_ahbb),
                estadoCuenta_ahbb: usuario_ahbb.estadoCuenta_ahbb ?? 'ACTIVO',
                requiereCambioContrasena_ahbb: usuario_ahbb.requiereCambioContrasena_ahbb ?? true,
            },
        })));
        return usuariosCreados_ahbb.map((usuario_ahbb) => this.mapearUsuarioPublico_ahbb(usuario_ahbb));
    }
    async importarProfesoresDesdeExcel_ahbb(bufferArchivo) {
        let workbook;
        try {
            workbook = xlsx.read(bufferArchivo, { type: 'buffer' });
        }
        catch (e) {
            throw new common_1.BadRequestException('El archivo no es un Excel válido');
        }
        const firstSheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[firstSheetName];
        const jsonData = xlsx.utils.sheet_to_json(worksheet);
        if (!jsonData || jsonData.length === 0) {
            throw new common_1.BadRequestException('El archivo Excel está vacío');
        }
        const usuariosAImportar = [];
        const correosYClaves = [];
        for (const fila of jsonData) {
            const cedula = String(fila['Cedula'] ?? fila['Cédula'] ?? fila['cedula'] ?? '').trim();
            const nombre = String(fila['Nombre'] ?? fila['nombre'] ?? '').trim();
            const apellido = String(fila['Apellido'] ?? fila['apellido'] ?? '').trim();
            const correo = String(fila['Correo'] ?? fila['correo'] ?? fila['Email'] ?? '').trim().toLowerCase();
            if (!cedula || !nombre || !apellido || !correo) {
                throw new common_1.BadRequestException('El archivo Excel debe contener columnas: Cedula, Nombre, Apellido, Correo. Revisa el documento e inténtalo de nuevo.');
            }
            const contrasenaTemporalPlano_ahbb = this.generarContrasenaTemporal_ahbb();
            const hashTemporal_ahbb = await this.hashearContrasena_ahbb(contrasenaTemporalPlano_ahbb);
            usuariosAImportar.push({
                cedula_ahbb: cedula,
                nombre_ahbb: nombre,
                apellido_ahbb: apellido,
                correo_ahbb: correo,
                contrasena_ahbb: hashTemporal_ahbb,
                rol_ahbb: 'PROFESOR',
                estadoCuenta_ahbb: 'ACTIVO',
                requiereCambioContrasena_ahbb: true,
            });
            correosYClaves.push({ correo, nombre, claveBase: contrasenaTemporalPlano_ahbb });
        }
        const validacion_ahbb = await this.validarCargaMasivaUsuarios_ahbb(usuariosAImportar);
        if (!validacion_ahbb.exito) {
            throw new common_1.BadRequestException(validacion_ahbb);
        }
        const usuariosCreados_ahbb = await this.prisma_ahbb.$transaction(usuariosAImportar.map((usuario_ahbb) => this.prisma_ahbb.td_usuario_ahbb.create({
            data: {
                cedula_ahbb: usuario_ahbb.cedula_ahbb,
                nombre_ahbb: usuario_ahbb.nombre_ahbb,
                apellido_ahbb: usuario_ahbb.apellido_ahbb,
                correo_ahbb: usuario_ahbb.correo_ahbb,
                contrasena_ahbb: usuario_ahbb.contrasena_ahbb,
                rol_ahbb: usuario_ahbb.rol_ahbb,
                estadoCuenta_ahbb: usuario_ahbb.estadoCuenta_ahbb,
                requiereCambioContrasena_ahbb: usuario_ahbb.requiereCambioContrasena_ahbb,
            },
        })));
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.MAIL_USER,
                pass: process.env.MAIL_PASS
            }
        });
        correosYClaves.forEach((data) => {
            transporter.sendMail({
                from: '"Academia H&B" <no-reply@academiahb.com>',
                to: data.correo,
                subject: 'Tus credenciales de acceso como Profesor',
                text: `Hola ${data.nombre},\n\nHas sido registrado como profesor en la Academia H&B.\nTu contraseña temporal es: ${data.claveBase}\n\nPor favor inicia sesión y cámbiala de inmediato en el panel.\n\nSaludos cordiales.`,
            }).then(info => {
            }).catch(console.error);
        });
        return usuariosCreados_ahbb.map((usuario_ahbb) => this.mapearUsuarioPublico_ahbb(usuario_ahbb));
    }
    async exportarProfesoresExcel_ahbb() {
        const profesores = await this.obtenerTodos_ahbb('profesor');
        const datosExcel = profesores.map(p => ({
            Cedula: p.cedula,
            Nombre: p.nombre,
            Apellido: p.apellido,
            Correo: p.correo,
            Estado: p.estadoCuenta,
            FechaRegistro: p.creadoEn ? new Date(p.creadoEn).toLocaleDateString() : 'Desconocido',
        }));
        if (datosExcel.length === 0) {
            datosExcel.push({ Cedula: 'Sin datos', Nombre: '', Apellido: '', Correo: '', Estado: '', FechaRegistro: '' });
        }
        const worksheet = xlsx.utils.json_to_sheet(datosExcel);
        const workbook = xlsx.utils.book_new();
        xlsx.utils.book_append_sheet(workbook, worksheet, 'Profesores');
        const buffer = xlsx.write(workbook, { type: 'buffer', bookType: 'xlsx' });
        return buffer;
    }
    async obtenerAlumnosPendientes_ahbb() {
        const alumnos_ahbb = await this.prisma_ahbb.td_usuario_ahbb.findMany({
            where: {
                rol_ahbb: 'ALUMNO',
                estadoCuenta_ahbb: { in: ['PENDIENTE_APROBACION', 'ACTIVO', 'INACTIVO'] },
            },
            orderBy: { creadoEn_ahbb: 'desc' },
        });
        return alumnos_ahbb.map((u) => ({
            ...this.mapearUsuarioPublico_ahbb(u),
            referenciaPagoMovil: u.referenciaPagoMovil_ahbb,
        }));
    }
    async aprobarAlumno_ahbb(id_usuario_ahbb, id_aprobador_ahbb, referenciaPagoMovil_ahbb) {
        const usuario_ahbb = await this.prisma_ahbb.td_usuario_ahbb.findUnique({
            where: { id_usuario_ahbb },
        });
        if (!usuario_ahbb) {
            throw new common_1.NotFoundException('Alumno no encontrado.');
        }
        const contrasenaTemporal_ahbb = this.generarContrasenaTemporal_ahbb();
        const contrasenaTemporalHash_ahbb = await this.hashearContrasena_ahbb(contrasenaTemporal_ahbb);
        const usuarioActualizado_ahbb = await this.prisma_ahbb.$transaction(async (tx_ahbb) => {
            const actualizado_ahbb = await tx_ahbb.td_usuario_ahbb.update({
                where: { id_usuario_ahbb },
                data: {
                    estadoCuenta_ahbb: 'ACTIVO',
                    referenciaPagoMovil_ahbb,
                    contrasena_ahbb: contrasenaTemporalHash_ahbb,
                    requiereCambioContrasena_ahbb: true,
                    aprobadoPorUsuarioId_ahbb: id_aprobador_ahbb,
                },
            });
            await tx_ahbb.td_auditoria_aprobacion_ahbb.create({
                data: {
                    tipoOperacion_ahbb: 'APROBACION_SUSCRIPCION',
                    referenciaOperacion_ahbb: referenciaPagoMovil_ahbb,
                    observacion_ahbb: 'Aprobación administrativa de membresía.',
                    id_usuario_auditado_ahbb: id_usuario_ahbb,
                    id_aprobador_ahbb,
                },
            });
            return actualizado_ahbb;
        });
        try {
            const transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: { user: process.env.MAIL_USER, pass: process.env.MAIL_PASS },
            });
            await transporter.sendMail({
                from: '"Academia H&B" <no-reply@academiahb.com>',
                to: usuario_ahbb.correo_ahbb,
                subject: '¡Tu membresía ha sido aprobada! — Academia H&B',
                html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <div style="background: #1b2a4a; color: white; padding: 24px; text-align: center; border-radius: 8px 8px 0 0;">
              <h1 style="margin:0;">🎓 Academia <span style="color: #f59e0b;">H&B</span></h1>
            </div>
            <div style="padding: 24px; background: #f8fafc;">
              <h2>¡Bienvenido/a, ${usuario_ahbb.nombre_ahbb}!</h2>
              <p>Tu membresía anual ha sido <strong>aprobada</strong> por el equipo de Academia H&B.</p>
              <p>Ya puedes acceder al sistema con las siguientes credenciales temporales:</p>
              <div style="background: #e2e8f0; padding: 16px; border-radius: 8px; margin: 16px 0;">
                <strong>Correo:</strong> ${usuario_ahbb.correo_ahbb}<br/>
                <strong>Contraseña temporal:</strong> ${contrasenaTemporal_ahbb}
              </div>
              <p style="color: #dc2626;"><strong>⚠️ Por seguridad, deberás cambiar tu contraseña al iniciar sesión por primera vez.</strong></p>
              <a href="http://localhost:9000/login" style="display: inline-block; background: #1b2a4a; color: white; padding: 12px 24px; border-radius: 6px; text-decoration: none; margin-top: 8px;">Iniciar Sesión</a>
            </div>
          </div>
        `,
            });
        }
        catch (emailError) {
            console.error('Error al enviar correo de aprobación:', emailError);
        }
        return this.mapearUsuarioPublico_ahbb(usuarioActualizado_ahbb);
    }
    async aprobarAlumnosMasivo_ahbb(ids_ahbb, id_aprobador_ahbb) {
        const resultados_ahbb = [];
        for (const id_usuario_ahbb of ids_ahbb) {
            try {
                const usuario = await this.prisma_ahbb.td_usuario_ahbb.findUnique({
                    where: { id_usuario_ahbb },
                });
                if (!usuario || usuario.estadoCuenta_ahbb !== 'PENDIENTE_APROBACION')
                    continue;
                const aprobado = await this.aprobarAlumno_ahbb(id_usuario_ahbb, id_aprobador_ahbb, usuario.referenciaPagoMovil_ahbb ?? 'aprobado-masivo');
                resultados_ahbb.push(aprobado);
            }
            catch (err) {
                console.error(`Error al aprobar alumno ID ${id_usuario_ahbb}:`, err);
            }
        }
        return { aprobados: resultados_ahbb.length, detalle: resultados_ahbb };
    }
    async guardarFirmaDigital_ahbb(id_usuario_ahbb, imagenBase64_ahbb) {
        const usuario_ahbb = await this.prisma_ahbb.td_usuario_ahbb.findUnique({
            where: { id_usuario_ahbb },
        });
        if (!usuario_ahbb) {
            throw new common_1.NotFoundException('Profesor no encontrado.');
        }
        const coincidencia_ahbb = imagenBase64_ahbb.match(/^data:image\/png;base64,(.+)$/);
        if (!coincidencia_ahbb) {
            throw new common_1.BadRequestException('La firma debe estar en PNG Base64.');
        }
        const directorioFirmas_ahbb = (0, path_1.join)(process.cwd(), 'uploads', 'firmas_ahbb');
        await (0, promises_1.mkdir)(directorioFirmas_ahbb, { recursive: true });
        const nombreArchivo_ahbb = `${(0, crypto_1.randomUUID)()}.png`;
        const rutaFisica_ahbb = (0, path_1.join)(directorioFirmas_ahbb, nombreArchivo_ahbb);
        await (0, promises_1.writeFile)(rutaFisica_ahbb, Buffer.from(coincidencia_ahbb[1], 'base64'));
        const rutaPublica_ahbb = `/uploads/firmas_ahbb/${nombreArchivo_ahbb}`;
        await this.prisma_ahbb.td_usuario_ahbb.update({
            where: { id_usuario_ahbb },
            data: { firmaDigital_ahbb: rutaPublica_ahbb },
        });
        return { exito: true, rutaFirma_ahbb: rutaPublica_ahbb };
    }
    generarContrasenaTemporal_ahbb() {
        return (0, crypto_1.randomBytes)(6).toString('base64url');
    }
    normalizarRolInterno_ahbb(rol_ahbb) {
        const rolNormalizado_ahbb = String(rol_ahbb ?? '')
            .trim()
            .toLowerCase();
        if (rolNormalizado_ahbb === 'administrador' ||
            rolNormalizado_ahbb === 'admin') {
            return 'ADMIN';
        }
        if (rolNormalizado_ahbb === 'profesor') {
            return 'PROFESOR';
        }
        return 'ALUMNO';
    }
    mapearRolFrontend_ahbb(rol_ahbb) {
        if (rol_ahbb === 'ADMIN') {
            return 'administrador';
        }
        if (rol_ahbb === 'PROFESOR') {
            return 'profesor';
        }
        return 'alumno';
    }
    mapearUsuarioPublico_ahbb(usuario_ahbb) {
        return {
            id: usuario_ahbb.id_usuario_ahbb,
            cedula: usuario_ahbb.cedula_ahbb,
            nombre: usuario_ahbb.nombre_ahbb,
            apellido: usuario_ahbb.apellido_ahbb,
            correo: usuario_ahbb.correo_ahbb,
            rol: this.mapearRolFrontend_ahbb(usuario_ahbb.rol_ahbb),
            estadoCuenta: usuario_ahbb.estadoCuenta_ahbb,
            requiereCambioContrasena: usuario_ahbb.requiereCambioContrasena_ahbb,
            firmaDigital: usuario_ahbb.firmaDigital_ahbb,
            creadoEn: usuario_ahbb.creadoEn_ahbb,
        };
    }
    async obtenerAlumnosPorProfesor_ahbb(id_profesor_ahbb) {
        const cursos_ahbb = await this.prisma_ahbb.td_curso_ahbb.findMany({
            where: { id_usuario_curso_ahbb: id_profesor_ahbb },
            include: {
                inscripciones: {
                    where: { estatus_ahbb: { in: ['INSCRITO', 'OYENTE', 'APROBADO'] } },
                    include: { alumno: true },
                },
            },
        });
        const alumnos_ahbb = cursos_ahbb.reduce((acc_ahbb, curso_ahbb) => {
            curso_ahbb.inscripciones.forEach((ins_ahbb) => {
                if (!acc_ahbb.find((u_ahbb) => u_ahbb.id === ins_ahbb.alumno.id_usuario_ahbb)) {
                    acc_ahbb.push(this.mapearUsuarioPublico_ahbb(ins_ahbb.alumno));
                }
            });
            return acc_ahbb;
        }, []);
        return alumnos_ahbb;
    }
};
exports.UsuariosService = UsuariosService;
exports.UsuariosService = UsuariosService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], UsuariosService);
//# sourceMappingURL=usuarios.service.js.map