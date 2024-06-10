/*
  Warnings:

  - You are about to drop the `Article` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ArticleCategory` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `SystemDmCategory` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `SystemDmConfig` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `SystemDmDict` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `SystemDmDictData` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `SystemDmRegion` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `SystemMessageNotice` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `SystemMessagePush` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `SystemOrganizationDept` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `SystemOrganizationOrg` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `SystemOrganizationPost` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `SystemPermissionMobileDevice` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `UserArticleCollect` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `UserArticleComment` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `UserArticleFavorite` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `UserArticleLike` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `UserArticleReport` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `UserArticleView` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `UserSearch` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Article" DROP CONSTRAINT "Article_authorId_fkey";

-- DropForeignKey
ALTER TABLE "Article" DROP CONSTRAINT "Article_categoryId_fkey";

-- DropForeignKey
ALTER TABLE "SystemDmDictData" DROP CONSTRAINT "SystemDmDictData_dictId_fkey";

-- DropForeignKey
ALTER TABLE "SystemMessagePush" DROP CONSTRAINT "SystemMessagePush_sendUserId_fkey";

-- DropForeignKey
ALTER TABLE "SystemOrganizationDept" DROP CONSTRAINT "SystemOrganizationDept_orgId_fkey";

-- DropForeignKey
ALTER TABLE "SystemOrganizationPost" DROP CONSTRAINT "SystemOrganizationPost_deptId_fkey";

-- DropForeignKey
ALTER TABLE "SystemOrganizationPost" DROP CONSTRAINT "SystemOrganizationPost_orgId_fkey";

-- DropForeignKey
ALTER TABLE "SystemPermissionMobileDevice" DROP CONSTRAINT "SystemPermissionMobileDevice_userId_fkey";

-- DropForeignKey
ALTER TABLE "UserArticleCollect" DROP CONSTRAINT "UserArticleCollect_articleId_fkey";

-- DropForeignKey
ALTER TABLE "UserArticleCollect" DROP CONSTRAINT "UserArticleCollect_favoriteId_fkey";

-- DropForeignKey
ALTER TABLE "UserArticleComment" DROP CONSTRAINT "UserArticleComment_articleId_fkey";

-- DropForeignKey
ALTER TABLE "UserArticleComment" DROP CONSTRAINT "UserArticleComment_commentUserId_fkey";

-- DropForeignKey
ALTER TABLE "UserArticleComment" DROP CONSTRAINT "UserArticleComment_replyUserId_fkey";

-- DropForeignKey
ALTER TABLE "UserArticleFavorite" DROP CONSTRAINT "UserArticleFavorite_userId_fkey";

-- DropForeignKey
ALTER TABLE "UserArticleLike" DROP CONSTRAINT "UserArticleLike_articleId_fkey";

-- DropForeignKey
ALTER TABLE "UserArticleLike" DROP CONSTRAINT "UserArticleLike_userId_fkey";

-- DropForeignKey
ALTER TABLE "UserArticleReport" DROP CONSTRAINT "UserArticleReport_articleId_fkey";

-- DropForeignKey
ALTER TABLE "UserArticleReport" DROP CONSTRAINT "UserArticleReport_userId_fkey";

-- DropForeignKey
ALTER TABLE "UserArticleView" DROP CONSTRAINT "UserArticleView_articleId_fkey";

-- DropForeignKey
ALTER TABLE "UserArticleView" DROP CONSTRAINT "UserArticleView_userId_fkey";

-- DropForeignKey
ALTER TABLE "UserSearch" DROP CONSTRAINT "UserSearch_userId_fkey";

-- DropTable
DROP TABLE "Article";

-- DropTable
DROP TABLE "ArticleCategory";

-- DropTable
DROP TABLE "SystemDmCategory";

-- DropTable
DROP TABLE "SystemDmConfig";

-- DropTable
DROP TABLE "SystemDmDict";

-- DropTable
DROP TABLE "SystemDmDictData";

-- DropTable
DROP TABLE "SystemDmRegion";

-- DropTable
DROP TABLE "SystemMessageNotice";

-- DropTable
DROP TABLE "SystemMessagePush";

-- DropTable
DROP TABLE "SystemOrganizationDept";

-- DropTable
DROP TABLE "SystemOrganizationOrg";

-- DropTable
DROP TABLE "SystemOrganizationPost";

-- DropTable
DROP TABLE "SystemPermissionMobileDevice";

-- DropTable
DROP TABLE "User";

-- DropTable
DROP TABLE "UserArticleCollect";

-- DropTable
DROP TABLE "UserArticleComment";

-- DropTable
DROP TABLE "UserArticleFavorite";

-- DropTable
DROP TABLE "UserArticleLike";

-- DropTable
DROP TABLE "UserArticleReport";

-- DropTable
DROP TABLE "UserArticleView";

-- DropTable
DROP TABLE "UserSearch";

-- CreateTable
CREATE TABLE "news_user" (
    "id" SERIAL NOT NULL,
    "createTime" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateTime" TIMESTAMP(3) NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "avatar" TEXT,
    "status" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "news_user_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "news_article_category" (
    "id" SERIAL NOT NULL,
    "createTime" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateTime" TIMESTAMP(3) NOT NULL,
    "name" TEXT NOT NULL,
    "keywords" TEXT,
    "description" TEXT,
    "sort" INTEGER NOT NULL DEFAULT 0,
    "status" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "news_article_category_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "news_article" (
    "id" SERIAL NOT NULL,
    "createTime" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateTime" TIMESTAMP(3) NOT NULL,
    "title" VARCHAR(255) NOT NULL,
    "isTop" BOOLEAN NOT NULL DEFAULT false,
    "content" TEXT NOT NULL,
    "coverType" INTEGER NOT NULL DEFAULT 0,
    "coverImg" TEXT,
    "commentCount" INTEGER NOT NULL DEFAULT 0,
    "likeCount" INTEGER NOT NULL DEFAULT 0,
    "collectCount" INTEGER NOT NULL DEFAULT 0,
    "readCount" INTEGER NOT NULL DEFAULT 0,
    "status" INTEGER DEFAULT 1,
    "authorId" INTEGER,
    "categoryId" INTEGER,

    CONSTRAINT "news_article_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "news_user_article_favorite" (
    "id" SERIAL NOT NULL,
    "createTime" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateTime" TIMESTAMP(3) NOT NULL,
    "name" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "news_user_article_favorite_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "news_user_article_collect" (
    "id" SERIAL NOT NULL,
    "createTime" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateTime" TIMESTAMP(3) NOT NULL,
    "articleId" INTEGER NOT NULL,
    "favoriteId" INTEGER NOT NULL,

    CONSTRAINT "news_user_article_collect_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "news_user_article_comment" (
    "id" SERIAL NOT NULL,
    "createTime" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateTime" TIMESTAMP(3) NOT NULL,
    "parentId" INTEGER DEFAULT 0,
    "content" TEXT NOT NULL,
    "isTop" INTEGER DEFAULT 0,
    "commentCount" INTEGER DEFAULT 0,
    "likeCount" INTEGER DEFAULT 0,
    "status" INTEGER DEFAULT 2,
    "articleId" INTEGER NOT NULL,
    "commentUserId" INTEGER NOT NULL,
    "replyUserId" INTEGER NOT NULL,

    CONSTRAINT "news_user_article_comment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "news_user_article_like" (
    "id" SERIAL NOT NULL,
    "createTime" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateTime" TIMESTAMP(3) NOT NULL,
    "userId" INTEGER NOT NULL,
    "articleId" INTEGER NOT NULL,

    CONSTRAINT "news_user_article_like_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "news_user_search" (
    "id" SERIAL NOT NULL,
    "createTime" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateTime" TIMESTAMP(3) NOT NULL,
    "searchCount" INTEGER NOT NULL DEFAULT 1,
    "keywords" TEXT NOT NULL,
    "type" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "news_user_search_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "news_user_article_view" (
    "id" SERIAL NOT NULL,
    "createTime" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateTime" TIMESTAMP(3) NOT NULL,
    "viewCount" INTEGER DEFAULT 1,
    "userId" INTEGER NOT NULL,
    "articleId" INTEGER NOT NULL,

    CONSTRAINT "news_user_article_view_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "news_user_article_report" (
    "id" SERIAL NOT NULL,
    "createTime" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateTime" TIMESTAMP(3) NOT NULL,
    "type" INTEGER NOT NULL DEFAULT 0,
    "remark" TEXT NOT NULL,
    "status" INTEGER DEFAULT 1,
    "userId" INTEGER NOT NULL,
    "articleId" INTEGER NOT NULL,

    CONSTRAINT "news_user_article_report_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "news_system_dm_dict" (
    "id" SERIAL NOT NULL,
    "createTime" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateTime" TIMESTAMP(3) NOT NULL,
    "name" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "remark" TEXT,
    "status" BOOLEAN DEFAULT true,

    CONSTRAINT "news_system_dm_dict_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "news_system_dm_dict_data" (
    "id" SERIAL NOT NULL,
    "createTime" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateTime" TIMESTAMP(3) NOT NULL,
    "label" TEXT NOT NULL,
    "value" TEXT NOT NULL,
    "class" TEXT,
    "sort" INTEGER DEFAULT 0,
    "remark" TEXT,
    "status" BOOLEAN DEFAULT true,
    "colorType" TEXT DEFAULT 'default',
    "dictId" INTEGER NOT NULL,

    CONSTRAINT "news_system_dm_dict_data_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "news_system_dm_category" (
    "id" SERIAL NOT NULL,
    "createTime" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateTime" TIMESTAMP(3) NOT NULL,
    "parentId" INTEGER DEFAULT 0,
    "name" TEXT NOT NULL,
    "code" TEXT,
    "level" INTEGER DEFAULT 1,
    "sort" INTEGER DEFAULT 0,
    "status" BOOLEAN DEFAULT true,
    "remark" TEXT,

    CONSTRAINT "news_system_dm_category_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "news_system_dm_config" (
    "id" SERIAL NOT NULL,
    "createTime" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateTime" TIMESTAMP(3) NOT NULL,
    "name" TEXT NOT NULL,
    "key" TEXT NOT NULL,
    "value" TEXT NOT NULL,
    "type" BOOLEAN DEFAULT false,
    "remark" TEXT,

    CONSTRAINT "news_system_dm_config_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "news_system_dm_region" (
    "id" SERIAL NOT NULL,
    "createTime" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateTime" TIMESTAMP(3) NOT NULL,
    "parentCode" INTEGER DEFAULT 0,
    "name" TEXT NOT NULL,
    "code" INTEGER NOT NULL,
    "sort" INTEGER DEFAULT 0,

    CONSTRAINT "news_system_dm_region_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "news_system_organization_org" (
    "id" SERIAL NOT NULL,
    "createTime" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateTime" TIMESTAMP(3) NOT NULL,
    "parentId" INTEGER DEFAULT 0,
    "name" TEXT NOT NULL,
    "sort" INTEGER DEFAULT 0,
    "leader" TEXT,
    "phone" INTEGER,
    "email" TEXT,
    "status" BOOLEAN DEFAULT true,

    CONSTRAINT "news_system_organization_org_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "news_system_organization_dept" (
    "id" SERIAL NOT NULL,
    "createTime" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateTime" TIMESTAMP(3) NOT NULL,
    "parentId" INTEGER DEFAULT 0,
    "name" TEXT NOT NULL,
    "sort" INTEGER DEFAULT 0,
    "leader" TEXT,
    "phone" INTEGER,
    "email" TEXT,
    "status" BOOLEAN DEFAULT true,
    "orgId" INTEGER NOT NULL,

    CONSTRAINT "news_system_organization_dept_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "news_system_organization_post" (
    "id" SERIAL NOT NULL,
    "createTime" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateTime" TIMESTAMP(3) NOT NULL,
    "name" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "sort" INTEGER DEFAULT 0,
    "remark" TEXT,
    "status" BOOLEAN DEFAULT true,
    "orgId" INTEGER NOT NULL,
    "deptId" INTEGER NOT NULL,

    CONSTRAINT "news_system_organization_post_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "news_system_permission_mobile_device" (
    "id" SERIAL NOT NULL,
    "createTime" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateTime" TIMESTAMP(3) NOT NULL,
    "deviceOs" TEXT NOT NULL,
    "deviceNo" TEXT NOT NULL,
    "deviceBrand" TEXT NOT NULL,
    "status" BOOLEAN DEFAULT false,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "news_system_permission_mobile_device_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "news_system_message_notice" (
    "id" SERIAL NOT NULL,
    "createTime" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateTime" TIMESTAMP(3) NOT NULL,
    "title" TEXT NOT NULL,
    "type" INTEGER NOT NULL,
    "status" BOOLEAN DEFAULT true,
    "content" TEXT NOT NULL,

    CONSTRAINT "news_system_message_notice_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "news_system_message_push" (
    "id" SERIAL NOT NULL,
    "createTime" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateTime" TIMESTAMP(3) NOT NULL,
    "title" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "pushType" INTEGER NOT NULL,
    "receiveUser" INTEGER[],
    "sendUserId" INTEGER NOT NULL,
    "pushClientId" TEXT,
    "pushChannel" INTEGER,
    "pcNotifyUrl" TEXT,
    "appNotifyUrl" TEXT,
    "readNum" INTEGER DEFAULT 0,
    "readTime" TIMESTAMP(3),

    CONSTRAINT "news_system_message_push_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "news_system_dm_dict_type_key" ON "news_system_dm_dict"("type");

-- CreateIndex
CREATE UNIQUE INDEX "news_system_dm_region_code_key" ON "news_system_dm_region"("code");

-- AddForeignKey
ALTER TABLE "news_article" ADD CONSTRAINT "news_article_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "news_user"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "news_article" ADD CONSTRAINT "news_article_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "news_article_category"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "news_user_article_favorite" ADD CONSTRAINT "news_user_article_favorite_userId_fkey" FOREIGN KEY ("userId") REFERENCES "news_user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "news_user_article_collect" ADD CONSTRAINT "news_user_article_collect_articleId_fkey" FOREIGN KEY ("articleId") REFERENCES "news_article"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "news_user_article_collect" ADD CONSTRAINT "news_user_article_collect_favoriteId_fkey" FOREIGN KEY ("favoriteId") REFERENCES "news_user_article_favorite"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "news_user_article_comment" ADD CONSTRAINT "news_user_article_comment_articleId_fkey" FOREIGN KEY ("articleId") REFERENCES "news_article"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "news_user_article_comment" ADD CONSTRAINT "news_user_article_comment_commentUserId_fkey" FOREIGN KEY ("commentUserId") REFERENCES "news_user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "news_user_article_comment" ADD CONSTRAINT "news_user_article_comment_replyUserId_fkey" FOREIGN KEY ("replyUserId") REFERENCES "news_user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "news_user_article_like" ADD CONSTRAINT "news_user_article_like_userId_fkey" FOREIGN KEY ("userId") REFERENCES "news_user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "news_user_article_like" ADD CONSTRAINT "news_user_article_like_articleId_fkey" FOREIGN KEY ("articleId") REFERENCES "news_article"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "news_user_search" ADD CONSTRAINT "news_user_search_userId_fkey" FOREIGN KEY ("userId") REFERENCES "news_user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "news_user_article_view" ADD CONSTRAINT "news_user_article_view_userId_fkey" FOREIGN KEY ("userId") REFERENCES "news_user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "news_user_article_view" ADD CONSTRAINT "news_user_article_view_articleId_fkey" FOREIGN KEY ("articleId") REFERENCES "news_article"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "news_user_article_report" ADD CONSTRAINT "news_user_article_report_userId_fkey" FOREIGN KEY ("userId") REFERENCES "news_user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "news_user_article_report" ADD CONSTRAINT "news_user_article_report_articleId_fkey" FOREIGN KEY ("articleId") REFERENCES "news_article"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "news_system_dm_dict_data" ADD CONSTRAINT "news_system_dm_dict_data_dictId_fkey" FOREIGN KEY ("dictId") REFERENCES "news_system_dm_dict"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "news_system_organization_dept" ADD CONSTRAINT "news_system_organization_dept_orgId_fkey" FOREIGN KEY ("orgId") REFERENCES "news_system_organization_org"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "news_system_organization_post" ADD CONSTRAINT "news_system_organization_post_orgId_fkey" FOREIGN KEY ("orgId") REFERENCES "news_system_organization_org"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "news_system_organization_post" ADD CONSTRAINT "news_system_organization_post_deptId_fkey" FOREIGN KEY ("deptId") REFERENCES "news_system_organization_dept"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "news_system_permission_mobile_device" ADD CONSTRAINT "news_system_permission_mobile_device_userId_fkey" FOREIGN KEY ("userId") REFERENCES "news_user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "news_system_message_push" ADD CONSTRAINT "news_system_message_push_sendUserId_fkey" FOREIGN KEY ("sendUserId") REFERENCES "news_user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
