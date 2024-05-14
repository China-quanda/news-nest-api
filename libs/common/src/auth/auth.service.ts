import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  getAuthService() {
    return 'AuthService';
  }
}
