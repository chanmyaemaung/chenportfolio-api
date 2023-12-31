import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
  Ip,
} from "@nestjs/common";
import { SkipThrottle } from "@nestjs/throttler";
import { Prisma } from "@prisma/client";
import { ProfileService } from "./profile.service";
import { MyLoggerService } from "src/my-logger/my-logger.service";

@SkipThrottle()
@Controller("profile")
export class ProfileController {
  constructor(private readonly profileService: ProfileService) {}
  private readonly logger = new MyLoggerService(ProfileController.name);

  @SkipThrottle({ short: false })
  @Post()
  create(
    @Ip() ip: string,
    @Body() createProfileDto: Prisma.ProfileCreateInput,
  ) {
    this.logger.log(
      `REQUEST FROM CREATE PROFILE\t${ip}`,
      ProfileController.name,
    );

    return this.profileService.create(createProfileDto);
  }

  @SkipThrottle({ short: false })
  @Get()
  findAll(@Ip() ip: string, @Query("role") role?: "ADMIN" | "USER") {
    this.logger.log(
      `REQUEST FROM ALL PROFILES FROM\t${ip}`,
      ProfileController.name,
    );

    return this.profileService.findAll(role);
  }

  @SkipThrottle({ long: false })
  @Get(":id")
  findOne(@Ip() ip: string, @Param("id") id: string) {
    this.logger.log(`REQUEST FROM ONE PROFILE\t${ip}`, ProfileController.name);

    return this.profileService.findOne(+id);
  }

  @SkipThrottle({ short: false })
  @Patch(":id")
  update(
    @Ip() ip: string,
    @Param("id") id: string,
    @Body() updateProfileDto: Prisma.ProfileUpdateInput,
  ) {
    this.logger.log(
      `REQUEST FROM UPDATE PROFILE\t${ip}`,
      ProfileController.name,
    );

    return this.profileService.update(+id, updateProfileDto);
  }

  @SkipThrottle({ short: false })
  @Delete(":id")
  remove(@Ip() ip: string, @Param("id") id: string) {
    this.logger.log(
      `REQUEST FROM DELETE PROFILE\t${ip}`,
      ProfileController.name,
    );

    return this.profileService.remove(+id);
  }
}
