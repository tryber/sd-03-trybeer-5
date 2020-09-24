import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/login">
          <LoginPage />
        </Route>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/admin/orders">
          <HomePage />
        </Route>
        <Route exact path="/products">
          <HomePage />
        </Route>
        <Route exact path="/register">
          <HomePage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
