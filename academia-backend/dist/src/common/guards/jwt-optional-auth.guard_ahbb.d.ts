import { CanActivate, ExecutionContext } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
export declare class JwtOptionalAuthGuard_ahbb implements CanActivate {
    private readonly jwtService_ahbb;
    constructor(jwtService_ahbb: JwtService);
    canActivate(context_ahbb: ExecutionContext): Promise<boolean>;
}
