import React from 'react';
import { useState,useEffect } from 'react';

import '../homepage.css'

const Income = (props) => {

    const [otherIncome, setOtherIncome] = useState(0);

    const {incomeCompValue,setIncomeCompValue} = props;
    
    useEffect(()=>{
        setOtherIncome(otherIncome);
        setIncomeCompValue([...incomeCompValue,otherIncome]);
    },[otherIncome])


    return (
        <div className='income-section'>
            <div className='sub-section-title'>
            Other Income
            </div>
            <div className='section-input'>
                <input
                    type='number'
                    placeholder='$'
                    value = {otherIncome}
                    onChange={
                        e=>setOtherIncome(e.target.value) 
                    }
                />
            </div>
        </div>
    );
}

export default Income;