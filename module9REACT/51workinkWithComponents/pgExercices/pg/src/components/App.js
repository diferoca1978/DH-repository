import React from 'react';
import { FileOfServices, Childs } from './index';

function App() {
  return (
    <div className="App">
      <Childs>
        <h4>Woooo!! aqui comienza la publicidad!!</h4>
      </Childs>

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
