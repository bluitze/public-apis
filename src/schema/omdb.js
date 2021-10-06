import { gql } from 'apollo-server-express';

export default gql`
  extend type Query {
    omdbMovie(title: String!): OMDbAPI
  }

  # extend type Mutation {}

  type OMDbAPI {
    Title: String
    Year: String
    Rated: String
    Released: String
    Runtime: String
    Genre: String
    Director: String
    Writer: String
    Actors: String
    Plot: String
    Language: String
    Country: String
    Awards: String
    Poster: String
    Ratings: [Rating]
    Metascore: String
    imdbRating: String
    imdbVotes: String
    imdbID: String
    Type: String
    DVD: String
    BoxOffice: String
    Production: String
    Website: String
    Response: String
  }

  type Rating {
    Source: String
    Value: String
  }
`;
