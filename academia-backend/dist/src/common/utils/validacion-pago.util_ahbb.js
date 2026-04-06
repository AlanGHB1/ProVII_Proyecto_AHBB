"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.REFERENCIA_MAX_AHBB = exports.REFERENCIA_MIN_AHBB = exports.REFERENCIA_REGEX_AHBB = void 0;
exports.validarReferenciaPago_ahbb = validarReferenciaPago_ahbb;
const common_1 = require("@nestjs/common");
exports.REFERENCIA_REGEX_AHBB = /^\d{8,20}$/;
exports.REFERENCIA_MIN_AHBB = 8;
exports.REFERENCIA_MAX_AHBB = 20;
function validarReferenciaPago_ahbb(referencia) {
    if (!referencia || typeof referencia !== 'string') {
        throw new common_1.BadRequestException('El número de referencia de pago es obligatorio.');
    }
    const limpia = referencia.trim();
    if (!/^\d+$/.test(limpia)) {
        throw new common_1.BadRequestException('La referencia de pago solo puede contener dígitos numéricos (0–9). No se permiten letras, espacios ni caracteres especiales.');
    }
    if (limpia.length < exports.REFERENCIA_MIN_AHBB) {
        throw new common_1.BadRequestException(`La referencia de pago debe tener al menos ${exports.REFERENCIA_MIN_AHBB} dígitos.`);
    }
    if (limpia.length > exports.REFERENCIA_MAX_AHBB) {
        throw new common_1.BadRequestException(`La referencia de pago no puede exceder ${exports.REFERENCIA_MAX_AHBB} dígitos.`);
    }
}
//# sourceMappingURL=validacion-pago.util_ahbb.js.map