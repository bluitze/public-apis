import { RESTDataSource } from 'apollo-datasource-rest';

export class GendifyAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://api.genderize.io';
  }

  async getGendify(name) {
    return await this.get(`?name=${name}`);
  }
}
