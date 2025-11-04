import React from 'react';
import { Link } from 'react-router-dom';
import './X99MARK1HEADPHONES.css';
import X99markone1 from '../assets/shared/desktop/image-xx99-mark-one-headphones.jpg';
import XX95img0 from '../assets/shared/desktop/image-xx59-headphones.jpg';
import ZX9img0 from '../assets/shared/desktop/image-zx9-speaker.jpg';
import HeadphonesPreviewImg from '../assets/product-xx99-mark-one-headphones/desktop/image-category-page-preview.jpg';
import SpeakerPreviewImg from '../assets/home/desktop/image-speaker-zx9.png';
import EarphonePreviewImg from '../assets/product-yx1-earphones/desktop/image-category-page-preview.jpg';
import Mark1img0 from '../assets/product-xx99-mark-one-headphones/desktop/image-gallery-1.jpg';
import Mark1img1 from '../assets/product-xx99-mark-one-headphones/desktop/image-gallery-2.jpg';
import Mark1img2 from '../assets/product-xx99-mark-one-headphones/desktop/image-gallery-3.jpg';

function X99MARK1HEADPHONES() {
  return (
    <section className="x99mark1-page">

      <div>
        <Link to="/home">
          <p>Go Back</p>
        </Link>
      </div>

      <div className='x99mark1-description'>
        <img src={X99markone1} alt="XX99 Mark I Headphones" />
    
        <div>
          <h1>NEW PRODUCT</h1>
          <h2>XX99 MARK I HEADPHONES</h2>
          <p>
            As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles,
             mixing engineers, and music aficionados alike in studios and on the go.
          </p>

          <p>$1,1750</p>

          <button>1</button>
            <Link to="/">
              <button>ADD TO CART</button>
            </Link>
          </div>
      </div>

      <div className='x99mark1-features'>
        <h1>FEATURES</h1>
        <p>
        As the headphones all others are measured against, the XX99 Mark I demonstrates over five decades of audio expertise, redefining the critical listening experience.
         This pair of closed-back headphones are made of industrial, aerospace-grade materials to emphasize durability at a relatively light weight of 11 oz.\n\nFrom the handcrafted microfiber ear cushions to the robust metal headband with inner damping element, the components work together to deliver comfort and uncompromising sound. Its closed-back design delivers up to 27 dB of passive noise cancellation, reducing resonance by reflecting sound to a dedicated absorber.
         For connectivity, a specially tuned cable is includes with a balanced gold connector.
        </p>
        <p>
                    
        </p>

        <h2>IN THE BOX</h2>
        <ul>

          <li><h4>1x</h4>Headphone unit</li>
          <li><h4>2x</h4>Replacement earcups</li>
          <li><h4>1x</h4>User manual</li>
          <li><h4>1x</h4>3.5mm 5m audio cable</li>
                    
        </ul>
      </div>

      <div className='x99mark1-gallery'>
        <div>
          <img src={Mark1img0} alt="Gallery 1" />
          <img src={Mark1img1} alt="Gallery 2" />
        </div>
          <img src={Mark1img2} alt="Gallery 3" />
      </div>
       
      <div className='x99mark1-youMayLike'>
        <h2>YOU MAY ALSO LIKE</h2>
        <div>
          <img src={X99markone1} alt="XX99 Mark I" />
          <h3>XX99 MARK I</h3>
          <button>SEE PRODUCT</button>
        </div>
        <div>
          <img src={XX95img0} alt="XX59" />
          <h3>XX59</h3>
          <button>SEE PRODUCT</button>
        </div>
        <div>
          <img src={ZX9img0} alt="ZX9 Speaker" />
          <h3>ZX9 SPEAKER</h3>
          <button>SEE PRODUCT</button>
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

export default X99MARK1HEADPHONES;