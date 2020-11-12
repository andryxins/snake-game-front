import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useLocalStorage, writeStorage } from '@rehooks/local-storage';
import { signUp } from '../../ApiRequests/ApiRequests';
import Styles from './LoginPage.module.scss';

const LoginPage = () => {
  const [user] = useLocalStorage('snakePlayer');

  const [login, setLogin] = useState('');

  const loginHandler = ({ target }) => {
    setLogin(target.value);
  };

  const history = useHistory();

  const startGameHandler = () => {
    signUp(login)
      .then(({ user }) =>
        writeStorage('snakePlayer', {
          login: user.data.login,
          scores: user.data.topScores,
          level: user.data.topLevel,
          token: user.token,
        })
      )
      .then((_) => history.push('/'))
      .catch((e) => console.log(e));
  };

  return (
    <div className="container">
      <div className="pageWrapper">
        {user ? (
          <>
            <h1 className="pageTitle">{`Hello ${user.login}`}</h1>
            <button className={Styles.btn}>
              <Link to="/">Start Game</Link>
            </button>
          </>
        ) : (
          <>
            <h1 className="pageTitle">What's your name?</h1>
            <input
              className={Styles.input}
              type="text"
              value={login}
              onChange={loginHandler}
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
