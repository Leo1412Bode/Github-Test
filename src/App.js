import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

function App() {
  const leo = 4;
  return (
    <div className="App">
      <h1>loe world</h1>

      {/* esto es del branch test-App */}
      <h2>Esto es del master branch test-App</h2>

      {/* esto es del branch test-App */}

      <header className="App-header">
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
      </header>
    </div>
  );
}

export default App;
