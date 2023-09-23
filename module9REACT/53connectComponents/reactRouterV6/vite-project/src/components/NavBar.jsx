import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <div>
      <hr />
      <Link to="/">Home</Link> <Link to="About">About Us</Link>{' '}
      <Link to="Products">Products</Link>
      <hr />
    </div>
  );
}

export default NavBar;
