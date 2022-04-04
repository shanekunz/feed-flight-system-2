export const schema = gql`
  type Category {
    id: Int!
    name: String!
    discounts: [Discount]!
    deleted: Boolean!
    MenuItem: [MenuItem]!
  }

  type Query {
    categories: [Category!]! @requireAuth
    category(id: Int!): Category @requireAuth
  }

  input CreateCategoryInput {
    name: String!
    deleted: Boolean!
  }

  input UpdateCategoryInput {
    name: String
    deleted: Boolean
  }

  type Mutation {
    createCategory(input: CreateCategoryInput!): Category! @requireAuth
    updateCategory(id: Int!, input: UpdateCategoryInput!): Category!
      @requireAuth
    deleteCategory(id: Int!): Category! @requireAuth
  }
`
