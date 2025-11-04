import React from 'react';
import './bottombanner.css';
import ManImg from '../assets/man.png'

function BottomBanner() {
  return (
    <section className="bottom-banner">
      <div className="bottom-banner-content">
        <h2>BRINGING YOU THE BEST AUDIO GEAR</h2>
        <p>
          Located at the heart of new York City, Audiophile is the premier store for high end earphones, headphones, speakers and audio accecories. 
          We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products.
          Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.
        </p>
      </div>
      <img src={ManImg}/>
    </section>
  );
}

export default BottomBanner;
