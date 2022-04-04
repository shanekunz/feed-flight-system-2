export const schema = gql`
  type AddOnOrder {
    id: Int!
    menuItemOrderId: Int
    addOnId: Int!
    price: Float!
    leftSide: Boolean!
    rightSide: Boolean!
  }

  type Query {
    addOnOrders: [AddOnOrder!]! @requireAuth
    addOnOrder(id: Int!): AddOnOrder @requireAuth
  }

  input CreateAddOnOrderInput {
    menuItemOrderId: Int
    addOnId: Int!
    price: Float!
    leftSide: Boolean!
    rightSide: Boolean!
  }

  input UpdateAddOnOrderInput {
    menuItemOrderId: Int
    addOnId: Int
    price: Float
    leftSide: Boolean
    rightSide: Boolean
  }

  type Mutation {
    createAddOnOrder(input: CreateAddOnOrderInput!): AddOnOrder! @requireAuth
    updateAddOnOrder(id: Int!, input: UpdateAddOnOrderInput!): AddOnOrder!
      @requireAuth
    deleteAddOnOrder(id: Int!): AddOnOrder! @requireAuth
  }
`
