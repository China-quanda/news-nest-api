-- CreateTable
CREATE TABLE "UserArticleComment" (
    "id" SERIAL NOT NULL,
    "createdTime" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedTime" TIMESTAMP(3) NOT NULL,
    "parentId" INTEGER DEFAULT 0,
    "content" TEXT NOT NULL,
    "isTop" INTEGER NOT NULL DEFAULT 0,
    "commentCount" INTEGER NOT NULL DEFAULT 0,
    "likeCount" INTEGER NOT NULL DEFAULT 0,
    "status" INTEGER NOT NULL DEFAULT 2,
    "articleId" INTEGER,
    "commentUserId" INTEGER,
    "replyUserId" INTEGER,

    CONSTRAINT "UserArticleComment_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "UserArticleComment" ADD CONSTRAINT "UserArticleComment_articleId_fkey" FOREIGN KEY ("articleId") REFERENCES "Article"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserArticleComment" ADD CONSTRAINT "UserArticleComment_commentUserId_fkey" FOREIGN KEY ("commentUserId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserArticleComment" ADD CONSTRAINT "UserArticleComment_replyUserId_fkey" FOREIGN KEY ("replyUserId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
