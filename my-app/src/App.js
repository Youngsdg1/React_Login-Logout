import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'typeface-roboto';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <h1>h1. Heading, I'm Youngji</h1>
        <h2>h2</h2>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Login Page
        </a>
      </header>
    </div>
  );
}

export default App;
