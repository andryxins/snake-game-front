import axios from 'axios';

export const getAllUsers = () =>
  axios.get('http://localhost:8080/users').then((res) => res.data);

export const postResault = (user) =>
  axios.post('http://localhost:8080/users', user);
