import { useState, useEffect } from 'react';
import Axios from 'axios';
import { Link, useParams } from 'react-router-dom';

function ProductDetail() {
  const [product, setProduct] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    Axios.get(`https://dummyjson.com/products/${id}`).then((res) =>
      setProduct(res.data)
    );
  }, [id]);

  return (
    <>
      {!product && <em>Loading...</em>}
      {product && (
        <div>
          <h3>Este es el detalle del producto N° {id} </h3>
          <h4>Title: {product.title}</h4>
          <img src={product.thumbnail} alt="{product.title}" width="200" />
          <p>Category: {product.category} </p>
          <p>Description: {product.description} </p>
          <p>
            <strong>Price: {product.price} </strong>
          </p>
          <Link to="/products">Volver a la lista de productos</Link>
        </div>
      )}
    </>
  );
}

export default ProductDetail;

//* Hook useParams: Hook proporcionado por react router para poder consumir los parametros que vienen en una ruta. Este me devuelve un objeto literal que me devuelve una propiedad con el nombre del parametro y su respectivo valor.
