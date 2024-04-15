
export default function SideBar() {
  return (
    <div>
        <ul className="navbar-nav bg-gradient-secondary sidebar sidebar-dark accordion" id="accordionSidebar">

<a className="sidebar-brand d-flex align-items-center justify-content-center" href="/">
    <div className="sidebar-brand-icon">
        {/* <img className="w-100" src="/C23-Grupo05-PHONESTORE/phonestore_2.0/phonestore_react/src/assets/images/icono.jpg" alt="PHONESTORE"/> */}
    </div>
</a>

<hr className="sidebar-divider my-0"/>

<li className="nav-item active">
    <a className="nav-link" href="/">
        <i className="fas fa-fw fa-tachometer-alt"></i>
        <span>Dashboard - PHONESTORE</span></a>
</li>

<hr className="sidebar-divider"/>

<div className="sidebar-heading">Acciones</div>

<li className="nav-item">
    <a className="nav-link collapsed" href="/">
        <i className="fas fa-fw fa-folder"></i>
        <span>Usuarios</span>
    </a>
</li>

<li className="nav-item">
    <a className="nav-link" href="/">
        <i className="fas fa-fw fa-chart-area"></i>
        <span>Productos</span></a>
</li>

<li className="nav-item">
    <a className="nav-link" href="/">
        <i className="fas fa-fw fa-table"></i>
        <span>Categorias</span></a>
</li>

<hr className="sidebar-divider d-none d-md-block"/>
</ul>
    </div>
)
}
