
import React from 'react';

// import './navbar.css'

const HomePage = () => {

  return (
    <div className='homePage'>

      <div className='topPart'>
        <div className='linkSquare'>
          calculate your debt ratio
        </div>
        <div className='linkSquare'>
          Set a plan to be debt free
        </div>
        <div className='linkSquare'>
          About us
        </div>
      </div>


      <div className='MiddlePart'>
        <div className='income'>
          Gross Income
        </div>
        <div className='debts'>
          Debts
        </div>
        <div className='expenses'>
          Monthley Expenses
          <div className='expenses'>
            Mandatory
          </div>
          <div className='expenses'>
            For fun
          </div>
        </div>
      </div>

      <div className='calculations'>
        <div className='debtratio'>
          debt ratio
        </div>
        <div className='linkSquare'>
          Thinking
        </div>
      </div>

      <div className='contactus'>
        contact us
      </div>


    </div>
  );
}

export default HomePage;
