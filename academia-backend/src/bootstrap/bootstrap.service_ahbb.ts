import { Injectable, OnModuleInit } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { PrismaService } from '../prisma.service';

@Injectable()
export class BootstrapService_ahbb implements OnModuleInit {
  constructor(private readonly prisma_ahbb: PrismaService) {}

  async onModuleInit() {
    await this.sembrarUsuariosBase_ahbb();
  }

  private async sembrarUsuariosBase_ahbb() {
    const totalUsuarios_ahbb = await this.prisma_ahbb.td_usuario_ahbb.count();
    if (totalUsuarios_ahbb > 0) {
      return;
    }

    const [adminHash_ahbb, profesorHash_ahbb, alumnoHash_ahbb] = await Promise.all([
      bcrypt.hash('admin123', 10),
      bcrypt.hash('prof123', 10),
      bcrypt.hash('alum123', 10),
    ]);

    const [admin_ahbb, profesor_ahbb, alumno_ahbb] = await this.prisma_ahbb.$transaction([
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
    }
  }
}
