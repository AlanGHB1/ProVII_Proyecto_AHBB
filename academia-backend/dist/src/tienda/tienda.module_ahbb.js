"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TiendaModule_ahbb = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const prisma_service_1 = require("../prisma.service");
const productos_controller_ahbb_1 = require("./productos.controller_ahbb");
const productos_service_ahbb_1 = require("./productos.service_ahbb");
const carrito_controller_ahbb_1 = require("./carrito.controller_ahbb");
const carrito_service_ahbb_1 = require("./carrito.service_ahbb");
const facturas_controller_ahbb_1 = require("./facturas.controller_ahbb");
const facturas_service_ahbb_1 = require("./facturas.service_ahbb");
const favoritos_controller_ahbb_1 = require("./favoritos.controller_ahbb");
const favoritos_service_ahbb_1 = require("./favoritos.service_ahbb");
let TiendaModule_ahbb = class TiendaModule_ahbb {
};
exports.TiendaModule_ahbb = TiendaModule_ahbb;
exports.TiendaModule_ahbb = TiendaModule_ahbb = __decorate([
    (0, common_1.Module)({
        imports: [
            jwt_1.JwtModule.register({
                secret: 'super-secreto-ahbb',
                signOptions: { expiresIn: '12h' },
            }),
        ],
        controllers: [
            productos_controller_ahbb_1.ProductosController_ahbb,
            carrito_controller_ahbb_1.CarritoController_ahbb,
            facturas_controller_ahbb_1.FacturasController_ahbb,
            favoritos_controller_ahbb_1.FavoritosController_ahbb,
        ],
        providers: [
            prisma_service_1.PrismaService,
            productos_service_ahbb_1.ProductosService_ahbb,
            carrito_service_ahbb_1.CarritoService_ahbb,
            facturas_service_ahbb_1.FacturasService_ahbb,
            favoritos_service_ahbb_1.FavoritosService_ahbb,
        ],
    })
], TiendaModule_ahbb);
//# sourceMappingURL=tienda.module_ahbb.js.map