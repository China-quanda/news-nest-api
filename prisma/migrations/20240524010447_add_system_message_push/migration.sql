-- CreateTable
CREATE TABLE "SystemMessagePush" (
    "id" SERIAL NOT NULL,
    "createdTime" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedTime" TIMESTAMP(3) NOT NULL,
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

    CONSTRAINT "SystemMessagePush_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "SystemMessagePush" ADD CONSTRAINT "SystemMessagePush_sendUserId_fkey" FOREIGN KEY ("sendUserId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
