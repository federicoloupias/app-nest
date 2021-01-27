import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { NoticeModule } from './notice/notice.module';
import 'dotenv/config';

const URL = process.env.MONGO_URI

@Module({
  imports: [
    MongooseModule.forRoot(URL,
      {
        useNewUrlParser: true
      }), NoticeModule

  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
