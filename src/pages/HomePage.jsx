import React, { useEffect } from 'react';
import FadeLoading from '../components/FadeLoading';
import CarouselContainer from '../containers/CarouselContainer';
import FilmSelectionContainer from '../containers/FilmSelectionContainer';
import NavbarContainer from '../containers/NavbarContainer';

import { getFilms } from '../store/actions/filmAction';
import { connect } from 'react-redux';
import FilmthumbNailContainer from '../containers/FilmThumbnailContainer';

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
            </div>
        </>
    );
};

export default connect(null, { getFilms })(HomePage);
