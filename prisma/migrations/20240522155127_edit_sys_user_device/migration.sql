/*
  Warnings:

  - You are about to drop the column `os` on the `SysUserDevice` table. All the data in the column will be lost.
  - Added the required column `deviceOs` to the `SysUserDevice` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "SysUserDevice" DROP COLUMN "os",
ADD COLUMN     "deviceOs" TEXT NOT NULL;
