import { gql } from 'apollo-server-express';

export default gql`
  # extend type Query {}

  # extend type Mutation {}

  type NatifyAPI {
    name: String
    country: [Country]
  }

  type Country {
    country_id: String
    probability: Float
  }
`;
