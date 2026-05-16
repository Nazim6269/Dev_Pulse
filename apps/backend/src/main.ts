import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory, HttpAdapterHost } from '@nestjs/core';
import { AppModule } from './app/app.module';
import {
  AllExceptionsFilter,
  LoggingInterceptor,
} from '@devpulse/backend-core';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // const globalPrefix = '/api/v1';

  const httpAdapterHost = app.get(HttpAdapterHost);
  app.useGlobalFilters(new AllExceptionsFilter(httpAdapterHost));
  app.useGlobalInterceptors(new LoggingInterceptor());

  // app.setGlobalPrefix(globalPrefix);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );

  app.enableCors({
    origin: ['http://localhost:3000', 'http://localhost:3001'],
    credentials: true,
  });
  const port = process.env.PORT || 3333;
  await app.listen(port);

  Logger.log(`Application is running on: http://localhost:${port}`);
}

bootstrap();
