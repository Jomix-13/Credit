import React from 'react';
import { useState,useEffect } from 'react';

import Income from './calculations/Income';
import Debts from './calculations/debts';

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
  //-----------------------------------------------------//
  const [expenses, setExpenses] = useState(0);




  return (

      <div className='MiddlePart'>
        <div className='each-section'>
          <div className='top-section-title'>
            <div className='section-title'>
              Income
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
                ${expenses.toFixed(2)}
              </div>
            </div>
          </div>
          <div className='section-title'>
          </div>
          <div className='each-section'>
            <div className='sub-section-title'>
              Mandatory
            </div>
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
              <input type='text' placeholder='Monthly Avrage $'/>
            </div>
            <div className='debts-button'>
              <button>Add</button>
            </div>
          </div>
          </div>

          <div className='each-section'>
            <div className='sub-section-title'>
              For fun
            </div>
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
              <input type='text' placeholder='Monthly Avrage $'/>
            </div>
            <div className='section-button'>
              <button>Add</button>
            </div>
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