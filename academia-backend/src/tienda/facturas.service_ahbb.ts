import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { validarReferenciaPago_ahbb } from '../common/utils/validacion-pago.util_ahbb';
import * as fs from 'fs';
// @ts-ignore - pdfmake 0.3.x exporta el constructor en una subruta para Node
import PdfPrinter from 'pdfmake/js/Printer';
import URLResolver from 'pdfmake/js/URLResolver';
import type { TDocumentDefinitions } from 'pdfmake/interfaces';

@Injectable()
export class FacturasService_ahbb {
  constructor(private readonly prisma_ahbb: PrismaService) {}

  // IVA venezolano vigente: 16%
  private readonly IVA_PORCENTAJE_AHBB = 16;

  private calcularDesglose_ahbb(detalles: any[]) {
    const subtotal = detalles.reduce((acc, d) =>
      acc + Number(d.precioUnitario_ahbb) * d.cantidad_ahbb, 0
    );
    const iva = subtotal * (this.IVA_PORCENTAJE_AHBB / 100);
    const total = subtotal + iva;
    return {
      subtotal: +subtotal.toFixed(2),
      ivaPorcentaje: this.IVA_PORCENTAJE_AHBB,
      ivaMontoUSD: +iva.toFixed(2),
      totalConIva: +total.toFixed(2),
    };
  }

  // CHECKOUT: carrito → factura + detalles → vaciar carrito → descontar stock
  async crearFactura_ahbb(id_usuario_ahbb: number, nroReferenciaPago_ahbb: string) {
    // Trigger de validación: formato de referencia de pago venezolana
    validarReferenciaPago_ahbb(nroReferenciaPago_ahbb);

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
          estadoFactura_ahbb: 'pagada', // El sistema valida el pago automáticamente
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

        const productoActualizado_ahbb = await tx_ahbb.td_producto_ahbb.update({
          where: { id_producto_ahbb: item_ahbb.id_producto_carrito_ahbb },
          data: { stock_ahbb: { decrement: item_ahbb.cantidad_ahbb } },
        });

        if (productoActualizado_ahbb.stock_ahbb <= 0) {
          await tx_ahbb.td_producto_ahbb.update({
            where: { id_producto_ahbb: item_ahbb.id_producto_carrito_ahbb },
            data: { estado_producto_ahbb: 'inactivo', stock_ahbb: 0 },
          });
        }
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
    const facturas = await this.prisma_ahbb.td_factura_ahbb.findMany({
      where: { id_usuario_factura_ahbb: id_usuario_ahbb },
      include: {
        detalles_ahbb: { include: { producto_ahbb: true } },
      },
      orderBy: { fechaFactura_ahbb: 'desc' },
    });
    return facturas.map(f => ({
      ...f,
      desglose_ahbb: this.calcularDesglose_ahbb(f.detalles_ahbb),
    }));
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
    return {
      ...factura_ahbb,
      desglose_ahbb: this.calcularDesglose_ahbb(factura_ahbb.detalles_ahbb),
    };
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

  // Generar Factura en PDF usando pdfmake
  async generarPdf_ahbb(id_factura_ahbb: number, id_usuario_ahbb?: number): Promise<Buffer> {
    console.log(`[DEBUG:FacturasService] Iniciando generación de PDF para factura ${id_factura_ahbb}`);
    try {
      const factura = await this.obtenerPorId_ahbb(id_factura_ahbb, id_usuario_ahbb);
      console.log(`[DEBUG:FacturasService] Factura encontrada: ${factura.nroReferenciaPago_ahbb}`);

      const fonts = {
        Helvetica: {
          normal: 'Helvetica',
          bold: 'Helvetica-Bold',
          italics: 'Helvetica-Oblique',
          bolditalics: 'Helvetica-BoldOblique',
        },
      };

      const urlResolver = new URLResolver(fs);
      const printer = new PdfPrinter(fonts, fs, urlResolver);
      console.log(`[DEBUG:FacturasService] Printer inicializado con fuentes:`, Object.keys(fonts));

      const docDefinition: TDocumentDefinitions = {
        defaultStyle: {
          font: 'Helvetica',
        },
        content: [
          {
            columns: [
              {
                width: '*',
                text: [
                  { text: '🎓 Academia ', style: 'header' },
                  { text: 'H&B', style: 'headerAccent' },
                ]
              },
              {
                width: 'auto',
                stack: [
                  { text: 'Comprobante de Compra', style: 'title' },
                  { text: `REF: ${factura.nroReferenciaPago_ahbb || '—'}`, style: 'metaText' },
                  { text: `Fecha: ${factura.fechaFactura_ahbb ? factura.fechaFactura_ahbb.toISOString().split('T')[0] : '—'}`, style: 'metaText' },
                  { text: `Estado: ${factura.estadoFactura_ahbb}`, style: 'estadoBadge' },
                ],
                alignment: 'right'
              }
            ],
            margin: [0, 0, 0, 20]
          },
          { text: 'merch@academiahb.com\nCaracas, Venezuela\nRIF: J-1234567-8', style: 'subheader', margin: [0, 0, 0, 30] },
          {
            table: {
              headerRows: 1,
              widths: ['*', 'auto', 'auto', 'auto'],
              body: [
                [
                  { text: 'Producto', style: 'tableHeader' },
                  { text: 'Cant.', style: 'tableHeader', alignment: 'center' as const },
                  { text: 'P. Unitario', style: 'tableHeader', alignment: 'right' as const },
                  { text: 'Subtotal', style: 'tableHeader', alignment: 'right' as const }
                ],
                ...factura.detalles_ahbb.map(d => [
                  d.producto_ahbb?.nombre_ahbb || '—',
                  { text: d.cantidad_ahbb.toString(), alignment: 'center' as const },
                  { text: `$${Number(d.precioUnitario_ahbb).toFixed(2)}`, alignment: 'right' as const },
                  { text: `$${(d.cantidad_ahbb * Number(d.precioUnitario_ahbb)).toFixed(2)}`, alignment: 'right' as const }
                ])
              ]
            },
            layout: 'lightHorizontalLines',
            margin: [0, 0, 0, 30]
          },
          {
            columns: [
              { width: '*', text: '' },
              {
                width: 250,
                table: {
                  widths: ['*', '*'],
                  body: [
                    [{ text: 'Subtotal (sin IVA)', color: '#64748b' }, { text: `$${factura.desglose_ahbb.subtotal.toFixed(2)}`, alignment: 'right' as const }],
                    [{ text: `IVA (${factura.desglose_ahbb.ivaPorcentaje}%)`, color: '#64748b' }, { text: `$${factura.desglose_ahbb.ivaMontoUSD.toFixed(2)}`, alignment: 'right' as const }],
                    [
                      { text: 'TOTAL', bold: true, margin: [0, 5, 0, 5], fontSize: 14 },
                      { text: `$${factura.desglose_ahbb.totalConIva.toFixed(2)}`, bold: true, alignment: 'right' as const, margin: [0, 5, 0, 5], fontSize: 14 }
                    ]
                  ]
                },
                layout: 'noBorders'
              }
            ]
          },
          { text: `* IVA calculado según SENIAT (${factura.desglose_ahbb.ivaPorcentaje}%)`, style: 'footerNota', margin: [0, 10, 0, 0] },
          { text: '\n\nAcademia H&B — Tu academia de certificaciones de confianza.\nEste comprobante es válido como constancia de pago.', style: 'footer' }
        ],
        styles: {
          header: { fontSize: 22, bold: true, color: '#1b2a4a' },
          headerAccent: { fontSize: 22, bold: true, color: '#f59e0b' },
          subheader: { fontSize: 11, color: '#64748b', lineHeight: 1.2 },
          title: { fontSize: 14, bold: true, color: '#64748b', margin: [0, 0, 0, 5] },
          metaText: { fontSize: 12, color: '#1e293b', margin: [0, 2, 0, 2] },
          estadoBadge: { fontSize: 12, bold: true, color: '#16a34a', margin: [0, 5, 0, 0] },
          tableHeader: { bold: true, fontSize: 12, color: 'white', fillColor: '#1b2a4a', margin: [5, 5, 5, 5] },
          footerNota: { fontSize: 10, color: '#94a3b8', alignment: 'right' },
          footer: { fontSize: 11, color: '#94a3b8', alignment: 'center' }
        }
      };

      return new Promise<Buffer>(async (resolve, reject) => {
        try {
          console.log(`[DEBUG:FacturasService] Llamando a printer.createPdfKitDocument...`);
          // En pdfmake 0.3.x, createPdfKitDocument es asíncrono
          const pdfDoc = await printer.createPdfKitDocument(docDefinition);
          console.log(`[DEBUG:FacturasService] Documento PDF creado. Empezando a leer stream...`);
          const chunks: Buffer[] = [];
          pdfDoc.on('data', (chunk) => {
            chunks.push(chunk);
          });
          pdfDoc.on('end', () => {
            console.log(`[DEBUG:FacturasService] Stream finalizado. Chunks acumulados: ${chunks.length}`);
            resolve(Buffer.concat(chunks));
          });
          pdfDoc.on('error', (err) => {
            console.error('[DEBUG:FacturasService] Error suscribiendo al stream del PDF:', err);
            reject(err);
          });
          pdfDoc.end();
        } catch (error) {
          console.error('[DEBUG:FacturasService] Error generando documento PDF:', error);
          reject(error);
        }
      });
    } catch (error) {
      console.error('Error en generarPdf_ahbb:', error);
      throw error; // Re-lanzar error para que sea capturado por el controlador u otro filtro
    }
  }
}
