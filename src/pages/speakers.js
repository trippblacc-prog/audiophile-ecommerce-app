import React from 'react';
import './speakers.css'
import { Link } from 'react-router-dom';
import ZX9Speaker from '../assets/product-zx9-speaker/desktop/image-product.jpg'
import ZX7Speaker from '../assets/product-zx7-speaker/desktop/image-product.jpg'
import HeadphonesPreviewImg from '../assets/product-xx99-mark-one-headphones/desktop/image-category-page-preview.jpg';
import SpeakerPreviewImg from '../assets/home/desktop/image-speaker-zx9.png';
import EarphonePreviewImg from '../assets/product-yx1-earphones/desktop/image-category-page-preview.jpg';

function Speakers() {
  return (
    <section className='speakers-main'>
      <div className='speakers-header'>
        <h2>SPEAKERS</h2>
      </div>

      <div className='zs9-speaker1'>
        <img src={ZX9Speaker} />
        <div className='zs9-speaker1-content'>
          <h1>NEW PRODUCT</h1>
          <h2>ZX9 SPEAKER</h2>
          <p>Upgrade your sound system with the all new ZX9 Active Speaker, its a bookshelf
            speaker system that offers truly wireless connectivity - creating new possibilites for
            more pleasing and practical audio setups.
          </p>
          <Link to='/zx9speaker'>
          <button>
            SEE PRODUCT
          </button>
          </Link>
        </div>
      </div>

        <div className='zx7-speaker1'>
          <div className='zx7-speaker1-content'>
            <h2>ZX7 SPEAKER</h2>
            <p>Stream high quality sounds wirelessly with minimal loss.
              The ZX7 bookshelf speaker uses high end audiophile components
              that represents the top of the line powered speakers fro home or studio use.
            </p>
            <Link to="/Zx7Speakers">
            <button>
              SEE PRODUCT
            </button>
            </Link>
          </div>
          <img src={ZX7Speaker} />
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
          <Link to='/'>
            <p>SHOP</p>
            </Link>
        </div>

        <div className="category-card">
          <img src={EarphonePreviewImg} alt="Earphones preview" />
          <h3>EARPHONES</h3>
            <Link to='/'>
            <p>SHOP</p>
            </Link>
        </div>
      </div>

      
    </section>
  );
}

export default Speakers;
