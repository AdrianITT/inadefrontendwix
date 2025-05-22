import React from 'react';

const Header = () => {
  return (
    <header style={{ position: 'sticky', top: 0, zIndex: 1000 }}>
      <nav
        className="navbar navbar-expand-lg py-4"
        style={{ backgroundColor: '#FFFF' }}
        data-bs-theme="light"
      >
        <div className="container-fluid d-flex align-items-center justify-content-between">
          {/* Logo alineado a la izquierda */}
          <img
            src="/logo.png"
            alt="Logo"
            width="120"
            height="60"
            className="d-inline-block align-text-top"
          />

          {/* Botón hamburguesa para móviles */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Menú centrado */}
          <div
            className="collapse navbar-collapse justify-content-center"
            id="navbarNav"
          >
            <ul className="navbar-nav text-center gap-4">
              <li className="nav-item">
                <a className="nav-link fs-5 fw-semibold" href="#inicio">
                  Inicio
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link fs-5 fw-semibold" href="#Empresa">
                  Empresa
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link fs-5 fw-semibold" href="#Laboratorio">
                  Laboratorio
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link fs-5 fw-semibold" href="#Ingeniería">
                  Ingeniería
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link fs-5 fw-semibold" href="#Contacto">
                  Contacto
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link fs-5 fw-semibold" href="#Acreditaciones">
                  Acreditaciones
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
