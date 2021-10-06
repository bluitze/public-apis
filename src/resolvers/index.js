import * as GraphQLJSON from 'graphql-type-json';
import CatFactsResolvers from './cat-facts';
import DogPicResolvers from './dog-pic';
import VeriPhoneResolvers from './veri-phone';
import AgifyResolvers from './agify';
import GitHubJobsResolvers from './gitHub-jobs';
import OMDBResolvers from './omdb';

const jsonTypes = {
  JSON: GraphQLJSON
};

export default [
  jsonTypes,
  CatFactsResolvers,
  DogPicResolvers,
  VeriPhoneResolvers,
  AgifyResolvers,
  GitHubJobsResolvers,
  OMDBResolvers
];
