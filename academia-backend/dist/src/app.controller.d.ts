import { AppService } from './app.service';
import type { RequestConUsuario_ahbb } from './common/interfaces/request-usuario.interface_ahbb';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getHello(): string;
    getDashboardStats(request_ahbb: RequestConUsuario_ahbb): Promise<{
        totalCursos: number;
        cursosActivos: number;
        cursosPendientes: number;
        totalEstudiantes: number;
        alumnosPendientes: number;
        cursosInscritos?: undefined;
        certificados?: undefined;
    } | {
        totalCursos: number;
        cursosActivos: number;
        totalEstudiantes: number;
        cursosPendientes?: undefined;
        alumnosPendientes?: undefined;
        cursosInscritos?: undefined;
        certificados?: undefined;
    } | {
        cursosInscritos: number;
        certificados: number;
        totalCursos?: undefined;
        cursosActivos?: undefined;
        cursosPendientes?: undefined;
        totalEstudiantes?: undefined;
        alumnosPendientes?: undefined;
    } | {
        totalCursos?: undefined;
        cursosActivos?: undefined;
        cursosPendientes?: undefined;
        totalEstudiantes?: undefined;
        alumnosPendientes?: undefined;
        cursosInscritos?: undefined;
        certificados?: undefined;
    }>;
}
