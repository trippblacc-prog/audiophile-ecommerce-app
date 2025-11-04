import React from 'react';
import './headphones.css';
import { Link } from 'react-router-dom';
import Mark2Headphones from '../assets/shared/desktop/image-xx99-mark-two-headphones.jpg'
import Mark1Headphones from '../assets/shared/desktop/image-xx99-mark-one-headphones.jpg'
import XX55Headphones from '../assets/shared/desktop/image-xx59-headphones.jpg'
import HeadphonesPreviewImg from '../assets/product-xx99-mark-one-headphones/desktop/image-category-page-preview.jpg';
import SpeakerPreviewImg from '../assets/home/desktop/image-speaker-zx9.png';
import EarphonePreviewImg from '../assets/product-yx1-earphones/desktop/image-category-page-preview.jpg';

function Headphones() {
  return (
    <section className='headphones-main'>  

      <div className='headphones-header'>
        <h2>HEADPHONES</h2>
      </div>

      <div className='Mark2-headphones'>  
        <img src={Mark2Headphones} />
        <div className='Mark2-headphones-content'>
          <h1>NEW PRODUCT</h1>
          <h2>XX99 MARK II HEADPHONES</h2>
          <p>The new Mark II headphones is the pinnacle of pristine audio,
            it redefines your premium headphone experience by reproducing the 
            balanced depth and precision of studio quality sound
          </p>
          <Link to='/XX99MARKIIHEADPHONES'>
          <button>
            SEE PRODUCT
          </button>
          </Link>
        </div>
      </div>

      <div className='Mark1-headphones'>
        <div className='Mark1-headphones-content'>
          <h2>XX99 MARK I HEADPHONES</h2>
          <p>As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate
              audio production for audiophiles, mixing engineers, music aficionados alike in studios and 
              on the go.
          </p>
          <Link to='/X99MARK1HEADPHONES' >
           <button>SEE PRODUCT</button>
          </Link>
        </div>
          <img src={Mark1Headphones} />
      </div>

      <div className='XX59-headphones'>
        <img src={XX55Headphones} />
        <div className='xx59-headphones-content'>
          <h2>XX59 HEADPHONES</h2>
          <p>
            Enjoy your audio almost anywhere and customize it to specific tastes with the XX59 headphones.
            The stylish yet durable versatile wirless headset is a brilliant companion at home offerson the move.
          </p>
          <Link to='/XX59HEADPHONES'>
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

export default Headphones;
