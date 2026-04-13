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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var FacturasService_ahbb_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.FacturasService_ahbb = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma.service");
const tunnel_service_ahbb_1 = require("../common/tunnel/tunnel.service_ahbb");
const validacion_pago_util_ahbb_1 = require("../common/utils/validacion-pago.util_ahbb");
const fs = __importStar(require("fs"));
const path_1 = require("path");
const QRCode = __importStar(require("qrcode"));
const Printer_1 = __importDefault(require("pdfmake/js/Printer"));
const URLResolver_1 = __importDefault(require("pdfmake/js/URLResolver"));
let FacturasService_ahbb = FacturasService_ahbb_1 = class FacturasService_ahbb {
    prisma_ahbb;
    tunnelService_ahbb;
    logger_ahbb = new common_1.Logger(FacturasService_ahbb_1.name);
    constructor(prisma_ahbb, tunnelService_ahbb) {
        this.prisma_ahbb = prisma_ahbb;
        this.tunnelService_ahbb = tunnelService_ahbb;
    }
    IVA_PORCENTAJE_AHBB = 16;
    calcularDesglose_ahbb(detalles) {
        const subtotal = detalles.reduce((acc, d) => acc + Number(d.precioUnitario_ahbb) * d.cantidad_ahbb, 0);
        const iva = subtotal * (this.IVA_PORCENTAJE_AHBB / 100);
        const total = subtotal + iva;
        return {
            subtotal: +subtotal.toFixed(2),
            ivaPorcentaje: this.IVA_PORCENTAJE_AHBB,
            ivaMontoUSD: +iva.toFixed(2),
            totalConIva: +total.toFixed(2),
        };
    }
    async crearFactura_ahbb(id_usuario_ahbb, nroReferenciaPago_ahbb) {
        (0, validacion_pago_util_ahbb_1.validarReferenciaPago_ahbb)(nroReferenciaPago_ahbb);
        const itemsCarrito_ahbb = await this.prisma_ahbb.td_carrito_ahbb.findMany({
            where: { id_usuario_carrito_ahbb: id_usuario_ahbb },
            include: { producto_ahbb: true },
        });
        if (itemsCarrito_ahbb.length === 0) {
            throw new common_1.BadRequestException('El carrito está vacío.');
        }
        for (const item_ahbb of itemsCarrito_ahbb) {
            if (item_ahbb.producto_ahbb.stock_ahbb < item_ahbb.cantidad_ahbb) {
                throw new common_1.BadRequestException(`Stock insuficiente para "${item_ahbb.producto_ahbb.nombre_ahbb}". Disponible: ${item_ahbb.producto_ahbb.stock_ahbb}`);
            }
        }
        const total_ahbb = itemsCarrito_ahbb.reduce((acc_ahbb, item_ahbb) => {
            return acc_ahbb + Number(item_ahbb.producto_ahbb.precio_ahbb) * item_ahbb.cantidad_ahbb;
        }, 0);
        const factura_ahbb = await this.prisma_ahbb.$transaction(async (tx_ahbb) => {
            const nuevaFactura_ahbb = await tx_ahbb.td_factura_ahbb.create({
                data: {
                    id_usuario_factura_ahbb: id_usuario_ahbb,
                    nroReferenciaPago_ahbb,
                    total_ahbb,
                    estadoFactura_ahbb: 'pagada',
                },
            });
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
            await tx_ahbb.td_carrito_ahbb.deleteMany({
                where: { id_usuario_carrito_ahbb: id_usuario_ahbb },
            });
            return nuevaFactura_ahbb;
        });
        try {
            await this.registrarReporte_ahbb(factura_ahbb.id_factura_ahbb);
        }
        catch (e) {
            this.logger_ahbb.error(`Error al registrar reporte proactivo para factura ${factura_ahbb.id_factura_ahbb}: ${e.message}`);
        }
        return this.obtenerPorId_ahbb(factura_ahbb.id_factura_ahbb, id_usuario_ahbb);
    }
    async registrarReporte_ahbb(id_factura_ahbb) {
        const factura = await this.obtenerPorId_ahbb(id_factura_ahbb);
        const urlPublica = this.tunnelService_ahbb.construirUrl_ahbb(`/api/facturas/publica/${factura.id_factura_ahbb}/pdf`);
        const qrBase64 = await QRCode.toDataURL(urlPublica, {
            margin: 1,
            width: 200,
            color: {
                dark: '#1b2a4a',
                light: '#ffffff'
            }
        });
        return this.prisma_ahbb.td_reportes_facturas_ahbb.upsert({
            where: { id_reporte_ahbb: (await this.prisma_ahbb.td_reportes_facturas_ahbb.findFirst({ where: { id_factura_reporte_ahbb: id_factura_ahbb } }))?.id_reporte_ahbb || -1 },
            update: {
                qr_base64_ahbb: qrBase64,
            },
            create: {
                id_factura_reporte_ahbb: id_factura_ahbb,
                qr_base64_ahbb: qrBase64,
            }
        });
    }
    async obtenerHistorial_ahbb(id_usuario_ahbb) {
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
    async obtenerPorId_ahbb(id_factura_ahbb, id_usuario_ahbb) {
        const where_ahbb = { id_factura_ahbb };
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
            throw new common_1.NotFoundException('Factura no encontrada.');
        }
        return {
            ...factura_ahbb,
            desglose_ahbb: this.calcularDesglose_ahbb(factura_ahbb.detalles_ahbb),
        };
    }
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
    async cambiarEstado_ahbb(id_factura_ahbb, estadoFactura_ahbb) {
        const factura_ahbb = await this.prisma_ahbb.td_factura_ahbb.findUnique({
            where: { id_factura_ahbb },
        });
        if (!factura_ahbb) {
            throw new common_1.NotFoundException('Factura no encontrada.');
        }
        return this.prisma_ahbb.td_factura_ahbb.update({
            where: { id_factura_ahbb },
            data: { estadoFactura_ahbb },
        });
    }
    async generarPdf_ahbb(id_factura_ahbb, id_usuario_ahbb) {
        this.logger_ahbb.log(`Iniciando generación de PDF para factura ${id_factura_ahbb}`);
        try {
            const factura = await this.obtenerPorId_ahbb(id_factura_ahbb, id_usuario_ahbb);
            const baseImagePath_ahbb = (0, path_1.join)(process.cwd(), '..', 'academia-h&b', 'public');
            const iconPath_ahbb = (0, path_1.join)(process.cwd(), 'uploads', 'graduation-cap.png');
            let reporte = await this.prisma_ahbb.td_reportes_facturas_ahbb.findFirst({
                where: { id_factura_reporte_ahbb: factura.id_factura_ahbb }
            });
            if (!reporte) {
                this.logger_ahbb.log(`Reporte no encontrado para factura ${id_factura_ahbb}, generando uno nuevo...`);
                reporte = await this.registrarReporte_ahbb(factura.id_factura_ahbb);
            }
            const qrBase64 = reporte.qr_base64_ahbb;
            const fonts = {
                Helvetica: {
                    normal: 'Helvetica',
                    bold: 'Helvetica-Bold',
                    italics: 'Helvetica-Oblique',
                    bolditalics: 'Helvetica-BoldOblique',
                },
            };
            const urlResolver = new URLResolver_1.default(fs);
            const printer = new Printer_1.default(fonts, fs, urlResolver);
            const docDefinition = {
                defaultStyle: { font: 'Helvetica' },
                pageMargins: [40, 40, 40, 60],
                content: [
                    {
                        columns: [
                            {
                                width: '*',
                                stack: [
                                    {
                                        columns: (fs.existsSync(iconPath_ahbb)) ? [
                                            {
                                                image: iconPath_ahbb,
                                                width: 38,
                                                margin: [0, 0, 10, 0]
                                            },
                                            {
                                                width: '*',
                                                text: [
                                                    { text: 'Academia ', style: 'header' },
                                                    { text: 'H&B', style: 'headerAccent' }
                                                ],
                                                margin: [0, 4, 0, 0]
                                            }
                                        ] : [
                                            {
                                                width: '*',
                                                text: [
                                                    { text: 'Academia ', style: 'header' },
                                                    { text: 'H&B', style: 'headerAccent' }
                                                ],
                                                margin: [0, 4, 0, 0]
                                            }
                                        ]
                                    },
                                    { text: 'merch@academiahb.com', style: 'subheader', margin: [0, 5, 0, 0] },
                                    { text: 'Caracas, Venezuela', style: 'subheader' },
                                    { text: 'RIF: J-1234567-8', style: 'subheader' },
                                ]
                            },
                            {
                                width: 'auto',
                                stack: [
                                    { text: 'COMPROBANTE DE COMPRA', style: 'title' },
                                    { text: `REF: ${factura.nroReferenciaPago_ahbb || '—'}`, style: 'metaTextBold', alignment: 'right' },
                                    {
                                        text: `${factura.fechaFactura_ahbb ? factura.fechaFactura_ahbb.toLocaleString('es-VE', { dateStyle: 'short', timeStyle: 'short' }) : '—'}`,
                                        style: 'metaText',
                                        alignment: 'right'
                                    },
                                    {
                                        margin: [0, 8, 0, 0],
                                        table: {
                                            widths: ['auto'],
                                            body: [
                                                [
                                                    {
                                                        text: factura.estadoFactura_ahbb.toUpperCase(),
                                                        style: 'estadoBadge',
                                                        fillColor: factura.estadoFactura_ahbb.toLowerCase() === 'pagada' ? '#22c55e' : '#f59e0b',
                                                        color: 'white',
                                                        alignment: 'center',
                                                        margin: [10, 2, 10, 2]
                                                    }
                                                ]
                                            ]
                                        },
                                        layout: {
                                            hLineWidth: () => 0,
                                            vLineWidth: () => 0,
                                            paddingLeft: () => 0,
                                            paddingRight: () => 0,
                                        },
                                        alignment: 'right'
                                    }
                                ],
                                alignment: 'right'
                            }
                        ],
                        margin: [0, 0, 0, 30]
                    },
                    { text: 'DETALLE DE PRODUCTOS', style: 'sectionTitle', margin: [0, 0, 0, 10] },
                    {
                        table: {
                            headerRows: 1,
                            widths: [40, '*', 'auto', 'auto', 'auto'],
                            body: [
                                [
                                    { text: '', style: 'tableHeader' },
                                    { text: 'Producto', style: 'tableHeader' },
                                    { text: 'Cant.', style: 'tableHeader', alignment: 'center' },
                                    { text: 'P. Unitario', style: 'tableHeader', alignment: 'right' },
                                    { text: 'Subtotal', style: 'tableHeader', alignment: 'right' }
                                ],
                                ...factura.detalles_ahbb.map(d => {
                                    const imgPath = (0, path_1.join)(baseImagePath_ahbb, d.producto_ahbb?.imagen_ahbb || '');
                                    const hasImage = d.producto_ahbb?.imagen_ahbb && fs.existsSync(imgPath);
                                    return [
                                        hasImage
                                            ? { image: imgPath, width: 30, height: 30, alignment: 'center', margin: [0, 5, 0, 5] }
                                            : { text: '', margin: [0, 5, 0, 5] },
                                        {
                                            stack: [
                                                { text: d.producto_ahbb?.nombre_ahbb || '—', bold: true },
                                                { text: d.producto_ahbb?.categoria_ahbb || '', fontSize: 9, color: '#64748b' }
                                            ],
                                            margin: [0, 5, 0, 5]
                                        },
                                        { text: d.cantidad_ahbb.toString(), alignment: 'center', margin: [0, 10, 0, 5] },
                                        { text: `$${Number(d.precioUnitario_ahbb).toFixed(2)}`, alignment: 'right', margin: [0, 10, 0, 5], color: '#64748b' },
                                        { text: `$${(d.cantidad_ahbb * Number(d.precioUnitario_ahbb)).toFixed(2)}`, alignment: 'right', margin: [0, 10, 0, 5], bold: true }
                                    ];
                                })
                            ]
                        },
                        layout: {
                            hLineWidth: (i, node) => (i === 0 || i === node.table.body.length) ? 0 : 0.5,
                            vLineWidth: () => 0,
                            hLineColor: () => '#e2e8f0',
                            paddingTop: () => 8,
                            paddingBottom: () => 8,
                        },
                        margin: [0, 0, 0, 20]
                    },
                    {
                        columns: [
                            {
                                width: 100,
                                stack: [
                                    { image: qrBase64, width: 90, alignment: 'center' },
                                    { text: 'Escanea para verificar', fontSize: 7, bold: true, alignment: 'center', color: '#1b2a4a', margin: [0, 3, 0, 0] }
                                ],
                                margin: [0, 10, 0, 0]
                            },
                            { width: '*', text: '' },
                            {
                                width: 220,
                                table: {
                                    widths: ['*', 'auto'],
                                    body: [
                                        [
                                            { text: 'Subtotal (sin IVA)', color: '#64748b', margin: [0, 5, 0, 5] },
                                            { text: `$${factura.desglose_ahbb.subtotal.toFixed(2)}`, alignment: 'right', margin: [0, 5, 0, 5] }
                                        ],
                                        [
                                            { text: `IVA (${factura.desglose_ahbb.ivaPorcentaje}%)`, color: '#64748b', margin: [0, 5, 0, 5] },
                                            { text: `$${factura.desglose_ahbb.ivaMontoUSD.toFixed(2)}`, alignment: 'right', margin: [0, 5, 0, 5] }
                                        ],
                                        [
                                            {
                                                text: 'TOTAL',
                                                bold: true,
                                                fontSize: 14,
                                                color: 'white',
                                                fillColor: '#1b2a4a',
                                                margin: [10, 8, 10, 8]
                                            },
                                            {
                                                text: `$${factura.desglose_ahbb.totalConIva.toFixed(2)}`,
                                                bold: true,
                                                alignment: 'right',
                                                fontSize: 18,
                                                color: 'white',
                                                fillColor: '#1b2a4a',
                                                margin: [10, 6, 10, 6]
                                            }
                                        ]
                                    ]
                                },
                                layout: {
                                    hLineWidth: () => 0,
                                    vLineWidth: () => 0,
                                    paddingLeft: () => 0,
                                    paddingRight: () => 0,
                                }
                            }
                        ]
                    },
                    { text: `* IVA calculado según SENIAT (${factura.desglose_ahbb.ivaPorcentaje}%)`, style: 'footerNota', margin: [0, 5, 0, 0] },
                    {
                        stack: [
                            { text: '\n\nAcademia H&B — Tu academia de certificaciones de confianza.', style: 'footer', alignment: 'center' },
                            { text: 'Este comprobante es válido como constancia de pago.', style: 'footer', alignment: 'center' }
                        ],
                        margin: [0, 20, 0, 0]
                    }
                ],
                styles: {
                    header: { fontSize: 24, bold: true, color: '#1b2a4a' },
                    headerAccent: { fontSize: 24, bold: true, color: '#f59e0b' },
                    subheader: { fontSize: 10, color: '#64748b', lineHeight: 1.3 },
                    sectionTitle: { fontSize: 11, bold: true, color: '#64748b' },
                    title: { fontSize: 9, bold: true, color: '#94a3b8', margin: [0, 0, 0, 5] },
                    metaText: { fontSize: 10, color: '#1e293b' },
                    metaTextBold: { fontSize: 18, bold: true, color: '#1b2a4a' },
                    estadoBadge: { fontSize: 9, bold: true },
                    tableHeader: { bold: true, fontSize: 10, color: 'white', fillColor: '#1b2a4a', margin: [5, 8, 5, 8] },
                    footerNota: { fontSize: 9, color: '#94a3b8', alignment: 'right' },
                    footer: { fontSize: 9, color: '#94a3b8' }
                }
            };
            return new Promise(async (resolve, reject) => {
                try {
                    console.log(`[DEBUG:FacturasService] Llamando a printer.createPdfKitDocument...`);
                    const pdfDoc = await printer.createPdfKitDocument(docDefinition);
                    console.log(`[DEBUG:FacturasService] Documento PDF creado. Empezando a leer stream...`);
                    const chunks = [];
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
                }
                catch (error) {
                    console.error('[DEBUG:FacturasService] Error generando documento PDF:', error);
                    reject(error);
                }
            });
        }
        catch (error) {
            console.error('Error en generarPdf_ahbb:', error);
            throw error;
        }
    }
};
exports.FacturasService_ahbb = FacturasService_ahbb;
exports.FacturasService_ahbb = FacturasService_ahbb = FacturasService_ahbb_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        tunnel_service_ahbb_1.TunnelService_ahbb])
], FacturasService_ahbb);
//# sourceMappingURL=facturas.service_ahbb.js.map