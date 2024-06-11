import { Controller, Get } from '@nestjs/common';
import { AdminService } from './admin.service';
import { Public } from '@app/common/decorator/public.decorator';

@Controller()
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  @Get()
  @Public()
  getHello() {
    return this.adminService.getHello();
  }
}
