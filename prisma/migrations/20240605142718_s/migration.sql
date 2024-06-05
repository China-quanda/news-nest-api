/*
  Warnings:

  - You are about to drop the column `createdTime` on the `Article` table. All the data in the column will be lost.
  - You are about to drop the column `updatedTime` on the `Article` table. All the data in the column will be lost.
  - You are about to drop the column `createdTime` on the `ArticleCategory` table. All the data in the column will be lost.
  - You are about to drop the column `updatedTime` on the `ArticleCategory` table. All the data in the column will be lost.
  - You are about to drop the column `createdTime` on the `SystemDmCategory` table. All the data in the column will be lost.
  - You are about to drop the column `updatedTime` on the `SystemDmCategory` table. All the data in the column will be lost.
  - You are about to drop the column `createdTime` on the `SystemDmConfig` table. All the data in the column will be lost.
  - You are about to drop the column `updatedTime` on the `SystemDmConfig` table. All the data in the column will be lost.
  - You are about to drop the column `createdTime` on the `SystemDmDict` table. All the data in the column will be lost.
  - You are about to drop the column `updatedTime` on the `SystemDmDict` table. All the data in the column will be lost.
  - You are about to drop the column `createdTime` on the `SystemDmDictData` table. All the data in the column will be lost.
  - You are about to drop the column `updatedTime` on the `SystemDmDictData` table. All the data in the column will be lost.
  - You are about to drop the column `createdTime` on the `SystemDmRegion` table. All the data in the column will be lost.
  - You are about to drop the column `updatedTime` on the `SystemDmRegion` table. All the data in the column will be lost.
  - You are about to drop the column `createdTime` on the `SystemMessageNotice` table. All the data in the column will be lost.
  - You are about to drop the column `updatedTime` on the `SystemMessageNotice` table. All the data in the column will be lost.
  - You are about to drop the column `createdTime` on the `SystemMessagePush` table. All the data in the column will be lost.
  - You are about to drop the column `updatedTime` on the `SystemMessagePush` table. All the data in the column will be lost.
  - You are about to drop the column `createdTime` on the `SystemOrganizationDept` table. All the data in the column will be lost.
  - You are about to drop the column `updatedTime` on the `SystemOrganizationDept` table. All the data in the column will be lost.
  - You are about to drop the column `createdTime` on the `SystemOrganizationOrg` table. All the data in the column will be lost.
  - You are about to drop the column `updatedTime` on the `SystemOrganizationOrg` table. All the data in the column will be lost.
  - You are about to drop the column `createdTime` on the `SystemOrganizationPost` table. All the data in the column will be lost.
  - You are about to drop the column `updatedTime` on the `SystemOrganizationPost` table. All the data in the column will be lost.
  - You are about to drop the column `createdTime` on the `SystemPermissionMobileDevice` table. All the data in the column will be lost.
  - You are about to drop the column `updatedTime` on the `SystemPermissionMobileDevice` table. All the data in the column will be lost.
  - You are about to drop the column `createdTime` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `updatedTime` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `createdTime` on the `UserArticleCollect` table. All the data in the column will be lost.
  - You are about to drop the column `updatedTime` on the `UserArticleCollect` table. All the data in the column will be lost.
  - You are about to drop the column `createdTime` on the `UserArticleComment` table. All the data in the column will be lost.
  - You are about to drop the column `updatedTime` on the `UserArticleComment` table. All the data in the column will be lost.
  - You are about to drop the column `createdTime` on the `UserArticleFavorite` table. All the data in the column will be lost.
  - You are about to drop the column `updatedTime` on the `UserArticleFavorite` table. All the data in the column will be lost.
  - You are about to drop the column `createdTime` on the `UserArticleLike` table. All the data in the column will be lost.
  - You are about to drop the column `updatedTime` on the `UserArticleLike` table. All the data in the column will be lost.
  - You are about to drop the column `createdTime` on the `UserArticleReport` table. All the data in the column will be lost.
  - You are about to drop the column `updatedTime` on the `UserArticleReport` table. All the data in the column will be lost.
  - You are about to drop the column `createdTime` on the `UserArticleView` table. All the data in the column will be lost.
  - You are about to drop the column `updatedTime` on the `UserArticleView` table. All the data in the column will be lost.
  - You are about to drop the column `createdTime` on the `UserSearch` table. All the data in the column will be lost.
  - You are about to drop the column `updatedTime` on the `UserSearch` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[code]` on the table `SystemDmRegion` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `updateTime` to the `Article` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updateTime` to the `ArticleCategory` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updateTime` to the `SystemDmCategory` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updateTime` to the `SystemDmConfig` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updateTime` to the `SystemDmDict` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updateTime` to the `SystemDmDictData` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updateTime` to the `SystemDmRegion` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updateTime` to the `SystemMessageNotice` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updateTime` to the `SystemMessagePush` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updateTime` to the `SystemOrganizationDept` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updateTime` to the `SystemOrganizationOrg` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updateTime` to the `SystemOrganizationPost` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updateTime` to the `SystemPermissionMobileDevice` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updateTime` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updateTime` to the `UserArticleCollect` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updateTime` to the `UserArticleComment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updateTime` to the `UserArticleFavorite` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updateTime` to the `UserArticleLike` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updateTime` to the `UserArticleReport` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updateTime` to the `UserArticleView` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updateTime` to the `UserSearch` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Article" DROP COLUMN "createdTime",
DROP COLUMN "updatedTime",
ADD COLUMN     "createTime" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updateTime" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "ArticleCategory" DROP COLUMN "createdTime",
DROP COLUMN "updatedTime",
ADD COLUMN     "createTime" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updateTime" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "SystemDmCategory" DROP COLUMN "createdTime",
DROP COLUMN "updatedTime",
ADD COLUMN     "createTime" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updateTime" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "SystemDmConfig" DROP COLUMN "createdTime",
DROP COLUMN "updatedTime",
ADD COLUMN     "createTime" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updateTime" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "SystemDmDict" DROP COLUMN "createdTime",
DROP COLUMN "updatedTime",
ADD COLUMN     "createTime" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updateTime" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "SystemDmDictData" DROP COLUMN "createdTime",
DROP COLUMN "updatedTime",
ADD COLUMN     "createTime" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updateTime" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "SystemDmRegion" DROP COLUMN "createdTime",
DROP COLUMN "updatedTime",
ADD COLUMN     "createTime" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updateTime" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "SystemMessageNotice" DROP COLUMN "createdTime",
DROP COLUMN "updatedTime",
ADD COLUMN     "createTime" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updateTime" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "SystemMessagePush" DROP COLUMN "createdTime",
DROP COLUMN "updatedTime",
ADD COLUMN     "createTime" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updateTime" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "SystemOrganizationDept" DROP COLUMN "createdTime",
DROP COLUMN "updatedTime",
ADD COLUMN     "createTime" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updateTime" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "SystemOrganizationOrg" DROP COLUMN "createdTime",
DROP COLUMN "updatedTime",
ADD COLUMN     "createTime" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updateTime" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "SystemOrganizationPost" DROP COLUMN "createdTime",
DROP COLUMN "updatedTime",
ADD COLUMN     "createTime" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updateTime" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "SystemPermissionMobileDevice" DROP COLUMN "createdTime",
DROP COLUMN "updatedTime",
ADD COLUMN     "createTime" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updateTime" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "createdTime",
DROP COLUMN "updatedTime",
ADD COLUMN     "createTime" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updateTime" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "UserArticleCollect" DROP COLUMN "createdTime",
DROP COLUMN "updatedTime",
ADD COLUMN     "createTime" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updateTime" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "UserArticleComment" DROP COLUMN "createdTime",
DROP COLUMN "updatedTime",
ADD COLUMN     "createTime" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updateTime" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "UserArticleFavorite" DROP COLUMN "createdTime",
DROP COLUMN "updatedTime",
ADD COLUMN     "createTime" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updateTime" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "UserArticleLike" DROP COLUMN "createdTime",
DROP COLUMN "updatedTime",
ADD COLUMN     "createTime" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updateTime" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "UserArticleReport" DROP COLUMN "createdTime",
DROP COLUMN "updatedTime",
ADD COLUMN     "createTime" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updateTime" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "UserArticleView" DROP COLUMN "createdTime",
DROP COLUMN "updatedTime",
ADD COLUMN     "createTime" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updateTime" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "UserSearch" DROP COLUMN "createdTime",
DROP COLUMN "updatedTime",
ADD COLUMN     "createTime" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updateTime" TIMESTAMP(3) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "SystemDmRegion_code_key" ON "SystemDmRegion"("code");
