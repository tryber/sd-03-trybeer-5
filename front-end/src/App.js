import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

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
          <LoginPage />
        </Route>
        <Route exact path="/">
          <LoginPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
