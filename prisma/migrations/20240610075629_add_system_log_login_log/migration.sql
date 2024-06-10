-- CreateTable
CREATE TABLE "news_system_log_login_log" (
    "id" SERIAL NOT NULL,
    "login_time" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "login_ip" TEXT NOT NULL,
    "login_city" TEXT NOT NULL,
    "browser" TEXT NOT NULL,
    "os" TEXT NOT NULL,
    "login_type" INTEGER NOT NULL,
    "login_source" INTEGER NOT NULL,
    "message" TEXT NOT NULL,
    "status" INTEGER DEFAULT 1,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "news_system_log_login_log_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "news_system_log_login_log" ADD CONSTRAINT "news_system_log_login_log_userId_fkey" FOREIGN KEY ("userId") REFERENCES "news_user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
