import { useState } from 'react';
import './App.css';
import { Users } from './Users';

function App() {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}

      <button onClick={() => setToggle(!toggle)}>toggle</button>

      {
        toggle ? `hidden the table` : <Users />
      }


    </div>
  );
}

export default App;
