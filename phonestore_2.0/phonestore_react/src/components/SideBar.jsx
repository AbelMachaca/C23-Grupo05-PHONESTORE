import Usuarios from "./Usuarios";
import { Link, Route, Routes } from "react-router-dom";
import ContentWrapper from "./ContentWrapper";
import "./Css/SideBar.css";


export default function SideBar() {
  return (
    <>
      <div className="sidebar bg-gradient-secondary">
        <ul
          className="navbar-nav  sidebar sidebar-dark accordion"
          id="accordionSidebar"
        >
          <a
            className="sidebar-brand d-flex align-items-center justify-content-center"
            href="/"
          >
            <div className="sidebar-brand-icon">
              <img className="w-100" src="/images/icon" alt="" />
            </div>
          </a>

          <hr className="sidebar-divider my-0" />

          <li className="nav-item active">
            <Link className="nav-link" to="/">
              <i className="fas fa-fw fa-tachometer-alt"></i>
              <span>Dashboard - PHONESTORE</span>
            </Link>
          </li>

          <hr className="sidebar-divider" />

<div className="sidebar-heading">Acciones</div>

<li className="nav-item">
    <a className="nav-link" href="http://localhost:3030/">
        <i className="fas fa-fw fa-chart-area"></i>
        <span>Home</span></a>
</li>

          <li className="nav-item nav-link">
            <Link className="nav-link" to="/usuarios">
              <i className="fas fa-fw fa-table"></i>
              <span>Usuarios</span>
            </Link>
          </li>

<li className="nav-item">
    <a className="nav-link" href='http://localhost:3030/products/dashboard'>
        <i className="fas fa-fw fa-chart-area"></i>
        <span>Productos</span></a>
</li>

<li className="nav-item">
    <a className="nav-link" href="http://localhost:3030/api/productsListar">
        <i className="fas fa-fw fa-table"></i>
        <span>Listado por Marca </span></a>
</li>

          <hr className="sidebar-divider d-none d-md-block" />
        </ul>
      </div>

      <Routes>
        <Route path="/" element={<ContentWrapper />}></Route>
        <Route path="/usuarios" element={<Usuarios />} />
      </Routes>
    </>
  );
}
