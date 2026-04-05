import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import { FacturasService_ahbb } from './facturas.service_ahbb';
import { JwtAuthGuard_ahbb } from '../common/guards/jwt-auth.guard_ahbb';
import { RolesGuard_ahbb } from '../common/guards/roles.guard_ahbb';
import { RolesDecorator_ahbb } from '../common/decorators/roles.decorator_ahbb';
import type { RequestConUsuario_ahbb } from '../common/interfaces/request-usuario.interface_ahbb';

@Controller('facturas')
@UseGuards(JwtAuthGuard_ahbb)
export class FacturasController_ahbb {
  constructor(private readonly facturasService_ahbb: FacturasService_ahbb) {}

  // CHECKOUT: crear factura desde el carrito
  @Post()
  async crearFactura_ahbb(
    @Req() req_ahbb: RequestConUsuario_ahbb,
    @Body() datos_ahbb: { nroReferenciaPago: string },
  ) {
    return this.facturasService_ahbb.crearFactura_ahbb(
      Number(req_ahbb.usuario_ahbb?.sub),
      datos_ahbb.nroReferenciaPago,
    );
  }

  // Historial de compras del usuario logueado
  @Get()
  async obtenerHistorial_ahbb(@Req() req_ahbb: RequestConUsuario_ahbb) {
    return this.facturasService_ahbb.obtenerHistorial_ahbb(Number(req_ahbb.usuario_ahbb?.sub));
  }

  // Detalle de una factura del usuario
  @Get(':id')
  async obtenerPorId_ahbb(
    @Param('id', ParseIntPipe) id_ahbb: number,
    @Req() req_ahbb: RequestConUsuario_ahbb,
  ) {
    return this.facturasService_ahbb.obtenerPorId_ahbb(id_ahbb, Number(req_ahbb.usuario_ahbb?.sub));
  }

  // ADMIN: ver todas las facturas
  @UseGuards(RolesGuard_ahbb)
  @RolesDecorator_ahbb('ADMIN')
  @Get('admin/todas')
  async obtenerTodas_ahbb() {
    return this.facturasService_ahbb.obtenerTodas_ahbb();
  }

  // ADMIN: cambiar estado de factura
  @UseGuards(RolesGuard_ahbb)
  @RolesDecorator_ahbb('ADMIN')
  @Patch(':id/estado')
  async cambiarEstado_ahbb(
    @Param('id', ParseIntPipe) id_ahbb: number,
    @Body() datos_ahbb: { estado: string },
  ) {
    return this.facturasService_ahbb.cambiarEstado_ahbb(id_ahbb, datos_ahbb.estado);
  }
}
