import { RESTDataSource } from 'apollo-datasource-rest';

export class GitHubJobsAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://jobs.github.com/';
  }

  async getGitHubJobs(description, location) {
    return await this.get(
      `positions.json?description=${description}&location=${location}`
    );
  }
}
