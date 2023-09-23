import React from 'react';
import { useParams } from 'react-router-dom';

function ProductDetail() {
  const { Id } = useParams();

  return (
    <div>
      <h3>Este es el detalle del producto N° {Id} </h3>
    </div>
  );
}

export default ProductDetail;

//* Hook useParams: Hook proporcionado por react router para poder consumir los parametros que vienen en una ruta. Este me devuelve un objeto literal que me devuelve una propiedad con el nombre del parametro y su respectivo valor.
