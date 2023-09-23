import React from 'react';
import {
  FileOfServices,
  Childs,
  Home,
  About,
  Contact,
  NotFound404,
} from './index';
import { Link, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Link to="/">Home</Link>
      <hr />
      <Link to="/about">About</Link>
      <hr />
      <Link to="/contact">Contact</Link>
      <hr />
      <Link to="/not-Found">404</Link>

      <Childs>
        <h4>Woooo!! aqui comienza la publicidad!!</h4>
      </Childs>

      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/about" element={<About />} exact />
        <Route path="/contact" element={<Contact />} exact />
        <Route path="*" element={<NotFound404 />} />
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
