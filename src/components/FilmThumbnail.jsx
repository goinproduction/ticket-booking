import React, { useState } from 'react';
import { connect } from 'react-redux';
import Slider from 'react-slick';
import playBtn from '../assets/img/play-video.png';
import smallStar from '../assets/img/star1.png';
import halfStar from '../assets/img/star1.2.png';
import TrailerModal from './TrailerModal';

const FilmThumbnail = ({ films }) => {
    const [show, setShow] = useState(false);
    const [videoId, setVideoId] = useState('');

    var settings = {
        infinite: true,
        autoplay: false,
        autoplaySpeed: 3000,
        slidesToShow: 4,
        dotsClass: 'slick-dots slick-thumb',
        arrows: true,
        rows: 2,
    };

    // Get youtube videoId
    const getVideoId = (url) => {
        var regExp =
            /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
        var match = url.match(regExp);
        if (match && match[2].length == 11) {
            return match[2];
        } else {
            //error
        }
    };

    const handleClick = (url) => {
        setShow(true);
        setVideoId(getVideoId(url));
    };

    return (
        <div className='movie'>
            <ul className='movie-navbar'>
                <li className='movie-navbar__item-showing-movie movie-navbar--active'>
                    <a href='#' className>
                        Đang Chiếu
                    </a>
                </li>
                <li className='movie-navbar__item-upcoming-movie'>
                    <a href='#' className>
                        Sắp Chiếu
                    </a>
                </li>
            </ul>

            <div className='showing-movie'>
                <Slider {...settings}>
                    {films.map((film) => {
                        // Xu li ngay thang
                        var openingDate = new Date(
                            film.ngayKhoiChieu
                        ).toLocaleDateString('vi-VN');
                        var trailer = film.trailer;

                        return (
                            <div
                                className='showing-movie__slide'
                                key={film.maPhim}
                            >
                                <div className='showing-movie__slide-item'>
                                    <a className='showing-movie__slide-item-detail'>
                                        <div className='filmThumbnail'>
                                            <img
                                                src={film.hinhAnh}
                                                alt={`${film.biDanh}`}
                                                className='filmThumbnail-poster'
                                            />
                                            <div className='hoverEffect showHover' />
                                            <button
                                                className='showing-movie__slide-item-trailer'
                                                onClick={handleClick.bind(
                                                    this,
                                                    trailer
                                                )}
                                            >
                                                <img
                                                    src={playBtn}
                                                    alt='trailer'
                                                    className='showing-movie__slide-item-trailer-play'
                                                />
                                            </button>
                                            <span className='showing-movie__slide-item-rating'>
                                                <p className='showing-movie__slide-item-rating-text'>
                                                    {film.danhGia}
                                                </p>
                                                <p className='showing-movie__slide-item-rating-star'>
                                                    <img
                                                        src={smallStar}
                                                        alt='star'
                                                        className='smallStar'
                                                    />
                                                    <img
                                                        src={smallStar}
                                                        alt='star'
                                                        className='smallStar'
                                                    />
                                                    <img
                                                        src={smallStar}
                                                        alt='star'
                                                        className='smallStar'
                                                    />
                                                    <img
                                                        src={halfStar}
                                                        alt='half-star'
                                                        className='half'
                                                    />
                                                </p>
                                            </span>
                                        </div>
                                    </a>
                                    <div className='showing-movie__slide-item-info'>
                                        <div className='showing-movie__slide-item-info-name'>
                                            <span className='age-type age-type-general'>
                                                P
                                            </span>
                                            {film.tenPhim}
                                        </div>
                                        <div className='showing-movie__slide-item-info-name-length'>
                                            {openingDate} - {film.maNhom}
                                        </div>
                                    </div>
                                    <div className='showHover' />
                                </div>
                            </div>
                        );
                    })}
                </Slider>

                {show === true ? (
                    <TrailerModal
                        isOpen={show}
                        setIsOpen={setShow}
                        videoId={videoId}
                    />
                ) : null}
            </div>
        </div>
    );
};

const mapStateToProps = (state) => ({
    films: state.film.films,
});

export default connect(mapStateToProps, null)(FilmThumbnail);
