-- CreateTable
CREATE TABLE "UserArticleReport" (
    "id" SERIAL NOT NULL,
    "createdTime" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedTime" TIMESTAMP(3) NOT NULL,
    "type" INTEGER NOT NULL DEFAULT 0,
    "remark" TEXT NOT NULL,
    "status" INTEGER NOT NULL DEFAULT 1,
    "userId" INTEGER NOT NULL,
    "articleId" INTEGER NOT NULL,

    CONSTRAINT "UserArticleReport_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "UserArticleReport" ADD CONSTRAINT "UserArticleReport_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserArticleReport" ADD CONSTRAINT "UserArticleReport_articleId_fkey" FOREIGN KEY ("articleId") REFERENCES "Article"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
