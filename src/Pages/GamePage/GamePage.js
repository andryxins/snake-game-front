import React from 'react';
import { useLocalStorage } from '@rehooks/local-storage';
import { Link, Redirect } from 'react-router-dom';
import Game from '../../Components/Game/Game';
import Styles from './GamePage.module.scss';

const GamePage = () => {
  const [user] = useLocalStorage('snakePlayer');

  return user ? (
    <div className="container">
      <div className="pageWrapper">
        <h1 className="pageTitle">GamePage</h1>
        <div className={Styles.gameContainer}>
          <Game />
        </div>
        <Link className="link" to="/stats">
          Top scores
        </Link>
      </div>
    </div>
  ) : (
    <Redirect to="/login" />
  );
};

export default GamePage;
