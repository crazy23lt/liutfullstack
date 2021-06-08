import { Course } from '@libs/db/models/course.model';
import {
  Controller,
  Get,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { ReturnModelType } from '@typegoose/typegoose';
import { Crud } from 'nestjs-mongoose-crud';
import { InjectModel } from 'nestjs-typegoose';
import { ApiTags } from '@nestjs/swagger';
import { FileInterceptor } from '@nestjs/platform-express';
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
          type: 'upload',
          listType: 'picture-img',
          action: '/upload',
          row: true,
          tip: '只能上传jpg/png用户头像，且不超过500kb',
        },
      ],
    };
  }
}
