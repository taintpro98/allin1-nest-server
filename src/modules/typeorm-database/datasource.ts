import { registerAs } from '@nestjs/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import path from 'path';
import * as dotenv from 'dotenv';

dotenv.config();

export const configDb = registerAs(
  'db',
  (): TypeOrmModuleOptions => ({
    type: 'postgres',
    port: Number(process.env.DB_PORT || 5432),
    host: process.env.DB_HOST,
    database: process.env.DB_DATABASE,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    synchronize: false,
    autoLoadEntities: true,
    logging: process.env.NODE_ENV === 'development' ? true : false,
    entities: [path.join(__dirname, 'entities', '*.entity.{ts,js}')],
  }),
);
