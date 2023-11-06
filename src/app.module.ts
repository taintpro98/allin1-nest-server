import { Module } from '@nestjs/common';
import { TypeORMDatabaseModule } from './modules';
import { AuthController, HealthController } from './controllers';
import { AuthService } from './services';

const controllers = [HealthController, AuthController];

@Module({
  imports: [TypeORMDatabaseModule],
  controllers,
  providers: [AuthService],
})
export class AppModule {}
