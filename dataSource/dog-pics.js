import { RESTDataSource } from 'apollo-datasource-rest';

export class DogPicAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://dog.ceo/api/breeds/image/';
  }

  async getDogPics() {
    return await this.get('random');
  }
}
