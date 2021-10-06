export default {
  Query: {
    omdbMovie: async (parent, { title }, { dataSources }, info) => {
      return await dataSources.omdbMovie.getMovie(title);
    }
  },

  Mutation: {},

  OMDbAPI: {}
};
