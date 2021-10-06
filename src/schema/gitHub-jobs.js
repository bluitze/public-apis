import { gql } from 'apollo-server-express';

export default gql`
  extend type Query {
    gitHubJobs(description: String!, location: String!): [GitHubJobsAPI]
  }

  # extend type Mutation {}

  type GitHubJobsAPI {
    id: String
    type: String
    url: String
    created_at: String
    company: String
    company_url: String
    location: String
    title: String
    description: String
    how_to_apply: String
    company_logo: String
  }
`;
