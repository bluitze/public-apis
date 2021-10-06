export default {
  Query: {
    gitHubJobs: async (
      parent,
      { description, location },
      { dataSources },
      info
    ) => {
      return await dataSources.gitHubJobs.getGitHubJobs(description, location);
    }
  },

  Mutation: {},

  GitHubJobsAPI: {}
};
