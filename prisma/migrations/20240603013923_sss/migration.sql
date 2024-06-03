-- AlterTable
CREATE SEQUENCE systemdmregion_id_seq;
ALTER TABLE "SystemDmRegion" ALTER COLUMN "id" SET DEFAULT nextval('systemdmregion_id_seq');
ALTER SEQUENCE systemdmregion_id_seq OWNED BY "SystemDmRegion"."id";
