import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [SmallLetter, setSmallLetter] = useState('black')
  const [CapitalLetter, setCapitalLetter] = useState('black')
  const [NumberLetter, setNumberLetter] = useState('black')
  const [Length, setLength] = useState('black')
  const [Character, setCharacter] = useState('black')

  const [Password, setPassword] = useState('')

  let handlePassword = (event) => {

    setSmallLetter('black');
    setCapitalLetter('black');
    setNumberLetter('black');
    setLength('black');
    setCharacter('black');

    var format = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    if (event.length > 7) {
      setLength('green');
    }
    if (/[A-Z]/.test(event)) {
      setCapitalLetter('green')
    }
    if (/[a-z]/.test(event)) {
      setSmallLetter('green')
    }
    if (format.test(event)) {
      setCharacter('green')
    }
    if (/[0-9]/.test(event)) {
      setNumberLetter('green')
    }
    setPassword(event)
  }

  function login() {
    console.log(Password)
  }

  return (
    <div className="App">
      <h3>Password Validation</h3>
      <p>Try to submit the form.</p>
      <div className="container">
          <label for="usrname">Username</label>
          <input type="text" id="usrname" name="usrname" required />

          <label for="psw">Password</label>
          <input type="password" id="psw" name="psw" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" onChange={(event) => handlePassword(event.target.value)}
            title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" required />

          <input type="submit" value="Submit" onClick={login}/>
      </div>

      <div>
        <h3>Password must contain the following:</h3>
        <p id="letter" className="invalid" style={{ color: SmallLetter }}>A <b>lowercase</b> letter</p>
        <p id="capital" className="invalid" style={{ color: CapitalLetter }}>A <b>capital (uppercase)</b> letter</p>
        <p id="number" className="invalid" style={{ color: NumberLetter }}>A <b>number</b></p>
        <p id="length" className="invalid" style={{ color: Character }}>Special <b> characters</b></p>
        <p id="length" className="invalid" style={{ color: Length }}>Minimum <b>8 characters</b></p>
      </div>
    </div>
  );
}

export default App;
