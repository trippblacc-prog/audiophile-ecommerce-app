import React from 'react';
import { Link } from 'react-router-dom';
import './XX99MARKIIHEADPHONES.css';
import xx99Mark2 from '../assets/product-xx99-mark-two-headphones/desktop/image-product.jpg';
import Audioman from '../assets/product-xx99-mark-two-headphones/desktop/image-gallery-1.jpg';
import Swagaudio from '../assets/product-xx99-mark-two-headphones/desktop/image-gallery-2.jpg';
import X99img3 from '../assets/product-xx99-mark-two-headphones/desktop/image-gallery-3.jpg';
import X99markone1 from '../assets/shared/desktop/image-xx99-mark-one-headphones.jpg';
import XX95img0 from '../assets/shared/desktop/image-xx59-headphones.jpg';
import ZX9img0 from '../assets/shared/desktop/image-zx9-speaker.jpg';
import HeadphonesPreviewImg from '../assets/product-xx99-mark-one-headphones/desktop/image-category-page-preview.jpg';
import SpeakerPreviewImg from '../assets/home/desktop/image-speaker-zx9.png';
import EarphonePreviewImg from '../assets/product-yx1-earphones/desktop/image-category-page-preview.jpg';

function XX99MARKIIHEADPHONES() {
  return (
    <section className="xx99-page">
      <div>
        <Link to="/home">
          <p>Go Back</p>
        </Link>
      </div>

      <div className='xx99mark2-description'>
        <img src={xx99Mark2} alt="XX99 Mark II Headphones" />
        <div>
          <h1>NEW PRODUCT</h1>
          <h2>XX99 MARK II HEADPHONES</h2>
          <p>
            The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your
            premium headphone experience by reproducing the balanced depth and precision of
            studio-quality sound.
          </p>
          <p>$2,999</p>
            <button>1</button>
          <Link to="/">
            <button>ADD TO CART</button>
          </Link>
        </div>
      </div>

      <div className='xx99mark2-features'>
        <h1>FEATURES</h1>
        <p>
          Featuring a genuine leather head strap and premium earcups, these headphones deliver
          superior comfort for those who like to enjoy endless listening. It includes intuitive
          controls designed for any situation. Whether you’re taking a business call or just in
          your own personal space, the auto on/off and pause features ensure that you’ll never
          miss a beat.
        </p>
        <p>
          The advanced Active Noise Cancellation with built-in equalizer allow you to experience
          your audio world on your terms. It lets you enjoy your audio in peace, but quickly
          interact with your surroundings when you need to. Combined with Bluetooth 5.0 compliant
          connectivity and 17-hour battery life, the XX99 Mark II headphones gives you superior
          sound, cutting-edge technology, and a modern design aesthetic.
        </p>
        
        <h2>IN THE BOX</h2>
        <ul>
          <li><h4>1x</h4> Headphone Unit</li>
          <li><h4>2x</h4> Replacement Earbuds</li>
          <li><h4>1x</h4> User Manual</li>
          <li><h4>1x</h4> 3.5mm 5m Audio Cable</li>
          <li><h4>1x</h4> Travel Bag</li>
        </ul>
      </div>

      <div className='xx99mark2-gallery'>
        <div>
          <img src={Audioman} alt="Gallery 1" />
          <img src={Swagaudio} alt="Gallery 2" />
        </div>
          <img src={X99img3} alt="Gallery 3" />
      </div>

      <div>
        <h2>YOU MAY ALSO LIKE</h2>
        <div>
          <img src={X99markone1} alt="XX99 Mark I" />
          <h3>XX99 MARK I</h3>
          <Link to="/X99MARK1HEADPHONES">
          <button>SEE PRODUCT</button>
          </Link>
        </div>
        <div>
        <img src={XX95img0} alt="XX59" />
          <h3>XX59</h3>
          <Link to="/XX59HEADPHONES">
          <button>SEE PRODUCT</button>
          </Link>
        </div>
        <div>
          <img src={ZX9img0} alt="ZX9 Speaker" />
          <h3>ZX9 SPEAKER</h3>
          <Link to='/zx9speaker'>
          <button>SEE PRODUCT</button>
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

export default XX99MARKIIHEADPHONES;
