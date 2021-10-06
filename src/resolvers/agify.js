export default {
  Query: {
    agify: async (parent, { name }, { dataSources }, info) => {
      return await dataSources.agify.getAgify(name);
    }
  },

  Mutation: {},

  AgifyAPI: {
    natify: async (parent, args, { dataSources }, info) => {
      return await dataSources.natify.getNatify(parent.name);
    },

    gendify: async (parent, args, { dataSources }, info) => {
      return await dataSources.gendify.getGendify(parent.name);
    }
  }
};
