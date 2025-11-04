import React from "react";
import { Link } from "react-router-dom";
import HeadphonesPreviewImg from '../assets/product-xx99-mark-one-headphones/desktop/image-category-page-preview.jpg';
import SpeakerPreviewImg from '../assets/home/desktop/image-speaker-zx9.png';
import EarphonePreviewImg from '../assets/product-yx1-earphones/desktop/image-category-page-preview.jpg';
import Mark1 from '../assets/product-xx99-mark-one-headphones/desktop/image-product.jpg';
import ZX9img0 from '../assets/shared/desktop/image-zx9-speaker.jpg';
import XX59img0 from '../assets/product-xx59-headphones/desktop/image-product.jpg';
import YX1img0 from '../assets/product-yx1-earphones/desktop/image-product.jpg';
import YX1img1 from '../assets/product-yx1-earphones/desktop/image-gallery-1.jpg';
import YX1img2 from '../assets/product-yx1-earphones/desktop/image-gallery-2.jpg';
import YX1img3 from '../assets/product-yx1-earphones/desktop/image-gallery-3.jpg';
import './YX1wireless.css';




function YX1wireless () {
    return(
        <section className="yx1-page">
            <h1>YX1 wireless</h1>

            <div className="yx1-description">
                <img src={YX1img0} alt="YX1 wireless Headphone"/>

                <div>
                    <h2>YX1 WIRELESS EARPHONES</h2>
                    <p>
                    Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones.
                     Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.
                    </p>
                    <p>$599</p>
                    <button>1</button>
                    <button className="btn-addToCart">ADD TO CART</button>
                </div>
            </div>

            <div className="yx1-features">
                <div>
                    <h2>FEATURES</h2>
                    <p>
                    Experience unrivalled stereo sound thanks to innovative acoustic technology. With improved ergonomics designed for full day wearing, these revolutionary earphones have been finely crafted to provide you with the perfect fit, 
                    delivering complete comfort all day long while enjoying exceptional noise isolation and truly immersive sound.
                    \n\nThe YX1 Wireless Earphones features customizable controls for volume, music, calls, and voice assistants built into both earbuds. 
                    The new 7-hour battery life can be extended up to 28 hours with the charging case, giving you uninterrupted play time. 
                    Exquisite craftsmanship with a splash resistant design now available in an all new white and grey color scheme as well as the popular classic black.
                    </p>
                </div>

                <div>
                    <h2>IN THE BOX</h2>
                    <ul>
                    <li><h4>2x</h4> Earphone Unit</li>
                    <li><h4>6x</h4> Multi Size Earplugs</li>
                    <li><h4>1x</h4> User Manual</li>
                    <li><h4>1x</h4> USB-C Charging Cable</li>
                    <li><h4>1x</h4> Travel Pouch</li>
                    </ul>
                </div>
            </div>

            <div className="yx1-gallery">
                <div>
                    <img src={YX1img1} alt="YX1 gallery 1" />
                    <img src={YX1img2} alt="YX1 gallery 2" />
                </div>
                <img src={YX1img3} alt="YX1 gallery 3" />
            </div>

            <div className="yx1-youMayLike">
                <h2>YOU MAY ALSO LIKE</h2>

                <div>
                <img src={Mark1} alt="XX99 Mark I" />
                    <h3>XX99 Mark I</h3>
                    <Link to='/X99MARK1HEADPHONES'>
                    <button>SEE PRODUCT</button>
                    </Link>
                </div>

                <div>
                    <img src={XX59img0} alt="XX59 Headphones" />
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
    )
}

export default YX1wireless;