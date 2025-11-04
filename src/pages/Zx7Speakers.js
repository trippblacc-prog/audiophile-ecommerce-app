import React from 'react';
import { Link } from 'react-router-dom';
import HeadphonesPreviewImg from '../assets/product-xx99-mark-one-headphones/desktop/image-category-page-preview.jpg';
import SpeakerPreviewImg from '../assets/home/desktop/image-speaker-zx9.png';
import EarphonePreviewImg from '../assets/product-yx1-earphones/desktop/image-category-page-preview.jpg';
import Zx7Img1 from '../assets/product-zx7-speaker/desktop/image-gallery-1.jpg';
import Zx7Img2 from  '../assets/product-zx7-speaker/desktop/image-gallery-2.jpg';
import Zx7Img3 from '../assets/product-zx7-speaker/desktop/image-gallery-3.jpg';
import Zx7Img0 from '../assets/product-zx7-speaker/desktop/image-product.jpg';
import ZX9img0 from '../assets/shared/desktop/image-zx9-speaker.jpg';
import Mark1 from '../assets/product-xx99-mark-one-headphones/desktop/image-product.jpg';
import XX59img0 from '../assets/product-xx59-headphones/desktop/image-product.jpg';

import './Zx7Speakers.css';





function Zx7Speakers () {
    return(
        <section className='zx7-page'>
            <h1>Zx7 speaker</h1>

            <div className="zx7-description">
                <img src={Zx7Img0} alt=""/>

                <div>
                    <h2>ZX7 SPEAKER</h2>
                    <p>
                    Stream high quality sound wirelessly with minimal to no loss.
                     The ZX7 speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use.
                    </p>
                    <p>$3,500</p>
                    <button>1</button>
                    <button>ADD TO CART</button>
                </div>
            </div>

            <div className="zx7-features">
                <div>
                    <h2>FEATURES</h2>
                    <p>
                    Reap the advantages of a flat diaphragm tweeter cone.
                     This provides a fast response rate and excellent high frequencies that lower tiered bookshelf speakers cannot provide.
                      The woofers are made from aluminum that produces a unique and clear sound. XLR inputs allow you to connect to a mixer for more advanced usage.
                      \n\nThe ZX7 speaker is the perfect blend of stylish design and high performance. It houses an encased MDF wooden enclosure which minimises acoustic resonance.
                     Dual connectivity allows pairing through bluetooth or traditional optical and RCA input. Switch input sources and control volume at your finger tips with the included wireless remote.
                     This versatile speaker is equipped to deliver an authentic listening experience.
                    </p>
                </div>

                <div>
                    <h2>IN THE BOX</h2>
                    <ul>
                    <li><h4>2x</h4> Speaker Unit</li>
                    <li><h4>2x</h4> Speaker Cloth Panel</li>
                    <li><h4>1x</h4> User Manual</li>
                    <li><h4>1x</h4> 3.5mm 7m Audio Cable</li>
                    <li><h4>1x</h4> 7m Optical Cable</li>
                    </ul>
                </div>
            </div>

            <div className="zx7-gallery">
                <div>
                    <img src={Zx7Img1} alt="ZX7 gallery 1" />
                    <img src={Zx7Img2} alt="ZX7 gallery 2" />
                </div>
                <img src={Zx7Img3} alt="ZX7 gallery 3" />
            </div>

            <div className="zx7-youMayLike">
                <h2>YOU MAY ALSO LIKE</h2>

                <div>
                <img src={ZX9img0} alt="ZX9 Speaker" />
                    <h3>ZX9 SPEAKER</h3>
                    <button>SEE PRODUCT</button>
                </div>

                <div>
                    <img src={Mark1} alt="XX99 Mark I" />
                    <h3>XX99 Mark I</h3>
                    <Link to="/X99MARK1HEADPHONES">
                    <button>SEE PRODUCT</button>
                    </Link>
                </div>

                <div>
                    <img src={XX59img0} alt="XX59 Headphones" />
                    <h3>XX59</h3>
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
    )
}

export default Zx7Speakers;