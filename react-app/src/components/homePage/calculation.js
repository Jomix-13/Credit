import React from 'react';
import { useState,useEffect } from 'react';

import Income from './calculations/Income';
import Debts from './calculations/debts';
import MandatoryExpenses from './calculations/mandatoryExpenses';
import FunExpenses from './calculations/funExpenses';

import './homepage.css'

const Calculations = () => {
  
  // Income Section
  const [income, setIncome] = useState(0);
  const [grossIncome, setGrossIncome] = useState();

  const [incomeCompValue, setIncomeCompValue] = useState([]);
  const [tempOtherIncome,setTempOtherIncome] = useState([]);


  const addOtherIncome = () => {
    setTempOtherIncome([...tempOtherIncome,<Income incomeCompValue={incomeCompValue} setIncomeCompValue={setIncomeCompValue}/>])
  }
  let sumOtherIncome = () => {
    let sum = 0;
    incomeCompValue.reduce((acc,curr)=>{
      sum += parseInt(curr);
      return sum;
    },0)
    return sum + parseInt(grossIncome);
  }
    
  useEffect(()=>{
      setIncome(sumOtherIncome())
  },[grossIncome,incomeCompValue])

    //-----------------------------------------------------

  // Debts Section
  
  const [debts, setDebts] = useState(0);
  const [tempDebts,setTempDebts] = useState([]);
  const [debtsCompValue, setDebtsCompValue] = useState([]);

  const addDebts = () => {
    setTempDebts([...tempDebts,<Debts debtsCompValue={debtsCompValue} setDebtsCompValue={setDebtsCompValue}/>])
  }

  let sumDebts = () => {
    let sum = 0;
    debtsCompValue.reduce((acc,curr)=>{
      sum += parseInt(curr);
      return sum;
    },0)
    return sum;
  }
  useEffect(()=>{
    setDebts(sumDebts())
  },[debtsCompValue])

  const debtsRatio = ((debts/income) * 100).toFixed(2);
    
  //-----------------------------------------------------

  // Expenses Section


  // Mandatory Expenses Section
  const [expenses, setExpenses] = useState(0)

  const [tempMandatoryExpenses,setTempMandatoryExpenses] = useState([]);
  const [mandatoryExpenses, setMandatoryExpenses] = useState([]);

  const addMandatoryExpense = () => {
    setTempMandatoryExpenses([...tempMandatoryExpenses,<MandatoryExpenses mandatoryExpenses={mandatoryExpenses} setMandatoryExpenses={setMandatoryExpenses}/>])
  }

  let sumMandatoryExpenses = () => {
    let sum = 0;
    mandatoryExpenses.reduce((acc,curr)=>{
      sum += parseInt(curr);
      return sum;
    },0)
    return sum;
  }

  // Fun Expenses Section
  const [tempFunExpenses,setTempFunExpenses] = useState([]);
  const [funExpenses, setFunExpenses] = useState([]);

  const addFunExpense = () => {
    setTempFunExpenses([...tempFunExpenses,<FunExpenses funExpenses={funExpenses} setFunExpenses={setFunExpenses}/>])
  }

  let sumFunExpenses = () => {
    let sum = 0;
    funExpenses.reduce((acc,curr)=>{
      sum += parseInt(curr);
      return sum;
    },0)
    return sum;
  }

  console.log('Mandatory Expenses',mandatoryExpenses,sumMandatoryExpenses())
  console.log('Fun Expenses',funExpenses,sumFunExpenses())
  useEffect(()=>{
    setExpenses(sumMandatoryExpenses() + sumFunExpenses())
  },[mandatoryExpenses,sumFunExpenses])







  return (

      <div className='MiddlePart'>
        <div className='each-section'>
          <div className='top-section-title'>

            <div className='section-title'>
              Income Section
            </div>
            <div className='side-section-title'>
              Total Income
              <div className='section-title-value'>
                {income === undefined ? '$0.00' : '$' + income}
              </div>
            </div>
          </div>
          <div className='income-section'>
            <div className='sub-section-title'>
              Gross Income
            </div>
            <div className='income-input'>
            <input
                    type='number'
                    placeholder='$'
                    value = {grossIncome}
                    onChange={e=>setGrossIncome(e.target.value)}
                />
            </div>
          </div>
          {tempOtherIncome}
          <button onClick={addOtherIncome}>Add</button>
        </div>


        <div className='each-section'>
          <div className='top-section-title'>
            <div className='section-title'>
              Debts
            </div>
            <div className='side-section-title'>
              Total Debts
              <div className='section-title-value'>
                {debts === undefined ? '$0.00' : '$' + debts}
              </div>
            </div>
          </div>
          {tempDebts}
          <button onClick={addDebts}>Add</button>
        </div>


        <div className='each-section'>
          <div className='top-section-title'>
            <div className='section-title'>
            Monthley Expenses
            </div>
            <div className='side-section-title'>
              Total Monthley Expenses
              <div className='section-title-value'>
                {expenses === undefined ? '$0.00' : '$' + expenses}
              </div>
            </div>
          </div>
          <div className='section-title'>
          </div>
          <div className='each-section'>
            <div className='sub-section-title'>
              Mandatory Expenses
            </div>
            {tempMandatoryExpenses}
          </div>
            <div className='debts-button'>
              <button onClick={addMandatoryExpense}>Add</button>
            </div>

          <div className='each-section'>
            <div className='sub-section-title'>
              Fun Expenses
            </div>
            {tempFunExpenses}
            <div className='section-button'>
              <button onClick={addFunExpense}>Add</button>
            </div>
          </div>
        </div>
        
        <div className='each-section'>
        <div className='section-title'>
          Debt ratio
        </div>
        <div className='sub-section-title'>
          {debtsRatio}%
        </div>
        <div className='debts-section'>
          Notes:
          <div>
            1
            2
            3
          </div>
        </div>
      </div>
      </div>

  );
}

export default Calculations;