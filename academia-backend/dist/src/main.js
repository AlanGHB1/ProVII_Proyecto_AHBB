"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const core_1 = require("@nestjs/core");
const path_1 = require("path");
const express = __importStar(require("express"));
const app_module_1 = require("./app.module");
const tunnel_service_ahbb_1 = require("./common/tunnel/tunnel.service_ahbb");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const puerto = Number(process.env.PORT) || 3000;
    app.enableCors({
        origin: (origin, callback) => {
            if (!origin)
                return callback(null, true);
            const origenesPermitidos_ahbb = [
                'http://localhost:9000',
                'http://localhost:9200',
                `http://localhost:${puerto}`,
            ];
            const tunnelService = app.get(tunnel_service_ahbb_1.TunnelService_ahbb);
            const urlTunel = tunnelService.getUrlPublica_ahbb();
            if (urlTunel) {
                origenesPermitidos_ahbb.push(urlTunel);
            }
            if (origenesPermitidos_ahbb.includes(origin) || origin.endsWith('.loca.lt')) {
                return callback(null, true);
            }
            return callback(null, true);
        },
        credentials: true,
    });
    app.setGlobalPrefix('api');
    app.use('/uploads', express.static((0, path_1.join)(process.cwd(), 'uploads')));
    await app.listen(puerto);
    const tunnelService = app.get(tunnel_service_ahbb_1.TunnelService_ahbb);
    await tunnelService.iniciarTunel_ahbb(puerto);
}
bootstrap();
//# sourceMappingURL=main.js.map