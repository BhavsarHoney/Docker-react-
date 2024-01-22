import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [a, setA] = useState('');
  const [b, setB] = useState('');

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === 'a') {
      setA(value);
    } else if (name === 'b') {
      setB(value);
    }
  };

  const handleUserInput = () => {
    alert(`Entered values: a = ${a}, b = ${b}`);
  };

  return (
    <div className="App">
        <h1> Hello  ....</h1>
        <h2> This is Docker Practice  app....</h2>

         <h2> Docker Intractive mode </h2>
         <label>
        Enter the Value of a:
        <input type="text" name="a" value={a} onChange={handleInputChange} />
      </label>
      <br />
      <label>
        Enter the Value of b:
        <input type="text" name="b" value={b} onChange={handleInputChange} />
      </label>
      <br />

      {/* Button to trigger the user input handling */}
      <button onClick={handleUserInput}>Submit</button>
          
    </div>
  );
}

export default App;
