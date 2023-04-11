import React from 'react';
import './Footer.scss';
import { FaFacebook, FaInstagramSquare, FaTwitter } from 'react-icons/fa';

function Footer() {
  return (
    <div className="Footer">
      <div className="footer-columns-container">
        <div className="footer-column footer-column-address">
          <h4>Earth adress</h4>
          <span>
            Earth, the Solar System, Oort Cloud, Local Fluff, Local Bubble,
            Orion Arm, Milky Way Galaxy, Local Group, Virgo Supercluster,
            Laniakea Supercluster, Universe.
          </span>
        </div>
        <div className="footer-column footer-column-contact">
          <h4>Contact</h4>
          <span>hello@earthlings.com</span>
        </div>
        <div className="footer-column footer-column-social">
          <h4>Socials</h4>
          <div className="social-links">
            <a>
              <FaFacebook />
            </a>
            <a>
              <FaInstagramSquare />
            </a>
            <a>
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>
      <p>Univers is pure bliss when you know where to look</p>
    </div>
  );
}

export default Footer;
