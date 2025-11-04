import React from 'react';
import './XX59HEADPHONES.css';
import { Link } from 'react-router-dom';
import HeadphonesPreviewImg from '../assets/product-xx99-mark-one-headphones/desktop/image-category-page-preview.jpg';
import SpeakerPreviewImg from '../assets/home/desktop/image-speaker-zx9.png';
import EarphonePreviewImg from '../assets/product-yx1-earphones/desktop/image-category-page-preview.jpg';
import XX59img0 from '../assets/product-xx59-headphones/desktop/image-product.jpg';
import XX59img1 from '../assets/product-xx59-headphones/desktop/image-gallery-1.jpg';
import XX59img2 from '../assets/product-xx59-headphones/desktop/image-gallery-2.jpg';
import XX59img3 from '../assets/product-xx59-headphones/desktop/image-gallery-3.jpg';
import XX99img from '../assets/product-xx99-mark-two-headphones/desktop/image-product.jpg';
import Mark1 from '../assets/product-xx99-mark-one-headphones/desktop/image-product.jpg';
import Zx9img0 from '../assets/product-zx9-speaker/desktop/image-product.jpg';


function XX59HEADPHONES (){
    return(
        <section className="xx59-page">
            <h1>XX59PAGE</h1>

            <div>
                <Link to="/home">
                <p>Go Back</p>
                </Link>
            </div>

            <div className="xx59-description">
                <img src={XX59img0} alt="XX99 Mark I Headphones" />
        
                <div>
                    <h1>NEW PRODUCT</h1>
                    <h2>XX 59 HEADPHONES</h2>
                    <p>
                        Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. 
                        The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.
                    </p>
                    <p>$899</p>
                    <button className='btn-1'>1</button>
                    <Link to="/">
                        <button className='btn-addToCart'>ADD TO CART</button>
                    </Link>
                </div>
            </div>
            <div className='xx59-features'>
                <div>
                <h1>FEATURES</h1>
                <p>
                    These headphones have been created from durable, high-quality materials tough enough to take anywhere. Its compact folding design fuses comfort and minimalist style making it perfect for travel. Flawless transmission is assured by the latest wireless technology engineered for audio synchronization with videos.\n\nMore than a simple pair of headphones, this headset features a pair of built-in microphones for clear, hands-free calling when paired with a compatible smartphone. Controlling music and calls is also intuitive thanks to easy-access touch buttons on the earcups.
                    Regardless of how you use the XX59 headphones, you can do so all day thanks to an impressive 30-hour battery life that can be rapidly recharged via USB-C
                </p>
                </div>
                <div>
                    <h2>IN THE BOX</h2>
                    <ul>
                        <li><h4>1x</h4>Headphone unit</li>
                        <li><h4>2x</h4>Replacement earcups</li>
                        <li><h4>1x</h4>User manual</li>
                        <li><h4>1x</h4>3.5mm 5m audio cable</li>
                            
                    </ul>
                </div>
            </div>

            <div className='xx59-gallery'>
                <div className='xx59-gallery-0'> 
                    <div>
                        <img src={XX59img1} alt="Gallery 1" class/>
                    </div>
                    <div>
                        <img src={XX59img2} alt="Gallery 2" />
                    </div>
                </div>
                <div>
                    <img src={XX59img3} alt="Gallery 3" />
                </div>
            </div>

            <div>
                <h2>YOU MAY ALSO LIKE</h2>
            </div>

            <div className='xx59-youMayLike'>
                
                <div className='youMayLike-div'>
                    <img src={XX99img} alt="XX99 Mark II" />
                    <h3>XX99 MARK II</h3>
                    <button className='btn-seeProduct'>SEE PRODUCT</button>
                </div>
                <div className='youMayLike-div'>
                    <img src={Mark1} alt="XX99 Mark I" />
                    <h3>XX99 Mark I</h3>
                    <Link to='/X99MARK1HEADPHONES'>
                        <button  className='btn-seeProduct'>SEE PRODUCT</button>
                    </Link>
                </div>
                <div className='youMayLike-div'>
                    <img src={Zx9img0} alt="ZX9 Speaker" />
                    <h3>ZX9 SPEAKER</h3>
                    <button className='btn-seeProduct'>SEE PRODUCT</button>
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
                    <Link to='/'>
                        <p>SHOP</p>
                    </Link>
                </div>
            </div>


            

        </section>

    )
}

export default XX59HEADPHONES;