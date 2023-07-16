import '../styles/carousel.css';
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import one from '../assets/1.jpg';
import two from '../assets/2.jpg';
import three from '../assets/3.jpg';

const MyCarousel = () => {
    return (
        <Carousel
            showThumbs={false}
            showIndicators={false}
            showStatus={false}
            stopOnHover={false}
            autoPlay={true}
            interval={3000}
            infiniteLoop={true}>
            <div className='carousel-image'>
                <img src={one} className='carousel-img' alt="Image 1" />
            </div>
            <div className='carousel-image'>
                <img src={two} className='carousel-img' alt="Image 2" />
            </div>
            <div className='carousel-image'>
                <img src={three} className='carousel-img' alt="Image 2" />
            </div>
        </Carousel>
    );
};

export default MyCarousel;
