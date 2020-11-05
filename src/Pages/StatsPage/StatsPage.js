import React from 'react';
import { Redirect, Link } from 'react-router-dom';
import { useLocalStorage } from '@rehooks/local-storage';
import TopScoresList from '../../Components/TopScoresList/TopScoresList';
import Styles from './StatsPage.module.scss';

const StatsPage = () => {
  const [user] = useLocalStorage('snakePlayer');

  return user ? (
    <div className="container">
      {' '}
      <div className="pageWrapper">
        <h1 className="pageTitle">Top Scores</h1>
        <div className={Styles.usersList}>
          <TopScoresList />
        </div>
        <Link className={Styles.link} to="/">
          Back to game
        </Link>
      </div>
    </div>
  ) : (
    <Redirect to="/login" />
  );
};

export default StatsPage;
