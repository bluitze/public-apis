import { RESTDataSource } from 'apollo-datasource-rest';
// import { ACCESS_KEY } from 'babel-dotenv';

export class VeriPhoneAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'http://apilayer.net/api/';
  }

  async verifyPhone(phoneNumber) {
    return await this.get(
      `validate?access_key=${process.env.ACCESS_KEY}&number=${phoneNumber}`
    );
  }
}
