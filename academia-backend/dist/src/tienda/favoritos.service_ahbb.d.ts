import { PrismaService } from '../prisma.service';
export declare class FavoritosService_ahbb {
    private readonly prisma_ahbb;
    constructor(prisma_ahbb: PrismaService);
    obtenerFavoritos_ahbb(id_usuario_ahbb: number): Promise<({
        producto_ahbb: {
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
        };
    } & {
        fechaAgregado_ahbb: Date | null;
        id_producto_favorito_ahbb: number;
        id_favorito_ahbb: number;
        id_usuario_favorito_ahbb: number;
    })[]>;
    toggleFavorito_ahbb(id_usuario_ahbb: number, id_producto_ahbb: number): Promise<{
        esFavorito: boolean;
    }>;
    eliminarFavorito_ahbb(id_usuario_ahbb: number, id_producto_ahbb: number): Promise<{
        exito: boolean;
    }>;
    obtenerIdsFavoritos_ahbb(id_usuario_ahbb: number): Promise<number[]>;
}
