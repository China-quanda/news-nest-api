-- CreateTable
CREATE TABLE "SystemDmConfig" (
    "id" SERIAL NOT NULL,
    "createdTime" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedTime" TIMESTAMP(3) NOT NULL,
    "name" TEXT NOT NULL,
    "key" TEXT NOT NULL,
    "value" TEXT NOT NULL,
    "type" BOOLEAN DEFAULT false,
    "remark" TEXT,

    CONSTRAINT "SystemDmConfig_pkey" PRIMARY KEY ("id")
);
