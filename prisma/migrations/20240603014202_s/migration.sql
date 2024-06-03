/*
  Warnings:

  - A unique constraint covering the columns `[id]` on the table `SystemDmRegion` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "SystemDmRegion" ALTER COLUMN "id" DROP DEFAULT;
DROP SEQUENCE "systemdmregion_id_seq";

-- CreateIndex
CREATE UNIQUE INDEX "SystemDmRegion_id_key" ON "SystemDmRegion"("id");
