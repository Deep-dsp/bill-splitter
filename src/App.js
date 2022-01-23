import InputBlock from "./Components/inputBlock";
import DisplayBlock from "./Components/displayBlock";
import { useState } from "react";

function App() {
  const [amount, setAmount] = useState(0);
  const [tipAmount, setTipAmount] = useState(0);
  const [person, setPerson] = useState(1);
  const [customtip, setCustomtip] = useState(0);
  const [click, setClick]= useState(0);
  const [rest, setRest]= useState(0);


  const reset = () => {
    setAmount(0);
    setTipAmount(0);
    setPerson(1);
    setCustomtip(0);
    setClick(1);
  }



  return (
    <div className="App d-flex align-items-center" role="main">
      <div className="container mx-auto">
        <div className="logo d-flex justify-content-center" role="document">
          <img
            src="images/logo.svg"
            aria-label="Splitter Logo"
            title="Splitter Logo"
            alt="Splitter Logo"
          />
        </div>
        <div className="row">
          <div className="col-lg-6">
            <InputBlock  
              amount={amount} tipAmount={tipAmount} 
              setTipAmount={setTipAmount} setAmount={setAmount} 
              person={person} setPerson={setPerson} 
              customtip={customtip} setCustomtip={setCustomtip}
              click={click} setClick={setClick} rest={rest}
            />
          </div>
          <div className="col-lg-6 ps-3 ps-xl-5 mt-5 mt-lg-0">
            <DisplayBlock amount={amount} tipAmount={tipAmount} person={person} customtip={customtip} click={click} reset={reset} setRest={setRest}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
