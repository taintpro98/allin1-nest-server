import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { configDb } from './datasource';
import { UserEntity } from './entities';
import { UserRepository } from './repositories';

const entities = [UserEntity];

const repositories = [UserRepository];

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      // expandVariables: true,
      load: [configDb],
    }),
    TypeOrmModule.forRootAsync({
      useFactory: (config: ConfigService) => {
        return config.get('db');
      },
      inject: [ConfigService],
    }),
    TypeOrmModule.forFeature(entities),
  ],
  providers: [...repositories],
  exports: [...repositories],
})
export class TypeORMDatabaseModule {}
