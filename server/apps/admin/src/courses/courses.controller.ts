import { Course } from '@libs/db/models/course.model';
import { Controller } from '@nestjs/common';
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
  // ↑ 注入Course模型 ↑ 私有、只读 ↑ 定义类型-泛型 ↑
}
