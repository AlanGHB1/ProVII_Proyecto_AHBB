import { apiCliente_ahbb } from './api_ahbb';

const construirFechasCurso_ahbb = (datosCurso_ahbb) => {
  const fechaInicio_ahbb = datosCurso_ahbb.fechaInicio ?? new Date().toISOString();
  const fechaFin_ahbb =
    datosCurso_ahbb.fechaFin ??
    new Date(
      Date.now() + Number(datosCurso_ahbb.cantidadDias ?? 1) * 24 * 60 * 60 * 1000,
    ).toISOString();

  return { fechaInicio_ahbb, fechaFin_ahbb };
};

const mapearPayloadCursoApi_ahbb = (datosCurso_ahbb) => {
  const { fechaInicio_ahbb, fechaFin_ahbb } = construirFechasCurso_ahbb(datosCurso_ahbb);

  return {
    nombre_ahbb: datosCurso_ahbb.nombre,
    tematica_ahbb: datosCurso_ahbb.descripcion || datosCurso_ahbb.nombre,
    descripcion_ahbb: datosCurso_ahbb.descripcion,
    temarioTexto_ahbb: datosCurso_ahbb.temario,
    fechaInicio_ahbb,
    fechaFin_ahbb,
    horasDefinidas_ahbb: Number(datosCurso_ahbb.duracionHoras ?? 0),
    diasDefinidos_ahbb: Number(datosCurso_ahbb.cantidadDias ?? 0),
    topeEstudiantes_ahbb: Number(datosCurso_ahbb.topeEstudiantes ?? 5),
    id_curso_curso_ahbb: datosCurso_ahbb.tienePrelacion
      ? datosCurso_ahbb.prelacionCursoId
      : null,
    isPublished_ahbb: datosCurso_ahbb.estatus === 'activo',
    horarios_ahbb: (datosCurso_ahbb.dias ?? []).map((dia_ahbb) => ({
      diaSemana_ahbb: dia_ahbb,
      horaInicio_ahbb: datosCurso_ahbb.horaInicio,
      horaFin_ahbb: datosCurso_ahbb.horaFin,
    })),
  };
};

export const obtenerCursos_ahbb = async () => {
  const respuesta_ahbb = await apiCliente_ahbb.get('/cursos');
  return respuesta_ahbb.data;
};

export const obtenerCursoPorId_ahbb = async (id_ahbb) => {
  try {
    const respuesta_ahbb = await apiCliente_ahbb.get(`/cursos/${id_ahbb}`);
    return respuesta_ahbb.data;
  } catch {
    return null;
  }
};

export const crearCurso_ahbb = async (datosCurso_ahbb) => {
  const respuesta_ahbb = await apiCliente_ahbb.post(
    '/cursos',
    mapearPayloadCursoApi_ahbb(datosCurso_ahbb),
  );
  return respuesta_ahbb.data;
};

export const actualizarCurso_ahbb = async (id_ahbb, datosCurso_ahbb) => {
  try {
    await apiCliente_ahbb.put(`/cursos/${id_ahbb}`, mapearPayloadCursoApi_ahbb(datosCurso_ahbb));
    return true;
  } catch {
    return false;
  }
};

export const eliminarCurso_ahbb = async (id_ahbb) => {
  try {
    await apiCliente_ahbb.delete(`/cursos/${id_ahbb}`);
    return true;
  } catch {
    return false;
  }
};

export const inicializarCursos_ahbb = async () => {
  return obtenerCursos_ahbb();
};
