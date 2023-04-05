import React from 'react';
import logo from '../../assets/logo.png';
import './NavBar.css';

function NavBar() {
  return (
    <div className="NavBar">
      <a href="/">
        <img className="logo" src={logo} alt="Astronomy logo" />
      </a>
      <div className="navigation">
        <a
          className="navigation-link"
          href="https://static.nationalgeographic.fr/files/styles/image_3200/public/02-trappist-planets.adapt_.1900.1.jpg?w=1600&h=900"
        >
          CELESTIAL WONDERS
        </a>
        <a className="navigation-link" href="/">
          ABOUT US
        </a>
        <a className="navigation-link" href="/">
          CONTACT
        </a>
      </div>
    </div>
  );
}

export default NavBar;
