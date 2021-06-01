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
      page: true,
      align: 'center',
      menuAlign: 'center',
      searchMenuPosition: 'right',
      searchSize: 'mini',
      searchMenuSpan: 6,
      column: [
        {
          label: '课程名称',
          prop: 'name',
          sortable: true,
          search: true,
          searchPlaceholder: '课程名称',
          searchLabelWidth: 120,
          searchSpan: 18,
          regex: false,
          row: true,
        },
        {
          label: '课程封面',
          prop: 'cover',
          sortable: false,
          type: 'upload',
          listType: 'picture-img',
          tip: '只能上传jpg/png课程封面，且不超过500kb',
          action: 'upload',
          span: 24,
          propsHttp: {
            home: 'http://localhost:3100/image/',
          },
          canvasOption: {
            text: 'avue',
            ratio: 0.1,
          },
        },
      ],
    };
  }
}
