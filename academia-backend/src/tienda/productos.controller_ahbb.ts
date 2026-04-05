import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Query,
  UseGuards,
} from '@nestjs/common';
import { ProductosService_ahbb } from './productos.service_ahbb';
import { JwtAuthGuard_ahbb } from '../common/guards/jwt-auth.guard_ahbb';
import { RolesGuard_ahbb } from '../common/guards/roles.guard_ahbb';
import { RolesDecorator_ahbb } from '../common/decorators/roles.decorator_ahbb';

@Controller('productos')
export class ProductosController_ahbb {
  constructor(private readonly productosService_ahbb: ProductosService_ahbb) {}

  // PÚBLICO: Cualquiera puede ver productos
  @Get()
  async obtenerTodos_ahbb(
    @Query('categoria') categoria_ahbb?: string,
    @Query('busqueda') busqueda_ahbb?: string,
    @Query('estado') estado_ahbb?: string,
  ) {
    return this.productosService_ahbb.obtenerTodos_ahbb({
      categoria: categoria_ahbb,
      busqueda: busqueda_ahbb,
      estado: estado_ahbb,
    });
  }

  // PÚBLICO: Cualquiera puede ver un producto
  @Get(':id')
  async obtenerPorId_ahbb(@Param('id', ParseIntPipe) id_ahbb: number) {
    return this.productosService_ahbb.obtenerPorId_ahbb(id_ahbb);
  }

  // SOLO ADMIN
  @UseGuards(JwtAuthGuard_ahbb, RolesGuard_ahbb)
  @RolesDecorator_ahbb('ADMIN')
  @Post()
  async crear_ahbb(@Body() datos_ahbb: any) {
    return this.productosService_ahbb.crear_ahbb(datos_ahbb);
  }

  // SOLO ADMIN
  @UseGuards(JwtAuthGuard_ahbb, RolesGuard_ahbb)
  @RolesDecorator_ahbb('ADMIN')
  @Patch(':id')
  async actualizar_ahbb(
    @Param('id', ParseIntPipe) id_ahbb: number,
    @Body() datos_ahbb: any,
  ) {
    return this.productosService_ahbb.actualizar_ahbb(id_ahbb, datos_ahbb);
  }

  // SOLO ADMIN
  @UseGuards(JwtAuthGuard_ahbb, RolesGuard_ahbb)
  @RolesDecorator_ahbb('ADMIN')
  @Delete(':id')
  async eliminar_ahbb(@Param('id', ParseIntPipe) id_ahbb: number) {
    return this.productosService_ahbb.eliminar_ahbb(id_ahbb);
  }
}
