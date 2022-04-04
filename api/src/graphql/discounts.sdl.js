export const schema = gql`
  type Discount {
    id: Int!
    orders: [Order]!
    discountCode: String!
    createdAt: DateTime!
    expirationDate: DateTime
    discountType: DiscountType!
    categoryId: Int
    category: Category
    menuItemId: Int
    menuItem: MenuItem
    numberValue: Int
    orderTotalThreshold: Int!
    deleted: Boolean!
  }

  enum DiscountType {
    FIXED
    PERCENT
    MENU_ITEM
    CATEGORY
  }

  type Query {
    discounts: [Discount!]! @requireAuth
    discount(id: Int!): Discount @requireAuth
  }

  input CreateDiscountInput {
    discountCode: String!
    expirationDate: DateTime
    discountType: DiscountType!
    categoryId: Int
    menuItemId: Int
    numberValue: Int
    orderTotalThreshold: Int!
    deleted: Boolean!
  }

  input UpdateDiscountInput {
    discountCode: String
    expirationDate: DateTime
    discountType: DiscountType
    categoryId: Int
    menuItemId: Int
    numberValue: Int
    orderTotalThreshold: Int
    deleted: Boolean
  }

  type Mutation {
    createDiscount(input: CreateDiscountInput!): Discount! @requireAuth
    updateDiscount(id: Int!, input: UpdateDiscountInput!): Discount!
      @requireAuth
    deleteDiscount(id: Int!): Discount! @requireAuth
  }
`
