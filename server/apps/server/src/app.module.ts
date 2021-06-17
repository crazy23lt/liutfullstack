import { CommonModule } from '@libs/common';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoginModule } from './login/login.module';

@Module({
  imports: [CommonModule, LoginModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
