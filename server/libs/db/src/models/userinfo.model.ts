import { ApiProperty } from '@nestjs/swagger';
import { modelOptions, prop } from '@typegoose/typegoose';
import { Job } from './model.dto';
@modelOptions({
  schemaOptions: {
    timestamps: true,
  },
})
export class UserInfo {
  @ApiProperty({ description: '年龄', example: 12 })
  @prop({ require: true })
  public age!: number;
  @ApiProperty({
    description: '主要职业',
    example: { title: '法师', position: '近战' },
  })
  @prop()
  public mainJob: Job;
}
