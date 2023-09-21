/*Uso de los children dentro de un componente*/

import React from 'react';

const Childs = (props) => {
  return (
    <div>
      <p>-- Inicio espacio publicitario</p>
      {props.children}
      <p>-- Inicio espacio publicitario</p>
    </div>
  );
};

export default Childs;
