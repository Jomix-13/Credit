import React from 'react';


const IncomeForm = () => {

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
                            ${income.toFixed(2)}
                        </div>
                    </div>
                </div>
                <div className='income-section'>
                    <div className='sub-section-title'>
                        Gross Income
                    </div>
                    <div className='income-input'>
                        <input type='text' placeholder='$'/>
                    </div>
                </div>
                <div className='income-section'>
                    <div className='sub-section-title'>
                        Other Income
                    </div>
                    <div className='section-input'>
                        <input type='text' placeholder='$'/>
                        <button>Add</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default IncomeForm;
