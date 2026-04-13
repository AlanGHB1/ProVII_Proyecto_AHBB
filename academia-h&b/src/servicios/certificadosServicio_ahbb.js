import { apiCliente_ahbb } from './api_ahbb';

export const emitirCertificado_ahbb = async (idInscripcion_ahbb) => {
  try {
    const respuesta_ahbb = await apiCliente_ahbb.post(
      `/certificados/emitir/${idInscripcion_ahbb}`,
    );
    return respuesta_ahbb.data;
  } catch (error_ahbb) {
    return {
      exito: false,
      mensaje:
        error_ahbb.response?.data?.message ?? 'Error al emitir certificado.',
    };
  }
};

export const emitirCertificadosMasivo_ahbb = async (idCurso_ahbb) => {
  try {
    const respuesta_ahbb = await apiCliente_ahbb.post(
      `/certificados/emitir-masivo/${idCurso_ahbb}`,
    );
    return respuesta_ahbb.data;
  } catch (error_ahbb) {
    return {
      exito: false,
      mensaje:
        error_ahbb.response?.data?.message ??
        'Error al emitir certificados masivos.',
    };
  }
};

export const obtenerMisCertificados_ahbb = async (idUsuario_ahbb) => {
  const respuesta_ahbb = await apiCliente_ahbb.get(
    `/certificados/alumno/${idUsuario_ahbb}`,
  );
  return respuesta_ahbb.data;
};

export const obtenerCertificadosCurso_ahbb = async (idCurso_ahbb) => {
  const respuesta_ahbb = await apiCliente_ahbb.get(
    `/certificados/curso/${idCurso_ahbb}`,
  );
  return respuesta_ahbb.data;
};

export const obtenerTodosCertificados_ahbb = async () => {
  const respuesta_ahbb = await apiCliente_ahbb.get('/certificados');
  return respuesta_ahbb.data;
};

export const descargarPdfCertificado_ahbb = async (idCertificado_ahbb) => {
  const respuesta_ahbb = await apiCliente_ahbb.get(
    `/certificados/${idCertificado_ahbb}/pdf`,
    { responseType: 'blob' },
  );
  // Crear URL y abrir en nueva pestaña
  const blob_ahbb = new Blob([respuesta_ahbb.data], {
    type: 'application/pdf',
  });
  const url_ahbb = window.URL.createObjectURL(blob_ahbb);
  window.open(url_ahbb, '_blank');
  return true;
};

export const anularCertificado_ahbb = async (idCertificado_ahbb) => {
  try {
    const respuesta_ahbb = await apiCliente_ahbb.delete(
      `/certificados/${idCertificado_ahbb}`,
    );
    return respuesta_ahbb.data;
  } catch (error_ahbb) {
    return {
      exito: false,
      mensaje:
        error_ahbb.response?.data?.message ?? 'Error al anular certificado.',
    };
  }
};

export const verificarCertificado_ahbb = async (idCertificado_ahbb) => {
  const respuesta_ahbb = await apiCliente_ahbb.get(
    `/certificados/verificar/${idCertificado_ahbb}`,
  );
  return respuesta_ahbb.data;
};
