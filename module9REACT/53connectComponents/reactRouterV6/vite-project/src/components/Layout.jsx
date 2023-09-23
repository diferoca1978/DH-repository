import React from 'react';
import { Outlet } from 'react-router-dom';
import { NavBar } from '../index';

function Layout() {
  return (
    <div>
      <h2>Welcome to React Router V6</h2>
      <NavBar />
      <Outlet />
    </div>
  );
}

export default Layout;

/*El componente <Outlet/> que nos brinda React Router proporciona el lugar donde
 se renderizaran los componentes secundarios correspondientes a las rutas anidadas */
