import { OnModuleInit } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
export declare class BootstrapService_ahbb implements OnModuleInit {
    private readonly prisma_ahbb;
    constructor(prisma_ahbb: PrismaService);
    onModuleInit(): Promise<void>;
    private sembrarUsuariosBase_ahbb;
}
