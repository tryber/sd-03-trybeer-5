import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css'

import SignupPage from './pages/SignupPage';
import AdminOrders from './pages/AdminOrders';
import LoginPage from './pages/LoginPage';
import ProductsPage from './pages/ProductsPage';
import SignupPage from './pages/SignupPage';
import MenuTop from './components/MenuTop';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/register">
          <MenuTop />
          <SignupPage />
        </Route>
        <Route path="/products">
          <MenuTop />
          <ProductsPage />
        </Route>
        <Route path="/admin/orders">
          <MenuTop />
          <AdminOrders />
        </Route>
        <Route exact path="/login">
          <MenuTop />
          <LoginPage />
        </Route>
        <Route exact path="/">
          <MenuTop />
          <LoginPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
