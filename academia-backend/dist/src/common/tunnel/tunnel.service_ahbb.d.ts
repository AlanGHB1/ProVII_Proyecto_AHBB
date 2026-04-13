import { OnModuleDestroy } from '@nestjs/common';
export declare class TunnelService_ahbb implements OnModuleDestroy {
    private readonly logger_ahbb;
    private urlPublica_ahbb;
    private tunnel_ahbb;
    getUrlPublica_ahbb(): string | null;
    construirUrl_ahbb(rutaRelativa: string): string;
    iniciarTunel_ahbb(puerto: number): Promise<string>;
    onModuleDestroy(): Promise<void>;
}
