import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import SignupPage from './pages/SignupPage';
import AdminOrders from './pages/AdminOrders';
import LoginPage from './pages/LoginPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/products">
          <ProductsPage />
        </Route>
        <Route path="/register">
          <SignupPage />
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
