import { Injectable, Logger, OnModuleInit } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { PrismaService } from '../prisma.service';

@Injectable()
export class BootstrapService_ahbb implements OnModuleInit {
  private readonly logger = new Logger(BootstrapService_ahbb.name);

  constructor(private readonly prisma_ahbb: PrismaService) {}

  async onModuleInit() {
    this.logger.log('Preparando datos base de la aplicacion...');

    try {
      await this.sembrarUsuariosBase_ahbb();
      await this.sembrarCatalogoBase_ahbb();
      this.logger.log('Datos base listos.');
    } catch (error) {
      const mensaje_ahbb =
        error instanceof Error ? error.message : 'Error desconocido';

      this.logger.error(`Fallo preparando datos base: ${mensaje_ahbb}`);
      throw error;
    }
  }

  private async sembrarUsuariosBase_ahbb() {
    const totalUsuarios_ahbb = await this.prisma_ahbb.td_usuario_ahbb.count();
    if (totalUsuarios_ahbb > 0) {
      this.logger.log(
        `Usuarios iniciales listos. Registros existentes: ${totalUsuarios_ahbb}.`,
      );
      return;
    }

    const [adminHash_ahbb, profesorHash_ahbb, alumnoHash_ahbb] =
      await Promise.all([
        bcrypt.hash('admin123', 10),
        bcrypt.hash('prof123', 10),
        bcrypt.hash('alum123', 10),
      ]);

    const [admin_ahbb, profesor_ahbb, alumno_ahbb] =
      await this.prisma_ahbb.$transaction([
        this.prisma_ahbb.td_usuario_ahbb.create({
          data: {
            cedula_ahbb: 'V-10000001',
            nombre_ahbb: 'Administrador',
            apellido_ahbb: 'H&B',
            correo_ahbb: 'admin@academiah-b.edu',
            contrasena_ahbb: adminHash_ahbb,
            rol_ahbb: 'ADMIN',
            estadoCuenta_ahbb: 'ACTIVO',
          },
        }),
        this.prisma_ahbb.td_usuario_ahbb.create({
          data: {
            cedula_ahbb: 'V-10000002',
            nombre_ahbb: 'Carlos',
            apellido_ahbb: 'Mendez',
            correo_ahbb: 'carlos@academiah-b.edu',
            contrasena_ahbb: profesorHash_ahbb,
            rol_ahbb: 'PROFESOR',
            estadoCuenta_ahbb: 'ACTIVO',
          },
        }),
        this.prisma_ahbb.td_usuario_ahbb.create({
          data: {
            cedula_ahbb: 'V-10000003',
            nombre_ahbb: 'Maria',
            apellido_ahbb: 'Garcia',
            correo_ahbb: 'maria@estudiante.edu',
            contrasena_ahbb: alumnoHash_ahbb,
            rol_ahbb: 'ALUMNO',
            estadoCuenta_ahbb: 'ACTIVO',
            requiereCambioContrasena_ahbb: true,
          },
        }),
      ]);

    this.logger.log('Usuarios iniciales creados: admin, profesor y alumno.');

    const totalCursos_ahbb = await this.prisma_ahbb.td_curso_ahbb.count();
    if (totalCursos_ahbb === 0) {
      await this.prisma_ahbb.td_curso_ahbb.create({
        data: {
          nombre_ahbb: 'Fundamentos de JavaScript',
          tematica_ahbb: 'JavaScript inicial',
          descripcion_ahbb: 'Curso introductorio de JavaScript.',
          temarioTexto_ahbb:
            '1. Variables\n2. Funciones\n3. Objetos\n4. Arrays\n5. DOM y eventos',
          fechaInicio_ahbb: new Date(),
          fechaFin_ahbb: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000),
          fechaDuracion_ahbb: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000),
          horasDefinidas_ahbb: 40,
          diasDefinidos_ahbb: 20,
          topeEstudiantes_ahbb: 5,
          isPublished_ahbb: true,
          id_usuario_curso_ahbb: profesor_ahbb.id_usuario_ahbb,
          horarios: {
            create: [
              {
                diaSemana_ahbb: 'LUNES',
                horaInicio_ahbb: '09:00',
                horaFin_ahbb: '11:00',
              },
              {
                diaSemana_ahbb: 'MIERCOLES',
                horaInicio_ahbb: '09:00',
                horaFin_ahbb: '11:00',
              },
            ],
          },
        },
      });

      this.logger.log(
        'Curso inicial creado: Fundamentos de JavaScript.',
      );
      return;
    }

    this.logger.log(
      `Curso inicial ya existente. Registros actuales: ${totalCursos_ahbb}.`,
    );
  }

  private async sembrarCatalogoBase_ahbb() {
    const totalProductos_ahbb = await this.prisma_ahbb.td_producto_ahbb.count();
    if (totalProductos_ahbb > 0) {
      this.logger.log(
        `Catalogo de tienda listo. Productos existentes: ${totalProductos_ahbb}.`,
      );
      return;
    }

    await this.prisma_ahbb.td_producto_ahbb.createMany({
      data: [
        {
          nombre_ahbb: 'Sueter Azul H&B',
          descripcion_ahbb:
            'Sueter comodo, ideal para el frio en los pasillos de la academia. Color Azul Oficial H&B.',
          precio_ahbb: 25,
          stock_ahbb: 50,
          categoria_ahbb: 'ropa',
          imagen_ahbb: '/img/SueterH&B_Azul.jpg',
          estado_producto_ahbb: 'activo',
        },
        {
          nombre_ahbb: 'Sueter Rojo H&B',
          descripcion_ahbb:
            'Sueter comodo, ideal para el frio en los pasillos de la academia. Color Rojo H&B.',
          precio_ahbb: 25,
          stock_ahbb: 45,
          categoria_ahbb: 'ropa',
          imagen_ahbb: '/img/SueterH&B_Rojo.jpg',
          estado_producto_ahbb: 'activo',
        },
        {
          nombre_ahbb: 'Sueter Mostaza H&B',
          descripcion_ahbb: 'Sueter comodo estilo urbano. Color Mostaza.',
          precio_ahbb: 25,
          stock_ahbb: 30,
          categoria_ahbb: 'ropa',
          imagen_ahbb: '/img/SueterH&B_mostaza.jpg',
          estado_producto_ahbb: 'activo',
        },
        {
          nombre_ahbb: 'Franela Azul H&B',
          descripcion_ahbb:
            'Franela fresca 100% algodon. Color Azul Oficial H&B.',
          precio_ahbb: 15,
          stock_ahbb: 100,
          categoria_ahbb: 'ropa',
          imagen_ahbb: '/img/franelaH&B_Azul.jpg',
          estado_producto_ahbb: 'activo',
        },
        {
          nombre_ahbb: 'Franela Roja H&B',
          descripcion_ahbb:
            'Franela fresca 100% algodon. Color Rojo Vibrante.',
          precio_ahbb: 15,
          stock_ahbb: 100,
          categoria_ahbb: 'ropa',
          imagen_ahbb: '/img/franelaH&B_Rojo.jpg',
          estado_producto_ahbb: 'activo',
        },
        {
          nombre_ahbb: 'Franela Mostaza H&B',
          descripcion_ahbb: 'Franela fresca 100% algodon. Color Mostaza.',
          precio_ahbb: 15,
          stock_ahbb: 100,
          categoria_ahbb: 'ropa',
          imagen_ahbb: '/img/franelaH&B_mostaza.jpg',
          estado_producto_ahbb: 'activo',
        },
        {
          nombre_ahbb: 'Lapicero H&B Azul',
          descripcion_ahbb:
            'Boligrafo oficial de la Academia H&B. Cuerpo Azul.',
          precio_ahbb: 2.5,
          stock_ahbb: 300,
          categoria_ahbb: 'papeleria',
          imagen_ahbb: '/img/lapiceroH&B_Azul.jpg',
          estado_producto_ahbb: 'activo',
        },
        {
          nombre_ahbb: 'Lapicero H&B Rojo',
          descripcion_ahbb:
            'Boligrafo oficial de la Academia H&B. Cuerpo Rojo.',
          precio_ahbb: 2.5,
          stock_ahbb: 300,
          categoria_ahbb: 'papeleria',
          imagen_ahbb: '/img/lapiceroH&B_Rojo.jpg',
          estado_producto_ahbb: 'activo',
        },
        {
          nombre_ahbb: 'Lapicero H&B Mostaza',
          descripcion_ahbb:
            'Boligrafo oficial de la Academia H&B. Cuerpo Mostaza.',
          precio_ahbb: 2.5,
          stock_ahbb: 300,
          categoria_ahbb: 'papeleria',
          imagen_ahbb: '/img/lapiceroH&B_mostaza.jpg',
          estado_producto_ahbb: 'activo',
        },
      ],
    });

    this.logger.log('Tienda poblada con 9 productos iniciales.');
  }
}
