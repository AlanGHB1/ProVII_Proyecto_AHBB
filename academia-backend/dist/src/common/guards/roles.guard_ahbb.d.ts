import { CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
export declare class RolesGuard_ahbb implements CanActivate {
    private readonly reflector_ahbb;
    constructor(reflector_ahbb: Reflector);
    canActivate(context_ahbb: ExecutionContext): boolean;
}
