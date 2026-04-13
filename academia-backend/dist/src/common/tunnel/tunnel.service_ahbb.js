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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
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
var TunnelService_ahbb_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.TunnelService_ahbb = void 0;
const common_1 = require("@nestjs/common");
const fs = __importStar(require("fs"));
let TunnelService_ahbb = TunnelService_ahbb_1 = class TunnelService_ahbb {
    logger_ahbb = new common_1.Logger(TunnelService_ahbb_1.name);
    urlPublica_ahbb = null;
    tunnel_ahbb = null;
    getUrlPublica_ahbb() {
        return this.urlPublica_ahbb;
    }
    construirUrl_ahbb(rutaRelativa) {
        const base = this.urlPublica_ahbb || `http://localhost:${process.env.PORT ?? 3000}`;
        const ruta = rutaRelativa.startsWith('/') ? rutaRelativa : `/${rutaRelativa}`;
        return `${base}${ruta}`;
    }
    async iniciarTunel_ahbb(puerto) {
        try {
            const { Tunnel, install, bin } = await import('cloudflared');
            this.logger_ahbb.log(`Verificando binario de cloudflared...`);
            if (!fs.existsSync(bin)) {
                this.logger_ahbb.log(`Instalando binario de cloudflared (esto puede tardar un momento)...`);
                await install(bin);
            }
            this.logger_ahbb.log(`Iniciando túnel de Cloudflare en el puerto ${puerto}...`);
            const localUrl = `http://localhost:${puerto}`;
            this.tunnel_ahbb = Tunnel.quick(localUrl);
            return new Promise((resolve, reject) => {
                this.tunnel_ahbb.once('url', (url) => {
                    this.urlPublica_ahbb = url;
                    this.logger_ahbb.log(`═══════════════════════════════════════════════════════`);
                    this.logger_ahbb.log(`   TÚNEL PÚBLICO CLOUDFLARE ACTIVO`);
                    this.logger_ahbb.log(`   URL: ${this.urlPublica_ahbb}`);
                    this.logger_ahbb.log(`═══════════════════════════════════════════════════════`);
                    resolve(url);
                });
                this.tunnel_ahbb.once('error', (err) => {
                    this.logger_ahbb.error(`Error al iniciar el túnel de Cloudflare: ${err}`);
                    reject(err);
                });
                this.tunnel_ahbb.on('exit', (code) => {
                    this.logger_ahbb.warn(`El proceso de cloudflared terminó con código ${code}.`);
                    this.urlPublica_ahbb = null;
                });
            });
        }
        catch (error) {
            const msg = error instanceof Error ? error.message : 'Error desconocido';
            this.logger_ahbb.error(`No se pudo iniciar el túnel de Cloudflare: ${msg}`);
            this.logger_ahbb.warn('El servidor continuará funcionando en modo local.');
            this.logger_ahbb.warn('Los QR apuntarán a localhost.');
            return `http://localhost:${puerto}`;
        }
    }
    async onModuleDestroy() {
        if (this.tunnel_ahbb) {
            this.logger_ahbb.log('Cerrando túnel de Cloudflare...');
            try {
                this.tunnel_ahbb.stop();
            }
            catch (e) {
                this.logger_ahbb.error(`Error al cerrar el túnel: ${e}`);
            }
            this.tunnel_ahbb = null;
            this.urlPublica_ahbb = null;
        }
    }
};
exports.TunnelService_ahbb = TunnelService_ahbb;
exports.TunnelService_ahbb = TunnelService_ahbb = TunnelService_ahbb_1 = __decorate([
    (0, common_1.Injectable)()
], TunnelService_ahbb);
//# sourceMappingURL=tunnel.service_ahbb.js.map