import React, { useState } from 'react';
import { connect } from 'react-redux';

const FilmSelection = ({ films }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [filmName, setFilmName] = useState('Phim');
    const [cineplex, setCineplex] = useState('Rạp');
    const [showingDate, setShowingDate] = useState('Ngày chiếu');
    const [showingTime, setShowingTime] = useState('Suất chiếu');
    return (
        <div className='container'>
            <section className='film-selection'>
                <div className='film-selection__menu'>
                    <div className='film-selection__item'>
                        <p className='film-selection__menu-film-name'>
                            {filmName}
                        </p>
                        <i className='header-right__location-dropdown-icon fa fa-chevron-down' />
                    </div>
                    <div className='film-selection__item'>
                        <p className='film-selection__menu-cinema-name'>
                            {cineplex}
                        </p>
                        <i className='header-right__location-dropdown-icon fa fa-chevron-down' />
                    </div>
                    <div className='film-selection__item'>
                        <p className='film-selection__menu-date-time'>
                            {showingDate}
                        </p>
                        <i className='header-right__location-dropdown-icon fa fa-chevron-down' />
                    </div>
                    <div className='film-selection__item'>
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
