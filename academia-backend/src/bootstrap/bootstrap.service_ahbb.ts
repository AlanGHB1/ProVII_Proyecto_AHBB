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
      // Intentamos sembrar usuarios. Si ya existen, la función retorna temprano.
      await this.sembrarUsuariosBase_ahbb();
      
      // Si llegamos aquí y no hay cursos, intentamos sembrar los cursos demo.
      const profesor_ahbb = await this.prisma_ahbb.td_usuario_ahbb.findFirst({ where: { rol_ahbb: 'PROFESOR' } });
      const alumno_ahbb = await this.prisma_ahbb.td_usuario_ahbb.findFirst({ where: { rol_ahbb: 'ALUMNO' } });

      if (profesor_ahbb && alumno_ahbb) {
        await this.sembrarCursosDemo_ahbb(profesor_ahbb.id_usuario_ahbb, alumno_ahbb.id_usuario_ahbb);
      }

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
            requiereCambioContrasena_ahbb: false,
          },
        }),
      ]);

    this.logger.log('Usuarios iniciales creados: admin, profesor y alumno.');
    
    // Inmediatamente después de crear usuarios, creamos los cursos demo
    // para asegurar que se creen en la misma transacción lógica (o secuencialmente)
    await this.sembrarCursosDemo_ahbb(profesor_ahbb.id_usuario_ahbb, alumno_ahbb.id_usuario_ahbb);
  }

  private async sembrarCursosDemo_ahbb(profesorId_ahbb: number, alumnoId_ahbb: number) {
    const totalCursos_ahbb = await this.prisma_ahbb.td_curso_ahbb.count();
    if (totalCursos_ahbb > 0) return;

    const hoy_ahbb = new Date();
    hoy_ahbb.setHours(12, 0, 0, 0);

    const cursos_ahbb = [
      {
        nombre: 'Orfebreria Ancestral - Finalizado',
        inicio: new Date('2026-02-09T12:00:00'), // Lunes
        dias: ['LUNES', 'MIERCOLES'],
        inscritos: true,
        desc: 'Curso completado con todas las clases evaluadas.'
      },
      {
        nombre: 'Joyeria de Autor - Finalizado',
        inicio: new Date('2026-03-03T12:00:00'), // Martes
        dias: ['MARTES', 'JUEVES'],
        inscritos: true,
        desc: 'Segundo ejemplo de curso finalizado.'
      },
      {
        nombre: 'Engaste de Gemas - Iniciado',
        inicio: new Date('2026-04-06T12:00:00'), // Lunes (Semana pasada)
        dias: ['LUNES', 'VIERNES'],
        inscritos: true,
        desc: 'Curso que comenzo hace poco y tiene alumnos.'
      },
      {
        nombre: 'Fundicion a la Cera Perdida - Iniciado',
        inicio: new Date('2026-04-13T12:00:00'), // Lunes (Hoy)
        dias: ['LUNES', 'MIERCOLES'],
        inscritos: true,
        desc: 'Curso que inicia el dia de hoy.'
      },
      {
        nombre: 'Diseño 3D (Matrix) - Activo (Proximo)',
        inicio: new Date('2026-04-22T12:00:00'), // Miércoles (Próxima semana)
        dias: ['MIERCOLES', 'VIERNES'],
        inscritos: false,
        desc: 'Curso publicado pero sin alumnos inscritos aun.'
      },
      {
        nombre: 'Marketing para Joyeros - Activo (Proximo)',
        inicio: new Date('2026-04-28T12:00:00'), // Martes (En 2 semanas)
        dias: ['MARTES', 'JUEVES'],
        inscritos: false,
        desc: 'Otro ejemplo de curso proximo sin alumnos.'
      }
    ];

    for (const c_ahbb of cursos_ahbb) {
      const curso_ahbb = await this.prisma_ahbb.td_curso_ahbb.create({
        data: {
          nombre_ahbb: c_ahbb.nombre,
          tematica_ahbb: 'Joyeria Especializada',
          descripcion_ahbb: c_ahbb.desc,
          temarioTexto_ahbb: '1. Teoria\n2. Practica\n3. Evaluacion',
          fechaInicio_ahbb: c_ahbb.inicio,
          horasDefinidas_ahbb: 40,
          diasDefinidos_ahbb: 14,
          topeEstudiantes_ahbb: 10,
          isPublished_ahbb: true,
          estadoAprobacion_ahbb: 'ACTIVO',
          id_usuario_curso_ahbb: profesorId_ahbb,
          horarios: {
            create: c_ahbb.dias.map(d => ({
              diaSemana_ahbb: d,
              horaInicio_ahbb: '08:00',
              horaFin_ahbb: '11:00'
            }))
          }
        }
      });

      const diasArr = c_ahbb.dias;
      const iniciosArr = c_ahbb.dias.map(() => '08:00');
      const finesArr = c_ahbb.dias.map(() => '11:00');

      await this.prisma_ahbb.$queryRaw`SELECT fn_generar_sesiones_curso_ahbb(
        ${curso_ahbb.id_curso_ahbb}::INT,
        ${c_ahbb.inicio.toISOString().split('T')[0]}::DATE,
        ${diasArr}::TEXT[],
        ${iniciosArr}::TEXT[],
        ${finesArr}::TEXT[],
        40::NUMERIC
      )`;

      if (c_ahbb.inscritos) {
        await this.prisma_ahbb.td_inscripcion_ahbb.create({
          data: {
            id_usuario_inscripcion_ahbb: alumnoId_ahbb,
            id_curso_inscripcion_ahbb: curso_ahbb.id_curso_ahbb,
            estatus_ahbb: 'INSCRITO'
          }
        });
      }
    }

    this.logger.log('Escenario demo (6 cursos coherentes) creado.');
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
