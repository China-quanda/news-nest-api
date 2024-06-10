/*
  Warnings:

  - You are about to drop the column `collectCount` on the `news_article` table. All the data in the column will be lost.
  - You are about to drop the column `commentCount` on the `news_article` table. All the data in the column will be lost.
  - You are about to drop the column `coverImg` on the `news_article` table. All the data in the column will be lost.
  - You are about to drop the column `coverType` on the `news_article` table. All the data in the column will be lost.
  - You are about to drop the column `createTime` on the `news_article` table. All the data in the column will be lost.
  - You are about to drop the column `isTop` on the `news_article` table. All the data in the column will be lost.
  - You are about to drop the column `likeCount` on the `news_article` table. All the data in the column will be lost.
  - You are about to drop the column `readCount` on the `news_article` table. All the data in the column will be lost.
  - You are about to drop the column `updateTime` on the `news_article` table. All the data in the column will be lost.
  - You are about to drop the column `createTime` on the `news_article_category` table. All the data in the column will be lost.
  - You are about to drop the column `updateTime` on the `news_article_category` table. All the data in the column will be lost.
  - You are about to drop the column `createTime` on the `news_system_dm_category` table. All the data in the column will be lost.
  - You are about to drop the column `parentId` on the `news_system_dm_category` table. All the data in the column will be lost.
  - You are about to drop the column `updateTime` on the `news_system_dm_category` table. All the data in the column will be lost.
  - You are about to drop the column `createTime` on the `news_system_dm_config` table. All the data in the column will be lost.
  - You are about to drop the column `updateTime` on the `news_system_dm_config` table. All the data in the column will be lost.
  - You are about to drop the column `createTime` on the `news_system_dm_dict` table. All the data in the column will be lost.
  - You are about to drop the column `updateTime` on the `news_system_dm_dict` table. All the data in the column will be lost.
  - You are about to drop the column `colorType` on the `news_system_dm_dict_data` table. All the data in the column will be lost.
  - You are about to drop the column `createTime` on the `news_system_dm_dict_data` table. All the data in the column will be lost.
  - You are about to drop the column `updateTime` on the `news_system_dm_dict_data` table. All the data in the column will be lost.
  - You are about to drop the column `createTime` on the `news_system_dm_region` table. All the data in the column will be lost.
  - You are about to drop the column `parentCode` on the `news_system_dm_region` table. All the data in the column will be lost.
  - You are about to drop the column `updateTime` on the `news_system_dm_region` table. All the data in the column will be lost.
  - You are about to drop the column `createTime` on the `news_system_message_notice` table. All the data in the column will be lost.
  - You are about to drop the column `updateTime` on the `news_system_message_notice` table. All the data in the column will be lost.
  - You are about to drop the column `appNotifyUrl` on the `news_system_message_push` table. All the data in the column will be lost.
  - You are about to drop the column `createTime` on the `news_system_message_push` table. All the data in the column will be lost.
  - You are about to drop the column `pcNotifyUrl` on the `news_system_message_push` table. All the data in the column will be lost.
  - You are about to drop the column `pushChannel` on the `news_system_message_push` table. All the data in the column will be lost.
  - You are about to drop the column `pushClientId` on the `news_system_message_push` table. All the data in the column will be lost.
  - You are about to drop the column `pushType` on the `news_system_message_push` table. All the data in the column will be lost.
  - You are about to drop the column `readNum` on the `news_system_message_push` table. All the data in the column will be lost.
  - You are about to drop the column `readTime` on the `news_system_message_push` table. All the data in the column will be lost.
  - You are about to drop the column `updateTime` on the `news_system_message_push` table. All the data in the column will be lost.
  - You are about to drop the column `createTime` on the `news_system_organization_dept` table. All the data in the column will be lost.
  - You are about to drop the column `parentId` on the `news_system_organization_dept` table. All the data in the column will be lost.
  - You are about to drop the column `updateTime` on the `news_system_organization_dept` table. All the data in the column will be lost.
  - You are about to drop the column `createTime` on the `news_system_organization_org` table. All the data in the column will be lost.
  - You are about to drop the column `parentId` on the `news_system_organization_org` table. All the data in the column will be lost.
  - You are about to drop the column `updateTime` on the `news_system_organization_org` table. All the data in the column will be lost.
  - You are about to drop the column `createTime` on the `news_system_organization_post` table. All the data in the column will be lost.
  - You are about to drop the column `updateTime` on the `news_system_organization_post` table. All the data in the column will be lost.
  - You are about to drop the column `createTime` on the `news_system_permission_mobile_device` table. All the data in the column will be lost.
  - You are about to drop the column `deviceBrand` on the `news_system_permission_mobile_device` table. All the data in the column will be lost.
  - You are about to drop the column `deviceNo` on the `news_system_permission_mobile_device` table. All the data in the column will be lost.
  - You are about to drop the column `deviceOs` on the `news_system_permission_mobile_device` table. All the data in the column will be lost.
  - You are about to drop the column `updateTime` on the `news_system_permission_mobile_device` table. All the data in the column will be lost.
  - You are about to drop the column `createTime` on the `news_user` table. All the data in the column will be lost.
  - You are about to drop the column `updateTime` on the `news_user` table. All the data in the column will be lost.
  - You are about to drop the column `createTime` on the `news_user_article_collect` table. All the data in the column will be lost.
  - You are about to drop the column `updateTime` on the `news_user_article_collect` table. All the data in the column will be lost.
  - You are about to drop the column `commentCount` on the `news_user_article_comment` table. All the data in the column will be lost.
  - You are about to drop the column `createTime` on the `news_user_article_comment` table. All the data in the column will be lost.
  - You are about to drop the column `isTop` on the `news_user_article_comment` table. All the data in the column will be lost.
  - You are about to drop the column `likeCount` on the `news_user_article_comment` table. All the data in the column will be lost.
  - You are about to drop the column `updateTime` on the `news_user_article_comment` table. All the data in the column will be lost.
  - You are about to drop the column `createTime` on the `news_user_article_favorite` table. All the data in the column will be lost.
  - You are about to drop the column `updateTime` on the `news_user_article_favorite` table. All the data in the column will be lost.
  - You are about to drop the column `createTime` on the `news_user_article_like` table. All the data in the column will be lost.
  - You are about to drop the column `updateTime` on the `news_user_article_like` table. All the data in the column will be lost.
  - You are about to drop the column `createTime` on the `news_user_article_report` table. All the data in the column will be lost.
  - You are about to drop the column `updateTime` on the `news_user_article_report` table. All the data in the column will be lost.
  - You are about to drop the column `createTime` on the `news_user_article_view` table. All the data in the column will be lost.
  - You are about to drop the column `updateTime` on the `news_user_article_view` table. All the data in the column will be lost.
  - You are about to drop the column `viewCount` on the `news_user_article_view` table. All the data in the column will be lost.
  - You are about to drop the column `createTime` on the `news_user_search` table. All the data in the column will be lost.
  - You are about to drop the column `searchCount` on the `news_user_search` table. All the data in the column will be lost.
  - You are about to drop the column `updateTime` on the `news_user_search` table. All the data in the column will be lost.
  - Added the required column `update_time` to the `news_article` table without a default value. This is not possible if the table is not empty.
  - Added the required column `update_time` to the `news_article_category` table without a default value. This is not possible if the table is not empty.
  - Added the required column `update_time` to the `news_system_dm_category` table without a default value. This is not possible if the table is not empty.
  - Added the required column `update_time` to the `news_system_dm_config` table without a default value. This is not possible if the table is not empty.
  - Added the required column `update_time` to the `news_system_dm_dict` table without a default value. This is not possible if the table is not empty.
  - Added the required column `update_time` to the `news_system_dm_dict_data` table without a default value. This is not possible if the table is not empty.
  - Added the required column `update_time` to the `news_system_dm_region` table without a default value. This is not possible if the table is not empty.
  - Added the required column `update_time` to the `news_system_message_notice` table without a default value. This is not possible if the table is not empty.
  - Added the required column `push_type` to the `news_system_message_push` table without a default value. This is not possible if the table is not empty.
  - Added the required column `update_time` to the `news_system_message_push` table without a default value. This is not possible if the table is not empty.
  - Added the required column `update_time` to the `news_system_organization_dept` table without a default value. This is not possible if the table is not empty.
  - Added the required column `update_time` to the `news_system_organization_org` table without a default value. This is not possible if the table is not empty.
  - Added the required column `update_time` to the `news_system_organization_post` table without a default value. This is not possible if the table is not empty.
  - Added the required column `device_brand` to the `news_system_permission_mobile_device` table without a default value. This is not possible if the table is not empty.
  - Added the required column `device_no` to the `news_system_permission_mobile_device` table without a default value. This is not possible if the table is not empty.
  - Added the required column `device_os` to the `news_system_permission_mobile_device` table without a default value. This is not possible if the table is not empty.
  - Added the required column `update_time` to the `news_system_permission_mobile_device` table without a default value. This is not possible if the table is not empty.
  - Added the required column `update_time` to the `news_user` table without a default value. This is not possible if the table is not empty.
  - Added the required column `update_time` to the `news_user_article_collect` table without a default value. This is not possible if the table is not empty.
  - Added the required column `update_time` to the `news_user_article_comment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `update_time` to the `news_user_article_favorite` table without a default value. This is not possible if the table is not empty.
  - Added the required column `update_time` to the `news_user_article_like` table without a default value. This is not possible if the table is not empty.
  - Added the required column `update_time` to the `news_user_article_report` table without a default value. This is not possible if the table is not empty.
  - Added the required column `update_time` to the `news_user_article_view` table without a default value. This is not possible if the table is not empty.
  - Added the required column `update_time` to the `news_user_search` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "news_article" DROP COLUMN "collectCount",
DROP COLUMN "commentCount",
DROP COLUMN "coverImg",
DROP COLUMN "coverType",
DROP COLUMN "createTime",
DROP COLUMN "isTop",
DROP COLUMN "likeCount",
DROP COLUMN "readCount",
DROP COLUMN "updateTime",
ADD COLUMN     "collect_count" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "comment_count" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "cover_img" TEXT,
ADD COLUMN     "cover_type" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "create_time" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "is_top" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "like_count" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "read_count" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "update_time" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "news_article_category" DROP COLUMN "createTime",
DROP COLUMN "updateTime",
ADD COLUMN     "create_time" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "update_time" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "news_system_dm_category" DROP COLUMN "createTime",
DROP COLUMN "parentId",
DROP COLUMN "updateTime",
ADD COLUMN     "create_time" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "parent_id" INTEGER DEFAULT 0,
ADD COLUMN     "update_time" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "news_system_dm_config" DROP COLUMN "createTime",
DROP COLUMN "updateTime",
ADD COLUMN     "create_time" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "update_time" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "news_system_dm_dict" DROP COLUMN "createTime",
DROP COLUMN "updateTime",
ADD COLUMN     "create_time" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "update_time" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "news_system_dm_dict_data" DROP COLUMN "colorType",
DROP COLUMN "createTime",
DROP COLUMN "updateTime",
ADD COLUMN     "color_type" TEXT DEFAULT 'default',
ADD COLUMN     "create_time" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "update_time" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "news_system_dm_region" DROP COLUMN "createTime",
DROP COLUMN "parentCode",
DROP COLUMN "updateTime",
ADD COLUMN     "create_time" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "parent_code" INTEGER DEFAULT 0,
ADD COLUMN     "update_time" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "news_system_message_notice" DROP COLUMN "createTime",
DROP COLUMN "updateTime",
ADD COLUMN     "create_time" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "update_time" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "news_system_message_push" DROP COLUMN "appNotifyUrl",
DROP COLUMN "createTime",
DROP COLUMN "pcNotifyUrl",
DROP COLUMN "pushChannel",
DROP COLUMN "pushClientId",
DROP COLUMN "pushType",
DROP COLUMN "readNum",
DROP COLUMN "readTime",
DROP COLUMN "updateTime",
ADD COLUMN     "app_notify_url" TEXT,
ADD COLUMN     "create_time" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "pc_notify_url" TEXT,
ADD COLUMN     "push_channel" INTEGER,
ADD COLUMN     "push_client_id" TEXT,
ADD COLUMN     "push_type" INTEGER NOT NULL,
ADD COLUMN     "read_num" INTEGER DEFAULT 0,
ADD COLUMN     "read_time" TIMESTAMP(3),
ADD COLUMN     "update_time" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "news_system_organization_dept" DROP COLUMN "createTime",
DROP COLUMN "parentId",
DROP COLUMN "updateTime",
ADD COLUMN     "create_time" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "parent_id" INTEGER DEFAULT 0,
ADD COLUMN     "update_time" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "news_system_organization_org" DROP COLUMN "createTime",
DROP COLUMN "parentId",
DROP COLUMN "updateTime",
ADD COLUMN     "create_time" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "parent_id" INTEGER DEFAULT 0,
ADD COLUMN     "update_time" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "news_system_organization_post" DROP COLUMN "createTime",
DROP COLUMN "updateTime",
ADD COLUMN     "create_time" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "update_time" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "news_system_permission_mobile_device" DROP COLUMN "createTime",
DROP COLUMN "deviceBrand",
DROP COLUMN "deviceNo",
DROP COLUMN "deviceOs",
DROP COLUMN "updateTime",
ADD COLUMN     "create_time" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "device_brand" TEXT NOT NULL,
ADD COLUMN     "device_no" TEXT NOT NULL,
ADD COLUMN     "device_os" TEXT NOT NULL,
ADD COLUMN     "update_time" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "news_user" DROP COLUMN "createTime",
DROP COLUMN "updateTime",
ADD COLUMN     "create_time" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "update_time" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "news_user_article_collect" DROP COLUMN "createTime",
DROP COLUMN "updateTime",
ADD COLUMN     "create_time" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "update_time" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "news_user_article_comment" DROP COLUMN "commentCount",
DROP COLUMN "createTime",
DROP COLUMN "isTop",
DROP COLUMN "likeCount",
DROP COLUMN "updateTime",
ADD COLUMN     "comment_count" INTEGER DEFAULT 0,
ADD COLUMN     "create_time" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "is_top" INTEGER DEFAULT 0,
ADD COLUMN     "like_count" INTEGER DEFAULT 0,
ADD COLUMN     "update_time" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "news_user_article_favorite" DROP COLUMN "createTime",
DROP COLUMN "updateTime",
ADD COLUMN     "create_time" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "update_time" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "news_user_article_like" DROP COLUMN "createTime",
DROP COLUMN "updateTime",
ADD COLUMN     "create_time" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "update_time" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "news_user_article_report" DROP COLUMN "createTime",
DROP COLUMN "updateTime",
ADD COLUMN     "create_time" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "update_time" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "news_user_article_view" DROP COLUMN "createTime",
DROP COLUMN "updateTime",
DROP COLUMN "viewCount",
ADD COLUMN     "create_time" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "update_time" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "view_count" INTEGER DEFAULT 1;

-- AlterTable
ALTER TABLE "news_user_search" DROP COLUMN "createTime",
DROP COLUMN "searchCount",
DROP COLUMN "updateTime",
ADD COLUMN     "create_time" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "search_count" INTEGER NOT NULL DEFAULT 1,
ADD COLUMN     "update_time" TIMESTAMP(3) NOT NULL;
