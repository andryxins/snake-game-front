import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useLocalStorage, writeStorage } from '@rehooks/local-storage';
import { signUp, checkIsUserExist } from '../../ApiRequests/ApiRequests';
import Styles from './LoginPage.module.scss';

const LoginPage = () => {
  const [userDataFromLS] = useLocalStorage('snakePlayer');

  const [login, setLogin] = useState('');

  const loginFieldHandler = ({ target }) => {
    setLogin(target.value);
  };

  const history = useHistory();

  const startGameHandler = () =>
    signUp(login)
      .then(({ user }) =>
        writeStorage('snakePlayer', {
          login: user.data.login,
          scores: user.data.topScores,
          level: user.data.topLevel,
          token: user.token,
          id: user.data._id,
        })
      )
      .then((_) => history.push('/'))
      .catch((e) => console.log(e));

  const loginHandler = () =>
    checkIsUserExist(userDataFromLS.id)
      .then(({ isExist }) => {
        if (isExist) {
          return history.push('/');
        } else {
          return signUp(userDataFromLS.login)
            .then(({ user }) =>
              writeStorage('snakePlayer', {
                ...userDataFromLS,
                login: user.data.login,
                token: user.token,
                id: user.data._id,
              })
            )
            .then((_) => history.push('/'));
        }
      })
      .catch((e) => console.log(e));

  return (
    <div className="container">
      <div className="pageWrapper">
        {userDataFromLS ? (
          <>
            <h1 className="pageTitle">{`Hello ${userDataFromLS.login}`}</h1>
            <button onClick={loginHandler} className={Styles.btn}>
              Start Game
            </button>
          </>
        ) : (
          <>
            <h1 className="pageTitle">What's your name?</h1>
            <input
              className={Styles.input}
              type="text"
              value={login}
              onChange={loginFieldHandler}
            />
            <button
              className={Styles.btn}
              onClick={startGameHandler}
              disabled={login.length < 3}
            >
              Start Game
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default LoginPage;
