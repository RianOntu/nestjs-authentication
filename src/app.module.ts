import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {GoogleSrategy} from './google.strategy'

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService,GoogleSrategy],
})
export class AppModule {}
