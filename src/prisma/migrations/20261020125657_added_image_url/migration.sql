/*
  Warnings:

  - Added the required column `country` to the `Training` table without a default value. This is not possible if the table is not empty.
  - Added the required column `state` to the `Training` table without a default value. This is not possible if the table is not empty.
  - Added the required column `trainingDate` to the `Training` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `farminginformation` ADD COLUMN `farmingInfoImage` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `product` ADD COLUMN `pronductImage` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `training` ADD COLUMN `country` VARCHAR(191) NOT NULL,
    ADD COLUMN `state` VARCHAR(191) NOT NULL,
    ADD COLUMN `trainingDate` DATETIME(3) NOT NULL,
    ADD COLUMN `trainingImage` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `user` ADD COLUMN `profileImage` VARCHAR(191) NULL;
