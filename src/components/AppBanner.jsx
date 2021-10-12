import React from 'react';
import Slider from 'react-slick';
import slide1 from '../assets/img/slide1.jpg';
import slide2 from '../assets/img/slide2.jpg';
import slide3 from '../assets/img/slide3.jpg';
import slide4 from '../assets/img/slide4.jpg';
import slide5 from '../assets/img/slide5.jpg';
import slide6 from '../assets/img/slide6.jpg';
import slide7 from '../assets/img/slide7.jpg';
import slide8 from '../assets/img/slide8.jpg';
import slide9 from '../assets/img/slide9.jpg';
import slide10 from '../assets/img/slide10.jpg';
import slide11 from '../assets/img/slide11.jpg';
import slide12 from '../assets/img/slide12.jpg';
import slide13 from '../assets/img/slide13.jpg';
import slide14 from '../assets/img/slide14.jpg';
import slide15 from '../assets/img/slide15.jpg';
import slide16 from '../assets/img/slide16.jpg';
import mobile from '../assets/img/mobile.png';

const AppBanner = () => {
    var settings = {
        infinite: true,
        autoplay: true,
        autoplaySpeed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
    };

    return (
        <div className='app'>
            <div className='app__content'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-sm-6'>
                            <div className='app__content-download'>
                                <p className='app__content-download-text'>
                                    Ứng dụng tiện lợi dành cho
                                </p>
                                <p className='app__content-download-text'>
                                    người yêu điện ảnh
                                </p>
                                <p className='app__content-download-text-small'>
                                    Không chỉ đặt vé, bạn còn có thể bình luận
                                    phim, chấm điểm rạp và đổi quà hấp dẫn.
                                </p>
                                <button className='app__content-download-btn'>
                                    App miễn phí - Tải về ngay!
                                </button>
                                <p className='app__content-download-text-bottom'>
                                    TIX có hai phiên bản <a>iOS</a> &amp;
                                    <a>Android</a>
                                </p>
                            </div>
                        </div>
                        <div className='col-sm-6'>
                            <div className='app__content-mobile'>
                                <div className='app__content-mobile-img'>
                                    <img src={mobile} alt='mobile' />
                                </div>
                                <div className='app__content-mobile-slider'>
                                    <Slider {...settings}>
                                        <img src={slide1} alt='slide1' />
                                        <img src={slide2} alt='slide2' />
                                        <img src={slide3} alt='slide3' />
                                        <img src={slide4} alt='slide4' />
                                        <img src={slide5} alt='slide5' />
                                        <img src={slide6} alt='slide6' />
                                        <img src={slide7} alt='slide7' />
                                        <img src={slide8} alt='slide8' />
                                        <img src={slide9} alt='slide9' />
                                        <img src={slide10} alt='slide10' />
                                        <img src={slide11} alt='slide11' />
                                        <img src={slide12} alt='slide12' />
                                        <img src={slide13} alt='slide13' />
                                        <img src={slide14} alt='slide14' />
                                        <img src={slide15} alt='slide15' />
                                        <img src={slide16} alt='slide16' />
                                    </Slider>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppBanner;
