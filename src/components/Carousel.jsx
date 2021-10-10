import React from 'react';
import slide1 from '../assets/img/slide01.jpg';
import slide2 from '../assets/img/slide03.png';
import slide3 from '../assets/img/slide04.png';
import slide4 from '../assets/img/slide06.png';
import slide5 from '../assets/img/slide07.png';
import play from '../assets/img/play-video.png';

const Carousel = () => {
    return (
        <section className='carousel'>
            <div className='carousel__slider'>
                <img
                    src={slide1}
                    className='carousel__slider-image'
                    alt='slide'
                />
                <button className='carousel__trailer'>
                    <img
                        src={play}
                        alt='play'
                        className='carousel__trailer-play'
                    />
                </button>
            </div>
            <div className='carousel__slider'>
                <img
                    src={slide2}
                    className='carousel__slider-image'
                    alt='slide'
                />
                <button className='carousel__trailer'>
                    <img
                        src={play}
                        alt='play'
                        className='carousel__trailer-play'
                    />
                </button>
            </div>
            <div className='carousel__slider'>
                <img
                    src={slide3}
                    className='carousel__slider-image'
                    alt='slide'
                />
                <button className='carousel__trailer'>
                    <img
                        src={play}
                        alt='play'
                        className='carousel__trailer-play'
                    />
                </button>
            </div>
            <div className='carousel__slider'>
                <img
                    src={slide4}
                    className='carousel__slider-image'
                    alt='slide'
                />
                <button className='carousel__trailer'>
                    <img
                        src={play}
                        alt='play'
                        className='carousel__trailer-play'
                    />
                </button>
            </div>
            <div className='carousel__slider'>
                <img
                    src={slide5}
                    className='carousel__slider-image'
                    alt='slide'
                />
                <button className='carousel__trailer'>
                    <img
                        src={play}
                        alt='play'
                        className='carousel__trailer-play'
                    />
                </button>
            </div>
        </section>
    );
};

export default Carousel;
