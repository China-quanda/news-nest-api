/*
  Warnings:

  - You are about to drop the column `articleCategoryId` on the `Article` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Article" DROP CONSTRAINT "Article_articleCategoryId_fkey";

-- AlterTable
ALTER TABLE "Article" DROP COLUMN "articleCategoryId",
ADD COLUMN     "categoryId" INTEGER;

-- AddForeignKey
ALTER TABLE "Article" ADD CONSTRAINT "Article_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "ArticleCategory"("id") ON DELETE SET NULL ON UPDATE CASCADE;
