import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma.service';
import { UsuariosModule } from './usuarios/usuarios.module';
import { AuthModule } from './auth/auth.module';
import { CursosModule } from './cursos/cursos.module';
import { InscripcionesModule_ahbb } from './inscripciones/inscripciones.module';
import { TiendaModule_ahbb } from './tienda/tienda.module_ahbb';
import { BootstrapService_ahbb } from './bootstrap/bootstrap.service_ahbb';

@Module({
  imports: [UsuariosModule, AuthModule, CursosModule, InscripcionesModule_ahbb, TiendaModule_ahbb],
  controllers: [AppController],
  providers: [AppService, PrismaService, BootstrapService_ahbb],
})
export class AppModule {}
