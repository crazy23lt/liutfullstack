import { ApiProperty } from '@nestjs/swagger';
import { prop } from '@typegoose/typegoose';
export class Job {
  @ApiProperty({ description: '职业名称', example: '战士' })
  @prop()
  public title?: string;
  @ApiProperty({ description: '职业定位', example: '远程' })
  @prop()
  public position?: string;
}
