"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.proyectarSesionesCurso_ahbb = exports.calcularHorasBloqueHorario_ahbb = void 0;
const LIMITE_HORAS_POR_SESION_AHBB = 3;
const MINUTOS_POR_DIA_AHBB = 24 * 60;
const DIAS_SEMANA_ORDEN_AHBB = [
    'DOMINGO',
    'LUNES',
    'MARTES',
    'MIERCOLES',
    'JUEVES',
    'VIERNES',
    'SABADO',
];
const normalizarDiaSemana_ahbb = (diaSemana_ahbb) => diaSemana_ahbb
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .trim()
    .toUpperCase();
const obtenerMinutosHora_ahbb = (hora_ahbb) => {
    const [horas_ahbb, minutos_ahbb] = hora_ahbb.split(':').map(Number);
    return (horas_ahbb * 60) + (minutos_ahbb ?? 0);
};
const formatearHoraDesdeMinutos_ahbb = (minutos_ahbb) => {
    const minutosNormalizados_ahbb = ((minutos_ahbb % MINUTOS_POR_DIA_AHBB) + MINUTOS_POR_DIA_AHBB) %
        MINUTOS_POR_DIA_AHBB;
    const horas_ahbb = Math.floor(minutosNormalizados_ahbb / 60);
    const minutosRestantes_ahbb = minutosNormalizados_ahbb % 60;
    return `${String(horas_ahbb).padStart(2, '0')}:${String(minutosRestantes_ahbb).padStart(2, '0')}`;
};
const calcularHorasBloqueHorario_ahbb = (horaInicio_ahbb, horaFin_ahbb) => {
    const minutosInicio_ahbb = obtenerMinutosHora_ahbb(horaInicio_ahbb);
    let minutosFin_ahbb = obtenerMinutosHora_ahbb(horaFin_ahbb);
    if (horaFin_ahbb === '00:00' || horaFin_ahbb === '00:00:00') {
        minutosFin_ahbb = MINUTOS_POR_DIA_AHBB;
    }
    else if (minutosFin_ahbb <= minutosInicio_ahbb) {
        minutosFin_ahbb += MINUTOS_POR_DIA_AHBB;
    }
    return (minutosFin_ahbb - minutosInicio_ahbb) / 60;
};
exports.calcularHorasBloqueHorario_ahbb = calcularHorasBloqueHorario_ahbb;
const proyectarSesionesCurso_ahbb = ({ fechaInicio_ahbb, horarios_ahbb, totalHoras_ahbb, }) => {
    if (!Array.isArray(horarios_ahbb) || horarios_ahbb.length === 0) {
        return null;
    }
    if (!Number.isFinite(totalHoras_ahbb) || totalHoras_ahbb <= 0) {
        return null;
    }
    const horariosNormalizados_ahbb = horarios_ahbb
        .map((horario_ahbb) => {
        const horasBloque_ahbb = (0, exports.calcularHorasBloqueHorario_ahbb)(horario_ahbb.horaInicio_ahbb, horario_ahbb.horaFin_ahbb);
        if (horasBloque_ahbb <= 0) {
            return null;
        }
        return {
            diaSemana_ahbb: normalizarDiaSemana_ahbb(horario_ahbb.diaSemana_ahbb),
            horaInicio_ahbb: horario_ahbb.horaInicio_ahbb.slice(0, 5),
            horaFin_ahbb: horario_ahbb.horaFin_ahbb.slice(0, 5),
            horasSesionMaxima_ahbb: Math.min(horasBloque_ahbb, LIMITE_HORAS_POR_SESION_AHBB),
        };
    })
        .filter(Boolean);
    if (horariosNormalizados_ahbb.length === 0) {
        return null;
    }
    const sesiones_ahbb = [];
    let horasAcumuladas_ahbb = 0;
    let fechaActual_ahbb = new Date(fechaInicio_ahbb);
    fechaActual_ahbb.setHours(12, 0, 0, 0);
    let maxIteraciones_ahbb = 0;
    while (horasAcumuladas_ahbb < totalHoras_ahbb &&
        maxIteraciones_ahbb < 2000) {
        maxIteraciones_ahbb += 1;
        const diaSemanaActual_ahbb = DIAS_SEMANA_ORDEN_AHBB[fechaActual_ahbb.getDay()];
        const horarioDelDia_ahbb = horariosNormalizados_ahbb.find((horario_ahbb) => horario_ahbb.diaSemana_ahbb === diaSemanaActual_ahbb);
        if (horarioDelDia_ahbb) {
            const horasRestantes_ahbb = totalHoras_ahbb - horasAcumuladas_ahbb;
            const horasSesion_ahbb = Math.min(horarioDelDia_ahbb.horasSesionMaxima_ahbb, horasRestantes_ahbb, LIMITE_HORAS_POR_SESION_AHBB);
            if (horasSesion_ahbb > 0) {
                const minutosInicio_ahbb = obtenerMinutosHora_ahbb(horarioDelDia_ahbb.horaInicio_ahbb);
                const minutosFinReal_ahbb = minutosInicio_ahbb + Math.round(horasSesion_ahbb * 60);
                sesiones_ahbb.push({
                    nroSesion_ahbb: sesiones_ahbb.length + 1,
                    fechaSesion_ahbb: new Date(fechaActual_ahbb),
                    horaInicio_ahbb: horarioDelDia_ahbb.horaInicio_ahbb,
                    horaFin_ahbb: formatearHoraDesdeMinutos_ahbb(minutosFinReal_ahbb),
                    horasDuracion_ahbb: Number(horasSesion_ahbb.toFixed(2)),
                    diaSemana_ahbb: diaSemanaActual_ahbb,
                });
                horasAcumuladas_ahbb += horasSesion_ahbb;
            }
        }
        fechaActual_ahbb.setDate(fechaActual_ahbb.getDate() + 1);
    }
    if (sesiones_ahbb.length === 0) {
        return null;
    }
    return {
        fechaInicioReal_ahbb: sesiones_ahbb[0].fechaSesion_ahbb,
        fechaFinReal_ahbb: sesiones_ahbb[sesiones_ahbb.length - 1].fechaSesion_ahbb,
        totalSesiones_ahbb: sesiones_ahbb.length,
        horasProgramadas_ahbb: Number(horasAcumuladas_ahbb.toFixed(2)),
        sesiones_ahbb,
    };
};
exports.proyectarSesionesCurso_ahbb = proyectarSesionesCurso_ahbb;
//# sourceMappingURL=programacion-cursos_ahbb.js.map