/*
  Warnings:

  - You are about to drop the column `prjectImage` on the `Project` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Project" DROP COLUMN "prjectImage",
ADD COLUMN     "projectImage" TEXT;
