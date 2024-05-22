/*
  Warnings:

  - You are about to drop the column `createdAt` on the `SysUserDevice` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `SysUserDevice` table. All the data in the column will be lost.
  - Added the required column `updatedTime` to the `SysUserDevice` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "SysUserDevice" DROP COLUMN "createdAt",
DROP COLUMN "updatedAt",
ADD COLUMN     "createdTime" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedTime" TIMESTAMP(3) NOT NULL;
