import { gql } from 'apollo-server-express';

export default gql`
  extend type Query {
    catFacts: [CatFactsAPI]
  }

  # extend type Mutation {}

  type CatFactsAPI {
    _id: String
    text: String
    type: String
    user: User
    upvotes: Int
    userUpvoted: Int
  }

  type User {
    _id: String
    name: Name
  }

  type Name {
    first: String
    last: String
  }
`;
