
import React from 'react';

// import './navbar.css'

const Contacts = () => {

  return (
    <div className='homePage'>
      <div className='calculations'>
        <div className='debtratio'>
          Debt to Income ratio facts (DTI)
        </div>
      </div>
      <div className='contacts'>
        <div class="contact">
          <div>
            <h3>Email</h3>
            <a href="mailto:john.wanis@yahoo.com">john.wanis@yahoo.com</a>
          </div>
          <div>
            <h3>Phone</h3>
            <span><a href="tel:5038422882">(503)841-2882</a></span>
          </div>
          <div>
            <h3>Social</h3>
            <div class="icons">
              <div>
                <a href="https://github.com/Jomix-13" target="_blank" rel="noreferrer" class="fab fa-github">
                  <span class="label">GitHub
                  </span>
                </a>
              </div>
              <div>
                <a href="https://www.linkedin.com/in/john-wanis-764957138/" target="_blank" rel="noreferrer" class="fab fa-linkedin">
                  <span class="label">LinkedIn
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contacts;
