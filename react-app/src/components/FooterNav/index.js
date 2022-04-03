import React from 'react';

import './FooterNav.css'

const FooterNav = () => {
  return (
    <div className='footer-container'>
      <div className='footer-name'>Created By John Wanis</div>
      <div className='footer-info-container'>
        <a href='john.wanis@yahoo.com'>
          <i className="far fa-envelope" />
        </a>
        <a href="https://www.linkedin.com/in/john-wanis-764957138/" target="_blank" rel="noreferrer">
          <i className="fab fa-linkedin" />
        </a>
        <a href="https://github.com/Jomix-13" target="_blank" rel="noreferrer">
          <i className="fab fa-github" />
        </a>
      </div>
    </div>
  );
}

export default FooterNav;
