import { gql } from 'apollo-server-express';

export default gql`
  # extend type Query {}

  # extend type Mutation {}

  type GendifyAPI {
    name: String
    gender: String
    probability: Float
    count: Int
  }
`;
