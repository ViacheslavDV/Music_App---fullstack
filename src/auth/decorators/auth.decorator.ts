import { UseGuards, applyDecorators } from '@nestjs/common';
import { RoleType } from '../types/role.type';
import { JwtAuthGuard } from '../guards/jwt.guard';
import { AdminRoleGuard } from '../guards/admin.guard';

export const Auth = (role: RoleType = 'user') =>
  applyDecorators(
    role === 'admin'
      ? UseGuards(JwtAuthGuard, AdminRoleGuard)
      : UseGuards(JwtAuthGuard),
  );
