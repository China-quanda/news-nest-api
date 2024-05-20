-- CreateTable
CREATE TABLE "UserArticleFavorite" (
    "id" SERIAL NOT NULL,
    "createdTime" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedTime" TIMESTAMP(3) NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "UserArticleFavorite_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserArticleCollect" (
    "id" SERIAL NOT NULL,
    "createdTime" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedTime" TIMESTAMP(3) NOT NULL,
    "userId" INTEGER NOT NULL,
    "articleId" INTEGER NOT NULL,
    "favoriteId" INTEGER NOT NULL,

    CONSTRAINT "UserArticleCollect_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "UserArticleFavorite" ADD CONSTRAINT "UserArticleFavorite_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserArticleCollect" ADD CONSTRAINT "UserArticleCollect_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserArticleCollect" ADD CONSTRAINT "UserArticleCollect_articleId_fkey" FOREIGN KEY ("articleId") REFERENCES "Article"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserArticleCollect" ADD CONSTRAINT "UserArticleCollect_favoriteId_fkey" FOREIGN KEY ("favoriteId") REFERENCES "UserArticleFavorite"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
