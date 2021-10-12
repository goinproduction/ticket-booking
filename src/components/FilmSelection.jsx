import React, {useState} from 'react';
import { connect } from 'react-redux';

const FilmSelection = ({ films }) => {
    const [show, setShow] = useState(false);
    const [filmName, setFilmName] = useState('Phim');
    return (
        <div className='container'>
            <section className='film-selection'>
                <div className='film-selection__menu'>
                    <div className='film-selection__item'>
                        <p className='film-selection__menu-film-name'>{filmName}</p>
                        <i className='header-right__location-dropdown-icon fa fa-chevron-down' />

                    </div>
                    <div className='film-selection__item'>
                        <p className='film-selection__menu-cinema-name'>Rạp</p>
                        <i className='header-right__location-dropdown-icon fa fa-chevron-down' />
                    </div>
                    <div className='film-selection__item'>
                        <p className='film-selection__menu-date-time'>
                            Ngày xem
                        </p>
                        <i className='header-right__location-dropdown-icon fa fa-chevron-down' />
                    </div>
                    <div className='film-selection__item'>
                        <p className='film-selection__menu-showtime-time'>
                            Suất chiếu
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
