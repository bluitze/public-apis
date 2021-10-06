import { gql } from 'apollo-server-express';

export default gql`
  extend type Query {
    dogPic: DogPicAPI
  }

  # extend type Mutation {}

  type DogPicAPI {
    message: String
    status: String
  }
`;
