
import React from 'react';
import Head from './head';
import Calculations from './calculation';
import Contacts from './contacts';

import './homepage.css'

const HomePage = () => {

  return (
    <div className='homePage'>
      <Head/>
      <Calculations/>
      <Contacts/>
    </div>
  );
}

export default HomePage;
