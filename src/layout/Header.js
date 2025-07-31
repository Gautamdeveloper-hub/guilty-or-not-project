import {  } from 'framer-motion/client';
import React from 'react';
import { Link } from 'react-router-dom';
 function Header(){
    return(
      <  div className="header">

         <Link to="/" className="logo">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '8px' }}>
            <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
           
          </svg>
         GUILTYNOT!?
        </Link>

<nav className="link-En">

    <Link to="/"> EN</Link>
</nav>
      </div>

    );
 }
 export default Header;