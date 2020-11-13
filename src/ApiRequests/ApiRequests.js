import axios from 'axios';

export const getAllUsers = () =>
  axios
    .get(
      'https://cors-anywhere.herokuapp.com/https://boiling-scrubland-96345.herokuapp.com/users'
    )
    .then((res) => res.data);

export const signUp = (userData) =>
  axios
    .post(
      'https://cors-anywhere.herokuapp.com/https://boiling-scrubland-96345.herokuapp.com/users/new-user',
      {
        login: userData,
      }
    )
    .then((res) => res.data);

export const checkIsUserExist = (userId) =>
  axios
    .get(
      `https://cors-anywhere.herokuapp.com/https://boiling-scrubland-96345.herokuapp.com/users/${userId}`
    )
    .then((res) => res.data);

export const postResault = ({ scores, level, token }) =>
  axios.post(
    'https://cors-anywhere.herokuapp.com/https://boiling-scrubland-96345.herokuapp.com/users/update-resault',
    { scores, level },
    {
      headers: { Authorization: token },
    }
  );
