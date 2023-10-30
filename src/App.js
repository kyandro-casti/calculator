import { useState } from 'react';
import './App.css';

function App() {
  const [input, setInput]= useState(0);
  console.log("this is input ", input)
  const handleInput = e => {
    const value = e.target.value
    setInput(value)
  }
  const handleFormula = (e) =>{
    const newinput = input + 10
    setInput(newinput)
  }
  return (
    <div className="App" style={{textAlign: "center"}}>
      <div>{input}</div>
      <div>
        <button value={"clear"}>C</button>
        <button value={"equal"}>=</button>
      </div>
      <div>
        <button onClick={handleFormula} value={"+"}>+</button>
        <button value={"-"}>-</button>
        <button value={"*"}>x</button>
        <button value={"/"}>/</button>
      </div>
      <div>
        <button onClick={handleInput} value={"1"}>1</button>
        <button onClick={handleInput} value={"2"}>2</button>
        <button onClick={handleInput} value={"3"}>3</button>
      </div>
      <div>
        <button onClick={handleInput} value={"4"}>4</button>
        <button onClick={handleInput} value={"5"}>5</button>
        <button onClick={handleInput} value={"6"}>6</button>
      </div>
      <div>
        <button onClick={handleInput} value={"7"}>7</button>
        <button onClick={handleInput} value={"8"}>8</button>
        <button onClick={handleInput} value={"9"}>9</button>
      </div>
    </div>
  );
}

export default App;
