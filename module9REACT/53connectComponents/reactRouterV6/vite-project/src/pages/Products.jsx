import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { ProductDetail, ProductsList } from '../index';

function Products() {
  return (
    <div>
      <h3>Products component</h3>
      <Routes>
        <Route index element={<ProductsList products={products} />} />
        <Route path=":Id" element={<ProductDetail />} />
      </Routes>
    </div>
  );
}

export default Products;

//* Anidando rutas: la page products contiene las rutas anidadas de los componentes que conforman esta pagina

//! pilas hay que entender lo de la palabra index
