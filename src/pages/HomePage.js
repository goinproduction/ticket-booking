import React from 'react';
import FadeLoading from '../components/FadeLoading';
import FilmSelection from '../components/FilmSelection';
import FilmThumbnail from '../components/FilmThumbnail';
import Navbar from '../components/Navbar';
import Carousel from '../components/Carousel';
import News from '../components/News';
import AppBanner from '../components/AppBanner';
import Footer from '../components/Footer';
import Cineplex from '../components/Cineplex';

const HomePage = ({ getFilms }) => {
    return (
        <>
            {/* <FadeLoading /> */}
            <Navbar />
            <Carousel />
            <div className='container'>
                <FilmSelection />
                <FilmThumbnail />
                <Cineplex />
                <News />
            </div>
            <AppBanner />
            <Footer />
        </>
    );
};

export default HomePage;
