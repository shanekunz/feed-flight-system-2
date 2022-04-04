-- CreateEnum
CREATE TYPE "DiscountType" AS ENUM ('FIXED', 'PERCENT', 'MENU_ITEM', 'CATEGORY');

-- CreateEnum
CREATE TYPE "OrderStatus" AS ENUM ('OPEN', 'CLOSED', 'CANCELED');

-- CreateEnum
CREATE TYPE "AddOnType" AS ENUM ('SIZE', 'TOPPING');

-- CreateTable
CREATE TABLE "MenuItem_Order" (
    "id" SERIAL NOT NULL,
    "menuItemId" INTEGER NOT NULL,
    "orderId" INTEGER NOT NULL,
    "price" DECIMAL(60,2) NOT NULL,
    "quantity" INTEGER NOT NULL,

    CONSTRAINT "MenuItem_Order_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AddOn_Order" (
    "id" SERIAL NOT NULL,
    "menuItem_OrderId" INTEGER,
    "addOnId" INTEGER NOT NULL,
    "price" DECIMAL(60,2) NOT NULL,
    "leftSide" BOOLEAN NOT NULL,
    "rightSide" BOOLEAN NOT NULL,

    CONSTRAINT "AddOn_Order_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MenuItem" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "price" DECIMAL(60,2) NOT NULL,
    "profits" DECIMAL(60,2) NOT NULL,
    "categoryId" INTEGER NOT NULL,
    "deleted" BOOLEAN NOT NULL DEFAULT false,
    "showQuantityPicker" BOOLEAN NOT NULL DEFAULT false,
    "showOnPOS" BOOLEAN NOT NULL DEFAULT true,
    "showOnSite" BOOLEAN NOT NULL DEFAULT true,
    "HasSides" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "MenuItem_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AddOn" (
    "id" SERIAL NOT NULL,
    "menuItemId" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "price" DECIMAL(60,2) NOT NULL,
    "profits" DECIMAL(60,2) NOT NULL,
    "type" "AddOnType" NOT NULL,
    "deleted" BOOLEAN NOT NULL DEFAULT false,
    "sortPosition" SERIAL NOT NULL,

    CONSTRAINT "AddOn_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Order" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "email" TEXT,
    "squareNonce" TEXT,
    "total" DECIMAL(60,2) NOT NULL,
    "phone" TEXT,
    "name" TEXT,
    "address1" TEXT,
    "address2" TEXT,
    "city" TEXT,
    "state" TEXT,
    "zip" TEXT,
    "serviceMethod" TEXT NOT NULL,
    "paymentMethod" TEXT NOT NULL,
    "instructions" TEXT,
    "status" "OrderStatus" NOT NULL,
    "placedOnPOS" BOOLEAN NOT NULL,
    "deliveryFee" DECIMAL(60,2) NOT NULL,
    "tip" DECIMAL(60,2) NOT NULL,
    "driver" INTEGER,
    "creditTerminalStatus" TEXT,
    "marketingCampaignId" INTEGER,
    "discountAmount" DECIMAL(60,2) NOT NULL,
    "discountId" INTEGER,
    "processedForMarketing" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Order_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Discount" (
    "id" SERIAL NOT NULL,
    "discountCode" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "expirationDate" TIMESTAMP(3),
    "discountType" "DiscountType" NOT NULL,
    "categoryId" INTEGER,
    "menuItemId" INTEGER,
    "numberValue" INTEGER,
    "orderTotalThreshold" INTEGER NOT NULL,
    "deleted" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Discount_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Category" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "deleted" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Category_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MarketingCampaign" (
    "id" SERIAL NOT NULL,

    CONSTRAINT "MarketingCampaign_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "MenuItem_Order" ADD CONSTRAINT "MenuItem_Order_menuItemId_fkey" FOREIGN KEY ("menuItemId") REFERENCES "MenuItem"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MenuItem_Order" ADD CONSTRAINT "MenuItem_Order_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "Order"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AddOn_Order" ADD CONSTRAINT "AddOn_Order_menuItem_OrderId_fkey" FOREIGN KEY ("menuItem_OrderId") REFERENCES "MenuItem_Order"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AddOn_Order" ADD CONSTRAINT "AddOn_Order_addOnId_fkey" FOREIGN KEY ("addOnId") REFERENCES "AddOn"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MenuItem" ADD CONSTRAINT "MenuItem_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AddOn" ADD CONSTRAINT "AddOn_menuItemId_fkey" FOREIGN KEY ("menuItemId") REFERENCES "MenuItem"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "Order_discountId_fkey" FOREIGN KEY ("discountId") REFERENCES "Discount"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "Order_marketingCampaignId_fkey" FOREIGN KEY ("marketingCampaignId") REFERENCES "MarketingCampaign"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Discount" ADD CONSTRAINT "Discount_menuItemId_fkey" FOREIGN KEY ("menuItemId") REFERENCES "MenuItem"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Discount" ADD CONSTRAINT "Discount_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category"("id") ON DELETE SET NULL ON UPDATE CASCADE;
