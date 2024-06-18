/*
  Warnings:

  - The `status` column on the `news_link` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "news_link" DROP COLUMN "status",
ADD COLUMN     "status" BOOLEAN DEFAULT true;
