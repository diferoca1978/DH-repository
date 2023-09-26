import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom'; //* Hook para leer o modificar la info que viene en el QueryString
import Axios from 'axios';
import { ProductsList } from '../index';

function searchResults() {
  const [searchParams] = useSearchParams();

  const [products, setProducts] = useState([]);

  useEffect(() => {
    Axios.get(
      `https://dummyjson.com/products/search?q=${searchParams.get('keyword')}`
    ).then((res) => setProducts(res.data.products));
  }, [searchParams]);

  return (
    <div>
      <h4>searchResults</h4>
      {products.length === 0 && <strong>Product Not Found </strong>}
      {products.length && <ProductsList products={products} />}
    </div>
  );
}

//$ Buscando la informacion.

//* 1) Usar nuestro componente "producList" en el return ya que este nos sirve para listar los productos.
//* 2) Hacer la importacion del hook "useSearchParams" para leer o modificar la info que viene en el QueryString.
//* 3) Hacer la importacion useState y useEffect.
//* 4) Hacer la importacion de Axios para consumir la api con endpoint con querystring.
//* 5) Se setea la variable searchParamas para poder usarla.
//* 6) Se utiliza el hook useState para manejar el estado de la varible products que esta utilizando el componente product list.
//* 7) Se hace la consulta a la api por medio de useEffect y Axios y se setea la variable products con la data.
//? luego se actualiza la variable searchParams en el mismo useEffect
//* 8) Por ultimo en el return hacemos un renderizado condicional.

export default searchResults;
