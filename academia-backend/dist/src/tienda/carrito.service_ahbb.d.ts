import { PrismaService } from '../prisma.service';
export declare class CarritoService_ahbb {
    private readonly prisma_ahbb;
    constructor(prisma_ahbb: PrismaService);
    obtenerCarrito_ahbb(id_usuario_ahbb: number): Promise<({
        producto_ahbb: {
            nombre_ahbb: string;
            creadoEn_ahbb: Date | null;
            actualizadoEn_ahbb: Date | null;
            descripcion_ahbb: string | null;
            id_producto_ahbb: number;
            precio_ahbb: import("@prisma/client-runtime-utils").Decimal;
            stock_ahbb: number;
            categoria_ahbb: string;
            imagen_ahbb: string | null;
            estado_producto_ahbb: string;
        };
    } & {
        id_producto_carrito_ahbb: number;
        id_carrito_ahbb: number;
        cantidad_ahbb: number;
        fechaAgregado_ahbb: Date | null;
        id_usuario_carrito_ahbb: number;
    })[]>;
    agregarAlCarrito_ahbb(id_usuario_ahbb: number, id_producto_ahbb: number, cantidad_ahbb?: number): Promise<{
        producto_ahbb: {
            nombre_ahbb: string;
            creadoEn_ahbb: Date | null;
            actualizadoEn_ahbb: Date | null;
            descripcion_ahbb: string | null;
            id_producto_ahbb: number;
            precio_ahbb: import("@prisma/client-runtime-utils").Decimal;
            stock_ahbb: number;
            categoria_ahbb: string;
            imagen_ahbb: string | null;
            estado_producto_ahbb: string;
        };
    } & {
        id_producto_carrito_ahbb: number;
        id_carrito_ahbb: number;
        cantidad_ahbb: number;
        fechaAgregado_ahbb: Date | null;
        id_usuario_carrito_ahbb: number;
    }>;
    actualizarCantidad_ahbb(id_carrito_ahbb: number, id_usuario_ahbb: number, cantidad_ahbb: number): Promise<{
        producto_ahbb: {
            nombre_ahbb: string;
            creadoEn_ahbb: Date | null;
            actualizadoEn_ahbb: Date | null;
            descripcion_ahbb: string | null;
            id_producto_ahbb: number;
            precio_ahbb: import("@prisma/client-runtime-utils").Decimal;
            stock_ahbb: number;
            categoria_ahbb: string;
            imagen_ahbb: string | null;
            estado_producto_ahbb: string;
        };
    } & {
        id_producto_carrito_ahbb: number;
        id_carrito_ahbb: number;
        cantidad_ahbb: number;
        fechaAgregado_ahbb: Date | null;
        id_usuario_carrito_ahbb: number;
    }>;
    eliminarItem_ahbb(id_carrito_ahbb: number, id_usuario_ahbb: number): Promise<{
        exito: boolean;
    }>;
    vaciarCarrito_ahbb(id_usuario_ahbb: number): Promise<{
        exito: boolean;
    }>;
}
