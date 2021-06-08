import { Module } from '@nestjs/common';
import { AdminController } from './admin.controller';
import { AdminService } from './admin.service';
import { DbModule } from '@libs/db';
import { UsersModule } from './users/users.module';
import { CoursesModule } from './courses/courses.module';
import { EpisodesModule } from './episodes/episodes.module';
import { MulterModule } from '@nestjs/platform-express';
import oss from '../../../ossConfig';

const MAO = require('multer-aliyun-oss');
@Module({
  imports: [
    // ↓ 文件存储 ↓
    MulterModule.register({
      // ↓ 存储到阿里云oss ↓
      storage: MAO({
        config: {
          region: oss.region,
          accessKeyId: oss.accessKeyId,
          accessKeySecret: oss.accessKeySecret,
          bucket: oss.bucket,
        },
      }),
      // ↓ （存储到本地）目标文件夹 ↓
      // dest: 'uploads',
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
