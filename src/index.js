import { ApolloServer } from 'apollo-server';
import schema from './schema';
import resolvers from './resolvers';
import { CatFactsAPI } from '../dataSource/cat-facts';
import { DogPicAPI } from '../dataSource/dog-pics';
import { VeriPhoneAPI } from '../dataSource/veri-phone';
import { AgifyAPI } from '../dataSource/agify';
import { NatifyAPI } from '../dataSource/natify';
import { GendifyAPI } from '../dataSource/gendify';
import { GitHubJobsAPI } from '../dataSource/gitHub-jobs';
import { OMDbAPI } from '../dataSource/omdb';

const server = new ApolloServer({
  typeDefs: schema,
  resolvers,
  dataSources: () => {
    return {
      catFacts: new CatFactsAPI(),
      dogPic: new DogPicAPI(),
      veriPhone: new VeriPhoneAPI(),
      agify: new AgifyAPI(),
      natify: new NatifyAPI(),
      gendify: new GendifyAPI(),
      gitHubJobs: new GitHubJobsAPI(),
      omdbMovie: new OMDbAPI()
    };
  },

  introspection: true,
  playground: true
});

server.listen({ port: process.env.PORT || 4000 }).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});

//~ "start": "nodemon src/index.js --ext js,graphql --exec babel-node"
//~ "start": "babel-node src/index.js"//
