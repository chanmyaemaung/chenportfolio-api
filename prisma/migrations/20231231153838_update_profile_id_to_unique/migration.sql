/*
  Warnings:

  - A unique constraint covering the columns `[profileId]` on the table `Project` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Project_profileId_key" ON "Project"("profileId");
