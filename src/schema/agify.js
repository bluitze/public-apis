import { gql } from 'apollo-server-express';

export default gql`
  extend type Query {
    agify(name: String!): AgifyAPI
  }

  # extend type Mutation {}

  type AgifyAPI {
    name: String
    age: Int
    count: Int
    natify: NatifyAPI
    gendify: GendifyAPI
  }
`;
