import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello() {
    return {
      code: 200,
      data: null,
      msg: 'request success',
    };
  }
}
