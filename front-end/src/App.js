import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css'

import AdminOrders from './pages/AdminOrders';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import ProductsPage from './pages/ProductsPage';
import SignupPage from './pages/SignupPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/admin/orders">
          <AdminOrders />
        </Route>
        <Route path="/products">
          <ProductsPage />
        </Route>
        <Route path="/register">
          <SignupPage />
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
