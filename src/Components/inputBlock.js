import React from "react";
import TipPercentage from "./TipPercentage";

const InputBlock = ({ setAmount, amount, tipAmount, setTipAmount, person, setPerson, customtip, setCustomtip, setClick, click, rest }) => {

  let inputEmpty, onePerson;

  const setTip = (perc) => {
    setTipAmount(amount*(perc/100));
    setClick(1);
   };

   if(rest == 1){
    inputEmpty ='';
    if(inputEmpty == ''){
      onePerson=1;
    }
   }

  return (
    <>
      <div className="bill-amount-input" role="Amount Input Block">
        <label htmlFor="bill-bmount" className="font-style mb-2">
          Bill
        </label>
        <div className="input bill-amount-input d-flex align-items-center">
          <img src="/images/icon-dollar.svg" alt="Dollar Icon" aria-label="Dollar Icon" />
          <input
            if="bill-bmount"
            className="font-style pe-1"
            type="number"
            placeholder={amount}
            onChange={(e) => setAmount(e.target.value)}
            name="Bill Amount"
            aria-label="Bill Amount"
            value={inputEmpty}
          />
        </div>
      </div>

      <TipPercentage setTip={setTip} customtip={customtip} setCustomtip={setCustomtip} click={click} setClick={setClick}/>

      <div className="person-input" role="Number Of People Block">
        <label htmlFor="nNumber-of-people" className="font-style mb-2">
          Number of People
        </label>
        <div className="input bill-amount-input d-flex align-items-center">
          <img src="/images/icon-person.svg" alt="Icon Person" aria-label="Persom Icon" />
          <input
            id="nNumber-of-people"
            className="font-style pe-1"
            placeholder={person}
            onChange={(e) => setPerson(e.target.value)}
            type="number"
            name="Number Of People"
            aria-label="Number Of People"
            min="1"
            value={onePerson}
          />
        </div>
      </div>
    </>
  );
};

export default InputBlock;
