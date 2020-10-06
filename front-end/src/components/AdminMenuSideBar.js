import React from 'react';

function AdminMenuSideBar() {
  return (
    <nav className="col-md-2 d-none d-md-block bg-light sidebar">
      <div className="sidebar-sticky">
        <ul className="nav flex-column">
          <h1>TryBeer</h1>
          <li className="nav-item">
            <a className="nav-link active" data-testid="side-menu-item-orders" href="/admin/orders">
              Pedidos
            </a>
          </li>
          <li className="nav-item" data-testid="side-menu-item-profile">
            <a className="nav-link active" href="/admin/profile">
              Perfil
            </a>
          </li>
          <li className="nav-item" data-testid="side-menu-item-logout">
            <a className="nav-link active" href="/login">
              Sair
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default AdminMenuSideBar;
