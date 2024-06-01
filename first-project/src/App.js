import logo from './logo.svg';
import './App.css';

function App() {
  var x = 'Hi vinay kumar how are you!'
  var y = 10
  var z = 20

  function dummy(x, y) {
    return x+y
    }

  return (
    <div className="App">
      { <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
          <br />
          welcome {x}
        </p>
        <br />
        sum of two numbers {dummy(y,z)}

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
