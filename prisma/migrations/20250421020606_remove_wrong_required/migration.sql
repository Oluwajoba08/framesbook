-- AlterTable
ALTER TABLE "public"."_user_follow_pages" ADD CONSTRAINT "_user_follow_pages_AB_pkey" PRIMARY KEY ("A", "B");

-- DropIndex
DROP INDEX "public"."_user_follow_pages_AB_unique";

-- AlterTable
ALTER TABLE "public"."_user_in_group" ADD CONSTRAINT "_user_in_group_AB_pkey" PRIMARY KEY ("A", "B");

-- DropIndex
DROP INDEX "public"."_user_in_group_AB_unique";

-- AlterTable
ALTER TABLE "public"."comments" ADD COLUMN     "images" TEXT,
ALTER COLUMN "content" DROP NOT NULL;

-- AlterTable
ALTER TABLE "public"."friendRequest" ALTER COLUMN "status" DROP NOT NULL;

-- AlterTable
ALTER TABLE "public"."like" ALTER COLUMN "like_role" DROP NOT NULL;

-- AlterTable
ALTER TABLE "public"."user" ALTER COLUMN "profile_image" DROP NOT NULL,
ALTER COLUMN "cover_image" DROP NOT NULL,
ALTER COLUMN "bio" DROP NOT NULL,
ALTER COLUMN "date_of_birth" SET DATA TYPE TIMESTAMP(3);
