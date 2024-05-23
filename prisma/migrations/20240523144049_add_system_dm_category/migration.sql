-- CreateTable
CREATE TABLE "SystemDmCategory" (
    "id" SERIAL NOT NULL,
    "createdTime" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedTime" TIMESTAMP(3) NOT NULL,
    "parentId" INTEGER DEFAULT 0,
    "name" TEXT NOT NULL,
    "code" TEXT,
    "level" INTEGER DEFAULT 1,
    "sort" INTEGER DEFAULT 0,
    "status" BOOLEAN DEFAULT true,
    "remark" TEXT,

    CONSTRAINT "SystemDmCategory_pkey" PRIMARY KEY ("id")
);
