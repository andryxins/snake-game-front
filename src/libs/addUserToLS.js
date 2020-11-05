import { v4 as uuidv4 } from 'uuid';

export default async login => {
  try {
    const newUser = { login: login, id: uuidv4(), scores: 0, level: 1 };
    localStorage.setItem('snakePlayer', JSON.stringify(newUser));
  } catch (e) {
    console.log(e);
  }
};
