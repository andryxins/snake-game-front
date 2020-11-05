import React from 'react';
import Styles from './TopScoresListItem.module.scss';

const TopScoresListItem = ({ user }) => (
  <div className={Styles.listItem}>
    <span className={Styles.login}>{user.login}</span>
    <span className={Styles.scores}>{user.scores}</span>
    <span className={Styles.id}>{user.clientId}</span>
  </div>
);

export default TopScoresListItem;
