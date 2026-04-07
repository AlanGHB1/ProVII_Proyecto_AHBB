import { CarritoService_ahbb } from './carrito.service_ahbb';
import type { RequestConUsuario_ahbb } from '../common/interfaces/request-usuario.interface_ahbb';
export declare class CarritoController_ahbb {
    private readonly carritoService_ahbb;
    constructor(carritoService_ahbb: CarritoService_ahbb);
    obtenerCarrito_ahbb(req_ahbb: RequestConUsuario_ahbb): Promise<({
        producto_ahbb: {
            creadoEn_ahbb: Date | null;
            actualizadoEn_ahbb: Date | null;
            nombre_ahbb: string;
            descripcion_ahbb: string | null;
            id_producto_ahbb: number;
            precio_ahbb: import("@prisma/client-runtime-utils").Decimal;
            stock_ahbb: number;
            categoria_ahbb: string;
            imagen_ahbb: string | null;
            estado_producto_ahbb: string;
        };
    } & {
        id_carrito_ahbb: number;
        cantidad_ahbb: number;
        fechaAgregado_ahbb: Date | null;
        id_usuario_carrito_ahbb: number;
        id_producto_carrito_ahbb: number;
    })[]>;
    agregar_ahbb(req_ahbb: RequestConUsuario_ahbb, datos_ahbb: {
        idProducto: number;
        cantidad?: number;
    }): Promise<{
        producto_ahbb: {
            creadoEn_ahbb: Date | null;
            actualizadoEn_ahbb: Date | null;
            nombre_ahbb: string;
            descripcion_ahbb: string | null;
            id_producto_ahbb: number;
            precio_ahbb: import("@prisma/client-runtime-utils").Decimal;
            stock_ahbb: number;
            categoria_ahbb: string;
            imagen_ahbb: string | null;
            estado_producto_ahbb: string;
        };
    } & {
        id_carrito_ahbb: number;
        cantidad_ahbb: number;
        fechaAgregado_ahbb: Date | null;
        id_usuario_carrito_ahbb: number;
        id_producto_carrito_ahbb: number;
    }>;
    actualizarCantidad_ahbb(id_ahbb: number, req_ahbb: RequestConUsuario_ahbb, datos_ahbb: {
        cantidad: number;
    }): Promise<{
        producto_ahbb: {
            creadoEn_ahbb: Date | null;
            actualizadoEn_ahbb: Date | null;
            nombre_ahbb: string;
            descripcion_ahbb: string | null;
            id_producto_ahbb: number;
            precio_ahbb: import("@prisma/client-runtime-utils").Decimal;
            stock_ahbb: number;
            categoria_ahbb: string;
            imagen_ahbb: string | null;
            estado_producto_ahbb: string;
        };
    } & {
        id_carrito_ahbb: number;
        cantidad_ahbb: number;
        fechaAgregado_ahbb: Date | null;
        id_usuario_carrito_ahbb: number;
        id_producto_carrito_ahbb: number;
    }>;
    eliminarItem_ahbb(id_ahbb: number, req_ahbb: RequestConUsuario_ahbb): Promise<{
        exito: boolean;
    }>;
    vaciarCarrito_ahbb(req_ahbb: RequestConUsuario_ahbb): Promise<{
        exito: boolean;
    }>;
}
