export const schema = gql`
  type MarketingCampaign {
    id: Int!
    orders: [Order]!
    name: String!
  }

  type Query {
    marketingCampaigns: [MarketingCampaign!]! @requireAuth
    marketingCampaign(id: Int!): MarketingCampaign @requireAuth
  }

  input CreateMarketingCampaignInput {
    name: String!
  }

  input UpdateMarketingCampaignInput {
    name: String
  }

  type Mutation {
    createMarketingCampaign(
      input: CreateMarketingCampaignInput!
    ): MarketingCampaign! @requireAuth
    updateMarketingCampaign(
      id: Int!
      input: UpdateMarketingCampaignInput!
    ): MarketingCampaign! @requireAuth
    deleteMarketingCampaign(id: Int!): MarketingCampaign! @requireAuth
  }
`
