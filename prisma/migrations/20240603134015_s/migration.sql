/*
  Warnings:

  - You are about to drop the column `parentId` on the `SystemDmRegion` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "SystemDmRegion" DROP COLUMN "parentId",
ADD COLUMN     "parentCode" INTEGER DEFAULT 0;
