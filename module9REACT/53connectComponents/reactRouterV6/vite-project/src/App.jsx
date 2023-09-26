import { Routes, Route } from 'react-router-dom';

import {
  Home,
  About,
  Products,
  Layout,
  SearchResults,
  NotFound,
} from './index';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="products/*" element={<Products />} />
        <Route path="search" element={<SearchResults />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;

//* La ruta a barra (/) usa el componente Layout que a su vez usa dentro de si el componente <Outlet/> que nos brinda React Router, el cual proporciona el lugar donde se renderizaran los componentes secundarios correspondientes a las rutas anidadas.
//! No olvidar que el componente que lleva dentro de si el componente Outlet en este caso Layout, debe usar el componente Route con etiqueta de apertura y cierre <Route></Route> encerrando las rutas con los componentes que se van arenderizar.

//? El barra asterisco (/*) usado en la ruta Products le indica a react que puede recibir un parametro adicional que pare este caso seria el Id, y para que el componente products reconozca que tiene a su vez una ruta anidada,

//! A paratir de la version 6 de React Router se sustituyo el comonente Switch por Routes.
