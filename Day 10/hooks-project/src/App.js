import logo from './logo.png';
import './App.css';
import Country from './Country';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Country />
        
      </header>
    </div>
  );
}

export default App;
