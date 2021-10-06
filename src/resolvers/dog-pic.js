export default {
  Query: {
    dogPic: async (parent, args, { dataSources }, info) => {
      return await dataSources.dogPic.getDogPics();
    }
  },

  Mutation: {},

  CatFactsAPI: {}
};
