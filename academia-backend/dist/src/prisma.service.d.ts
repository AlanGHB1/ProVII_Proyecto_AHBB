import { OnModuleInit } from '@nestjs/common';
import { PrismaClient } from './generated/prisma_ahbb/index.js';
export declare class PrismaService extends PrismaClient implements OnModuleInit {
    constructor();
    onModuleInit(): Promise<void>;
}
