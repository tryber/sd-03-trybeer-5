import React from 'react';

function MenuTop({ pageTitle = 'TryBeer' }) {
  return (
    <div classNameName="MenuTop">
      <nav className="navbar navbar-dark bg-dark">
        <div className="container-fluid">
          <button
            data-testid="top-hamburguer"
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarToggleExternalContent"
            aria-controls="navbarToggleExternalContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <h1 data-testid="top-title" className="text-center">{pageTitle}</h1>
        </div>
      </nav>

      <nav id="navbarToggleExternalContent" className="collapse side-menu-container">
        <div className="">
          <ul className="nav flex-column">
            <li className="nav-item">
              <a className="nav-link" data-testid="side-menu-item-products" href="/products">Produtos</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" data-testid="side-menu-item-my-orders" href="/orders">Meus pedidos</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" data-testid="side-menu-item-my-profile" href="/profile">Meu Perfil</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" data-testid="side-menu-item-logout" href="/login">Sair</a>
            </li>
          </ul>
        </div>
      </nav>

    </div>
  );
}

export default MenuTop;
