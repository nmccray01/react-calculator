import './App.css';
import {useState} from "react";

function App() {
  const [calc, setCalc] = useState("");
  const [result, setResult] = useState("");
  const [display, setDisplay] = useState("");

  const updateInput = (value, repres) => {
    setCalc(calc + value);
    setDisplay(display + repres);
  }



  const createDigits = () => {
    const digits = [];

    for (let i = 1; i < 10; i++){
      digits.push(
          <button key={i} onClick={() => updateInput(i.toString(), i.toString())}>{i}</button>
      )
    }

    return digits;
  }

  const calculate = () => {
    const val = Function(`"use strict";return (${calc})`)();
    setCalc(val + "");
    setResult(val + "");
    setDisplay(val + "");
  }

  const deleteLast = () =>{
    if(calc.endsWith("**")){
      setCalc(calc.slice(0, -2));
      setDisplay(display.slice(0, -1));
    } else if (calc.endsWith(Math.PI.toFixed(10).toString())){
      setCalc(calc.slice(0, -12));
      setDisplay(display.slice(0, -1));
    } else if (calc.endsWith(Math.E.toFixed(10).toString())){
      setCalc(calc.slice(0, -12));
      setDisplay(display.slice(0, -1));
    } else {
      setCalc(calc.slice(0, -1));
      setDisplay(display.slice(0, -1));
    }
  }


  return (
    <div className="App">
      <div className={"calculator"}>
        <div className={"display"}>
          {result ? <span>({result})</span>: '' } {display || "0"}
        </div>
        <div className={"operators"}>
          <button onClick={() => {}}>log</button>
          <button onClick={() => {}}>ln</button>
          <button onClick={() => {}}>sin</button>
          <button onClick={() => {}}>cos</button>
          <button onClick={() => {}}>tan</button>
          <button onClick={() => updateInput(Math.E.toFixed(10), String.fromCharCode(8455))}>&#8455;</button>
        </div>
        <div className={"operators"}>
          <button onClick={() => updateInput(Math.PI.toFixed(10), String.fromCharCode(960))}>&#960;</button>
          <button onClick={() => updateInput("**", "^")}>^</button>
          <button onClick={() => updateInput("(", "(")}>(</button>
          <button onClick={() => updateInput(")", ")")}>)</button>
          <button onClick={() => updateInput("%", "%")}>mod</button>
          <button onClick={() => updateInput("**0.5", "^0.5")}>sqrt</button>
        </div>
        <div className={"operators"}>
          <button onClick={() => updateInput("+", "+")}>+</button>
          <button onClick={() => updateInput("-", "-")}>-</button>
          <button onClick={() => updateInput("*", "*")}>*</button>
          <button onClick={() => updateInput("/", "/")}>/</button>
          <button onClick={() => {updateInput(result, result)}}>ANS</button>
          <button onClick={() => {deleteLast()}}>DEL</button>
        </div>
        <div className={"digits"}>
          {createDigits()}
          <button onClick={() => updateInput("0", "0")}>0</button>
          <button onClick={() => updateInput(".", ".")}>.</button>
          <button onClick={() => calculate()}>=</button>
        </div>
      </div>

    </div>
  );
}

export default App;
