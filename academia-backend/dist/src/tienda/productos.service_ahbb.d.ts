import { PrismaService } from '../prisma.service';
export declare class ProductosService_ahbb {
    private readonly prisma_ahbb;
    constructor(prisma_ahbb: PrismaService);
    obtenerTodos_ahbb(filtros_ahbb?: {
        categoria?: string;
        busqueda?: string;
        estado?: string;
    }): Promise<{
        id_producto_ahbb: number;
        nombre_ahbb: string;
        descripcion_ahbb: string | null;
        precio_ahbb: import("@prisma/client-runtime-utils").Decimal;
        stock_ahbb: number;
        categoria_ahbb: string;
        imagen_ahbb: string | null;
        estado_producto_ahbb: string;
        creadoEn_ahbb: Date | null;
        actualizadoEn_ahbb: Date | null;
    }[]>;
    obtenerPorId_ahbb(id_producto_ahbb: number): Promise<{
        id_producto_ahbb: number;
        nombre_ahbb: string;
        descripcion_ahbb: string | null;
        precio_ahbb: import("@prisma/client-runtime-utils").Decimal;
        stock_ahbb: number;
        categoria_ahbb: string;
        imagen_ahbb: string | null;
        estado_producto_ahbb: string;
        creadoEn_ahbb: Date | null;
        actualizadoEn_ahbb: Date | null;
    }>;
    crear_ahbb(datos_ahbb: any): Promise<{
        id_producto_ahbb: number;
        nombre_ahbb: string;
        descripcion_ahbb: string | null;
        precio_ahbb: import("@prisma/client-runtime-utils").Decimal;
        stock_ahbb: number;
        categoria_ahbb: string;
        imagen_ahbb: string | null;
        estado_producto_ahbb: string;
        creadoEn_ahbb: Date | null;
        actualizadoEn_ahbb: Date | null;
    }>;
    actualizar_ahbb(id_producto_ahbb: number, datos_ahbb: any): Promise<{
        id_producto_ahbb: number;
        nombre_ahbb: string;
        descripcion_ahbb: string | null;
        precio_ahbb: import("@prisma/client-runtime-utils").Decimal;
        stock_ahbb: number;
        categoria_ahbb: string;
        imagen_ahbb: string | null;
        estado_producto_ahbb: string;
        creadoEn_ahbb: Date | null;
        actualizadoEn_ahbb: Date | null;
    }>;
    eliminar_ahbb(id_producto_ahbb: number): Promise<{
        exito: boolean;
    }>;
}
