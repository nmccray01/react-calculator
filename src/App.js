import './App.css';
import {useState} from "react";

function App() {
  const [calc, setCalc] = useState("");
  const [result, setResult] = useState("");

  const updateCalc = value => {
    setCalc(calc + value);
  }

  const createDigits = () => {
    const digits = [];

    for (let i = 1; i < 10; i++){
      digits.push(
          <button key={i} onClick={() => updateCalc(i.toString())}>{i}</button>
      )
    }

    return digits;
  }

  const calculate = () => {
    const val = Function(`"use strict";return (${calc})`)();
    setCalc(val);
    setResult(val);
  }

  const deleteLast = () =>{
    if(calc === ''){
      return;
    }

    const value = calc.slice(0, -1);
    setCalc(value);
  }


  return (
    <div className="App">
      <div className={"calculator"}>
        <div className={"display"}>
          {result ? <span>({result})</span>: '' } {calc || "0"}
        </div>
        <div className={"operators"}>
          <button onClick={() => updateCalc("+")}>+</button>
          <button onClick={() => updateCalc("-")}>-</button>
          <button onClick={() => updateCalc("*")}>*</button>
          <button onClick={() => updateCalc("/")}>/</button>
          <button onClick={() => {updateCalc(result)}}>ANS</button>
          <button onClick={() => {deleteLast()}}>DEL</button>
        </div>
        <div className={"digits"}>
          {createDigits()}
          <button onClick={() => updateCalc("0")}>0</button>
          <button onClick={() => updateCalc(".")}>.</button>
          <button onClick={() => calculate()}>=</button>
        </div>
      </div>

    </div>
  );
}

export default App;
