import React from 'react';
import FadeLoading from '../components/FadeLoading';
import CarouselContainer from '../containers/CarouselContainer';
import FilmSelectionContainer from '../containers/FilmSelectionContainer';
import NavbarContainer from '../containers/NavbarContainer';

const HomePage = () => {
    return (
        <>
            <FadeLoading />
            <NavbarContainer />
            <CarouselContainer />
            <FilmSelectionContainer />
        </>
    );
};

export default HomePage;
