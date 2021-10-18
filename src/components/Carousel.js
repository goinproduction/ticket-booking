import React, { useState } from 'react';
import TrailerModal from './TrailerModal';
import slide2 from '../assets/img/slide03.png';
import slide3 from '../assets/img/slide04.png';
import slide4 from '../assets/img/slide06.png';
import slide5 from '../assets/img/slide07.png';
import play from '../assets/img/play-video.png';
import Slider from 'react-slick';

const Carousel = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [videoId, setVideoId] = useState('');

    const handleClick = (currentVideoId) => {
        setIsOpen(true);
        setVideoId(currentVideoId);
    };

    var settings = {
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        dotsClass: 'slick-dots slick-thumb',
        arrows: true,
        dots: true,
    };

    return (
        <>
            <Slider {...settings}>
                <div className='carousel__slider'>
                    <img
                        src={slide2}
                        className='carousel__slider-image'
                        alt='slide'
                    />
                    <button
                        className='carousel__trailer'
                        onClick={handleClick.bind(this, 'uqJ9u7GSaYM')}
                    >
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
                    <button
                        className='carousel__trailer'
                        onClick={handleClick.bind(this, 'kBY2k3G6LsM')}
                    >
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
                    <button
                        className='carousel__trailer'
                        onClick={handleClick.bind(this, 'Eyju5ODfd-g')}
                    >
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
                    <button
                        className='carousel__trailer'
                        onClick={handleClick.bind(this, 'nh0BklwPN9Q')}
                    >
                        <img
                            src={play}
                            alt='play'
                            className='carousel__trailer-play'
                        />
                    </button>
                </div>
            </Slider>
            {isOpen === true ? (
                <TrailerModal
                    isOpen={isOpen}
                    setIsOpen={setIsOpen}
                    videoId={videoId}
                />
            ) : null}
        </>
    );
};

export default Carousel;