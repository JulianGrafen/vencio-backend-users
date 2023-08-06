import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { UsersController } from './users/users.controller';
import { AppService } from './app.service';
import { UsersService } from './users/users.service';
import { GoogleStrategy } from './google.strategy';

@Module({
  imports: [],
  controllers: [AppController, UsersController],
  providers: [AppService, UsersService, GoogleStrategy],
})
export class AppModule {}
