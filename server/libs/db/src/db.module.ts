import { Course } from './models/course.model';
import { Global, Module } from '@nestjs/common';
import { DbService } from './db.service';
import { TypegooseModule } from 'nestjs-typegoose';
import { User } from './models/user.model';
import { Episode } from './models/episode.model';

const models = TypegooseModule.forFeature([User, Course, Episode]);
// ↑ 选中所有使用的模型 ↑

@Global()
// ↑ 注册成全局模块 ↑
@Module({
  imports: [
    TypegooseModule.forRoot(
      // ↑ 连接mongodb ↑
      'mongodb://fullstack_admin:liut_admin@localhost:27017/nestfullstack',
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true,
      },
    ),
    models,
    // ↑ 导入所有使用的模型 ↑
  ],
  providers: [DbService],
  // ↑ 注册Db提供者服务 ↑
  exports: [DbService, models],
  // ↑ 导出Db提供者服务 ↑ 导出所有使用模型 ↑
})
export class DbModule {}
