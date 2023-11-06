import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@Controller('/')
@ApiTags('Health')
export class HealthController {
  @Get('/health-check')
  async healthCheck() {
    return true;
  }
}
