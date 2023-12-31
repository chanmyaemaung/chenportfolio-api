import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from "@nestjs/common";
import { Prisma } from "@prisma/client";
import { ProfileService } from "./profile.service";

@Controller("profile")
export class ProfileController {
  constructor(private readonly profileService: ProfileService) {}

  @Post()
  create(@Body() createProfileDto: Prisma.ProfileCreateInput) {
    return this.profileService.create(createProfileDto);
  }

  @Get()
  findAll(@Query("role") role?: "ADMIN" | "USER") {
    return this.profileService.findAll(role);
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.profileService.findOne(+id);
  }

  @Patch(":id")
  update(
    @Param("id") id: string,
    @Body() updateProfileDto: Prisma.ProfileUpdateInput,
  ) {
    return this.profileService.update(+id, updateProfileDto);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.profileService.remove(+id);
  }
}
