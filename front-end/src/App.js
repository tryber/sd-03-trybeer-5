import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import './App.css';

import AdminOrders from './pages/AdminOrders';
import CheckoutPage from './pages/CheckoutPage';
import AdminProfile from './pages/AdminProfile';
import LoginPage from './pages/LoginPage';
import ProductsPage from './pages/ProductsPage';
import SignupPage from './pages/SignupPage';
import MenuTop from './components/MenuTop';
import AdminMenuSideBar from './components/AdminMenuSideBar';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/checkout">
          <CheckoutPage />
        </Route>
        <Route path="/register">
          <SignupPage />
        </Route>
        <Route path="/products">
          <MenuTop />
          <ProductsPage />
        </Route>
        <Route path="/admin/orders">
          <AdminMenuSideBar />
          <AdminOrders />
        </Route>
        <Route path="/admin/profile">
          <AdminMenuSideBar />
          <AdminProfile />
        </Route>
        <Route exact path="/login">
          <LoginPage />
        </Route>
        <Route exact path="/">
          <Redirect to="/login" />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
