-- CreateTable
CREATE TABLE "news_link" (
    "id" SERIAL NOT NULL,
    "create_time" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "update_time" TIMESTAMP(3) NOT NULL,
    "url" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "logo" TEXT NOT NULL,
    "status" INTEGER DEFAULT 1,

    CONSTRAINT "news_link_pkey" PRIMARY KEY ("id")
);
