import React, { useEffect } from 'react';
import FadeLoading from '../components/FadeLoading';
import CarouselContainer from '../containers/CarouselContainer';
import FilmSelectionContainer from '../containers/FilmSelectionContainer';
import NavbarContainer from '../containers/NavbarContainer';

import { getFilms } from '../store/actions/filmAction';
import { connect } from 'react-redux';
import FilmthumbNailContainer from '../containers/FilmThumbnailContainer';
import News from '../components/News';
import AppBanner from '../components/AppBanner';
import Footer from '../components/Footer';
import Cineplex from '../components/Cineplex';

const HomePage = ({ getFilms }) => {
    useEffect(() => {
        getFilms();
    }, []);

    return (
        <>
            {/* <FadeLoading /> */}
            <NavbarContainer />
            <CarouselContainer />
            <div className='container'>
                <FilmSelectionContainer />
                <FilmthumbNailContainer />
                <Cineplex />
                <News />
            </div>
            <AppBanner />
            <Footer />
        </>
    );
};

export default connect(null, { getFilms })(HomePage);
