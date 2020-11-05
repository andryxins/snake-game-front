import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useLocalStorage, writeStorage } from '@rehooks/local-storage';
import Styles from './LoginPage.module.scss';
import User from '../../libs/User';

const LoginPage = () => {
  const [user] = useLocalStorage('snakePlayer');

  const [login, setLogin] = useState('');

  const loginHandler = ({ target }) => {
    setLogin(target.value);
  };

  const history = useHistory();

  const startGameHandler = () => {
    history.push('/');
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
