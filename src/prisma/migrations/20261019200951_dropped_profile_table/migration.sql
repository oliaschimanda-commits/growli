/*
  Warnings:

  - You are about to drop the `profile` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `bio` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `farming` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `profile` DROP FOREIGN KEY `Profile_userId_fkey`;

-- AlterTable
ALTER TABLE `user` ADD COLUMN `bio` VARCHAR(191) NOT NULL,
    ADD COLUMN `city` VARCHAR(191) NULL,
    ADD COLUMN `country` VARCHAR(191) NULL,
    ADD COLUMN `farming` ENUM('CROP_FARMING', 'LIVESTOCK_FARMING', 'POULTRY_FARMING', 'FISHERY', 'HORTICULTURE') NOT NULL,
    ADD COLUMN `scale` ENUM('SMALL_SCALE', 'LARGE_SCALE') NOT NULL DEFAULT 'SMALL_SCALE',
    ADD COLUMN `state` VARCHAR(191) NULL;

-- DropTable
DROP TABLE `profile`;
