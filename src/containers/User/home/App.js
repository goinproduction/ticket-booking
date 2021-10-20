import React from 'react';
import Slider from 'react-slick';
import mobile from '../../../assets/img/mobile.png';
import slide1 from '../../../assets/img/slide1.jpg';
import slide2 from '../../../assets/img/slide2.jpg';
import slide3 from '../../../assets/img/slide3.jpg';
import slide4 from '../../../assets/img/slide4.jpg';
import slide5 from '../../../assets/img/slide5.jpg';
import slide6 from '../../../assets/img/slide6.jpg';
import slide7 from '../../../assets/img/slide7.jpg';
import slide8 from '../../../assets/img/slide8.jpg';
import slide9 from '../../../assets/img/slide9.jpg';
import slide10 from '../../../assets/img/slide10.jpg';
import slide11 from '../../../assets/img/slide11.jpg';
import slide12 from '../../../assets/img/slide12.jpg';
import slide13 from '../../../assets/img/slide13.jpg';
import slide14 from '../../../assets/img/slide14.jpg';
import slide15 from '../../../assets/img/slide15.jpg';
import slide16 from '../../../assets/img/slide16.jpg';

export default function App() {
    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 500,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <div className='wrap-app app'>
            <div className='container' style={{ maxWidth: '940px' }}>
                <div className='row align-items-center'>
                    <div className='app__left col-md-6 text-center text-md-left'>
                        <p className='text-1'>
                            Ứng dụng tiện lợi dành cho người yêu điện ảnh
                        </p>
                        <p className='text-2'>
                            Không chỉ đặt vé, bạn còn có thể bình luận phim,
                            chấm điểm rạp và đổi quà hấp dẫn.
                        </p>
                        <button className=''>
                            App miễn phí - Tải về ngay!
                        </button>
                        <p className='text-3'>
                            TIX có hai phiên bản
                            <a className='app-link' href='# '>
                                iOS
                            </a>
                            &amp;
                            <a className='app-link' href='# '>
                                Android
                            </a>
                        </p>
                    </div>
                    <div className='app__right col-md-6'>
                        <img className='mobile-img' src={mobile} alt='mobile' />
                        <div className='slider-screen'>
                            <Slider className='h-100 w-100' {...settings}>
                                <div>
                                    <img
                                        className='img-fluid'
                                        src={slide1}
                                        alt='screen-img'
                                    />
                                </div>
                                <div>
                                    <img
                                        className='img-fluid'
                                        src={slide2}
                                        alt='screen-img'
                                    />
                                </div>
                                <div>
                                    <img
                                        className='img-fluid'
                                        src={slide3}
                                        alt='screen-img'
                                    />
                                </div>
                                <div>
                                    <img
                                        className='img-fluid'
                                        src={slide4}
                                        alt='screen-img'
                                    />
                                </div>
                                <div>
                                    <img
                                        className='img-fluid'
                                        src={slide5}
                                        alt='screen-img'
                                    />
                                </div>
                                <div>
                                    <img
                                        className='img-fluid'
                                        src={slide6}
                                        alt='screen-img'
                                    />
                                </div>
                                <div>
                                    <img
                                        className='img-fluid'
                                        src={slide7}
                                        alt='screen-img'
                                    />
                                </div>
                                <div>
                                    <img
                                        className='img-fluid'
                                        src={slide8}
                                        alt='screen-img'
                                    />
                                </div>
                                <div>
                                    <img
                                        className='img-fluid'
                                        src={slide9}
                                        alt='screen-img'
                                    />
                                </div>
                                <div>
                                    <img
                                        className='img-fluid'
                                        src={slide10}
                                        alt='screen-img'
                                    />
                                </div>
                                <div>
                                    <img
                                        className='img-fluid'
                                        src={slide11}
                                        alt='screen-img'
                                    />
                                </div>
                                <div>
                                    <img
                                        className='img-fluid'
                                        src={slide12}
                                        alt='screen-img'
                                    />
                                </div>
                                <div>
                                    <img
                                        className='img-fluid'
                                        src={slide13}
                                        alt='screen-img'
                                    />
                                </div>
                                <div>
                                    <img
                                        className='img-fluid'
                                        src={slide14}
                                        alt='screen-img'
                                    />
                                </div>
                                <div>
                                    <img
                                        className='img-fluid'
                                        src={slide15}
                                        alt='screen-img'
                                    />
                                </div>
                                <div>
                                    <img
                                        className='img-fluid'
                                        src={slide16}
                                        alt='screen-img'
                                    />
                                </div>
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
