import { useState } from 'react' ;
import { supabase } from './supabaseClient';
import logo from './logo.svg';
import './App.css';

function Picture() {
  const [myPicture, setMyPicture] = useState([]);
  async function getPicture() {
    let { data: picture, error} = await supabase
    .from('picture')
    .select('*')
  setMyPicture(picture);
  }
getPicture();
return (
    <table>
      {
        myPicture.map(b => (
          <tr>
            <td>{b.title}</td>
            <td>{b.picture}</td>
          </tr>
        ))
      }
    </table>
  );
}



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
        <Picture/>
        <img src={logo} className="App-logo" alt="logo" />
        <script type="module" src="index.js"></script>
        
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
