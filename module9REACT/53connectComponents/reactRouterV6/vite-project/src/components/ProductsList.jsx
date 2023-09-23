import React from 'react';

function ProductsList({ products }) {
  return (
    <div>
      <ul>
        {products.map((row) => {
          return (
            <li key={row.id}>
              <h3>{row.title}</h3>
              <h4>{row.brand}</h4>
              Conoce mas!!
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default ProductsList;

//* Aqui el componente esta recibiendo una prop llamada products, luego usamos un ul para dentro de este recorrer con un metodo map el array de datos que me traera la prop. Finalmente mediante un li asignando la key prop que es la encargada de identificar de manera unica cada elemento del listado, enceguida consumire la info que se quiera mostrar.
