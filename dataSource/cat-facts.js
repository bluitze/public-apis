import { RESTDataSource } from 'apollo-datasource-rest';

export class CatFactsAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://cat-fact.herokuapp.com/';
  }

  async getCatFacts() {
    const response = await this.get('facts');
    return response.all;
  }
}
