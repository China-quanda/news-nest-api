/*
  Warnings:

  - You are about to drop the `SysDataDict` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `SysDataDictData` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "SysDataDictData" DROP CONSTRAINT "SysDataDictData_dictId_fkey";

-- DropTable
DROP TABLE "SysDataDict";

-- DropTable
DROP TABLE "SysDataDictData";

-- CreateTable
CREATE TABLE "SystemDmDict" (
    "id" SERIAL NOT NULL,
    "createdTime" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedTime" TIMESTAMP(3) NOT NULL,
    "name" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "remark" TEXT,
    "status" BOOLEAN DEFAULT true,

    CONSTRAINT "SystemDmDict_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SystemDmDictData" (
    "id" SERIAL NOT NULL,
    "createdTime" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedTime" TIMESTAMP(3) NOT NULL,
    "label" TEXT NOT NULL,
    "value" TEXT NOT NULL,
    "class" TEXT,
    "sort" INTEGER DEFAULT 0,
    "remark" TEXT,
    "status" BOOLEAN DEFAULT true,
    "colorType" TEXT DEFAULT 'default',
    "dictId" INTEGER NOT NULL,

    CONSTRAINT "SystemDmDictData_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "SystemDmDictData" ADD CONSTRAINT "SystemDmDictData_dictId_fkey" FOREIGN KEY ("dictId") REFERENCES "SystemDmDict"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
