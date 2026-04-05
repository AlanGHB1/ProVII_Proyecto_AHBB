"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const prisma_service_1 = require("./prisma.service");
const usuarios_module_1 = require("./usuarios/usuarios.module");
const auth_module_1 = require("./auth/auth.module");
const cursos_module_1 = require("./cursos/cursos.module");
const inscripciones_module_1 = require("./inscripciones/inscripciones.module");
const tienda_module_ahbb_1 = require("./tienda/tienda.module_ahbb");
const bootstrap_service_ahbb_1 = require("./bootstrap/bootstrap.service_ahbb");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [usuarios_module_1.UsuariosModule, auth_module_1.AuthModule, cursos_module_1.CursosModule, inscripciones_module_1.InscripcionesModule_ahbb, tienda_module_ahbb_1.TiendaModule_ahbb],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService, prisma_service_1.PrismaService, bootstrap_service_ahbb_1.BootstrapService_ahbb],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map