
import React from 'react';
import { NavLink } from 'react-router-dom';
import LogoutButton from '../auth/LogoutButton';

import './navbar.css'

const NavBar = () => {
  return (
    <nav>
      <div className='navbar'>
        <div>
          <NavLink to='/' exact={true} activeClassName='active'>
            Home
          </NavLink>
        </div>
        <div>
          <NavLink to='/login' exact={true} activeClassName='active'>
            Log In
          </NavLink>
        </div>
        <div>
          <NavLink to='/table' exact={true} activeClassName='active'>
            Table
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
