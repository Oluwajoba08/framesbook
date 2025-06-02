/*
  Warnings:

  - You are about to drop the column `images` on the `comments` table. All the data in the column will be lost.
  - You are about to drop the column `images` on the `posts` table. All the data in the column will be lost.
  - You are about to drop the column `images` on the `story` table. All the data in the column will be lost.
  - You are about to drop the `dummy` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[profile_link]` on the table `user` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `profile_link` to the `user` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "public"."audience" AS ENUM ('FRIENDS', 'PUBLIC', 'PRIVATE', 'FRIENDS_EXCEPT', 'SPECIFIC_FRIENDS');

-- DropForeignKey
ALTER TABLE "public"."posts" DROP CONSTRAINT "posts_author_id_fkey";

-- AlterTable
ALTER TABLE "public"."comments" DROP COLUMN "images",
ADD COLUMN     "image" TEXT;

-- AlterTable
ALTER TABLE "public"."posts" DROP COLUMN "images",
ADD COLUMN     "audience" "public"."audience" NOT NULL DEFAULT 'FRIENDS';

-- AlterTable
ALTER TABLE "public"."story" DROP COLUMN "images",
ADD COLUMN     "image" TEXT;

-- AlterTable
ALTER TABLE "public"."user" ADD COLUMN     "profile_link" TEXT NOT NULL;

-- DropTable
DROP TABLE "public"."dummy";

-- CreateTable
CREATE TABLE "public"."image" (
    "id" TEXT NOT NULL,
    "src" TEXT NOT NULL,
    "order" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "postId" TEXT NOT NULL,

    CONSTRAINT "image_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "image_postId_idx" ON "public"."image"("postId");

-- CreateIndex
CREATE UNIQUE INDEX "user_profile_link_key" ON "public"."user"("profile_link");

-- AddForeignKey
ALTER TABLE "public"."posts" ADD CONSTRAINT "posts_author_id_fkey" FOREIGN KEY ("author_id") REFERENCES "public"."user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."image" ADD CONSTRAINT "image_postId_fkey" FOREIGN KEY ("postId") REFERENCES "public"."posts"("id") ON DELETE CASCADE ON UPDATE CASCADE;
