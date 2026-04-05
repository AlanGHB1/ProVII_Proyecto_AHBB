import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { PrismaService } from '../prisma.service';

@Injectable()
export class FacturasService_ahbb {
  constructor(private readonly prisma_ahbb: PrismaService) {}

  // CHECKOUT: carrito → factura + detalles → vaciar carrito → descontar stock
  async crearFactura_ahbb(id_usuario_ahbb: number, nroReferenciaPago_ahbb: string) {
    const itemsCarrito_ahbb = await this.prisma_ahbb.td_carrito_ahbb.findMany({
      where: { id_usuario_carrito_ahbb: id_usuario_ahbb },
      include: { producto_ahbb: true },
    });

    if (itemsCarrito_ahbb.length === 0) {
      throw new BadRequestException('El carrito está vacío.');
    }

    // Validar stock para cada item
    for (const item_ahbb of itemsCarrito_ahbb) {
      if (item_ahbb.producto_ahbb.stock_ahbb < item_ahbb.cantidad_ahbb) {
        throw new BadRequestException(
          `Stock insuficiente para "${item_ahbb.producto_ahbb.nombre_ahbb}". Disponible: ${item_ahbb.producto_ahbb.stock_ahbb}`,
        );
      }
    }

    // Calcular total
    const total_ahbb = itemsCarrito_ahbb.reduce((acc_ahbb, item_ahbb) => {
      return acc_ahbb + Number(item_ahbb.producto_ahbb.precio_ahbb) * item_ahbb.cantidad_ahbb;
    }, 0);

    // Transacción: crear factura + detalles + descontar stock + vaciar carrito
    const factura_ahbb = await this.prisma_ahbb.$transaction(async (tx_ahbb) => {
      const nuevaFactura_ahbb = await tx_ahbb.td_factura_ahbb.create({
        data: {
          id_usuario_factura_ahbb: id_usuario_ahbb,
          nroReferenciaPago_ahbb,
          total_ahbb,
          estadoFactura_ahbb: 'pendiente',
        },
      });

      // Crear detalles y descontar stock
      for (const item_ahbb of itemsCarrito_ahbb) {
        await tx_ahbb.td_detalle_factura_ahbb.create({
          data: {
            id_factura_detalle_ahbb: nuevaFactura_ahbb.id_factura_ahbb,
            id_producto_detalle_ahbb: item_ahbb.id_producto_carrito_ahbb,
            cantidad_ahbb: item_ahbb.cantidad_ahbb,
            precioUnitario_ahbb: item_ahbb.producto_ahbb.precio_ahbb,
          },
        });

        await tx_ahbb.td_producto_ahbb.update({
          where: { id_producto_ahbb: item_ahbb.id_producto_carrito_ahbb },
          data: { stock_ahbb: { decrement: item_ahbb.cantidad_ahbb } },
        });
      }

      // Vaciar carrito
      await tx_ahbb.td_carrito_ahbb.deleteMany({
        where: { id_usuario_carrito_ahbb: id_usuario_ahbb },
      });

      return nuevaFactura_ahbb;
    });

    return this.obtenerPorId_ahbb(factura_ahbb.id_factura_ahbb, id_usuario_ahbb);
  }

  async obtenerHistorial_ahbb(id_usuario_ahbb: number) {
    return this.prisma_ahbb.td_factura_ahbb.findMany({
      where: { id_usuario_factura_ahbb: id_usuario_ahbb },
      include: {
        detalles_ahbb: { include: { producto_ahbb: true } },
      },
      orderBy: { fechaFactura_ahbb: 'desc' },
    });
  }

  async obtenerPorId_ahbb(id_factura_ahbb: number, id_usuario_ahbb?: number) {
    const where_ahbb: any = { id_factura_ahbb };
    if (id_usuario_ahbb) {
      where_ahbb.id_usuario_factura_ahbb = id_usuario_ahbb;
    }

    const factura_ahbb = await this.prisma_ahbb.td_factura_ahbb.findFirst({
      where: where_ahbb,
      include: {
        detalles_ahbb: { include: { producto_ahbb: true } },
        usuario_ahbb: {
          select: {
            id_usuario_ahbb: true,
            nombre_ahbb: true,
            apellido_ahbb: true,
            correo_ahbb: true,
          },
        },
      },
    });

    if (!factura_ahbb) {
      throw new NotFoundException('Factura no encontrada.');
    }
    return factura_ahbb;
  }

  // ADMIN: Listar todas las facturas
  async obtenerTodas_ahbb() {
    return this.prisma_ahbb.td_factura_ahbb.findMany({
      include: {
        detalles_ahbb: { include: { producto_ahbb: true } },
        usuario_ahbb: {
          select: {
            id_usuario_ahbb: true,
            nombre_ahbb: true,
            apellido_ahbb: true,
            correo_ahbb: true,
          },
        },
      },
      orderBy: { fechaFactura_ahbb: 'desc' },
    });
  }

  // ADMIN: Cambiar estado de factura
  async cambiarEstado_ahbb(id_factura_ahbb: number, estadoFactura_ahbb: string) {
    const factura_ahbb = await this.prisma_ahbb.td_factura_ahbb.findUnique({
      where: { id_factura_ahbb },
    });
    if (!factura_ahbb) {
      throw new NotFoundException('Factura no encontrada.');
    }
    return this.prisma_ahbb.td_factura_ahbb.update({
      where: { id_factura_ahbb },
      data: { estadoFactura_ahbb },
    });
  }
}
