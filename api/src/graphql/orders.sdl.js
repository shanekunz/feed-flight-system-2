export const schema = gql`
  enum ServiceMethod {
    DELIVERY
    WALK_IN
    CARRYOUT
  }
  enum PaymentMethod {
    CREDIT_ONLINE
    CREDIT_TERMINAL
    CASH
    OPEN
  }
  enum OrderStatus {
    OPEN
    CLOSED
    CANCELED
  }
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
    cart: [MenuItemOrder]!
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

  type Query {
    orders: [Order!]! @requireAuth
    order(id: Int!): Order @requireAuth
  }

  input CreateOrderInput {
    email: String
    total: Float!
    phone: String
    name: String
    address1: String
    address2: String
    city: String
    state: String
    zip: String
    serviceMethod: ServiceMethod!
    paymentMethod: PaymentMethod!
    instructions: String
    placedOnPOS: Boolean!
    deliveryFee: Float!
    tip: Float!
    driver: Int
    marketingCampaignId: Int
    discountAmount: Float!
    discountId: Int
    cart: [CreateMenuItemInput]
    closeOrderNow: Boolean
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
    serviceMethod: ServiceMethod
    paymentMethod: PaymentMethod
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
    cart: [CreateMenuItemInput]
  }

  type Mutation {
    createOrder(input: CreateOrderInput!): Order! @requireAuth
    updateOrder(id: Int!, input: UpdateOrderInput!): Order! @requireAuth
    deleteOrder(id: Int!): Order! @requireAuth
  }
`
