import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  var [x, updateX] = useState("text")
  var [y, updateY] = useState("text yellow")

  return (
    <div className="App">
      { <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hi Vinay <code>src/App.js</code> and save to reload.
        <br/> 
        </p>
        <input type="text"  value = {x} onChange={(obj) => updateX(obj.target.value)} />
        <br />
        <h1> big break </h1>
        <h3> {x}, {y}</h3>
        <input type="text"  value = {y} onChange={(obj) => updateY(obj.target.value)} />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> }


    </div>
  );
}

export default App;
