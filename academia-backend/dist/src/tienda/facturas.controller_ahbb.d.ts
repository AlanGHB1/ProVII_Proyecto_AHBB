import { FacturasService_ahbb } from './facturas.service_ahbb';
import type { RequestConUsuario_ahbb } from '../common/interfaces/request-usuario.interface_ahbb';
export declare class FacturasController_ahbb {
    private readonly facturasService_ahbb;
    constructor(facturasService_ahbb: FacturasService_ahbb);
    crearFactura_ahbb(req_ahbb: RequestConUsuario_ahbb, datos_ahbb: {
        nroReferenciaPago: string;
    }): Promise<{
        desglose_ahbb: {
            subtotal: number;
            ivaPorcentaje: number;
            ivaMontoUSD: number;
            totalConIva: number;
        };
        usuario_ahbb: {
            nombre_ahbb: string;
            id_usuario_ahbb: number;
            apellido_ahbb: string;
            correo_ahbb: string;
        };
        detalles_ahbb: ({
            producto_ahbb: {
                nombre_ahbb: string;
                descripcion_ahbb: string | null;
                creadoEn_ahbb: Date | null;
                actualizadoEn_ahbb: Date | null;
                id_producto_ahbb: number;
                precio_ahbb: import("@prisma/client-runtime-utils").Decimal;
                stock_ahbb: number;
                categoria_ahbb: string;
                imagen_ahbb: string | null;
                estado_producto_ahbb: string;
            };
        } & {
            cantidad_ahbb: number;
            id_detalle_factura_ahbb: number;
            precioUnitario_ahbb: import("@prisma/client-runtime-utils").Decimal;
            id_factura_detalle_ahbb: number;
            id_producto_detalle_ahbb: number;
        })[];
        nroReferenciaPago_ahbb: string;
        fechaFactura_ahbb: Date | null;
        total_ahbb: import("@prisma/client-runtime-utils").Decimal;
        estadoFactura_ahbb: string;
        id_factura_ahbb: number;
        id_usuario_factura_ahbb: number;
    }>;
    obtenerHistorial_ahbb(req_ahbb: RequestConUsuario_ahbb): Promise<{
        desglose_ahbb: {
            subtotal: number;
            ivaPorcentaje: number;
            ivaMontoUSD: number;
            totalConIva: number;
        };
        detalles_ahbb: ({
            producto_ahbb: {
                nombre_ahbb: string;
                descripcion_ahbb: string | null;
                creadoEn_ahbb: Date | null;
                actualizadoEn_ahbb: Date | null;
                id_producto_ahbb: number;
                precio_ahbb: import("@prisma/client-runtime-utils").Decimal;
                stock_ahbb: number;
                categoria_ahbb: string;
                imagen_ahbb: string | null;
                estado_producto_ahbb: string;
            };
        } & {
            cantidad_ahbb: number;
            id_detalle_factura_ahbb: number;
            precioUnitario_ahbb: import("@prisma/client-runtime-utils").Decimal;
            id_factura_detalle_ahbb: number;
            id_producto_detalle_ahbb: number;
        })[];
        nroReferenciaPago_ahbb: string;
        fechaFactura_ahbb: Date | null;
        total_ahbb: import("@prisma/client-runtime-utils").Decimal;
        estadoFactura_ahbb: string;
        id_factura_ahbb: number;
        id_usuario_factura_ahbb: number;
    }[]>;
    obtenerPorId_ahbb(id_ahbb: number, req_ahbb: RequestConUsuario_ahbb): Promise<{
        desglose_ahbb: {
            subtotal: number;
            ivaPorcentaje: number;
            ivaMontoUSD: number;
            totalConIva: number;
        };
        usuario_ahbb: {
            nombre_ahbb: string;
            id_usuario_ahbb: number;
            apellido_ahbb: string;
            correo_ahbb: string;
        };
        detalles_ahbb: ({
            producto_ahbb: {
                nombre_ahbb: string;
                descripcion_ahbb: string | null;
                creadoEn_ahbb: Date | null;
                actualizadoEn_ahbb: Date | null;
                id_producto_ahbb: number;
                precio_ahbb: import("@prisma/client-runtime-utils").Decimal;
                stock_ahbb: number;
                categoria_ahbb: string;
                imagen_ahbb: string | null;
                estado_producto_ahbb: string;
            };
        } & {
            cantidad_ahbb: number;
            id_detalle_factura_ahbb: number;
            precioUnitario_ahbb: import("@prisma/client-runtime-utils").Decimal;
            id_factura_detalle_ahbb: number;
            id_producto_detalle_ahbb: number;
        })[];
        nroReferenciaPago_ahbb: string;
        fechaFactura_ahbb: Date | null;
        total_ahbb: import("@prisma/client-runtime-utils").Decimal;
        estadoFactura_ahbb: string;
        id_factura_ahbb: number;
        id_usuario_factura_ahbb: number;
    }>;
    obtenerTodas_ahbb(): Promise<({
        usuario_ahbb: {
            nombre_ahbb: string;
            id_usuario_ahbb: number;
            apellido_ahbb: string;
            correo_ahbb: string;
        };
        detalles_ahbb: ({
            producto_ahbb: {
                nombre_ahbb: string;
                descripcion_ahbb: string | null;
                creadoEn_ahbb: Date | null;
                actualizadoEn_ahbb: Date | null;
                id_producto_ahbb: number;
                precio_ahbb: import("@prisma/client-runtime-utils").Decimal;
                stock_ahbb: number;
                categoria_ahbb: string;
                imagen_ahbb: string | null;
                estado_producto_ahbb: string;
            };
        } & {
            cantidad_ahbb: number;
            id_detalle_factura_ahbb: number;
            precioUnitario_ahbb: import("@prisma/client-runtime-utils").Decimal;
            id_factura_detalle_ahbb: number;
            id_producto_detalle_ahbb: number;
        })[];
    } & {
        nroReferenciaPago_ahbb: string;
        fechaFactura_ahbb: Date | null;
        total_ahbb: import("@prisma/client-runtime-utils").Decimal;
        estadoFactura_ahbb: string;
        id_factura_ahbb: number;
        id_usuario_factura_ahbb: number;
    })[]>;
    cambiarEstado_ahbb(id_ahbb: number, datos_ahbb: {
        estado: string;
    }): Promise<{
        nroReferenciaPago_ahbb: string;
        fechaFactura_ahbb: Date | null;
        total_ahbb: import("@prisma/client-runtime-utils").Decimal;
        estadoFactura_ahbb: string;
        id_factura_ahbb: number;
        id_usuario_factura_ahbb: number;
    }>;
    descargarPdf_ahbb(id_ahbb: number, req_ahbb: RequestConUsuario_ahbb, res_ahbb: any): Promise<void>;
}
