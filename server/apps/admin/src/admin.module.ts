import { Module } from '@nestjs/common';
import { AdminController } from './admin.controller';
import { AdminService } from './admin.service';
import { DbModule } from '@libs/db';
import { UsersModule } from './users/users.module';
import { CoursesModule } from './courses/courses.module';
import { EpisodesModule } from './episodes/episodes.module';
import { MulterModule } from '@nestjs/platform-express';

@Module({
  imports: [
    MulterModule.register({
      dest: 'uploads',
    }),
    DbModule,
    UsersModule,
    CoursesModule,
    EpisodesModule,
  ],
  // ↑ 引入数据库模块 ↑ 以及其他功能模块 ↑
  controllers: [AdminController],
  // ↑ 注册Admin控制器 ↑
  providers: [AdminService],
  // ↑ 注册Admin提供者服务 ↑
})
export class AdminModule {}
