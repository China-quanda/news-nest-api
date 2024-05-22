-- CreateTable
CREATE TABLE "SysUserDevice" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "os" TEXT NOT NULL,
    "deviceNo" TEXT NOT NULL,
    "deviceBrand" TEXT NOT NULL,
    "status" BOOLEAN NOT NULL DEFAULT false,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "SysUserDevice_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "SysUserDevice" ADD CONSTRAINT "SysUserDevice_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
