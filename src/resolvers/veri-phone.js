export default {
  Query: {
    veriPhone: async (parent, { phoneNumber }, { dataSources }, info) => {
      return await dataSources.veriPhone.verifyPhone(phoneNumber);
    }
  },

  Mutation: {},

  VeriPhoneAPI: {}
};
