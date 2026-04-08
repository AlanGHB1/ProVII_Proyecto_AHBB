type HorarioProgramacion_ahbb = {
    diaSemana_ahbb: string;
    horaInicio_ahbb: string;
    horaFin_ahbb: string;
};
type SesionProyectada_ahbb = {
    nroSesion_ahbb: number;
    fechaSesion_ahbb: Date;
    horaInicio_ahbb: string;
    horaFin_ahbb: string;
    horasDuracion_ahbb: number;
    diaSemana_ahbb: string;
};
type ProgramacionCurso_ahbb = {
    fechaInicioReal_ahbb: Date;
    fechaFinReal_ahbb: Date;
    totalSesiones_ahbb: number;
    horasProgramadas_ahbb: number;
    sesiones_ahbb: SesionProyectada_ahbb[];
};
export declare const calcularHorasBloqueHorario_ahbb: (horaInicio_ahbb: string, horaFin_ahbb: string) => number;
export declare const proyectarSesionesCurso_ahbb: ({ fechaInicio_ahbb, horarios_ahbb, totalHoras_ahbb, }: {
    fechaInicio_ahbb: Date;
    horarios_ahbb: HorarioProgramacion_ahbb[];
    totalHoras_ahbb: number;
}) => ProgramacionCurso_ahbb | null;
export {};
