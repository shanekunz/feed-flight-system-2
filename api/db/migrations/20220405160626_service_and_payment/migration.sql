/*
  Warnings:

  - Changed the type of `serviceMethod` on the `Order` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `paymentMethod` on the `Order` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "ServiceMethod" AS ENUM ('DELIVERY', 'WALK_IN', 'CARRYOUT');

-- CreateEnum
CREATE TYPE "PaymentMethod" AS ENUM ('CREDIT_ONLINE', 'CREDIT_TERMINAL', 'CASH', 'OPEN');

-- AlterTable
ALTER TABLE "Order" DROP COLUMN "serviceMethod",
ADD COLUMN     "serviceMethod" "ServiceMethod" NOT NULL,
DROP COLUMN "paymentMethod",
ADD COLUMN     "paymentMethod" "PaymentMethod" NOT NULL;
