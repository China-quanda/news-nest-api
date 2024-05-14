import { AuthService } from '@app/common';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AdminService {
  constructor(private readonly authService: AuthService) {}
  getHello(): string {
    console.log('commonService', this.authService.getAuthService());
    return 'Hello World! - admin -22';
  }
}
