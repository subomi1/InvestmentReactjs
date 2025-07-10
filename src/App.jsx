
import { Fragment } from "react";
import Header from "./Header";
import Input from "./input";
import Results from "./results";


import { useState } from "react";


function App() {

  const [uinput, setInput] = useState({
    initialInvestment: 0,
    annualInvestment: 0,
    expectedReturn: 0,
    duration: 0,
  });

  const inputIsValid = uinput.duration >= 1;
  
  function handleChange(inputIdentifier, newValue) {
    setInput((value) =>{
        return{
            ...value,
            [inputIdentifier] : +newValue
        }
    })
  }
  return (
    <>
      <Header />
      <Input onChangeInput ={handleChange} input={uinput}/>
      {!inputIsValid && <p className="center">Check your inputed values again</p>}
      {inputIsValid && <Results input={uinput}/>}
    </>

  );
}

export default App
