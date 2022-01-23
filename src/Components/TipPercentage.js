import React from 'react'

const TipPercentage = ({setTip, customtip, setCustomtip, click, setClick, amount}) => {

   const tipAmount = [5,10,15,25,50];

   let value;
   if(click == 1){
      value = '';
   }

   return (
      <div className="tip-percentage-block" role="dialog">
         <div role="document">
            <p  className='select-tip-title font-style mb-2'>Select tip %</p>
         </div>
         <div className="row tip-percentage">
            {tipAmount.map((tip)=>(
               <div className="col-6 col-lg-4" role="document" key={tip}>
                 
                  <button className='mb-4 tip-block d-flex justify-content-center align-items-center border-0 w-100 font-style white' onClick={() => setTip(tip)}>
                  {/* <div className='mb-4 tip-block d-flex justify-content-center align-items-center'> */}
                     {/* <p className='font-style mb-0'></p> */}{tip}%
                  {/* </div> */}
                  </button>
               </div>
            ))}

            <div className='col-6 col-lg-4'>
               <div className='custom-tip-block'>
                  <label htmlFor="custom-tip-amount" className='font-style mb-2'>Custom Tip Amount</label>
                  <input id="custom-tip-amount" role="number" onChange={(e) => {setCustomtip(e.target.value); setClick(0);}} value={value} aria-valuemin={amount} aria-valuemax="100" className="font-style" placeholder="Custom" type="number" name="Custom Tip Amount" aria-label="Custom Tip Amount"/>
               </div>
            </div>

         </div>
      </div>
   )
}

export default TipPercentage
