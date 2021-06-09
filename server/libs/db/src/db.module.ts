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
    // ↓ 连接mongodb （同步加载） 在 common.module中导入了全局配置模块和此模块，两模块内部有引用（process.env.DB）因此此处要使用异步加载 ↓
    TypegooseModule.forRootAsync({
      useFactory() {
        return {
          uri: process.env.DB,
          useNewUrlParser: true,
          useUnifiedTopology: true,
          useFindAndModify: false,
          useCreateIndex: true,
        };
      },
    }),
    // ↓ 连接mongodb （同步加载） ↓
    // TypegooseModule.forRoot(process.env.DB, {
    //   useNewUrlParser: true,
    //   useUnifiedTopology: true,
    //   useFindAndModify: false,
    //   useCreateIndex: true,
    // }),
    models,
    // ↑ 导入所有使用的模型 ↑
  ],
  providers: [DbService],
  // ↑ 注册Db提供者服务 ↑
  exports: [DbService, models],
  // ↑ 导出Db提供者服务 ↑ 导出所有使用模型 ↑
})
export class DbModule {}
