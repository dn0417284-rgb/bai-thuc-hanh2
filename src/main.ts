import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module.js';
import { JwtService } from '@nestjs/jwt';
import { AuthMiddleware } from './auth/auth.middleware.js';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {});
  const jwtService = app.get(JwtService);
  app.use('/auth', new AuthMiddleware(jwtService).use);
  await app.listen(process.env.PORT ?? 3000);
}
await bootstrap();
