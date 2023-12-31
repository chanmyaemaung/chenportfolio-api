import {
  Body,
  Controller,
  Delete,
  Get,
  Ip,
  Param,
  Patch,
  Post,
} from "@nestjs/common";
import { SkipThrottle } from "@nestjs/throttler";
import { Prisma } from "@prisma/client";
import { MyLoggerService } from "src/my-logger/my-logger.service";
import { ProjectService } from "./project.service";

@SkipThrottle()
@Controller("project")
export class ProjectController {
  constructor(private readonly projectService: ProjectService) {}
  private readonly logger = new MyLoggerService(ProjectController.name);

  @SkipThrottle({ short: false })
  @Post()
  create(
    @Ip() ip: string,
    @Body() createProjectDto: Prisma.ProjectCreateInput,
  ) {
    this.logger.log(
      `REQUEST FROM CREATE PROJECT\t${ip}`,
      ProjectController.name,
    );

    return this.projectService.create(createProjectDto);
  }

  @SkipThrottle({ long: false })
  @Get()
  findAll(@Ip() ip: string) {
    this.logger.log(
      `REQUEST FROM ALL PROJECTS FROM\t${ip}`,
      ProjectController.name,
    );

    return this.projectService.findAll();
  }

  @SkipThrottle({ long: false })
  @Get(":id")
  findOne(@Ip() ip: string, @Param("id") id: string) {
    this.logger.log(`REQUEST FROM ONE PROJECT\t${ip}`, ProjectController.name);

    return this.projectService.findOne(+id);
  }

  @SkipThrottle({ short: false })
  @Patch(":id")
  update(
    @Ip() ip: string,
    @Param("id") id: string,
    @Body() updateProjectDto: Prisma.ProjectUpdateInput,
  ) {
    this.logger.log(
      `REQUEST FROM UPDATE PROJECT\t${ip}`,
      ProjectController.name,
    );

    return this.projectService.update(+id, updateProjectDto);
  }

  @SkipThrottle({ short: false })
  @Delete(":id")
  remove(@Ip() ip: string, @Param("id") id: string) {
    this.logger.log(
      `REQUEST FROM DELETE PROJECT\t${ip}`,
      ProjectController.name,
    );

    return this.projectService.remove(+id);
  }
}
