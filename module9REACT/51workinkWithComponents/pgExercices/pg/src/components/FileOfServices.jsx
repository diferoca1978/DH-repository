import React from 'react';
import { Servicio } from './index';

const FileOfServices = () => {
  return (
    <div className="file">
      <Servicio
        Titulo="Limpieza Hogar"
        Categoria={['Hogar', 'ServiciosVarios']}
        Descripcion="Lorem ipsum dolor sit amet consectetur adipisicing elit."
      />
      <Servicio
        Titulo="Fontaneria"
        Categoria={['ServiciosVarios']}
        Descripcion="Lorem ipsum dolor sit amet consectetur adipisicing elit."
      />
      <Servicio
        Titulo="Limpieza Empresa"
        Descripcion="Lorem ipsum dolor sit amet consectetur adipisicing elit."
      />
    </div>
  );
};

export default FileOfServices;
