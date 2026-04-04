-- CreateTable
CREATE TABLE "td_usuario_ahbb" (
    "id_usuario_ahbb" SERIAL NOT NULL,
    "cedula_ahbb" VARCHAR(50) NOT NULL,
    "nombre_ahbb" VARCHAR(100) NOT NULL,
    "apellido_ahbb" VARCHAR(100) NOT NULL,
    "correo_ahbb" VARCHAR(150) NOT NULL,
    "contrasena_ahbb" VARCHAR(255) NOT NULL,
    "rol_ahbb" VARCHAR(20) DEFAULT 'ALUMNO',
    "firmaDigital_ahbb" TEXT,
    "creadoEn_ahbb" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "actualizadoEn_ahbb" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "td_usuario_ahbb_pkey" PRIMARY KEY ("id_usuario_ahbb")
);

-- CreateTable
CREATE TABLE "td_curso_ahbb" (
    "id_curso_ahbb" SERIAL NOT NULL,
    "nombre_ahbb" VARCHAR(200) NOT NULL,
    "tematica_ahbb" VARCHAR(200) NOT NULL,
    "diasDefinidos_ahbb" INTEGER NOT NULL,
    "horasDefinidas_ahbb" INTEGER NOT NULL,
    "fechaDuracion_ahbb" TIMESTAMP(6) NOT NULL,
    "topeEstudiantes_ahbb" INTEGER DEFAULT 5,
    "temarioTexto_ahbb" TEXT,
    "imagenBasePdf_ahbb" TEXT,
    "imagenBloqueada_ahbb" BOOLEAN DEFAULT false,
    "id_usuario_curso_ahbb" INTEGER NOT NULL,
    "id_curso_curso_ahbb" INTEGER,
    "creadoEn_ahbb" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "actualizadoEn_ahbb" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "td_curso_ahbb_pkey" PRIMARY KEY ("id_curso_ahbb")
);

-- CreateTable
CREATE TABLE "td_horario_ahbb" (
    "id_horario_ahbb" SERIAL NOT NULL,
    "diaSemana_ahbb" VARCHAR(20) NOT NULL,
    "horaInicio_ahbb" VARCHAR(10) NOT NULL,
    "horaFin_ahbb" VARCHAR(10) NOT NULL,
    "id_curso_horario_ahbb" INTEGER NOT NULL,

    CONSTRAINT "td_horario_ahbb_pkey" PRIMARY KEY ("id_horario_ahbb")
);

-- CreateTable
CREATE TABLE "td_inscripcion_ahbb" (
    "id_inscripcion_ahbb" SERIAL NOT NULL,
    "estatus_ahbb" VARCHAR(50) DEFAULT 'INSCRITO',
    "id_usuario_inscripcion_ahbb" INTEGER NOT NULL,
    "id_curso_inscripcion_ahbb" INTEGER NOT NULL,
    "creadoEn_ahbb" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "actualizadoEn_ahbb" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "td_inscripcion_ahbb_pkey" PRIMARY KEY ("id_inscripcion_ahbb")
);

-- CreateTable
CREATE TABLE "td_certificado_ahbb" (
    "id_certificado_ahbb" SERIAL NOT NULL,
    "codigoQrUrl_ahbb" TEXT NOT NULL,
    "id_inscripcion_certificado_ahbb" INTEGER NOT NULL,
    "creadoEn_ahbb" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "td_certificado_ahbb_pkey" PRIMARY KEY ("id_certificado_ahbb")
);

-- CreateTable
CREATE TABLE "td_configuracionglobal_ahbb" (
    "id_configuracionglobal_ahbb" SERIAL NOT NULL,
    "imagenCertificadoGeneral_ahbb" TEXT,

    CONSTRAINT "td_configuracionglobal_ahbb_pkey" PRIMARY KEY ("id_configuracionglobal_ahbb")
);

-- CreateIndex
CREATE UNIQUE INDEX "td_usuario_ahbb_cedula_ahbb_key" ON "td_usuario_ahbb"("cedula_ahbb");

-- CreateIndex
CREATE UNIQUE INDEX "td_usuario_ahbb_correo_ahbb_key" ON "td_usuario_ahbb"("correo_ahbb");

-- CreateIndex
CREATE UNIQUE INDEX "td_inscripcion_ahbb_id_usuario_inscripcion_ahbb_id_curso_in_key" ON "td_inscripcion_ahbb"("id_usuario_inscripcion_ahbb", "id_curso_inscripcion_ahbb");

-- CreateIndex
CREATE UNIQUE INDEX "td_certificado_ahbb_id_inscripcion_certificado_ahbb_key" ON "td_certificado_ahbb"("id_inscripcion_certificado_ahbb");

-- AddForeignKey
ALTER TABLE "td_curso_ahbb" ADD CONSTRAINT "td_curso_ahbb_id_usuario_curso_ahbb_fkey" FOREIGN KEY ("id_usuario_curso_ahbb") REFERENCES "td_usuario_ahbb"("id_usuario_ahbb") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "td_curso_ahbb" ADD CONSTRAINT "td_curso_ahbb_id_curso_curso_ahbb_fkey" FOREIGN KEY ("id_curso_curso_ahbb") REFERENCES "td_curso_ahbb"("id_curso_ahbb") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "td_horario_ahbb" ADD CONSTRAINT "td_horario_ahbb_id_curso_horario_ahbb_fkey" FOREIGN KEY ("id_curso_horario_ahbb") REFERENCES "td_curso_ahbb"("id_curso_ahbb") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "td_inscripcion_ahbb" ADD CONSTRAINT "td_inscripcion_ahbb_id_usuario_inscripcion_ahbb_fkey" FOREIGN KEY ("id_usuario_inscripcion_ahbb") REFERENCES "td_usuario_ahbb"("id_usuario_ahbb") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "td_inscripcion_ahbb" ADD CONSTRAINT "td_inscripcion_ahbb_id_curso_inscripcion_ahbb_fkey" FOREIGN KEY ("id_curso_inscripcion_ahbb") REFERENCES "td_curso_ahbb"("id_curso_ahbb") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "td_certificado_ahbb" ADD CONSTRAINT "td_certificado_ahbb_id_inscripcion_certificado_ahbb_fkey" FOREIGN KEY ("id_inscripcion_certificado_ahbb") REFERENCES "td_inscripcion_ahbb"("id_inscripcion_ahbb") ON DELETE CASCADE ON UPDATE CASCADE;
