export const schema = gql`
  type AddOn {
    id: Int!
    MenuItem: MenuItem!
    menuItemId: Int!
    name: String!
    price: Float!
    profits: Float!
    type: AddOnType!
    deleted: Boolean!
    sortPosition: Int!
    AddOnOrder: [AddOnOrder]!
  }

  enum AddOnType {
    SIZE
    TOPPING
  }

  type Query {
    addOns: [AddOn!]! @requireAuth
    addOn(id: Int!): AddOn @requireAuth
  }

  input CreateAddOnInput {
    menuItemId: Int!
    name: String!
    price: Float!
    profits: Float!
    type: AddOnType!
    deleted: Boolean!
    sortPosition: Int!
  }

  input UpdateAddOnInput {
    menuItemId: Int
    name: String
    price: Float
    profits: Float
    type: AddOnType
    deleted: Boolean
    sortPosition: Int
  }

  type Mutation {
    createAddOn(input: CreateAddOnInput!): AddOn! @requireAuth
    updateAddOn(id: Int!, input: UpdateAddOnInput!): AddOn! @requireAuth
    deleteAddOn(id: Int!): AddOn! @requireAuth
  }
`
