import { UserInfo } from './interface/userInfo.interface';
import { ReturnModelType } from '@typegoose/typegoose';
import { InjectModel } from 'nestjs-typegoose';
import { ApiTags } from '@nestjs/swagger';
import { Controller, Get, Query } from '@nestjs/common';
import { User } from '@libs/db/models/user.model';
import { UserInfo as UserInfoModel } from '@libs/db/models/userinfo.model';
import { nameDto } from './dto/dto';
import { Crud } from 'nestjs-mongoose-crud';
import { ModelType } from '@typegoose/typegoose/lib/types';
@Crud({
  model: UserInfoModel,
})
@Controller('login')
@ApiTags('登录模块')
export class LoginController {
  constructor(
    @InjectModel(User) private readonly userModel: ReturnModelType<typeof User>,
    @InjectModel(UserInfoModel)
    private readonly userInfoModel: ReturnModelType<typeof UserInfoModel>,
    @InjectModel(UserInfoModel)
    private readonly model: ModelType<UserInfoModel>,
  ) {}
  @Get('find')
  async findUserInfo(@Query('name') name: nameDto): Promise<UserInfo> {
    const userInfo = await this.userModel.where().limit(2).skip(2);
    return {
      code: 200,
      msg: '返回成功',
      data: userInfo,
    };
  }
  @Get('find/one')
  async findUserInfoModel() {
    return {
      code: 200,
      msg: '返回成功',
      data: await this.userInfoModel.find(),
    };
  }
}
