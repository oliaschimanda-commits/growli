-- AlterTable
ALTER TABLE `farminginformation` MODIFY `title` VARCHAR(191) NULL,
    MODIFY `article` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `product` MODIFY `quantity` DOUBLE NULL,
    MODIFY `phoneNumber` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `training` MODIFY `city` VARCHAR(191) NULL,
    MODIFY `place` VARCHAR(191) NULL,
    MODIFY `description` VARCHAR(191) NULL,
    MODIFY `country` VARCHAR(191) NULL,
    MODIFY `state` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `user` MODIFY `bio` VARCHAR(191) NULL,
    MODIFY `farming` ENUM('CROP_FARMING', 'LIVESTOCK_FARMING', 'POULTRY_FARMING', 'FISHERY', 'HORTICULTURE') NULL;
