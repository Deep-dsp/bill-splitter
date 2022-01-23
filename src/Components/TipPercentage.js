import React from 'react'

const TipPercentage = ({setTip, customtip, setCustomtip, click, setClick}) => {

   const tipAmount = [5,10,15,25,50];

   let value;
   if(click == 1){
      value = '';
   }

   return (
      <div className="tip-percentage-block">
         <p  className='select-tip-title font-style mb-2'>Select tip %</p>
         <div className="row tip-percentage">
            {tipAmount.map((tip)=>(
               <div className="col-6 col-lg-4" key={tip}>
                 
                  <button className='mb-4 tip-block d-flex justify-content-center align-items-center border-0 w-100' onClick={() => setTip(tip)}>
                  {/* <div className='mb-4 tip-block d-flex justify-content-center align-items-center'> */}
                     <p className='font-style mb-0'>{tip}%</p>
                  {/* </div> */}
                  </button>
               </div>
            ))}

            <div className='col-6 col-lg-4'>
               <div className='custom-tip-block'>
                  <label htmlFor="Custom Tip Amount" className='font-style mb-2'>Custom Tip Amount</label>
                  <input onChange={(e) => {setCustomtip(e.target.value); setClick(0);}} value={value} className="font-style" placeholder="Custom" type="number" name="Custom Tip Amount" aria-label="Custom Tip Amount"/>
               </div>
            </div>

         </div>
      </div>
   )
}

export default TipPercentage
