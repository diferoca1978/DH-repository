/* Uso de props, map, defaultProps, Proptypes*/

import React from 'react';
import PropTypes from 'prop-types';

const Servicio = (props) => {
  let listaCategorias;
  /*condicional para evaluar si la defaultProp Categoria existe y se renderiza*/

  if (props.Categoria != null) {
    listaCategorias = (
      <ul>
        {props.Categoria.map((row, i) => (
          <li key={row + i}>{row}</li>
        ))}
      </ul>
    );
  } else {
    listaCategorias = '';
  }

  return (
    <div className="Servicio">
      <h3>{props.Titulo}</h3>
      {listaCategorias}
      <p> Descripcion: {props.Descripcion}</p>
    </div>
  );
};

Servicio.defaultProps = {
  Descripcion: 'Este servicio aun no cuenta con una descripcion',
  Categoria: null,
};

Servicio.propTypes = {
  Titulo: PropTypes.string,
};

export default Servicio;
