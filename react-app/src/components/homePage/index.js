
import React from 'react';
import Head from './head';
import Calculations from './calculation';

import './homepage.css'

const HomePage = () => {

  return (
    <div className='homePage'>

     <Head/>
    <Calculations/>

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
