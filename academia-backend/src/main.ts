import 'dotenv/config';
import { NestFactory } from '@nestjs/core';
import { join } from 'path';
import * as express from 'express';
import { AppModule } from './app.module';
import { TunnelService_ahbb } from './common/tunnel/tunnel.service_ahbb';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const puerto = Number(process.env.PORT) || 3000;

  // CORS dinámico: acepta localhost, frontend local y la URL del túnel
  app.enableCors({
    origin: (origin, callback) => {
      // Permitir peticiones sin origin (Postman, scripts, etc.)
      if (!origin) return callback(null, true);

      // Orígenes siempre permitidos
      const origenesPermitidos_ahbb = [
        'http://localhost:9000',
        'http://localhost:9200',
        `http://localhost:${puerto}`,
      ];

      // También permitir la URL del túnel activo
      const tunnelService = app.get(TunnelService_ahbb);
      const urlTunel = tunnelService.getUrlPublica_ahbb();
      if (urlTunel) {
        origenesPermitidos_ahbb.push(urlTunel);
      }

      if (origenesPermitidos_ahbb.includes(origin) || origin.endsWith('.loca.lt')) {
        return callback(null, true);
      }

      // En desarrollo, ser permisivo
      return callback(null, true);
    },
    credentials: true,
  });

  app.setGlobalPrefix('api');
  app.use('/uploads', express.static(join(process.cwd(), 'uploads')));

  await app.listen(puerto);

  // Después de que el servidor esté escuchando, iniciamos el túnel
  const tunnelService = app.get(TunnelService_ahbb);
  await tunnelService.iniciarTunel_ahbb(puerto);
}
bootstrap();
