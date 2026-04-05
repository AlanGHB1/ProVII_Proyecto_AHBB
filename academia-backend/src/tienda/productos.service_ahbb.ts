import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma.service';

@Injectable()
export class ProductosService_ahbb {
  constructor(private readonly prisma_ahbb: PrismaService) {}

  async obtenerTodos_ahbb(filtros_ahbb?: {
    categoria?: string;
    busqueda?: string;
    estado?: string;
  }) {
    const where_ahbb: any = {};

    if (filtros_ahbb?.categoria) {
      where_ahbb.categoria_ahbb = filtros_ahbb.categoria;
    }
    if (filtros_ahbb?.estado) {
      where_ahbb.estado_producto_ahbb = filtros_ahbb.estado;
    } else {
      where_ahbb.estado_producto_ahbb = 'activo';
    }
    if (filtros_ahbb?.busqueda) {
      where_ahbb.OR = [
        { nombre_ahbb: { contains: filtros_ahbb.busqueda, mode: 'insensitive' } },
        { descripcion_ahbb: { contains: filtros_ahbb.busqueda, mode: 'insensitive' } },
      ];
    }

    return this.prisma_ahbb.td_producto_ahbb.findMany({
      where: where_ahbb,
      orderBy: { creadoEn_ahbb: 'desc' },
    });
  }

  async obtenerPorId_ahbb(id_producto_ahbb: number) {
    const producto_ahbb = await this.prisma_ahbb.td_producto_ahbb.findUnique({
      where: { id_producto_ahbb },
    });
    if (!producto_ahbb) {
      throw new NotFoundException('Producto no encontrado.');
    }
    return producto_ahbb;
  }

  async crear_ahbb(datos_ahbb: any) {
    return this.prisma_ahbb.td_producto_ahbb.create({
      data: {
        nombre_ahbb: datos_ahbb.nombre,
        descripcion_ahbb: datos_ahbb.descripcion ?? null,
        precio_ahbb: datos_ahbb.precio,
        stock_ahbb: datos_ahbb.stock ?? 0,
        categoria_ahbb: datos_ahbb.categoria,
        imagen_ahbb: datos_ahbb.imagen ?? null,
        estado_producto_ahbb: datos_ahbb.estado ?? 'activo',
      },
    });
  }

  async actualizar_ahbb(id_producto_ahbb: number, datos_ahbb: any) {
    await this.obtenerPorId_ahbb(id_producto_ahbb);
    return this.prisma_ahbb.td_producto_ahbb.update({
      where: { id_producto_ahbb },
      data: {
        nombre_ahbb: datos_ahbb.nombre,
        descripcion_ahbb: datos_ahbb.descripcion,
        precio_ahbb: datos_ahbb.precio,
        stock_ahbb: datos_ahbb.stock,
        categoria_ahbb: datos_ahbb.categoria,
        imagen_ahbb: datos_ahbb.imagen,
        estado_producto_ahbb: datos_ahbb.estado,
      },
    });
  }

  async eliminar_ahbb(id_producto_ahbb: number) {
    await this.obtenerPorId_ahbb(id_producto_ahbb);
    await this.prisma_ahbb.td_producto_ahbb.delete({
      where: { id_producto_ahbb },
    });
    return { exito: true };
  }
}
