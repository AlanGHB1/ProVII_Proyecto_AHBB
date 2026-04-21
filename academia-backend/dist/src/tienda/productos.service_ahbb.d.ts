import { PrismaService } from '../prisma.service';
export declare class ProductosService_ahbb {
    private readonly prisma_ahbb;
    constructor(prisma_ahbb: PrismaService);
    private resolverEstadoProducto_ahbb;
    private obtenerProductoConDependencias_ahbb;
    obtenerTodos_ahbb(filtros_ahbb?: {
        categoria?: string;
        busqueda?: string;
        estado?: string;
    }): Promise<{
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
    }[]>;
    obtenerPorId_ahbb(id_producto_ahbb: number): Promise<{
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
    }>;
    crear_ahbb(datos_ahbb: any): Promise<{
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
    }>;
    actualizar_ahbb(id_producto_ahbb: number, datos_ahbb: any): Promise<{
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
    }>;
    eliminar_ahbb(id_producto_ahbb: number): Promise<{
        exito: boolean;
        softDeleted: boolean;
        mensaje: string;
    }>;
}
