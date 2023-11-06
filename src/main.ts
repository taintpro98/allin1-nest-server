import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  if (process.env.APP_ENV !== 'production') {
    const config = new DocumentBuilder()
      .setTitle('All in 1 Server Api')
      .setDescription(`Template server api`)
      .setVersion('1.0.0')
      // .addBearerAuth({ in: 'header', type: 'http' })
      .build();
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('docs', app, document);
  }

  const port = Number(process.env.APP_PORT) || 8080;
  const globalPrefix = 'api';
  const DEFAULT_API_VERSION = '1';

  await app.listen(port);
  Logger.log(
    `🚀 Application is running on: http://localhost:${port}/${globalPrefix}/v${DEFAULT_API_VERSION}`,
  );
}
bootstrap();
