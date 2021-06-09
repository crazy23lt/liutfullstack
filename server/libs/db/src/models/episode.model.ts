import { modelOptions, prop, Ref } from '@typegoose/typegoose';
import { Course } from './course.model';
import { ApiProperty } from '@nestjs/swagger';
@modelOptions({
  schemaOptions: {
    timestamps: true,
  },
})
export class Episode {
  @ApiProperty({ description: '课时名称' })
  @prop()
  name: string;
  @ApiProperty({ description: '课时文件' })
  @prop()
  file: string;
  @ApiProperty({ description: '关联课程' })
  @prop({ itemsRef: 'Course' })
  course: Ref<Course>[];
}
