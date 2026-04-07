import { DashboardService } from './dashboard.service';
import type { RequestConUsuario_ahbb } from '../common/interfaces/request-usuario.interface_ahbb';
export declare class DashboardController {
    private readonly dashboardService_ahbb;
    constructor(dashboardService_ahbb: DashboardService);
    obtenerEstadisticas_ahbb(request_ahbb: RequestConUsuario_ahbb): Promise<{
        totalCursos: number;
        cursosActivos: number;
        totalEstudiantes: number;
        alumnosPendientes: number;
        cursosInscritos?: undefined;
        certificados?: undefined;
    } | {
        totalCursos: number;
        cursosActivos: number;
        totalEstudiantes: number;
        alumnosPendientes?: undefined;
        cursosInscritos?: undefined;
        certificados?: undefined;
    } | {
        cursosInscritos: number;
        certificados: number;
        totalCursos?: undefined;
        cursosActivos?: undefined;
        totalEstudiantes?: undefined;
        alumnosPendientes?: undefined;
    } | {
        totalCursos?: undefined;
        cursosActivos?: undefined;
        totalEstudiantes?: undefined;
        alumnosPendientes?: undefined;
        cursosInscritos?: undefined;
        certificados?: undefined;
    }>;
}
