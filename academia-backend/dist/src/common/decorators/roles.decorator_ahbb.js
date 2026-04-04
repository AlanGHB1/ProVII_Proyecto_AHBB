"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RolesDecorator_ahbb = exports.ROLES_META_AHBB = void 0;
const common_1 = require("@nestjs/common");
exports.ROLES_META_AHBB = 'roles_ahbb';
const RolesDecorator_ahbb = (...rolesPermitidos_ahbb) => (0, common_1.SetMetadata)(exports.ROLES_META_AHBB, rolesPermitidos_ahbb);
exports.RolesDecorator_ahbb = RolesDecorator_ahbb;
//# sourceMappingURL=roles.decorator_ahbb.js.map