-- CreateTable
CREATE TABLE "SysDataDict" (
    "id" SERIAL NOT NULL,
    "createdTime" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedTime" TIMESTAMP(3) NOT NULL,
    "name" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "remark" TEXT,
    "status" BOOLEAN DEFAULT true,

    CONSTRAINT "SysDataDict_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SysDataDictData" (
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

    CONSTRAINT "SysDataDictData_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "SysDataDictData" ADD CONSTRAINT "SysDataDictData_dictId_fkey" FOREIGN KEY ("dictId") REFERENCES "SysDataDict"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
