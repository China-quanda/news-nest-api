/*
  Warnings:

  - You are about to drop the column `createdAt` on the `Article` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `Article` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `ArticleCategory` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `ArticleCategory` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `User` table. All the data in the column will be lost.
  - Added the required column `updatedTime` to the `Article` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedTime` to the `ArticleCategory` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedTime` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Article" DROP COLUMN "createdAt",
DROP COLUMN "updatedAt",
ADD COLUMN     "createdTime" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedTime" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "ArticleCategory" DROP COLUMN "createdAt",
DROP COLUMN "updatedAt",
ADD COLUMN     "createdTime" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedTime" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "createdAt",
DROP COLUMN "updatedAt",
ADD COLUMN     "createdTime" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedTime" TIMESTAMP(3) NOT NULL;
