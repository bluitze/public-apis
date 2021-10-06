import { gql } from 'apollo-server-express';

export default gql`
  extend type Query {
    veriPhone(phoneNumber: BigInt!): VeriPhoneAPI
  }

  # extend type Mutation {}

  type VeriPhoneAPI {
    valid: Boolean
    number: String
    local_format: String
    international_format: String
    country_prefix: String
    country_code: String
    country_name: String
    location: String
    carrier: String
    line_type: String
  }
`;
