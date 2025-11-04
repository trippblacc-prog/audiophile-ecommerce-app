import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';
import cartIcon from '../assets/carts.svg';

function Header() {
  return (
    <header className="header">
      <div id="header-box">
        <h2 className="logo">audiophile</h2>

        <nav>
          <ul>
            <li><Link to="/">HOME</Link></li>
            <li><Link to="/headphones">HEADPHONES</Link></li>
            <li><Link to="/speakers">SPEAKERS</Link></li>
            <li><Link to="/earphones">EARPHONES</Link></li>
          </ul>
        </nav>

        <div className="cart-image-container">
          <Link to='/'>
          <img src={cartIcon} alt="Cart icon" />
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
