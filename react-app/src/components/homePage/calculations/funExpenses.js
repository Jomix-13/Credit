import React from 'react';
import { useState,useEffect } from 'react';

import '../homepage.css'

const FunExpenses = (prps) => {

    const [balance, setBalance] = useState(0);

    const {funExpenses,setFunExpenses} = prps;
    useEffect(()=>{
      setFunExpenses([...funExpenses,balance])
    },[balance])



    return (

      <div className='debts-section'>
        <div className='sub-section-title'>
          Expensess type
        </div>
        <select>
          <option value='resturants'>Resturants</option>
          <option value='outings'>Outings</option>
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

export default FunExpenses