import { Module } from '@nestjs/common';
import { AppService } from './app.service.js';
import { AuthModule } from './auth/auth.module.js';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module.js';
import { AppController } from './app.controller.js';

@Module({
  imports: [
    AuthModule,

    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '123456789',
      database: 'auth',
      autoLoadEntities: true,
      synchronize: true,
    }),

    UsersModule,
  ],

  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
