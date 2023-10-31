import { useState } from 'react';
import './App.css';

function App() {
  const [inputOne, setInputOne] = useState(0)
  const [inputTwo, setInputTwo] = useState(0)
  const [result, setResult] = useState(0)
  console.log({result})
  const InputOne = (e) =>{
    const value = e.target.value
    setInputOne(value)
  }
  const InputTwo = (e) =>{
    const value = e.target.value
    setInputTwo(value)
  }
  return (
    <div className="App" style={{textAlign: "center"}}>
      <input id='rowOne' onChange={InputOne}></input>
      <input id='rowTwo' onChange={InputTwo}></input>
      <div>
        <button onClick={() => setResult(parseInt(inputOne) - parseInt(inputTwo))}>-</button>
        <button onClick={() => setResult(parseInt(inputOne) + parseInt(inputTwo))}>+</button>
      </div>
      <div>{result}</div>
    </div>
  );
}

export default App;
