import { Module } from '@nestjs/common';
import { AdminController } from './admin.controller';
import { AdminService } from './admin.service';
import { UsersModule } from './users/users.module';
import { CoursesModule } from './courses/courses.module';
import { EpisodesModule } from './episodes/episodes.module';
import { MulterModule } from '@nestjs/platform-express';
import { CommonModule } from '@libs/common';
const MAO = require('multer-aliyun-oss');
@Module({
  imports: [
    // ↓ 文件存储 异步 ↓
    MulterModule.registerAsync({
      useFactory() {
        return {
          // ↓ 存储到阿里云oss ↓
          storage: MAO({
            config: {
              region: process.env.REGION,
              accessKeyId: process.env.ACCESSKEYID,
              accessKeySecret: process.env.ACCESSKEYSECRET,
              bucket: process.env.BUCKET,
            },
            filename: function (req, file, cb) {
              cb(
                null,
                file.originalname +
                  '-' +
                  Date.now() +
                  '.' +
                  file.mimetype.match(/\/(\S*)/)[1],
              );
            },
          }),
          // ↓ （存储到本地）目标文件夹 ↓
          // dest: 'uploads',
        };
      },
    }),
    CommonModule,
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
