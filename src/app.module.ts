import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { ConfigModule } from "@nestjs/config";
import { DatabaseModule } from './database/database.module';
import { ProfileModule } from './profile/profile.module';

@Module({
  imports: [ConfigModule.forRoot(), DatabaseModule, ProfileModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
