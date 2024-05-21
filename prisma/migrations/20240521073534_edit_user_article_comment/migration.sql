/*
  Warnings:

  - Made the column `articleId` on table `UserArticleComment` required. This step will fail if there are existing NULL values in that column.
  - Made the column `commentUserId` on table `UserArticleComment` required. This step will fail if there are existing NULL values in that column.
  - Made the column `replyUserId` on table `UserArticleComment` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "UserArticleComment" DROP CONSTRAINT "UserArticleComment_articleId_fkey";

-- DropForeignKey
ALTER TABLE "UserArticleComment" DROP CONSTRAINT "UserArticleComment_commentUserId_fkey";

-- DropForeignKey
ALTER TABLE "UserArticleComment" DROP CONSTRAINT "UserArticleComment_replyUserId_fkey";

-- AlterTable
ALTER TABLE "UserArticleComment" ALTER COLUMN "isTop" DROP NOT NULL,
ALTER COLUMN "commentCount" DROP NOT NULL,
ALTER COLUMN "likeCount" DROP NOT NULL,
ALTER COLUMN "status" DROP NOT NULL,
ALTER COLUMN "articleId" SET NOT NULL,
ALTER COLUMN "commentUserId" SET NOT NULL,
ALTER COLUMN "replyUserId" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "UserArticleComment" ADD CONSTRAINT "UserArticleComment_articleId_fkey" FOREIGN KEY ("articleId") REFERENCES "Article"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserArticleComment" ADD CONSTRAINT "UserArticleComment_commentUserId_fkey" FOREIGN KEY ("commentUserId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserArticleComment" ADD CONSTRAINT "UserArticleComment_replyUserId_fkey" FOREIGN KEY ("replyUserId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
