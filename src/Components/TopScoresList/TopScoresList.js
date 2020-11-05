import React, { useState, useEffect } from 'react';
import TopScoresListItem from '../TopScoresListItem/TopScoresListItem';
import { getAllUsers } from '../../ApiRequests/ApiRequests';
import Styles from './TopScoresList.module.scss';

const TopScoresList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function getUsers() {
      const users = await getAllUsers();

      setUsers(users);
    }

    getUsers();
  }, []);

  return (
    <ul className={Styles.list}>
      <div className={Styles.listTitle}>
        <span className={Styles.listTitleItem}>Login</span>
        <span className={Styles.listTitleItem}>Scores</span>
        <span className={Styles.listTitleItem}>Id</span>
      </div>
      {users
        .sort((a, b) => b.scores - a.scores)
        .map(user => (
          <li key={user.clientId}>
            <TopScoresListItem user={user} />
          </li>
        ))}
    </ul>
  );
};

export default TopScoresList;
