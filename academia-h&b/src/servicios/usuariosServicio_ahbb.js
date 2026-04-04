import { apiCliente_ahbb } from './api_ahbb';

export const obtenerUsuariosPorRol_ahbb = async (rol_ahbb) => {
  const parametros_ahbb = rol_ahbb ? { params: { rol: rol_ahbb } } : {};
  const respuesta_ahbb = await apiCliente_ahbb.get('/usuarios', parametros_ahbb);
  return respuesta_ahbb.data;
};

export const obtenerUsuarioPorId_ahbb = async (id_ahbb) => {
  try {
    const respuesta_ahbb = await apiCliente_ahbb.get(`/usuarios/${id_ahbb}`);
    return respuesta_ahbb.data;
  } catch {
    return null;
  }
};

export const actualizarEstadoUsuario_ahbb = async (id_ahbb, estado_ahbb) => {
  try {
    await apiCliente_ahbb.patch(`/usuarios/${id_ahbb}/estado`, {
      estadoCuenta_ahbb: estado_ahbb,
    });
    return true;
  } catch {
    return false;
  }
};

export const actualizarPerfilUsuario_ahbb = async (id_ahbb, datosActualizar_ahbb) => {
  try {
    await apiCliente_ahbb.patch(`/usuarios/${id_ahbb}`, datosActualizar_ahbb);
    return true;
  } catch {
    return false;
  }
};

export const eliminarUsuario_ahbb = async (id_ahbb) => {
  try {
    await apiCliente_ahbb.delete(`/usuarios/${id_ahbb}`);
    return true;
  } catch {
    return false;
  }
};

export const guardarFirmaDigitalUsuario_ahbb = async (id_ahbb, imagenBase64_ahbb) => {
  const respuesta_ahbb = await apiCliente_ahbb.post(
    `/usuarios/${id_ahbb}/firma-digital`,
    { imagenBase64_ahbb },
  );
  return respuesta_ahbb.data;
};
