import { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Axios from 'axios';
import { ProductDetail, ProductsList } from '../index';

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    Axios.get('https://dummyjson.com/products').then((res) =>
      setProducts(res.data.products)
    );
  }, []);
  return (
    <div>
      <h3>Products component</h3>
      <Routes>
        <Route index element={<ProductsList products={products} />} />
        <Route path=":id" element={<ProductDetail />} />
      </Routes>
    </div>
  );
}

export default Products;

//* Anidando rutas: El componente principal products (./page/Products) contiene las rutas anidadas de los componentes que conforman esta pagina en este caso ProductLis y ProductDetail.

//@ La palabra index se usa para referenciar que esa es la ruta principal que se va renderizar esto es util pára organizar rutas anidadas. Y es alli donde pasamos la prop que recibira el componente ProductList.
