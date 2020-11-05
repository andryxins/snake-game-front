import { v4 as uuidv4 } from 'uuid';

export default class User {
  constructor(login) {
    this.login = login;
    this.clientId = uuidv4();
    this.scores = 0;
    this.level = 1;
  }
}
