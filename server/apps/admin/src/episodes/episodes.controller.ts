import { Course } from '@libs/db/models/course.model';
import { Controller, Get } from '@nestjs/common';
import { ReturnModelType } from '@typegoose/typegoose';
import { Crud } from 'nestjs-mongoose-crud';
import { InjectModel } from 'nestjs-typegoose';
import { ApiTags } from '@nestjs/swagger';
import { Episode } from '@libs/db/models/episode.model';
@Crud({
  model: Episode,
})
@Controller('episodes')
@ApiTags('课时')
export class EpisodesController {
  constructor(
    @InjectModel(Episode)
    private readonly model: ReturnModelType<typeof Episode>,
    @InjectModel(Course)
    private readonly courseModel: ReturnModelType<typeof Course>,
  ) {}
  @Get('options')
  async avueOptions() {
    const courses = (await this.courseModel.find()).map((v) => {
      return {
        label: v.name,
        value: v._id,
      };
    });
    return {
      title: '课时管理',
      titleSize: 'h3',
      titleStyle: {
        color: 'gray',
      },
      border: true,
      stripe: true,
      page: true,
      align: 'center',
      menuAlign: 'center',
      column: [
        {
          label: '所属课程',
          prop: 'course',
          type: 'select',
          row: true,
          dicData: courses,
        },
        {
          label: '课时名称',
          span: 24,
          prop: 'name',
          sortable: true,
        },
        {
          label: '课时视频',
          prop: 'file',
          type: 'upload',
          accept: 'video/mp4',
          loadText: '附件上传中，请稍等',
          row: true,
          tip: '只能上传jpg/png用户头像，且不超过500kb',
          action: '/upload',
          listType: 'picture-img',
        },
      ],
    };
  }
}
