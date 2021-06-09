import { Module } from '@nestjs/common';
import { CommonService } from './common.service';
import { ConfigModule } from '@nestjs/config';
import { DbModule } from '@libs/db';

@Module({
  // ↓ 引入模块 config配置模块（全局）|| DB数据库模块 ↓
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    DbModule,
  ],
  providers: [CommonService],
  exports: [CommonService],
})
export class CommonModule {}
