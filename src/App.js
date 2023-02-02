import logo from './logo.svg';
import './App.css';
import Clock from './components/Clock.class';
import ClockFunction from './components/ClockFunction';

function App() {
  return (
    <div className="App">
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
        <ClockFunction />
        <h2>========================================================================</h2>
        <Clock />
      </header>
    </div>
  );
}

export default App;
