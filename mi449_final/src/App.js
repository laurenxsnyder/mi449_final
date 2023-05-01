import { useState } from 'react' ;
import { supabase } from './supabaseClient';
import logo from './logo.svg';
import './App.css';

function RandomButton() {
  const [count, setCount] = useState(0);
  function randomPicture () {
    setCount (count +1);
  }
  return (
    <>
    <h3> CLICK HERE FOR A RANDOM PHOTO</h3>
    <button onClick={randomPicture}>Random {count}</button>
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
