/*
  Warnings:

  - Added the required column `name` to the `MarketingCampaign` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "MarketingCampaign" ADD COLUMN     "name" TEXT NOT NULL;
