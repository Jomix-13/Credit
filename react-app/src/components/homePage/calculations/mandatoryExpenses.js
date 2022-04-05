import React from 'react';
import { useState,useEffect } from 'react';

import '../homepage.css'

const MandatoryExpenses = (prps) => {

    const [balance, setBalance] = useState(0);

    const {mandatoryExpenses,setMandatoryExpenses} = prps;
    useEffect(()=>{
      setMandatoryExpenses([...mandatoryExpenses,balance])
    },[balance])



    return (

      <div className='debts-section'>
        <div className='sub-section-title'>
        Expensess type
        </div>
        <select>
          <option value='food'>Food</option>
          <option value='water & sewer'>Water & Sewer</option>
          <option value='electricity'>Electricity</option>
          <option value='gas'>gas</option>
          <option value='phone'>Phone</option>
          <option value='internet'>Internet</option>
          <option value='cable'>Cable</option>
          <option value='other'>Other</option>
        </select>
        <div className='section-input'>
          <input 
            type='text'
            placeholder='Monthly Avrage $'
            value = {balance}
            onChange={e=>setBalance(e.target.value)}
            />
        </div>
      </div>

    );
}

export default MandatoryExpenses