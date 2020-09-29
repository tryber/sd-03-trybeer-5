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
import AdminProfile from './pages/AdminProfile';
import LoginPage from './pages/LoginPage';
import MenuTop from './components/MenuTop';
import AdminMenuSideBar from './components/AdminMenuSideBar';
import ProfilePage from './pages/ProfilePage';

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
          <AdminMenuSideBar />
          <AdminOrders />
        </Route>
        <Route path="/admin/profile">
          <AdminMenuSideBar />
          <AdminProfile />
        </Route>
        <Route exact path="/profile">
          <MenuTop pageTitle="Meu perfil" datatest="top-title" />
          <ProfilePage />
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
