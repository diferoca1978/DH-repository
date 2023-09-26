import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function NavBar() {
  const navigate = useNavigate();
  const [keyword, setKeyword] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    setKeyword('');
    e.target.reset();
    navigate(`/search?keyword=${keyword}`);
  };

  return (
    <div>
      <hr />
      <Link to="/">Home</Link> <Link to="About">About Us</Link>{' '}
      <Link to="Products">Products</Link>{' '}
      <form onSubmit={handleSubmit} style={{ display: 'inline-flex' }}>
        <input
          type="text"
          placeholder="Search"
          defaultValue={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        />
        <button type="submit">Find...</button>
      </form>
      <hr />
    </div>
  );
}

export default NavBar;

//$ Implementacion Buscador

//* 1) Uso un formulario al cual le paso la funcion handleSubmit pasra controlar el evento de envio del formulario.
//* 2) Por medio del hook setState seteo mi variable inicial la cual recibe el nombre de keyword pasando esta variable como un defaultValue al imput del formulario
//* 3) Mediante el manejo del evento onChange el setKeyword se setea con el valor que se esta escribiendo en el campo.
//* 4) A travéz del hook useNavigate dentro del manejo del evento "submit" uso una propiedad del hook llamada navigate a la cual se le indica la ruta a donde queremos ser redirigidos, para este caso se redidige a "/search" capturando el queryString "/search?keyword" que sera dado por la variable "keyword" `/search?keyword=${keyword}`
//* 5) Dentro del manejo del evento "submit" luego del preventDefault se setea el estado de keyword en un valor vacio, y luedo se resetea el imput.
