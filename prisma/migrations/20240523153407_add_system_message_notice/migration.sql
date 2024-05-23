-- CreateTable
CREATE TABLE "SystemMessageNotice" (
    "id" SERIAL NOT NULL,
    "createdTime" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedTime" TIMESTAMP(3) NOT NULL,
    "title" TEXT NOT NULL,
    "type" INTEGER NOT NULL,
    "status" BOOLEAN DEFAULT true,
    "content" TEXT NOT NULL,

    CONSTRAINT "SystemMessageNotice_pkey" PRIMARY KEY ("id")
);
