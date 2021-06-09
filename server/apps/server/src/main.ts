import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  // ↓ 客户端文档服务 ↓
  const config = new DocumentBuilder()
    .setTitle('全栈之巅-客户端API')
    .setDescription('客户端调用的API')
    .setVersion('1.0.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api-docs', app, document);
  // ↓ 客户端API服务 ↓
  const PORT = process.env.SERVER_PORT || 3002;
  await app.listen(PORT);
  console.info('admin server start success! :)');
  console.info(`http://localhost:${PORT}/api-docs :)`);
}
bootstrap();
