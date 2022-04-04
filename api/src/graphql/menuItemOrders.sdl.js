export const schema = gql`
  type MenuItemOrder {
    id: Int!
    menuItemId: Int!
    order: Order!
    orderId: Int!
    menuItem: MenuItem!
    price: Float!
    quantity: Int!
    addOns: [AddOnOrder]!
  }

  type Query {
    menuItemOrders: [MenuItemOrder!]! @requireAuth
    menuItemOrder(id: Int!): MenuItemOrder @requireAuth
  }

  input CreateMenuItemOrderInput {
    menuItemId: Int!
    orderId: Int!
    price: Float!
    quantity: Int!
  }

  input UpdateMenuItemOrderInput {
    menuItemId: Int
    orderId: Int
    price: Float
    quantity: Int
  }

  type Mutation {
    createMenuItemOrder(input: CreateMenuItemOrderInput!): MenuItemOrder!
      @requireAuth
    updateMenuItemOrder(
      id: Int!
      input: UpdateMenuItemOrderInput!
    ): MenuItemOrder! @requireAuth
    deleteMenuItemOrder(id: Int!): MenuItemOrder! @requireAuth
  }
`
