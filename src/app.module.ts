import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CrudModule } from './crud/crud.module';
// import mongo_uri from './shared/config'

import * as dotenv from "dotenv";
dotenv.config();

@Module({
  imports: [MongooseModule.forRoot(process.env.MONGO_URL!), CrudModule],
})
export class AppModule {}
