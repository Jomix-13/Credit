import React from 'react';
import { useState,useEffect } from 'react';

import '../homepage.css'

const Debts = (prps) => {

  const [balance, setBalance] = useState();
  const [monthlyPayment, setMonthlyPayment] = useState(0);
  const [internetRate, setInternetRate] = useState();
  const debtsTypes = ['','Mortgage', 'Rent', 'Credit Card', 'Car Loan', 'Student Loan', 'Personal Loan','Personal Line','Student Loan', 'HELOC' ,'Other'];
  const [debtsType, setDebtsType] = useState([debtsTypes[0]]);
  
  const {debtsCompValue,setDebtsCompValue} = prps;
  useEffect(()=>{
    setDebtsCompValue([...debtsCompValue,monthlyPayment])
  },[monthlyPayment])



    return (

      <div className='debts-section'>
        <div className='sub-section-title'>
          Debt type
        </div>
        <div className='section-input'>
          <select 
            value={debtsType} 
            onChange={e=>setDebtsType(e.target.value)}>
            {debtsTypes.map((debtsType,index) => <option key={index} value={debtsType}>{debtsType}</option>)}
          </select>
        </div>
        <div className='section-input'>
          <input 
            type='text' 
            placeholder='Balance' 
            value = {balance} 
            onChange={e=>setBalance(e.target.value)}
          />
        </div>
        <div className='section-input'>
          <input 
            type='text' 
            placeholder='Monthly payment' 
            value = {monthlyPayment} 
            onChange={e=>setMonthlyPayment(e.target.value)}
          />
        </div>
        <div className='section-input'>
          <input 
            type='text' 
            placeholder='Interest Rate' 
            value = {internetRate} 
            onChange={e=>setInternetRate(e.target.value)}
          />
        </div>
      </div>
    );
}

export default Debts;