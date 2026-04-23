import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
  HttpStatus,
  Logger,
} from '@nestjs/common';
import { Request, Response } from 'express';

/**
 * Mapa de campos de base de datos a mensajes amigables para el usuario.
 * Se utiliza cuando Prisma lanza un error P2002 (violación de restricción única).
 */
const CAMPOS_UNICOS_AHBB: Record<string, string> = {
  correo_ahbb: 'Ya existe un usuario con ese correo electrónico.',
  cedula_ahbb: 'Ya existe un usuario con esa cédula de identidad.',
  referenciaPagoMovil_ahbb: 'Esa referencia de pago ya fue utilizada por otro usuario.',
};

@Catch()
export class HttpExceptionFilter_ahbb implements ExceptionFilter {
  private readonly logger_ahbb = new Logger('HttpExceptionFilter');

  catch(exception: any, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();

    // Manejo especializado para errores de restricción única de Prisma (P2002)
    if (exception?.code === 'P2002') {
      const camposViolados_ahbb: string[] = exception.meta?.target ?? [];
      const mensajeAmigable_ahbb = camposViolados_ahbb
        .map((campo_ahbb: string) => CAMPOS_UNICOS_AHBB[campo_ahbb])
        .find((msg_ahbb: string | undefined) => !!msg_ahbb)
        ?? 'Ya existe un registro con esos datos. Verifica la información e intenta de nuevo.';

      this.logger_ahbb.warn(
        `${request.method} ${request.url} 409 - Unique constraint: [${camposViolados_ahbb.join(', ')}]`,
      );

      response.status(HttpStatus.CONFLICT).json({
        exito: false,
        statusCode: HttpStatus.CONFLICT,
        timestamp: new Date().toISOString(),
        path: request.url,
        mensaje: mensajeAmigable_ahbb,
        error: 'Conflicto de datos',
      });
      return;
    }

    const status =
      exception instanceof HttpException
        ? exception.getStatus()
        : HttpStatus.INTERNAL_SERVER_ERROR;

    const errorResponse =
      exception instanceof HttpException
        ? exception.getResponse()
        : { message: 'Internal server error', error: 'Internal Server Error' };

    const message =
      typeof errorResponse === 'object' && (errorResponse as any).message
        ? (errorResponse as any).message
        : typeof errorResponse === 'object' && (errorResponse as any).mensaje
          ? (errorResponse as any).mensaje
          : errorResponse;

    const error =
      typeof errorResponse === 'object' && (errorResponse as any).error
        ? (errorResponse as any).error
        : typeof exception === 'string'
          ? exception
          : exception.name || 'Error';

    if (status >= 500) {
      this.logger_ahbb.error(
        `${request.method} ${request.url} ${status} - Error: ${message}`,
        exception.stack,
      );
    } else {
      this.logger_ahbb.warn(
        `${request.method} ${request.url} ${status} - Message: ${message}`,
      );
    }

    response.status(status).json({
      exito: false,
      statusCode: status,
      timestamp: new Date().toISOString(),
      path: request.url,
      mensaje: Array.isArray(message) ? message[0] : message,
      error: error,
    });
  }
}
