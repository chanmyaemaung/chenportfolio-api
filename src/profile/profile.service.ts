import { Injectable } from "@nestjs/common";
import { Prisma } from "@prisma/client";
import { DatabaseService } from "src/database/database.service";

@Injectable()
export class ProfileService {
  constructor(private readonly databaseService: DatabaseService) {}

  async create(createProfileDto: Prisma.ProfileCreateInput) {
    return this.databaseService.profile.create({
      data: createProfileDto,
    });
  }

  async findAll(role?: "ADMIN" | "USER") {
    if (role) return this.databaseService.profile.findMany({ where: { role } });

    return this.databaseService.profile.findMany();
  }

  async findOne(id: number) {
    return this.databaseService.profile.findUnique({
      where: {
        id,
      },
    });
  }

  async update(id: number, updateProfileDto: Prisma.ProfileUpdateInput) {
    return this.databaseService.profile.update({
      where: {
        id,
      },
      data: updateProfileDto,
    });
  }

  async remove(id: number) {
    return this.databaseService.profile.delete({ where: { id } });
  }
}
