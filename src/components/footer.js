import React from 'react';
import { Link } from 'react-router-dom';
import './footer.css'
import FacebookLogo from '../assets/shared/desktop/icon-facebook.svg'
import XimageLogo from '../assets/shared/desktop/icon-twitter.svg'
import IGlogo from '../assets/shared/desktop/icon-instagram.svg'

function Footer() {
  return (
    <footer className="footer">
      <div id="footer-box1">
        <h2>audiophile</h2>
        <p>Audiophile is an all in one stop to fulfil your audio needs. 
          We're a small team of music lovers and sound specialists who are devoted
           to helping you get the most out personal audio.
            Come and visit our demo facility, we're open 7 days a week. 
        </p>
        <p>Copyrights 2025. All Rights Reserved</p>
      </div>
      <div id='footer-box2'>
        <nav>
            <ul>
                
                  <li><Link to="/">HOME</Link></li>
                
                
                  <li><Link to="/headpones">HEADPHONES</Link></li>
                
                
                  <li><Link to="/speakers">SPEAKERS</Link>></li>
                
                
                  <li><Link to="/earphones">EARPHONES</Link></li>
                
            </ul>
        </nav>
        <div className='social-links'> 
          <img src={FacebookLogo} />
          <img src={XimageLogo} />
          <img src={IGlogo} />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
