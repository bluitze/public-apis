import { RESTDataSource } from 'apollo-datasource-rest';
// import { OMDB_KEY } from 'babel-dotenv';

export class OMDbAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'http://www.omdbapi.com/';
  }

  async getMovie(title) {
    return await this.get(`?apikey=${process.env.OMDB_KEY}&t=${title}`);
  }
}
