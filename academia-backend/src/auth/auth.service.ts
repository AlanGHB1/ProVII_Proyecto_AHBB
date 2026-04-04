import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { UsuariosService } from '../usuarios/usuarios.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly usuariosService_ahbb: UsuariosService,
    private readonly jwtService_ahbb: JwtService,
  ) {}

  async iniciarSesion_ahbb(correo_ahbb: string, contrasena_ahbb: string) {
    const usuario_ahbb = await this.usuariosService_ahbb.encontrarPorCorreo_ahbb(
      correo_ahbb.toLowerCase(),
    );

    if (!usuario_ahbb) {
      throw new UnauthorizedException({
        exito: false,
        mensaje: 'Correo o contraseña incorrectos.',
      });
    }

    const contrasenaValida_ahbb = await bcrypt.compare(
      contrasena_ahbb,
      usuario_ahbb.contrasena_ahbb,
    );

    if (!contrasenaValida_ahbb && contrasena_ahbb !== usuario_ahbb.contrasena_ahbb) {
      throw new UnauthorizedException({
        exito: false,
        mensaje: 'Correo o contraseña incorrectos.',
      });
    }

    if (usuario_ahbb.estadoCuenta_ahbb !== 'ACTIVO') {
      throw new UnauthorizedException({
        exito: false,
        mensaje: 'Tu cuenta todavía no ha sido aprobada por administración.',
      });
    }

    const payload_ahbb = {
      sub: usuario_ahbb.id_usuario_ahbb,
      correo: usuario_ahbb.correo_ahbb,
      rol: usuario_ahbb.rol_ahbb,
    };

    const token_ahbb = await this.jwtService_ahbb.signAsync(payload_ahbb);
    const perfil_ahbb = await this.usuariosService_ahbb.obtenerPerfilPorId_ahbb(
      usuario_ahbb.id_usuario_ahbb,
    );

    return {
      exito: true,
      usuario: perfil_ahbb,
      token: token_ahbb,
      requiereCambioContrasena: usuario_ahbb.requiereCambioContrasena_ahbb,
      mensaje: 'Sesión iniciada',
    };
  }

  async registrarUsuario_ahbb(datos_ahbb: any) {
    const existe_ahbb = await this.usuariosService_ahbb.encontrarPorCorreo_ahbb(
      datos_ahbb.correo_ahbb ?? datos_ahbb.correo,
    );
    if (existe_ahbb) {
      throw new BadRequestException({
        exito: false,
        mensaje: 'Ya existe un usuario con ese correo electrónico.',
      });
    }

    const contrasenaBase_ahbb =
      datos_ahbb.contrasena_ahbb ?? datos_ahbb.contrasena ?? this.usuariosService_ahbb.generarContrasenaTemporal_ahbb();
    const contrasenaEncriptada_ahbb = await bcrypt.hash(contrasenaBase_ahbb, 10);
    const cedulaGenerada_ahbb =
      datos_ahbb.cedula_ahbb ?? datos_ahbb.cedula ?? `V-${Math.floor(Math.random() * 100000000)}`;
    const rol_ahbb = String(datos_ahbb.rol_ahbb ?? datos_ahbb.rol ?? 'ALUMNO').toUpperCase();

    const nuevoUsuario_ahbb = await this.usuariosService_ahbb.crearUsuario_ahbb({
      cedula: cedulaGenerada_ahbb,
      nombre: datos_ahbb.nombre_ahbb ?? datos_ahbb.nombre,
      apellido: datos_ahbb.apellido_ahbb ?? datos_ahbb.apellido,
      correo: datos_ahbb.correo_ahbb ?? datos_ahbb.correo,
      contrasena: contrasenaEncriptada_ahbb,
      rol: rol_ahbb,
      estadoCuenta: rol_ahbb === 'ALUMNO' ? 'PENDIENTE_APROBACION' : 'ACTIVO',
      requiereCambioContrasena: rol_ahbb !== 'ALUMNO',
      referenciaPagoMovil:
        datos_ahbb.referenciaPagoMovil_ahbb ?? datos_ahbb.referenciaPagoMovil,
    });

    return {
      exito: true,
      usuario: nuevoUsuario_ahbb,
      mensaje:
        rol_ahbb === 'ALUMNO'
          ? 'Registro recibido. Debe ser aprobado por administración.'
          : 'Usuario creado exitosamente.',
    };
  }

  async cambiarContrasena_ahbb(
    id_usuario_ahbb: number,
    contrasenaActual_ahbb: string,
    contrasenaNueva_ahbb: string,
  ) {
    const usuario_ahbb = await this.usuariosService_ahbb.obtenerUsuarioPorId_ahbb(id_usuario_ahbb);

    if (!usuario_ahbb) {
      throw new UnauthorizedException('Usuario no encontrado.');
    }

    const contrasenaValida_ahbb = await bcrypt.compare(
      contrasenaActual_ahbb,
      usuario_ahbb.contrasena_ahbb,
    );

    if (!contrasenaValida_ahbb && contrasenaActual_ahbb !== usuario_ahbb.contrasena_ahbb) {
      throw new UnauthorizedException('La contraseña actual no coincide.');
    }

    const hashNueva_ahbb = await bcrypt.hash(contrasenaNueva_ahbb, 10);
    await this.usuariosService_ahbb.actualizarContrasena_ahbb(id_usuario_ahbb, hashNueva_ahbb);

    return { exito: true, mensaje: 'Contraseña actualizada correctamente.' };
  }
}
