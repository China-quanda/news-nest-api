-- CreateTable
CREATE TABLE "SystemOrganizationOrg" (
    "id" SERIAL NOT NULL,
    "createdTime" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedTime" TIMESTAMP(3) NOT NULL,
    "parentId" INTEGER DEFAULT 0,
    "name" TEXT NOT NULL,
    "sort" INTEGER DEFAULT 0,
    "leader" TEXT,
    "phone" INTEGER,
    "email" TEXT,
    "status" BOOLEAN DEFAULT true,

    CONSTRAINT "SystemOrganizationOrg_pkey" PRIMARY KEY ("id")
);
