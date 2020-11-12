import axios from 'axios';

export const getAllUsers = () =>
  axios.get('http://localhost:8080/users').then((res) => res.data);

export const signUp = (userData) =>
  axios
    .post('http://localhost:8080/users/new-user', { login: userData })
    .then((res) => res.data);

export const postResault = ({ scores, level, token }) =>
  axios.post(
    'http://localhost:8080/users/update-resault',
    { scores, level },
    {
      headers: { Authorization: token },
    }
  );
