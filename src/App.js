import React, { useState, useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import GamePage from './Pages/GamePage/GamePage';
import LoginPage from './Pages/LoginPage/LoginPage';
import StatsPage from './Pages/StatsPage/StatsPage';

const App = () => {
  const [isVisited, setIsVisited] = useState(false);

  useEffect(() => {
    setIsVisited(true);
  }, []);
  return (
    <Switch>
      {isVisited && <Route path="/" exact component={GamePage} />}
      <Route path="/stats" component={StatsPage} />
      <Route path="/login" component={LoginPage} />
      <Redirect to="/login" />
    </Switch>
  );
};

export default App;
