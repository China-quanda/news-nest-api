/*
  Warnings:

  - You are about to drop the column `userId` on the `UserArticleCollect` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "UserArticleCollect" DROP CONSTRAINT "UserArticleCollect_userId_fkey";

-- AlterTable
ALTER TABLE "UserArticleCollect" DROP COLUMN "userId";
