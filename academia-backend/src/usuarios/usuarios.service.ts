import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { randomBytes, randomUUID } from 'crypto';
import { mkdir, writeFile } from 'fs/promises';
import { join } from 'path';
import * as xlsx from 'xlsx';
import * as nodemailer from 'nodemailer';
import * as bcrypt from 'bcrypt';
import { PrismaService } from '../prisma.service';

@Injectable()
export class UsuariosService {
  constructor(private readonly prisma_ahbb: PrismaService) {}

  async obtenerTodos_ahbb(rolFiltro_ahbb?: string) {
    const rolNormalizado_ahbb = rolFiltro_ahbb
      ? this.normalizarRolInterno_ahbb(rolFiltro_ahbb)
      : undefined;
    const usuarios_ahbb = await this.prisma_ahbb.td_usuario_ahbb.findMany({
      where: rolNormalizado_ahbb
        ? { rol_ahbb: rolNormalizado_ahbb }
        : undefined,
      orderBy: { creadoEn_ahbb: 'desc' },
    });
    return usuarios_ahbb.map((usuario_ahbb) =>
      this.mapearUsuarioPublico_ahbb(usuario_ahbb),
    );
  }

  async encontrarPorCorreo_ahbb(correo_ahbb: string) {
    return this.prisma_ahbb.td_usuario_ahbb.findUnique({
      where: { correo_ahbb },
    });
  }

  async crearUsuario_ahbb(datos_ahbb: any) {
    const rolNormalizado_ahbb = this.normalizarRolInterno_ahbb(
      datos_ahbb.rol || 'ALUMNO',
    );

    const nuevoUsuario_ahbb = await this.prisma_ahbb.td_usuario_ahbb.create({
      data: {
        cedula_ahbb: datos_ahbb.cedula,
        nombre_ahbb: datos_ahbb.nombre,
        apellido_ahbb: datos_ahbb.apellido,
        correo_ahbb: datos_ahbb.correo.toLowerCase(),
        contrasena_ahbb: datos_ahbb.contrasena,
        rol_ahbb: rolNormalizado_ahbb,
        estadoCuenta_ahbb:
          datos_ahbb.estadoCuenta ??
          (rolNormalizado_ahbb === 'ALUMNO'
            ? 'PENDIENTE_APROBACION'
            : 'ACTIVO'),
        requiereCambioContrasena_ahbb: Boolean(
          datos_ahbb.requiereCambioContrasena,
        ),
        referenciaPagoMovil_ahbb: datos_ahbb.referenciaPagoMovil ?? null,
      },
    });

    return this.mapearUsuarioPublico_ahbb(nuevoUsuario_ahbb);
  }

  async obtenerPerfilPorId_ahbb(id_usuario_ahbb: number) {
    const usuario_ahbb = await this.prisma_ahbb.td_usuario_ahbb.findUnique({
      where: { id_usuario_ahbb },
    });

    if (!usuario_ahbb) {
      throw new NotFoundException('Usuario no encontrado.');
    }

    return this.mapearUsuarioPublico_ahbb(usuario_ahbb);
  }

  async obtenerUsuarioPorId_ahbb(id_usuario_ahbb: number) {
    return this.prisma_ahbb.td_usuario_ahbb.findUnique({
      where: { id_usuario_ahbb },
    });
  }

  async actualizarContrasena_ahbb(
    id_usuario_ahbb: number,
    hashContrasena_ahbb: string,
  ) {
    await this.prisma_ahbb.td_usuario_ahbb.update({
      where: { id_usuario_ahbb },
      data: {
        contrasena_ahbb: hashContrasena_ahbb,
        requiereCambioContrasena_ahbb: false,
      },
    });
  }

  async actualizarPerfil_ahbb(id_usuario_ahbb: number, datos_ahbb: any) {
    const usuarioActualizado_ahbb =
      await this.prisma_ahbb.td_usuario_ahbb.update({
        where: { id_usuario_ahbb },
        data: {
          nombre_ahbb: datos_ahbb.nombre_ahbb ?? datos_ahbb.nombre,
          apellido_ahbb: datos_ahbb.apellido_ahbb ?? datos_ahbb.apellido,
          cedula_ahbb: datos_ahbb.cedula_ahbb ?? datos_ahbb.cedula,
          correo_ahbb: (
            datos_ahbb.correo_ahbb ?? datos_ahbb.correo
          )?.toLowerCase?.(),
        },
      });

    return this.mapearUsuarioPublico_ahbb(usuarioActualizado_ahbb);
  }

  async actualizarEstadoCuenta_ahbb(
    id_usuario_ahbb: number,
    estadoCuenta_ahbb: string,
  ) {
    const usuarioActualizado_ahbb =
      await this.prisma_ahbb.td_usuario_ahbb.update({
        where: { id_usuario_ahbb },
        data: {
          estadoCuenta_ahbb: estadoCuenta_ahbb.toUpperCase(),
        },
      });

    return this.mapearUsuarioPublico_ahbb(usuarioActualizado_ahbb);
  }

  async eliminarUsuario_ahbb(id_usuario_ahbb: number) {
    await this.prisma_ahbb.td_usuario_ahbb.delete({
      where: { id_usuario_ahbb },
    });

    return { exito: true };
  }

  async validarCargaMasivaUsuarios_ahbb(usuarios_ahbb: any[]) {
    const errores_ahbb: string[] = [];
    const correosVistos_ahbb = new Set<string>();
    const cedulasVistas_ahbb = new Set<string>();
    const correosDuplicados_ahbb = new Set<string>();
    const cedulasDuplicadas_ahbb = new Set<string>();

    usuarios_ahbb.forEach((usuario_ahbb, indice_ahbb) => {
      const correo_ahbb = String(usuario_ahbb.correo_ahbb ?? '')
        .trim()
        .toLowerCase();
      const cedula_ahbb = String(usuario_ahbb.cedula_ahbb ?? '').trim();

      if (
        !correo_ahbb ||
        !cedula_ahbb ||
        !usuario_ahbb.nombre_ahbb ||
        !usuario_ahbb.apellido_ahbb
      ) {
        errores_ahbb.push(
          `Fila ${indice_ahbb + 1}: faltan campos obligatorios.`,
        );
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
      errores_ahbb.push(
        `Correos duplicados en lote: ${Array.from(correosDuplicados_ahbb).join(', ')}`,
      );
    }
    if (cedulasDuplicadas_ahbb.size) {
      errores_ahbb.push(
        `Cédulas duplicadas en lote: ${Array.from(cedulasDuplicadas_ahbb).join(', ')}`,
      );
    }

    if (correosVistos_ahbb.size || cedulasVistas_ahbb.size) {
      const usuariosExistentes_ahbb =
        await this.prisma_ahbb.td_usuario_ahbb.findMany({
          where: {
            OR: [
              { correo_ahbb: { in: Array.from(correosVistos_ahbb) } },
              { cedula_ahbb: { in: Array.from(cedulasVistas_ahbb) } },
            ],
          },
          select: { correo_ahbb: true, cedula_ahbb: true },
        });

      usuariosExistentes_ahbb.forEach((usuario_ahbb) => {
        errores_ahbb.push(
          `Usuario ya registrado: ${usuario_ahbb.correo_ahbb} / ${usuario_ahbb.cedula_ahbb}.`,
        );
      });
    }

    return {
      exito: errores_ahbb.length === 0,
      totalRegistros_ahbb: usuarios_ahbb.length,
      errores_ahbb,
    };
  }

  async crearUsuariosMasivos_ahbb(usuarios_ahbb: any[]) {
    const validacion_ahbb =
      await this.validarCargaMasivaUsuarios_ahbb(usuarios_ahbb);
    if (!validacion_ahbb.exito) {
      throw new BadRequestException(validacion_ahbb);
    }

    const usuariosCreados_ahbb = await this.prisma_ahbb.$transaction(
      usuarios_ahbb.map((usuario_ahbb) =>
        this.prisma_ahbb.td_usuario_ahbb.create({
          data: {
            cedula_ahbb: usuario_ahbb.cedula_ahbb,
            nombre_ahbb: usuario_ahbb.nombre_ahbb,
            apellido_ahbb: usuario_ahbb.apellido_ahbb,
            correo_ahbb: usuario_ahbb.correo_ahbb.toLowerCase(),
            contrasena_ahbb: usuario_ahbb.contrasena_ahbb,
            rol_ahbb: this.normalizarRolInterno_ahbb(usuario_ahbb.rol_ahbb),
            estadoCuenta_ahbb: usuario_ahbb.estadoCuenta_ahbb ?? 'ACTIVO',
            requiereCambioContrasena_ahbb:
              usuario_ahbb.requiereCambioContrasena_ahbb ?? true,
          },
        }),
      ),
    );

    return usuariosCreados_ahbb.map((usuario_ahbb) =>
      this.mapearUsuarioPublico_ahbb(usuario_ahbb),
    );
  }

  async importarProfesoresDesdeExcel_ahbb(bufferArchivo: Buffer) {
    let workbook;
    try {
      workbook = xlsx.read(bufferArchivo, { type: 'buffer' });
    } catch (e) {
      throw new BadRequestException('El archivo no es un Excel válido');
    }

    const firstSheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[firstSheetName];
    const jsonData = xlsx.utils.sheet_to_json(worksheet);

    if (!jsonData || jsonData.length === 0) {
      throw new BadRequestException('El archivo Excel está vacío');
    }

    const usuariosAImportar: any[] = [];
    // Recolectar contraseñas temporalmente para enviarlas en el correo
    const correosYClaves: { correo: string; nombre: string; claveBase: string }[] = [];

    for (const fila of jsonData as any[]) {
      const cedula = String(fila['Cedula'] ?? fila['Cédula'] ?? fila['cedula'] ?? '').trim();
      const nombre = String(fila['Nombre'] ?? fila['nombre'] ?? '').trim();
      const apellido = String(fila['Apellido'] ?? fila['apellido'] ?? '').trim();
      const correo = String(fila['Correo'] ?? fila['correo'] ?? fila['Email'] ?? '').trim().toLowerCase();

      if (!cedula || !nombre || !apellido || !correo) {
        throw new BadRequestException('El archivo Excel debe contener columnas: Cedula, Nombre, Apellido, Correo. Revisa el documento e inténtalo de nuevo.');
      }

      // Generar y hashear contraseña
      const contrasenaTemporalPlano_ahbb = this.generarContrasenaTemporal_ahbb();
      const hashTemporal_ahbb = await bcrypt.hash(contrasenaTemporalPlano_ahbb, 10);

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
      throw new BadRequestException(validacion_ahbb);
    }

    const usuariosCreados_ahbb = await this.prisma_ahbb.$transaction(
      usuariosAImportar.map((usuario_ahbb) =>
        this.prisma_ahbb.td_usuario_ahbb.create({
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
        }),
      ),
    );

    // Configuración de nodemailer temporal (Ethereal Email o imprimir en consola en dev)
    const transporter = nodemailer.createTransport({
      host: 'smtp.ethereal.email',
      port: 587,
      auth: {
          user: process.env.MAIL_USER || 'test@ethereal.email',
          pass: process.env.MAIL_PASS || 'temporaldummy'
      }
    });

    correosYClaves.forEach((data) => {
      transporter.sendMail({
        from: '"Academia H&B" <no-reply@academiahb.com>',
        to: data.correo,
        subject: 'Tus credenciales de acceso como Profesor',
        text: `Hola ${data.nombre},\n\nHas sido registrado como profesor en la Academia H&B.\nTu contraseña temporal es: ${data.claveBase}\n\nPor favor inicia sesión y cámbiala de inmediato en el panel.\n\nSaludos cordiales.`,
      }).then(info => {
         // Para propósitos de debug, se mostraría la url del correo si se usa ethereal
         // console.log("Correo enviado:", nodemailer.getTestMessageUrl(info));
      }).catch(console.error);
    });

    return usuariosCreados_ahbb.map((usuario_ahbb) =>
      this.mapearUsuarioPublico_ahbb(usuario_ahbb),
    );
  }

  async aprobarAlumno_ahbb(
    id_usuario_ahbb: number,
    id_aprobador_ahbb: number,
    referenciaPagoMovil_ahbb: string,
    contrasenaTemporalHash_ahbb: string,
  ) {
    const usuario_ahbb = await this.prisma_ahbb.td_usuario_ahbb.findUnique({
      where: { id_usuario_ahbb },
    });

    if (!usuario_ahbb) {
      throw new NotFoundException('Alumno no encontrado.');
    }

    const usuarioActualizado_ahbb = await this.prisma_ahbb.$transaction(
      async (tx_ahbb) => {
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
      },
    );

    return this.mapearUsuarioPublico_ahbb(usuarioActualizado_ahbb);
  }

  async guardarFirmaDigital_ahbb(
    id_usuario_ahbb: number,
    imagenBase64_ahbb: string,
  ) {
    const usuario_ahbb = await this.prisma_ahbb.td_usuario_ahbb.findUnique({
      where: { id_usuario_ahbb },
    });

    if (!usuario_ahbb) {
      throw new NotFoundException('Profesor no encontrado.');
    }

    const coincidencia_ahbb = imagenBase64_ahbb.match(
      /^data:image\/png;base64,(.+)$/,
    );
    if (!coincidencia_ahbb) {
      throw new BadRequestException('La firma debe estar en PNG Base64.');
    }

    const directorioFirmas_ahbb = join(process.cwd(), 'uploads', 'firmas_ahbb');
    await mkdir(directorioFirmas_ahbb, { recursive: true });

    const nombreArchivo_ahbb = `${randomUUID()}.png`;
    const rutaFisica_ahbb = join(directorioFirmas_ahbb, nombreArchivo_ahbb);

    await writeFile(
      rutaFisica_ahbb,
      Buffer.from(coincidencia_ahbb[1], 'base64'),
    );

    const rutaPublica_ahbb = `/uploads/firmas_ahbb/${nombreArchivo_ahbb}`;
    await this.prisma_ahbb.td_usuario_ahbb.update({
      where: { id_usuario_ahbb },
      data: { firmaDigital_ahbb: rutaPublica_ahbb },
    });

    return { exito: true, rutaFirma_ahbb: rutaPublica_ahbb };
  }

  generarContrasenaTemporal_ahbb() {
    return randomBytes(6).toString('base64url');
  }

  normalizarRolInterno_ahbb(rol_ahbb: string) {
    const rolNormalizado_ahbb = String(rol_ahbb ?? '')
      .trim()
      .toLowerCase();
    if (
      rolNormalizado_ahbb === 'administrador' ||
      rolNormalizado_ahbb === 'admin'
    ) {
      return 'ADMIN';
    }
    if (rolNormalizado_ahbb === 'profesor') {
      return 'PROFESOR';
    }
    return 'ALUMNO';
  }

  mapearRolFrontend_ahbb(rol_ahbb?: string | null) {
    if (rol_ahbb === 'ADMIN') {
      return 'administrador';
    }
    if (rol_ahbb === 'PROFESOR') {
      return 'profesor';
    }
    return 'alumno';
  }

  mapearUsuarioPublico_ahbb(usuario_ahbb: any) {
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
}
