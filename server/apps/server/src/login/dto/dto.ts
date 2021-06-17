import { ApiProperty } from '@nestjs/swagger';
export class nameDto {
  @ApiProperty()
  readonly name: string;
}
