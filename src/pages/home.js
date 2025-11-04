import React from 'react';
import { Link } from 'react-router-dom';
import './home.css';
import YX1img from '../assets/home/desktop/image-earphones-yx1.jpg'
import ZX7img from '../assets/home/desktop/image-speaker-zx7.jpg'
import ZX9Img from '../assets/home/desktop/image-removebg-preview.png'
import HeadphonesPreviewImg from '../assets/product-xx99-mark-one-headphones/desktop/image-category-page-preview.jpg';
import SpeakerPreviewImg from '../assets/home/desktop/image-speaker-zx9.png';
import EarphonePreviewImg from '../assets/product-yx1-earphones/desktop/image-category-page-preview.jpg';

function Home() {
  return (
    <section className="home">
      <div className="black-cover">
        {/* HERO SECTION */}
          <div className="hero-container">
            <div className="hero-content">
              <h4>NEW PRODUCT</h4>
              <h1>XX99 MARK II HEADPHONES</h1>
              <p>
                Experience natural, lifelike audio and exceptional build quality,
                made for the passionate music enthusiast.
              </p>
              <Link to='/XX99MARKIIHEADPHONES'>
                <button className="see-product-btn">SEE PRODUCT</button>
              </Link>
            </div>
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

      
      <div className='zx9-speaker'>
        <img src={ZX9Img} alt="ZX9 speaker image" />
        <div className='zx9-speaker-content'>
        <h1>ZX9 SPEAKER</h1>
        <p>Upgrade to premium speakers that are phenominally built to deliver true remarkable sound</p>
        <Link to='/zx9speaker'>
        <button>SEE PRODUCT</button>
        </Link>

        </div>
      </div>

      <div className='zx7-speaker'>
        <div className='zx7-speaker-content'>
        <h1>ZX7 SPEAKER</h1>
        </div>
        <Link to='/zx7Speakers'>
        <button>SEE PRODUCT</button>
        </Link>
      </div>

      <div className="yx1-earphones">
        <img src={YX1img}/>
        <div className='yx1-earphones-content'>
          <h1>YXI EARPHONES</h1>
          <Link to='/YX1wireless'>
          <button>SEE PRODUCT</button>
          </Link>
        </div>
      </div>

    </section>
  );
}

export default Home;
