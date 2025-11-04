import react from 'react';
import { Link } from 'react-router-dom';
import Zx9Img0 from '../assets/product-zx9-speaker/desktop/image-product.jpg';
import Zx9Img1 from "../assets/product-zx9-speaker/desktop/image-gallery-1.jpg";
import Zx9Img2 from '../assets/product-zx9-speaker/desktop/image-gallery-2.jpg';
import Zx9Img3 from '../assets/product-zx9-speaker/desktop/image-gallery-3.jpg';
import Zx7Img1 from '../assets/product-zx7-speaker/desktop/image-product.jpg';
import Mark1 from '../assets/product-xx99-mark-one-headphones/desktop/image-product.jpg';
import XX59Img from '../assets/product-xx59-headphones/desktop/image-product.jpg';
import HeadphonesPreviewImg from '../assets/product-xx99-mark-one-headphones/desktop/image-category-page-preview.jpg';
import SpeakerPreviewImg from '../assets/home/desktop/image-speaker-zx9.png';
import EarphonePreviewImg from '../assets/product-yx1-earphones/desktop/image-category-page-preview.jpg';

import './zx9speaker.css'


function zx9speaker () {
    return(
        <section className='zx9-page'>
            <h1>zx9 speaker</h1>
            
            <div className="zx9-description">
                <img src={Zx9Img0} alt="Zx9 Speaker"/>

                <div>
                    <h1>NEW PRODUCT</h1>
                    <h2>ZX9 SPEAKER</h2>
                    <p>
                    Upgrade your sound system with the all new ZX9 active speaker.
                    It’s a bookshelf speaker system that offers truly wireless connectivity
                    -- creating new possibilities for more pleasing and practical audio setups.
                    </p>
                    <p>$4,500</p>
                    <button>1</button>
                    <button>ADD TO CART</button>
                </div>
            </div>

            <div className="zx9-features">
                <div>
                    <h2>FEATURES</h2>
                    <p>
                    Connect via Bluetooth or nearly any wired source. This speaker features optical,
                    digital coaxial, USB Type-B, stereo RCA, and stereo XLR inputs, allowing you to have up to five
                    wired source devices connected for easy switching.
                    Improved bluetooth technology offers near lossless audio quality at up to 328ft (100m).
                    Discover clear, more natural sounding highs than the competition with ZX9’s signature planar diaphragm tweeter.
                    Equally important is its powerful room-shaking bass courtesy of a 6.5” aluminum alloy bass unit.
                    You’ll be able to enjoy equal sound quality whether in a large room or small den.
                    Furthermore, you will experience new sensations from old songs since it can respond to even the subtle waveforms.
                    </p>
                </div>

                <div>
                    <h2>IN THE BOX</h2>
                    <ul>
                    <li><h4>2x</h4> Speaker Unit</li>
                    <li><h4>2x</h4> Speaker Cloth Panel</li>
                    <li><h4>1x</h4> User Manual</li>
                    <li><h4>1x</h4> 3.5mm 10m Audio Cable</li>
                    <li><h4>1x</h4> 10m Optical Cable</li>
                    </ul>
                </div>
            </div>

            <div className="zx9-gallery">
                <div>
                    <img src={Zx9Img1} alt="ZX9 gallery 1" />
                    <img src={Zx9Img2} alt="ZX9 gallery 2" />
                </div>
                <img src={Zx9Img3} alt="ZX9 gallery 3" />
            </div>

            <div className="zx9-youMayLike">
                <h2>YOU MAY ALSO LIKE</h2>

                <div>
                <img src={Zx7Img1} alt="ZX7 Speaker" />
                    <h3>ZX7 SPEAKER</h3>
                    <Link to='/Zx7speakers'>
                    <button>SEE PRODUCT</button>
                    </Link>
                </div>

                <div>
                    <img src={Mark1} alt="XX99 Mark I" />
                    <h3>XX99 Mark I</h3>
                    <Link to="/X99MARK1HEADPHONES">
                    <button>SEE PRODUCT</button>
                    </Link>
                </div>

                <div>
                    <img src={XX59Img} alt="XX59 Headphones" />
                    <h3>XX59</h3>
                    <Link to="/XX59HEADPHONES"></Link>
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

export default zx9speaker;