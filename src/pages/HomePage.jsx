import React from 'react';
import CarouselContainer from '../containers/CarouselContainer';
import FilmSelectionContainer from '../containers/FilmSelectionContainer';
import NavbarContainer from '../containers/NavbarContainer';

const HomePage = () => {
    return (
        <>
            <NavbarContainer />
            <CarouselContainer />
            <FilmSelectionContainer />
        </>
    );
};

export default HomePage;