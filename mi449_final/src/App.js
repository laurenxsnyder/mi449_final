import logo from './logo.svg';
import './App.css';

function RandomButton() {
  return (
    <>
    <h3> CLICK HERE FOR A RANDOM PHOTO</h3>
    <button>Random</button>
    </>
  );
}
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        
        </a>
        <RandomButton/>
      </header>
    </div>
  );
}


export default App;
