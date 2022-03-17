import React from 'react';
import { useState,useEffect } from 'react';

import './homepage.css'

const Calculations = () => {
  
  
  const [income, setIncome] = useState(.001);
  const [debts, setDebts] = useState(0);
  const [expenses, setExpenses] = useState(0);
  const [grossIncome, setGrossIncome] = useState();
  const [otherIncome, setOtherIncome] = useState();

  const debtsRatio = (debts/income) * 100;

  const otherIncomeField = <input type='text' placeholder='$' value = {otherIncome} onChange={e=>setOtherIncome(e.target.value)}/>
  const grossIncomeField = <input type='text' placeholder='$' value = {grossIncome} onChange={e=>setGrossIncome(e.target.value)}/>
  const [otherIncomeList, setOtherIncomeList] = useState([otherIncomeField]);
  console.log("🚀 ~ file: calculation.js ~ line 19 ~ Calculations ~ otherIncomeList", otherIncomeList)
  const addOtherIncome = () => {
    setOtherIncomeList([...otherIncomeList, otherIncomeField]);
  }

  const allOtherIncome =() => {
    let total = 0
    for(let i = 0; i < otherIncomeList.length; i++){
      total += otherIncomeList[i].props.value
    }
    return total
  }

  // let fun = addOtherIncome()
  // console.log("🚀 ~ file: calculation.js ~ line 35 ~ Calculations ~ fun", fun)
  useEffect(()=>{
    setIncome(grossIncome);
  },[grossIncome,otherIncome])

  //-----------------------------------------------------
  const [balance, setBalance] = useState();
  const [monthlyPayment, setMonthlyPayment] = useState();
  const [internetRate, setInternetRate] = useState();
  const debtsTypes = ['','Mortgage', 'Rent', 'Credit Card', 'Car Loan', 'Student Loan', 'Personal Loan','Personal Line','Student Loan', 'HELOC' ,'Other'];
  const [debtsType, setDebtsType] = useState([debtsTypes[0]]);
  const debtsBalanceField = <input type='text' placeholder='Balance' value = {balance} onChange={e=>setBalance(e.target.value)}/>
  const monthlyPaymentField = <input type='text' placeholder='Monthly payment' value = {monthlyPayment} onChange={e=>setMonthlyPayment(e.target.value)}/>
  const internetRateField = <input type='text' placeholder='Interest Rate' value = {internetRate} onChange={e=>setInternetRate(e.target.value)}/>
  const debtsTypeField = <select value={debtsType} onChange={e=>setDebtsType(e.target.value)}>
    {debtsTypes.map((debtsType,index) => <option key={index} value={debtsType}>{debtsType}</option>)}
    </select>

  const [debtsList, setDebtsList] = useState([monthlyPaymentField]);
  const addDebts = () => {
    setDebtsList([...debtsList, monthlyPaymentField]);
  }

  const allDebts =() => {
    let total = 0
    for(let i = 0; i < debtsList.length; i++){
      total += debtsList[i].props.value
    }
    return total
  }

  useEffect(()=>{
    setDebts(allDebts());
  },[debtsList])

  //-----------------------------------------------------






  



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
              {grossIncomeField}
            </div>
          </div>
          <div className='income-section'>
            <div className='sub-section-title'>
              Other Income
            </div>
            <div className='section-input'>
                {otherIncomeList.map((item, index) => {
                  return (
                    <div key={index}>
                      {item}
                    </div>
                  )
                }
                )}
              <button onClick={addOtherIncome}>Add</button>
            </div>
          </div>
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
          <div className='debts-section'>
            <div className='sub-section-title'>
              Debt type
            </div>
            <div className='section-input'>
              {debtsTypeField}
            </div>
            <div className='section-input'>
              {debtsBalanceField}
            </div>
            <div className='section-input'>
              {monthlyPaymentField}
            </div>
            <div className='section-input'>
              {internetRateField}
            </div>
            <div className='section-button'>
              <button onClick={addDebts}>Add</button>
            </div>
          </div>
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
