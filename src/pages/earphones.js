import React from 'react';
import './earphones.css'
import { Link } from 'react-router-dom';
import YX1Wireless from '../assets/product-yx1-earphones/desktop/image-product.jpg'
import HeadphonesPreviewImg from '../assets/product-xx99-mark-one-headphones/desktop/image-category-page-preview.jpg';
import SpeakerPreviewImg from '../assets/home/desktop/image-speaker-zx9.png';
import EarphonePreviewImg from '../assets/product-yx1-earphones/desktop/image-category-page-preview.jpg';

function Earphones() {
  return (
    <section className='earphones-main'>
      <div className='earphones-header'>
        <h2>EARPHONES</h2>
      </div>
      <div className='yx1-wireless-div'>
        <img src={YX1Wireless} />
        <div className='yx1-wireless-content'>
          <h1>NEW PRODUCT</h1>
          <h2>YX1 WIRELESS HEADPHONES</h2>
          <p>Tailor your listening experience with bespoke dynamic drivers from the new
            YX1 Wireless Earphones. Enjoy incredible high fidelity sound even in noisy environments with its
            active noise cancelation feature.
          </p>
          <Link to='/YX1wireless'>
          <button>
            SEE PRODUCT
          </button>
          </Link>
        </div>
      </div>

      <div className="category-container">
        <div className="category-card">
          <img src={HeadphonesPreviewImg} alt="Headphones preview" />
          <h3>HEADPHONES</h3>
          <Link to='/X99MARK1HEADPHONES'>
            <p>SHOP</p>
            </Link>
        </div>

        <div className="category-card">
          <img src={SpeakerPreviewImg} alt="Speaker preview" />
          <h3>SPEAKERS</h3>
          <Link to='/zx9speaker'>
            <p>SHOP</p>
            </Link>
        </div>

        <div className="category-card">
          <img src={EarphonePreviewImg} alt="Earphones preview" />
          <h3>EARPHONES</h3>
            <Link to='/YX1wireless'>
            <p>SHOP</p>
            </Link>
        </div>
      </div>
    </section>
  );
}

export default Earphones;
