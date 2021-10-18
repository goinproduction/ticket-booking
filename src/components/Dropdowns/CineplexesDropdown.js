import React, { useRef, useEffect } from 'react';
import { connect } from 'react-redux';
import { getCineplexByFilmId } from '../../store/actions/cineplexAction';

const CineplexDropdown = ({
    setIsOpen,
    setCineplex,
    listComplexesByFilmId,
    getCineplexByFilmId,
    filmId,
}) => {
    const handleFilmSelection = async (name) => {
        setCineplex(name);
        setIsOpen('');
    };
    console.log(filmId);

    useEffect(async () => {
        await getCineplexByFilmId(1478);
    }, []);

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
            className='select-cineplex__dropdown'
            id='custom-scrollbar'
            ref={wrapperRef}
        >
            {/* {listComplexesByFilmId.map((cineplex, index) => (
                <li
                    key={index}
                    className='select-cineplex__dropdown-list'
                    onClick={handleFilmSelection.bind(
                        this,
                        cineplex.tenHeThongRap
                    )}
                >
                    {cineplex.tenHeThongRap}
                </li>
            ))} */}
        </ul>
    );
};

const mapStateToProps = (state) => ({
    listComplexesByFilmId: state.film.listComplexesByFilmId,
});
export default connect(mapStateToProps, getCineplexByFilmId)(CineplexDropdown);
