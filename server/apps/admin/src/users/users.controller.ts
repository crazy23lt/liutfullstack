import { User } from '@libs/db/models/user.model';
import { Controller, Get } from '@nestjs/common';
import { InjectModel } from 'nestjs-typegoose';
import { Crud } from 'nestjs-mongoose-crud';
import { ApiTags } from '@nestjs/swagger';
@Crud({
  model: User,
})
// ↑ Curd 模块自动根据User模块构建 增删改查功能 ↑
@Controller('users')
@ApiTags('用户')
// ↑ swagger 接口分组 ↑
export class UsersController {
  constructor(@InjectModel(User) private readonly model) {}
  // ↑ 注入模型 ↑ 私有只读属性 ↑ model[crud] ↑
  @Get('options')
  avueOptions() {
    return {
      title: '用户管理',
      titleSize: 'h3',
      titleStyle: {
        color: 'gray',
      },
      border: true,
      stripe: true,
      page: false,
      align: 'center',
      menuAlign: 'center',
      column: [
        {
          label: '用户账号',
          prop: 'username',
        },
        {
          label: '用户密码',
          prop: 'password',
        },
      ],
    };
  }
}
