export const schema = gql`
  type Order {
    id: Int!
    createdAt: DateTime!
    email: String
    squareNonce: String
    total: Float!
    phone: String
    name: String
    address1: String
    address2: String
    city: String
    state: String
    zip: String
    serviceMethod: String!
    paymentMethod: String!
    instructions: String
    status: OrderStatus!
    placedOnPOS: Boolean!
    deliveryFee: Float!
    tip: Float!
    driver: Int
    creditTerminalStatus: String
    marketingCampaignId: Int
    marketingCampaign: MarketingCampaign
    discountAmount: Float!
    discount: Discount
    discountId: Int
    processedForMarketing: Boolean!
  }

  enum OrderStatus {
    OPEN
    CLOSED
    CANCELED
  }

  type Query {
    orders: [Order!]! @requireAuth
    order(id: Int!): Order @requireAuth
  }

  input CreateOrderInput {
    email: String
    squareNonce: String
    total: Float!
    phone: String
    name: String
    address1: String
    address2: String
    city: String
    state: String
    zip: String
    serviceMethod: String!
    paymentMethod: String!
    instructions: String
    status: OrderStatus!
    placedOnPOS: Boolean!
    deliveryFee: Float!
    tip: Float!
    driver: Int
    creditTerminalStatus: String
    marketingCampaignId: Int
    discountAmount: Float!
    discountId: Int
    processedForMarketing: Boolean!
  }

  input UpdateOrderInput {
    email: String
    squareNonce: String
    total: Float
    phone: String
    name: String
    address1: String
    address2: String
    city: String
    state: String
    zip: String
    serviceMethod: String
    paymentMethod: String
    instructions: String
    status: OrderStatus
    placedOnPOS: Boolean
    deliveryFee: Float
    tip: Float
    driver: Int
    creditTerminalStatus: String
    marketingCampaignId: Int
    discountAmount: Float
    discountId: Int
    processedForMarketing: Boolean
  }

  type Mutation {
    createOrder(input: CreateOrderInput!): Order! @requireAuth
    updateOrder(id: Int!, input: UpdateOrderInput!): Order! @requireAuth
    deleteOrder(id: Int!): Order! @requireAuth
  }
`
