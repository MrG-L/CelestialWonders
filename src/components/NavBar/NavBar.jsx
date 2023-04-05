import React from 'react';
import logo from '../../assets/logo.png';
import './NavBar.css';

function NavBar() {
  return (
    <div className="NavBar">
      <a href="/">
        <img className="logo" src={logo} alt="Astronomy logo" />
      </a>
    </div>
  );
}

export default NavBar;
