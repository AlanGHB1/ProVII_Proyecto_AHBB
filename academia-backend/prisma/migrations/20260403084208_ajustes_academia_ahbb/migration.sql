-- DropIndex
DROP INDEX "td_inscripcion_ahbb_id_usuario_inscripcion_ahbb_id_curso_in_key";

-- AlterTable
ALTER TABLE "td_curso_ahbb" ADD COLUMN     "descripcion_ahbb" TEXT,
ADD COLUMN     "fechaFin_ahbb" TIMESTAMP(6),
ADD COLUMN     "fechaInicio_ahbb" TIMESTAMP(6),
ADD COLUMN     "isPublished_ahbb" BOOLEAN NOT NULL DEFAULT false,
ALTER COLUMN "fechaDuracion_ahbb" DROP NOT NULL;

-- AlterTable
ALTER TABLE "td_inscripcion_ahbb" ADD COLUMN     "intento_ahbb" INTEGER NOT NULL DEFAULT 1,
ADD COLUMN     "notaFinal_ahbb" DECIMAL(5,2),
ADD COLUMN     "observaciones_ahbb" TEXT;

-- AlterTable
ALTER TABLE "td_usuario_ahbb" ADD COLUMN     "aprobadoPorUsuarioId_ahbb" INTEGER,
ADD COLUMN     "estadoCuenta_ahbb" VARCHAR(40) NOT NULL DEFAULT 'PENDIENTE_APROBACION',
ADD COLUMN     "referenciaPagoMovil_ahbb" VARCHAR(120),
ADD COLUMN     "requiereCambioContrasena_ahbb" BOOLEAN NOT NULL DEFAULT false;

-- CreateTable
CREATE TABLE "td_auditoria_aprobacion_ahbb" (
    "id_auditoria_aprobacion_ahbb" SERIAL NOT NULL,
    "tipoOperacion_ahbb" VARCHAR(50) NOT NULL,
    "referenciaOperacion_ahbb" VARCHAR(120) NOT NULL,
    "observacion_ahbb" TEXT,
    "id_usuario_auditado_ahbb" INTEGER NOT NULL,
    "id_aprobador_ahbb" INTEGER NOT NULL,
    "creadoEn_ahbb" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "td_auditoria_aprobacion_ahbb_pkey" PRIMARY KEY ("id_auditoria_aprobacion_ahbb")
);

-- CreateIndex
CREATE INDEX "td_inscripcion_ahbb_id_usuario_inscripcion_ahbb_id_curso_in_idx" ON "td_inscripcion_ahbb"("id_usuario_inscripcion_ahbb", "id_curso_inscripcion_ahbb");

-- AddForeignKey
ALTER TABLE "td_auditoria_aprobacion_ahbb" ADD CONSTRAINT "td_auditoria_aprobacion_ahbb_id_usuario_auditado_ahbb_fkey" FOREIGN KEY ("id_usuario_auditado_ahbb") REFERENCES "td_usuario_ahbb"("id_usuario_ahbb") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "td_auditoria_aprobacion_ahbb" ADD CONSTRAINT "td_auditoria_aprobacion_ahbb_id_aprobador_ahbb_fkey" FOREIGN KEY ("id_aprobador_ahbb") REFERENCES "td_usuario_ahbb"("id_usuario_ahbb") ON DELETE RESTRICT ON UPDATE CASCADE;
