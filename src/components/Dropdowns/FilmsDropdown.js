import React, { useRef, useEffect } from 'react';
import { connect } from 'react-redux';

const FilmDropdown = ({ setIsOpen, setFilmName, films, setFilmId }) => {
    const handleFilmSelection = async (name, id) => {
        await setFilmName(name);
        setFilmId(id);
    };

    function useOutsideAlerter(ref) {
        useEffect(() => {
            function handleClickOutside(event) {
                if (ref.current && !ref.current.contains(event.target)) {
                    setIsOpen('');
                }
            }

            // Bind the event listener
            document.addEventListener('mousedown', handleClickOutside);
            return () => {
                // Unbind the event listener on clean up
                document.removeEventListener('mousedown', handleClickOutside);
            };
        }, [ref]);
    }

    const wrapperRef = useRef(null);
    useOutsideAlerter(wrapperRef);

    return (
        <ul
            className='select-film__dropdown'
            id='custom-scrollbar'
            ref={wrapperRef}
        >
            {films.map((film) => (
                <li
                    key={film.maPhim}
                    className='select-film__dropdown-list'
                    onClick={handleFilmSelection.bind(
                        this,
                        film.tenPhim,
                        film.maPhim
                    )}
                >
                    {film.tenPhim}
                </li>
            ))}
        </ul>
    );
};

const mapStateToProps = (state) => ({
    films: state.film.films,
});
export default connect(mapStateToProps, null)(FilmDropdown);
