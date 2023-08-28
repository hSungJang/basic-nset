import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from "@nestjs/common";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({
      whitelist: true, // parameter 유효성 체크
      forbidNonWhitelisted: true, // 유효하지 않은 parameter 요청을 받지 않음
      transform: true, // parameter를 자동으로 형변환 해줌
  }));
  await app.listen(3000);
}
bootstrap();
