import { Injectable } from "@nestjs/common";
import { Prisma } from "@prisma/client";
import { DatabaseService } from "src/database/database.service";

@Injectable()
export class ProjectService {
  constructor(private readonly databaseService: DatabaseService) {}

  async create(createProjectDto: Prisma.ProjectCreateInput) {
    return await this.databaseService.project.create({
      data: createProjectDto,
    });
  }

  async findAll() {
    return await this.databaseService.project.findMany();
  }

  async findOne(id: number) {
    return await this.databaseService.project.findUnique({
      where: { id },
    });
  }

  async update(id: number, updateProjectDto: Prisma.ProjectUpdateInput) {
    return await this.databaseService.project.update({
      where: { id },
      data: updateProjectDto,
    });
  }

  async remove(id: number) {
    return await this.databaseService.project.delete({ where: { id } });
  }
}
