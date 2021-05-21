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
  ) {}
  @Get('options')
  avueOptions() {
    return {
      title: '课时管理',
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
          label: '课时名称',
          prop: 'name',
        },
        {
          label: '课时文件',
          prop: 'file',
        },
      ],
    };
  }
}
