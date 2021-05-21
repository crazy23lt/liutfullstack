import { Course } from '@libs/db/models/course.model';
import { Controller, Get } from '@nestjs/common';
import { ReturnModelType } from '@typegoose/typegoose';
import { Crud } from 'nestjs-mongoose-crud';
import { InjectModel } from 'nestjs-typegoose';
import { ApiTags } from '@nestjs/swagger';
@Crud({
  model: Course,
})
@Controller('courses')
@ApiTags('课程')
export class CoursesController {
  constructor(
    @InjectModel(Course) private readonly model: ReturnModelType<typeof Course>,
  ) {}
  // ↑ 注入Course模型 ↑ 私有、只读 ↑ 定义类型-泛
  @Get('options')
  avueOptions() {
    return {
      title: '课程管理',
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
          label: '课程名称',
          prop: 'name',
        },
        {
          label: '课程课时',
          prop: 'cover',
        },
      ],
    };
  }
}
