import { User } from '@libs/db/models/user.model';
import { Controller } from '@nestjs/common';
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
}
