import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import HomePage from './pages/HomePage';
import SignupPage from './pages/SignupPage';
import Products from './pages/Products';
import AdminOrders from './pages/AdminOrders';
import LoginPage from './pages/LoginPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/register">
          <SignupPage />
        </Route>
        <Route path="/products">
          <Products />
        </Route>
        <Route path="/admin/orders">
          <AdminOrders />
        </Route>
        <Route exact path="/login">
          <LoginPage />
        </Route>
        <Route exact path="/">
          <HomePage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
