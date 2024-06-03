/*
  Warnings:

  - Added the required column `code` to the `SystemDmRegion` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "SystemDmRegion_id_key";

-- AlterTable
CREATE SEQUENCE systemdmregion_id_seq;
ALTER TABLE "SystemDmRegion" ADD COLUMN     "code" INTEGER NOT NULL,
ALTER COLUMN "id" SET DEFAULT nextval('systemdmregion_id_seq');
ALTER SEQUENCE systemdmregion_id_seq OWNED BY "SystemDmRegion"."id";
