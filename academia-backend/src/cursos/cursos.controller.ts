import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
  Req,
  UseGuards,
} from '@nestjs/common';
import { CursosService } from './cursos.service';
import { CrearCursoDto_ahbb } from './dto/crear-curso.dto_ahbb';
import { ActualizarCursoDto_ahbb } from './dto/actualizar-curso.dto_ahbb';
import { JwtAuthGuard_ahbb } from '../common/guards/jwt-auth.guard_ahbb';
import { RolesGuard_ahbb } from '../common/guards/roles.guard_ahbb';
import { RolesDecorator_ahbb } from '../common/decorators/roles.decorator_ahbb';
import type { RequestConUsuario_ahbb } from '../common/interfaces/request-usuario.interface_ahbb';

@Controller('cursos')
export class CursosController {
  constructor(private readonly cursosService_ahbb: CursosService) {}

  @Get()
  async obtenerCursos_ahbb() {
    return this.cursosService_ahbb.obtenerTodos_ahbb();
  }

  @Get(':id_curso_ahbb')
  async obtenerCursoPorId_ahbb(@Param('id_curso_ahbb', ParseIntPipe) id_curso_ahbb: number) {
    return this.cursosService_ahbb.obtenerPorId_ahbb(id_curso_ahbb);
  }

  @Get(':id_curso_ahbb/disponibilidad')
  async obtenerDisponibilidad_ahbb(
    @Param('id_curso_ahbb', ParseIntPipe) id_curso_ahbb: number,
  ) {
    return this.cursosService_ahbb.obtenerDisponibilidad_ahbb(id_curso_ahbb);
  }

  @UseGuards(JwtAuthGuard_ahbb, RolesGuard_ahbb)
  @RolesDecorator_ahbb('ADMIN', 'PROFESOR')
  @Post()
  async crearCurso_ahbb(
    @Body() datos_ahbb: CrearCursoDto_ahbb,
    @Req() request_ahbb: RequestConUsuario_ahbb,
  ) {
    return this.cursosService_ahbb.crearCurso_ahbb(
      Number(request_ahbb.usuario_ahbb?.sub),
      datos_ahbb,
    );
  }

  @UseGuards(JwtAuthGuard_ahbb, RolesGuard_ahbb)
  @RolesDecorator_ahbb('ADMIN', 'PROFESOR')
  @Put(':id_curso_ahbb')
  async actualizarCurso_ahbb(
    @Param('id_curso_ahbb', ParseIntPipe) id_curso_ahbb: number,
    @Body() datos_ahbb: ActualizarCursoDto_ahbb,
    @Req() request_ahbb: RequestConUsuario_ahbb,
  ) {
    return this.cursosService_ahbb.actualizarCurso_ahbb(
      id_curso_ahbb,
      Number(request_ahbb.usuario_ahbb?.sub),
      datos_ahbb,
    );
  }

  @UseGuards(JwtAuthGuard_ahbb, RolesGuard_ahbb)
  @RolesDecorator_ahbb('ADMIN', 'PROFESOR')
  @Delete(':id_curso_ahbb')
  async eliminarCurso_ahbb(@Param('id_curso_ahbb', ParseIntPipe) id_curso_ahbb: number) {
    return this.cursosService_ahbb.eliminarCurso_ahbb(id_curso_ahbb);
  }
}
