import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get('health')
  getHealth() {
    return {
      status: 'ok',
      timestamp: new Date().toISOString(),
      service: 'hookapedia-backend',
      version: '1.0.0'
    };
  }

  @Get()
  getHello() {
    return {
      message: 'Hookapedia Backend API',
      version: '1.0.0',
      timestamp: new Date().toISOString()
    };
  }
}
