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
        <span className={Styles.listTitleItem}>Top Level</span>
      </div>
      {users
        .sort((a, b) => b.topScores - a.topScores)
        .map((user) => (
          <li key={user._id}>
            <TopScoresListItem user={user} />
          </li>
        ))}
    </ul>
  );
};

export default TopScoresList;
