import { gql } from 'apollo-server-express';
import CatFactsSchema from './cat-facts';
import DogPicSchema from './dog-pic';
import VeriPhoneSchema from './veri-phone';
import AgifySchema from './agify';
import NatifySchema from './natify';
import GendifySchema from './gendify';
import GitHubJobsSchema from './gitHub-jobs';
import OMDBSchema from './omdb';

const linkSchema = gql`
  scalar Date
  scalar DateTime
  scalar Time
  scalar Text
  scalar Point
  scalar JSON
  scalar JSONObject
  scalar BigInt

  type Query {
    _: Boolean
  }

  type Mutation {
    _: Boolean
  }

  type Subscription {
    _: Boolean
  }
`;

export default [
  linkSchema,
  CatFactsSchema,
  DogPicSchema,
  VeriPhoneSchema,
  AgifySchema,
  NatifySchema,
  GendifySchema,
  GitHubJobsSchema,
  OMDBSchema
];
