-- CreateTable
CREATE TABLE "SystemOrganizationPost" (
    "id" SERIAL NOT NULL,
    "createdTime" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedTime" TIMESTAMP(3) NOT NULL,
    "name" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "sort" INTEGER DEFAULT 0,
    "remark" TEXT,
    "status" BOOLEAN DEFAULT true,
    "orgId" INTEGER NOT NULL,
    "deptId" INTEGER NOT NULL,

    CONSTRAINT "SystemOrganizationPost_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "SystemOrganizationPost" ADD CONSTRAINT "SystemOrganizationPost_orgId_fkey" FOREIGN KEY ("orgId") REFERENCES "SystemOrganizationOrg"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SystemOrganizationPost" ADD CONSTRAINT "SystemOrganizationPost_deptId_fkey" FOREIGN KEY ("deptId") REFERENCES "SystemOrganizationDept"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
