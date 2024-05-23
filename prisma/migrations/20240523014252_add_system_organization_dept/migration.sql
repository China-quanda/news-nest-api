-- CreateTable
CREATE TABLE "SystemOrganizationDept" (
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
    "orgId" INTEGER NOT NULL,

    CONSTRAINT "SystemOrganizationDept_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "SystemOrganizationDept" ADD CONSTRAINT "SystemOrganizationDept_orgId_fkey" FOREIGN KEY ("orgId") REFERENCES "SystemOrganizationOrg"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
