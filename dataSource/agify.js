import { RESTDataSource } from 'apollo-datasource-rest';

export class AgifyAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://api.agify.io';
  }

  async getAgify(name) {
    return await this.get(`?name=${name}`);
  }
}
