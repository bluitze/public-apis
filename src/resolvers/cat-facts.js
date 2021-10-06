export default {
  Query: {
    catFacts: async (parent, args, { dataSources }, info) => {
      return await dataSources.catFacts.getCatFacts();
    }
  },

  Mutation: {},

  CatFactsAPI: {}
};
