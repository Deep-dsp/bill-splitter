import React from 'react'

const displayBlock = ({amount,tipAmount, person, customtip, click, reset, setRest}) => {

   let tip;

   if(customtip != 0 && click == 0){
      tip = parseFloat((amount*(customtip*0.01))/person).toFixed(2) < 0 ? 0 : parseFloat((amount*(customtip*0.01))/person).toFixed(2)
   }else if(customtip == '' && click == 0){
      tip = parseFloat(0).toFixed(2);
   }else{
      tip = parseFloat(tipAmount/person).toFixed(2) < 0 ? 0 : parseFloat(tipAmount/person).toFixed(2)
   }

   return (
      <div className='display-block d-flex flex-column justify-content-between'>
         <div>
            <div className='display-row d-flex justify-content-between align-items-center'>

               <div className='display-title-block'>
                  <p className='font-style mb-0'>
                     Tip Amount
                  </p>
                  <p className='font-style mb-0'>/ person</p>
               </div>

               <div className='price-block d-flex'>
                  <p className='font-style mb-0'>$</p>
                  <p className='font-style mb-0'>{tip}</p>
               </div>

            </div>


            <div className='display-row d-flex justify-content-between align-items-center'>

               <div className='display-title-block'>
                  <p className='font-style mb-0'>
                     Total
                  </p>
                  <p className='font-style mb-0'>/ person</p>
               </div>

               <div className='price-block d-flex'>
                  <p className='font-style mb-0'>$</p>
                  <p className='font-style mb-0'>{amount != '' ? parseFloat(amount/person).toFixed(2) : '0.00'}</p>
               </div>

            </div>

         </div>

         <div className='custom-btn d-flex justify-content-center align-items-center w-100'>
            <button name="Resset" aria-label="Reset" className='text-uppercase font-style w-100' onClick={()=>{reset(); setRest(1)}}>RESET</button>
         </div>

      </div>
   )
}

export default displayBlock
