import React from 'react';
import { FileOfServices, Childs, Home, About, Contact } from './index';
import { Link, Route, Routes } from 'react-router-dom';
import { exact } from 'prop-types';

function App() {
  return (
    <div className="App">
      <Link to="/">Home</Link>
      <hr />
      <Link to="/about">About</Link>
      <hr />
      <Link to="/contact">Contact</Link>

      <Childs>
        <h4>Woooo!! aqui comienza la publicidad!!</h4>
      </Childs>

      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/about" element={<About />} exact />
        <Route path="/contact" element={<Contact />} exact />
      </Routes>

      <FileOfServices />

      <Childs>
        <ul>
          <li>public 1</li>
          <li>public 2</li>
          <li>public 3</li>
        </ul>
      </Childs>
    </div>
  );
}

export default App;
