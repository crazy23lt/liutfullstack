import { modelOptions, prop } from '@typegoose/typegoose';
import { ApiProperty } from '@nestjs/swagger';
@modelOptions({
  schemaOptions: {
    timestamps: true,
    // ↑ schema 每条数据加上时间戳[更新时间戳、创建时间戳] ↑
  },
})
export class User {
  @ApiProperty({ description: '用户名', example: 'user1' })
  // ↑ 定义模型内username字段的类型供swagger使用 ↑
  @prop()
  username: string;
  @ApiProperty({ description: '密码', example: 'pass1' })
  @prop()
  password: string;
}
