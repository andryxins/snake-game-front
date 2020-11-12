import React from 'react';
import Styles from './TopScoresListItem.module.scss';

const TopScoresListItem = ({ user }) => (
  <div className={Styles.listItem}>
    <span className={Styles.login}>{user.login}</span>
    <span className={Styles.scores}>{user.topScores}</span>
    <span className={Styles.level}>{user.topLevel}</span>
  </div>
);

export default TopScoresListItem;
