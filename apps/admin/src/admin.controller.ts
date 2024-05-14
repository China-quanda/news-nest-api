import { Controller, Get } from '@nestjs/common';
import { AdminService } from './admin.service';
import { User } from '@prisma/client';

@Controller()
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  @Get()
  getHello(): Promise<User[]> {
    return this.adminService.getHello();
  }
}
