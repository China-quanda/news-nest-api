/*
  Warnings:

  - A unique constraint covering the columns `[type]` on the table `SystemDmDict` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "SystemDmRegion" ALTER COLUMN "id" DROP DEFAULT;
DROP SEQUENCE "SystemDmRegion_id_seq";

-- CreateIndex
CREATE UNIQUE INDEX "SystemDmDict_type_key" ON "SystemDmDict"("type");
