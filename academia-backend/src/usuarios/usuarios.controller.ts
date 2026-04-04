import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Req,
  Query,
  UseGuards,
} from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { JwtAuthGuard_ahbb } from '../common/guards/jwt-auth.guard_ahbb';
import { RolesGuard_ahbb } from '../common/guards/roles.guard_ahbb';
import { RolesDecorator_ahbb } from '../common/decorators/roles.decorator_ahbb';
import { CargaMasivaUsuariosDto_ahbb } from './dto/carga-masiva-usuarios.dto_ahbb';
import { AprobarAlumnoDto_ahbb } from './dto/aprobar-alumno.dto_ahbb';
import { GuardarFirmaDto_ahbb } from './dto/guardar-firma.dto_ahbb';
import * as bcrypt from 'bcrypt';
import type { RequestConUsuario_ahbb } from '../common/interfaces/request-usuario.interface_ahbb';
import { ActualizarUsuarioDto_ahbb } from './dto/actualizar-usuario.dto_ahbb';
import { ActualizarEstadoUsuarioDto_ahbb } from './dto/actualizar-estado-usuario.dto_ahbb';

@Controller('usuarios')
export class UsuariosController {
  constructor(private readonly usuariosService_ahbb: UsuariosService) {}

  @UseGuards(JwtAuthGuard_ahbb, RolesGuard_ahbb)
  @RolesDecorator_ahbb('ADMIN')
  @Get()
  async obtenerUsuarios_ahbb(@Query('rol') rol_ahbb?: string) {
    return this.usuariosService_ahbb.obtenerTodos_ahbb(rol_ahbb);
  }

  @UseGuards(JwtAuthGuard_ahbb, RolesGuard_ahbb)
  @RolesDecorator_ahbb('ADMIN', 'PROFESOR', 'ALUMNO')
  @Get(':id_usuario_ahbb')
  async obtenerUsuarioPorId_ahbb(
    @Param('id_usuario_ahbb', ParseIntPipe) id_usuario_ahbb: number,
  ) {
    return this.usuariosService_ahbb.obtenerPerfilPorId_ahbb(id_usuario_ahbb);
  }

  @UseGuards(JwtAuthGuard_ahbb, RolesGuard_ahbb)
  @RolesDecorator_ahbb('ADMIN')
  @Post('carga-masiva/validar')
  async validarCargaMasiva_ahbb(@Body() datos_ahbb: CargaMasivaUsuariosDto_ahbb) {
    return this.usuariosService_ahbb.validarCargaMasivaUsuarios_ahbb(
      datos_ahbb.usuarios_ahbb,
    );
  }

  @UseGuards(JwtAuthGuard_ahbb, RolesGuard_ahbb)
  @RolesDecorator_ahbb('ADMIN')
  @Post('carga-masiva/confirmar')
  async confirmarCargaMasiva_ahbb(@Body() datos_ahbb: CargaMasivaUsuariosDto_ahbb) {
    return this.usuariosService_ahbb.crearUsuariosMasivos_ahbb(datos_ahbb.usuarios_ahbb);
  }

  @UseGuards(JwtAuthGuard_ahbb, RolesGuard_ahbb)
  @RolesDecorator_ahbb('ADMIN')
  @Post('aprobar-alumno')
  async aprobarAlumno_ahbb(
    @Body() datos_ahbb: AprobarAlumnoDto_ahbb,
    @Req() request_ahbb: RequestConUsuario_ahbb,
  ) {
    const contrasenaTemporalPlano_ahbb =
      this.usuariosService_ahbb.generarContrasenaTemporal_ahbb();
    const hashTemporal_ahbb = await bcrypt.hash(contrasenaTemporalPlano_ahbb, 10);

    const usuario_ahbb = await this.usuariosService_ahbb.aprobarAlumno_ahbb(
      datos_ahbb.id_usuario_ahbb,
      Number(request_ahbb.usuario_ahbb?.sub),
      datos_ahbb.referenciaPagoMovil_ahbb,
      hashTemporal_ahbb,
    );

    return {
      exito: true,
      usuario: usuario_ahbb,
      contrasenaTemporal_ahbb: contrasenaTemporalPlano_ahbb,
      mensaje: 'Alumno aprobado y marcado para cambio de clave obligatorio.',
    };
  }

  @UseGuards(JwtAuthGuard_ahbb, RolesGuard_ahbb)
  @RolesDecorator_ahbb('PROFESOR', 'ADMIN')
  @Post(':id_usuario_ahbb/firma-digital')
  async guardarFirmaDigital_ahbb(
    @Param('id_usuario_ahbb', ParseIntPipe) id_usuario_ahbb: number,
    @Body() datos_ahbb: GuardarFirmaDto_ahbb,
  ) {
    return this.usuariosService_ahbb.guardarFirmaDigital_ahbb(
      id_usuario_ahbb,
      datos_ahbb.imagenBase64_ahbb,
    );
  }

  @UseGuards(JwtAuthGuard_ahbb, RolesGuard_ahbb)
  @RolesDecorator_ahbb('ADMIN', 'PROFESOR', 'ALUMNO')
  @Patch(':id_usuario_ahbb')
  async actualizarUsuario_ahbb(
    @Param('id_usuario_ahbb', ParseIntPipe) id_usuario_ahbb: number,
    @Body() datos_ahbb: ActualizarUsuarioDto_ahbb,
  ) {
    return this.usuariosService_ahbb.actualizarPerfil_ahbb(id_usuario_ahbb, datos_ahbb);
  }

  @UseGuards(JwtAuthGuard_ahbb, RolesGuard_ahbb)
  @RolesDecorator_ahbb('ADMIN')
  @Patch(':id_usuario_ahbb/estado')
  async actualizarEstadoUsuario_ahbb(
    @Param('id_usuario_ahbb', ParseIntPipe) id_usuario_ahbb: number,
    @Body() datos_ahbb: ActualizarEstadoUsuarioDto_ahbb,
  ) {
    return this.usuariosService_ahbb.actualizarEstadoCuenta_ahbb(
      id_usuario_ahbb,
      datos_ahbb.estadoCuenta_ahbb ?? (datos_ahbb as any).estado,
    );
  }

  @UseGuards(JwtAuthGuard_ahbb, RolesGuard_ahbb)
  @RolesDecorator_ahbb('ADMIN')
  @Delete(':id_usuario_ahbb')
  async eliminarUsuario_ahbb(
    @Param('id_usuario_ahbb', ParseIntPipe) id_usuario_ahbb: number,
  ) {
    return this.usuariosService_ahbb.eliminarUsuario_ahbb(id_usuario_ahbb);
  }
}
