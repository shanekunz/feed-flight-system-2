export const schema = gql`
  type MenuItem {
    id: Int!
    menuItems: [MenuItemOrder]!
    discounts: [Discount]!
    name: String!
    price: Float!
    profits: Float!
    parentCategory: Category!
    categoryId: Int!
    addOns: [AddOn]!
    deleted: Boolean!
    showQuantityPicker: Boolean!
    showOnPOS: Boolean!
    showOnSite: Boolean!
    HasSides: Boolean!
  }

  type Query {
    menuItems: [MenuItem!]! @skipAuth
    menuItem(id: Int!): MenuItem @skipAuth
  }

  input CreateMenuItemInput {
    name: String!
    price: Float!
    profits: Float!
    categoryId: Int!
    deleted: Boolean!
    showQuantityPicker: Boolean!
    showOnPOS: Boolean!
    showOnSite: Boolean!
    HasSides: Boolean!
  }

  input UpdateMenuItemInput {
    name: String
    price: Float
    profits: Float
    categoryId: Int
    deleted: Boolean
    showQuantityPicker: Boolean
    showOnPOS: Boolean
    showOnSite: Boolean
    HasSides: Boolean
  }

  type Mutation {
    createMenuItem(input: CreateMenuItemInput!): MenuItem! @requireAuth
    updateMenuItem(id: Int!, input: UpdateMenuItemInput!): MenuItem!
      @requireAuth
    deleteMenuItem(id: Int!): MenuItem! @requireAuth
  }
`
