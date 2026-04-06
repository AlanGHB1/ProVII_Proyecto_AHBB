import { FavoritosService_ahbb } from './favoritos.service_ahbb';
import type { RequestConUsuario_ahbb } from '../common/interfaces/request-usuario.interface_ahbb';
export declare class FavoritosController_ahbb {
    private readonly favoritosService_ahbb;
    constructor(favoritosService_ahbb: FavoritosService_ahbb);
    obtenerFavoritos_ahbb(req_ahbb: RequestConUsuario_ahbb): Promise<({
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
        fechaAgregado_ahbb: Date | null;
        id_favorito_ahbb: number;
        id_usuario_favorito_ahbb: number;
        id_producto_favorito_ahbb: number;
    })[]>;
    obtenerIds_ahbb(req_ahbb: RequestConUsuario_ahbb): Promise<number[]>;
    toggleFavorito_ahbb(idProducto_ahbb: number, req_ahbb: RequestConUsuario_ahbb): Promise<{
        esFavorito: boolean;
    }>;
    eliminar_ahbb(idProducto_ahbb: number, req_ahbb: RequestConUsuario_ahbb): Promise<{
        exito: boolean;
    }>;
}
