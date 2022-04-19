// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route, Set, Private } from '@redwoodjs/router'
import MarketingCampaignsLayout from 'src/layouts/MarketingCampaignsLayout'
import AddOnsLayout from 'src/layouts/AddOnsLayout'
import AddOnOrdersLayout from 'src/layouts/AddOnOrdersLayout'
import MenuItemOrdersLayout from 'src/layouts/MenuItemOrdersLayout'
import MenuItemsLayout from 'src/layouts/MenuItemsLayout'
import CategoriesLayout from 'src/layouts/CategoriesLayout'
import DiscountsLayout from 'src/layouts/DiscountsLayout'
import OrdersLayout from 'src/layouts/OrdersLayout'
import PostsLayout from 'src/layouts/PostsLayout'
import BlogLayout from 'src/layouts/BlogLayout'
import AdminLayout from './layouts/AdminLayout/AdminLayout'

const Routes = () => {
  return (
    <Router>
      <Set wrap={MarketingCampaignsLayout}>
        <Route path="/marketing-campaigns/new" page={MarketingCampaignNewMarketingCampaignPage} name="newMarketingCampaign" />
        <Route path="/marketing-campaigns/{id:Int}/edit" page={MarketingCampaignEditMarketingCampaignPage} name="editMarketingCampaign" />
        <Route path="/marketing-campaigns/{id:Int}" page={MarketingCampaignMarketingCampaignPage} name="marketingCampaign" />
        <Route path="/marketing-campaigns" page={MarketingCampaignMarketingCampaignsPage} name="marketingCampaigns" />
      </Set>
      <Set wrap={AddOnsLayout}>
        <Route path="/add-ons/new" page={AddOnNewAddOnPage} name="newAddOn" />
        <Route path="/add-ons/{id:Int}/edit" page={AddOnEditAddOnPage} name="editAddOn" />
        <Route path="/add-ons/{id:Int}" page={AddOnAddOnPage} name="addOn" />
        <Route path="/add-ons" page={AddOnAddOnsPage} name="addOns" />
      </Set>
      <Set wrap={AddOnOrdersLayout}>
        <Route path="/add-on-orders/new" page={AddOnOrderNewAddOnOrderPage} name="newAddOnOrder" />
        <Route path="/add-on-orders/{id:Int}/edit" page={AddOnOrderEditAddOnOrderPage} name="editAddOnOrder" />
        <Route path="/add-on-orders/{id:Int}" page={AddOnOrderAddOnOrderPage} name="addOnOrder" />
        <Route path="/add-on-orders" page={AddOnOrderAddOnOrdersPage} name="addOnOrders" />
      </Set>
      <Set wrap={MenuItemOrdersLayout}>
        <Route path="/menu-item-orders/new" page={MenuItemOrderNewMenuItemOrderPage} name="newMenuItemOrder" />
        <Route path="/menu-item-orders/{id:Int}/edit" page={MenuItemOrderEditMenuItemOrderPage} name="editMenuItemOrder" />
        <Route path="/menu-item-orders/{id:Int}" page={MenuItemOrderMenuItemOrderPage} name="menuItemOrder" />
        <Route path="/menu-item-orders" page={MenuItemOrderMenuItemOrdersPage} name="menuItemOrders" />
      </Set>
      <Set wrap={MenuItemsLayout}>
        <Route path="/menu-items/new" page={MenuItemNewMenuItemPage} name="newMenuItem" />
        <Route path="/menu-items/{id:Int}/edit" page={MenuItemEditMenuItemPage} name="editMenuItem" />
        <Route path="/menu-items/{id:Int}" page={MenuItemMenuItemPage} name="menuItem" />
        <Route path="/menu-items" page={MenuItemMenuItemsPage} name="menuItems" />
      </Set>
      <Set wrap={CategoriesLayout}>
        <Route path="/categories/new" page={CategoryNewCategoryPage} name="newCategory" />
        <Route path="/categories/{id:Int}/edit" page={CategoryEditCategoryPage} name="editCategory" />
        <Route path="/categories/{id:Int}" page={CategoryCategoryPage} name="category" />
        <Route path="/categories" page={CategoryCategoriesPage} name="categories" />
      </Set>
      <Set wrap={DiscountsLayout}>
        <Route path="/discounts/new" page={DiscountNewDiscountPage} name="newDiscount" />
        <Route path="/discounts/{id:Int}/edit" page={DiscountEditDiscountPage} name="editDiscount" />
        <Route path="/discounts/{id:Int}" page={DiscountDiscountPage} name="discount" />
        <Route path="/discounts" page={DiscountDiscountsPage} name="discounts" />
      </Set>
      <Set wrap={AdminLayout}>
        <Route path="/" page={OrderNewOrderPage} name="newOrder" />
        <Route path="/orders/{id:Int}/edit" page={OrderEditOrderPage} name="editOrder" />
        <Route path="/orders/{id:Int}" page={OrderOrderPage} name="order" />
        <Route path="/orders" page={OrderOrdersPage} name="orders" />
      </Set>
      <Route path="/login" page={LoginPage} name="login" />
      <Route path="/signup" page={SignupPage} name="signup" />
      <Route path="/forgot-password" page={ForgotPasswordPage} name="forgotPassword" />
      <Route path="/reset-password" page={ResetPasswordPage} name="resetPassword" />
      <Private unauthenticated="home">
        <Set wrap={PostsLayout}>
          <Route path="/admin/posts/new" page={PostNewPostPage} name="newPost" />
          <Route path="/admin/posts/{id:Int}/edit" page={PostEditPostPage} name="editPost" />
          <Route path="/admin/posts/{id:Int}" page={PostPostPage} name="post" />
          <Route path="/admin/posts" page={PostPostsPage} name="posts" />
        </Set>
      </Private>
      <Set wrap={BlogLayout}>
        <Route path="/about" page={AboutPage} name="about" />
        <Route path="/home" page={HomePage} name="home" />
        <Route notfound page={NotFoundPage} />
        <Route path="/article/{id:Int}" page={ArticlePage} name="article" />
        <Route path="/contact" page={ContactPage} name="contact" />
        <Route path="/order" page={OrderPage} name="order" />
      </Set>
    </Router>
  )
}

export default Routes
