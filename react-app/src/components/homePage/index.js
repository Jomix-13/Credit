
import React from 'react';
import Head from './head';
import Calculations from './calculation';
import ContactUs from './contactus';

import './homepage.css'

const HomePage = () => {

  return (
    <div className='homePage'>

    <Head/>
    <Calculations/>
    <ContactUs/>

    </div>
  );
}

export default HomePage;
