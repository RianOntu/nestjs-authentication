import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {GoogleSrategy} from './google.strategy';
import {MongooseModule} from '@nestjs/mongoose';
import { UserSchema } from './user.model';

@Module({
  imports: [MongooseModule.forRoot(`mongodb+srv://RianOntu:${process.env.db_password}@cluster0.qioqq.mongodb.net/nestjs-authentication?retryWrites=true&w=majority`),MongooseModule.forFeature([{name:"User",schema:UserSchema}])],
  controllers: [AppController],
  providers: [AppService,GoogleSrategy],
})
export class AppModule {}
