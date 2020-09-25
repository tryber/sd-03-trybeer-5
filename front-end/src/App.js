import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import SignupPage from './pages/SignupPage';
import Products from './pages/Products';
import AdminOrders from './pages/AdminOrders';
import LoginPage from './pages/LoginPage';
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
          <Products />
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
