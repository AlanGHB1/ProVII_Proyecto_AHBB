import { PrismaService } from '../prisma.service';
export declare class DashboardService {
    private readonly prisma_ahbb;
    constructor(prisma_ahbb: PrismaService);
    getDashboardStats_ahbb(userId_ahbb: number, rol_ahbb: string): Promise<{
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
