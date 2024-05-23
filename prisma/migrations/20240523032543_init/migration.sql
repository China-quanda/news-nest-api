-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "createdTime" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedTime" TIMESTAMP(3) NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "avatar" TEXT,
    "status" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ArticleCategory" (
    "id" SERIAL NOT NULL,
    "createdTime" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedTime" TIMESTAMP(3) NOT NULL,
    "name" TEXT NOT NULL,
    "keywords" TEXT,
    "description" TEXT,
    "sort" INTEGER NOT NULL DEFAULT 0,
    "status" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "ArticleCategory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Article" (
    "id" SERIAL NOT NULL,
    "createdTime" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedTime" TIMESTAMP(3) NOT NULL,
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

    CONSTRAINT "Article_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserArticleFavorite" (
    "id" SERIAL NOT NULL,
    "createdTime" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedTime" TIMESTAMP(3) NOT NULL,
    "name" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "UserArticleFavorite_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserArticleCollect" (
    "id" SERIAL NOT NULL,
    "createdTime" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedTime" TIMESTAMP(3) NOT NULL,
    "articleId" INTEGER NOT NULL,
    "favoriteId" INTEGER NOT NULL,

    CONSTRAINT "UserArticleCollect_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserArticleComment" (
    "id" SERIAL NOT NULL,
    "createdTime" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedTime" TIMESTAMP(3) NOT NULL,
    "parentId" INTEGER DEFAULT 0,
    "content" TEXT NOT NULL,
    "isTop" INTEGER DEFAULT 0,
    "commentCount" INTEGER DEFAULT 0,
    "likeCount" INTEGER DEFAULT 0,
    "status" INTEGER DEFAULT 2,
    "articleId" INTEGER NOT NULL,
    "commentUserId" INTEGER NOT NULL,
    "replyUserId" INTEGER NOT NULL,

    CONSTRAINT "UserArticleComment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserArticleLike" (
    "id" SERIAL NOT NULL,
    "createdTime" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedTime" TIMESTAMP(3) NOT NULL,
    "userId" INTEGER NOT NULL,
    "articleId" INTEGER NOT NULL,

    CONSTRAINT "UserArticleLike_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserSearch" (
    "id" SERIAL NOT NULL,
    "createdTime" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedTime" TIMESTAMP(3) NOT NULL,
    "searchCount" INTEGER NOT NULL DEFAULT 1,
    "keywords" TEXT NOT NULL,
    "type" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "UserSearch_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserArticleView" (
    "id" SERIAL NOT NULL,
    "createdTime" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedTime" TIMESTAMP(3) NOT NULL,
    "viewCount" INTEGER DEFAULT 1,
    "userId" INTEGER NOT NULL,
    "articleId" INTEGER NOT NULL,

    CONSTRAINT "UserArticleView_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserArticleReport" (
    "id" SERIAL NOT NULL,
    "createdTime" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedTime" TIMESTAMP(3) NOT NULL,
    "type" INTEGER NOT NULL DEFAULT 0,
    "remark" TEXT NOT NULL,
    "status" INTEGER DEFAULT 1,
    "userId" INTEGER NOT NULL,
    "articleId" INTEGER NOT NULL,

    CONSTRAINT "UserArticleReport_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SysDataDict" (
    "id" SERIAL NOT NULL,
    "createdTime" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedTime" TIMESTAMP(3) NOT NULL,
    "name" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "remark" TEXT,
    "status" BOOLEAN DEFAULT true,

    CONSTRAINT "SysDataDict_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SysDataDictData" (
    "id" SERIAL NOT NULL,
    "createdTime" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedTime" TIMESTAMP(3) NOT NULL,
    "label" TEXT NOT NULL,
    "value" TEXT NOT NULL,
    "class" TEXT,
    "sort" INTEGER DEFAULT 0,
    "remark" TEXT,
    "status" BOOLEAN DEFAULT true,
    "colorType" TEXT DEFAULT 'default',
    "dictId" INTEGER NOT NULL,

    CONSTRAINT "SysDataDictData_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SystemOrganizationOrg" (
    "id" SERIAL NOT NULL,
    "createdTime" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedTime" TIMESTAMP(3) NOT NULL,
    "parentId" INTEGER DEFAULT 0,
    "name" TEXT NOT NULL,
    "sort" INTEGER DEFAULT 0,
    "leader" TEXT,
    "phone" INTEGER,
    "email" TEXT,
    "status" BOOLEAN DEFAULT true,

    CONSTRAINT "SystemOrganizationOrg_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SystemOrganizationDept" (
    "id" SERIAL NOT NULL,
    "createdTime" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedTime" TIMESTAMP(3) NOT NULL,
    "parentId" INTEGER DEFAULT 0,
    "name" TEXT NOT NULL,
    "sort" INTEGER DEFAULT 0,
    "leader" TEXT,
    "phone" INTEGER,
    "email" TEXT,
    "status" BOOLEAN DEFAULT true,
    "orgId" INTEGER NOT NULL,

    CONSTRAINT "SystemOrganizationDept_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SystemOrganizationPost" (
    "id" SERIAL NOT NULL,
    "createdTime" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedTime" TIMESTAMP(3) NOT NULL,
    "name" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "sort" INTEGER DEFAULT 0,
    "remark" TEXT,
    "status" BOOLEAN DEFAULT true,
    "orgId" INTEGER NOT NULL,
    "deptId" INTEGER NOT NULL,

    CONSTRAINT "SystemOrganizationPost_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SystemPermissionMobileDevice" (
    "id" SERIAL NOT NULL,
    "createdTime" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedTime" TIMESTAMP(3) NOT NULL,
    "deviceOs" TEXT NOT NULL,
    "deviceNo" TEXT NOT NULL,
    "deviceBrand" TEXT NOT NULL,
    "status" BOOLEAN DEFAULT false,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "SystemPermissionMobileDevice_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Article" ADD CONSTRAINT "Article_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Article" ADD CONSTRAINT "Article_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "ArticleCategory"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserArticleFavorite" ADD CONSTRAINT "UserArticleFavorite_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserArticleCollect" ADD CONSTRAINT "UserArticleCollect_articleId_fkey" FOREIGN KEY ("articleId") REFERENCES "Article"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserArticleCollect" ADD CONSTRAINT "UserArticleCollect_favoriteId_fkey" FOREIGN KEY ("favoriteId") REFERENCES "UserArticleFavorite"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserArticleComment" ADD CONSTRAINT "UserArticleComment_articleId_fkey" FOREIGN KEY ("articleId") REFERENCES "Article"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserArticleComment" ADD CONSTRAINT "UserArticleComment_commentUserId_fkey" FOREIGN KEY ("commentUserId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserArticleComment" ADD CONSTRAINT "UserArticleComment_replyUserId_fkey" FOREIGN KEY ("replyUserId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserArticleLike" ADD CONSTRAINT "UserArticleLike_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserArticleLike" ADD CONSTRAINT "UserArticleLike_articleId_fkey" FOREIGN KEY ("articleId") REFERENCES "Article"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserSearch" ADD CONSTRAINT "UserSearch_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserArticleView" ADD CONSTRAINT "UserArticleView_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserArticleView" ADD CONSTRAINT "UserArticleView_articleId_fkey" FOREIGN KEY ("articleId") REFERENCES "Article"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserArticleReport" ADD CONSTRAINT "UserArticleReport_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserArticleReport" ADD CONSTRAINT "UserArticleReport_articleId_fkey" FOREIGN KEY ("articleId") REFERENCES "Article"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SysDataDictData" ADD CONSTRAINT "SysDataDictData_dictId_fkey" FOREIGN KEY ("dictId") REFERENCES "SysDataDict"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SystemOrganizationDept" ADD CONSTRAINT "SystemOrganizationDept_orgId_fkey" FOREIGN KEY ("orgId") REFERENCES "SystemOrganizationOrg"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SystemOrganizationPost" ADD CONSTRAINT "SystemOrganizationPost_orgId_fkey" FOREIGN KEY ("orgId") REFERENCES "SystemOrganizationOrg"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SystemOrganizationPost" ADD CONSTRAINT "SystemOrganizationPost_deptId_fkey" FOREIGN KEY ("deptId") REFERENCES "SystemOrganizationDept"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SystemPermissionMobileDevice" ADD CONSTRAINT "SystemPermissionMobileDevice_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
