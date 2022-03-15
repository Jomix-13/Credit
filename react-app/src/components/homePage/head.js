
import React from 'react';

import './homepage.css'

const Head = () => {

  return (
      <div className='head'>
        <div className='flip-card'>
          <div className='flip-card-inner'>
            <div className='flip-card-front'>
              <h1>calculate your debt ratio</h1>
            </div>
            <div className='flip-card-back'>
              <img src="logo.jpg" alt="profilePic" className= 'img'/>
                <p>Debt ratio is how much you owe out of your gross income.</p>
                <p>Debt ratio is a percentage of your gross income.</p>
                <p>Debt ratio max is 40%.</p>
                <p>Debt ratio affects your credit score.</p>
            </div>
          </div>
        </div>
        <div className='flip-card'>
          <div className='flip-card-inner'>
            <div className='flip-card-front'>
              <h1>Set a plan to be debt free</h1>
            </div>
            <div className='flip-card-back'>
              <img src="debt-free.jpg" alt="profilePic" className= 'img'/>
                <p>Together we can make sure you are debt free.</p>
                <p>We will help you set a plan to be debt free.</p>
                <p>Step one create anaccount and log in.</p>
            </div>
          </div>  
        </div>
        <div className='flip-card'>
          <div className='flip-card-inner'>
            <div className='flip-card-front'>
              <h1>About us</h1>
            </div>
            <div className='flip-card-back'>
              <img src="prof.jpg" alt="profilePic" className= 'img'/>
              <p>My name is John Wanis</p>
              <p>I have a bachelor's degree in Accounting abd Finance.</p>
              <p>I am a former Licesenced personal banker.</p>
              <p>I am a software developer.</p>
            </div>
          </div>  
        </div>
      </div>
  );
}

export default Head;
