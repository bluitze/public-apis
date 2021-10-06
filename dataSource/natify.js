import { RESTDataSource } from 'apollo-datasource-rest';

export class NatifyAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://api.nationalize.io';
  }

  async getNatify(name) {
    return await this.get(`?name=${name}`);
  }
}
