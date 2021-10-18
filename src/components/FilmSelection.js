import React, { useState } from 'react';
import { connect } from 'react-redux';
import FilmDropdown from './Dropdowns/FilmsDropdown';
import CineplexesDropdown from './Dropdowns/CineplexesDropdown';

const FilmSelection = ({ films }) => {
    const [isOpen, setIsOpen] = useState('');
    const [filmId, setFilmId] = useState(null);
    const [filmName, setFilmName] = useState('Phim');
    const [cineplex, setCineplex] = useState('Rạp');
    const [showingDate, setShowingDate] = useState('Ngày chiếu');
    const [showingTime, setShowingTime] = useState('Suất chiếu');

    console.log(filmId);
    return (
        <div className='container'>
            <section className='film-selection'>
                <div className='film-selection__menu'>
                    <div
                        className='film-selection__item select-film'
                        onClick={setIsOpen.bind(this, 'select-film')}
                    >
                        <p className='film-selection__menu-film-name'>
                            {filmName}
                        </p>
                        <i className='header-right__location-dropdown-icon fa fa-chevron-down' />
                        {isOpen === 'select-film' ? (
                            <FilmDropdown
                                setIsOpen={setIsOpen}
                                setFilmName={setFilmName}
                                setFilmId={setFilmId}
                            />
                        ) : null}
                    </div>
                    <div
                        className='film-selection__item select-cineplex'
                        onClick={setIsOpen.bind(this, 'select-cineplex')}
                    >
                        <p className='film-selection__menu-cinema-name'>
                            {cineplex}
                        </p>
                        <i className='header-right__location-dropdown-icon fa fa-chevron-down' />
                        {isOpen === 'select-cineplex' ? (
                            <CineplexesDropdown
                                setIsOpen={setIsOpen}
                                setCineplex={setCineplex}
                                filmId={filmId}
                            />
                        ) : null}
                    </div>
                    <div
                        className='film-selection__item select-date'
                        // onClick={handleSelect.bind(this, 'select-date')}
                    >
                        <p className='film-selection__menu-date-time'>
                            {showingDate}
                        </p>
                        <i className='header-right__location-dropdown-icon fa fa-chevron-down' />
                    </div>
                    <div
                        className='film-selection__item select-session'
                        // onClick={handleSelect.bind(this, 'select-session')}
                    >
                        <p className='film-selection__menu-showtime-time'>
                            {showingTime}
                        </p>
                        <i className='header-right__location-dropdown-icon fa fa-chevron-down' />
                    </div>
                    <div className='film-selection__item'>
                        <button className='film-selection__menu-buy-ticket'>
                            MUA VÉ NGAY
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};
const mapStateToProps = (state) => ({
    films: state.film.films,
});
export default connect(mapStateToProps, null)(FilmSelection);