import { PrismaService } from './prisma.service';
export declare class AppService {
    private readonly prisma_ahbb;
    constructor(prisma_ahbb: PrismaService);
    getHello(): string;
    getDashboardStats(userId: number, rol: string): Promise<{
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
