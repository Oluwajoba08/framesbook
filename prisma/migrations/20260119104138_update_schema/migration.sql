/*
  Warnings:

  - You are about to drop the column `bio` on the `user` table. All the data in the column will be lost.

*/
-- CreateEnum
CREATE TYPE "RELATIONSHIP_STATUS" AS ENUM ('SINGLE', 'MARRIED', 'DIVORCED', 'IN_A_RELATIONSHIP', 'ENGAGED', 'COMPLICATED');

-- AlterTable
ALTER TABLE "user" DROP COLUMN "bio";

-- CreateTable
CREATE TABLE "about" (
    "id" TEXT NOT NULL,
    "bio" TEXT DEFAULT '',
    "workplace" TEXT,
    "education" TEXT[],
    "current_city" TEXT,
    "hometown" TEXT,
    "relationship_status" "RELATIONSHIP_STATUS" NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "about_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "preferences" (
    "post_audience" "audience" NOT NULL DEFAULT 'FRIENDS',
    "story_audience" "audience" NOT NULL DEFAULT 'FRIENDS',
    "workplace_audience" "audience" NOT NULL DEFAULT 'PUBLIC',
    "relationship_audience" "audience" NOT NULL DEFAULT 'PUBLIC',
    "current_city_audience" "audience" NOT NULL DEFAULT 'PUBLIC',
    "hometown_audience" "audience" NOT NULL DEFAULT 'PUBLIC',
    "joined_audience" "audience" NOT NULL DEFAULT 'PRIVATE',
    "userId" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "about_userId_key" ON "about"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "preferences_userId_key" ON "preferences"("userId");

-- AddForeignKey
ALTER TABLE "about" ADD CONSTRAINT "about_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "preferences" ADD CONSTRAINT "preferences_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
