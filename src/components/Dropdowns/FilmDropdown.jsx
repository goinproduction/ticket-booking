import React, { useRef, useEffect } from 'react';

const FilmDropdown = ({ setShowSelection, setLocation }) => {
    const handleFilmSelection = (name) => {
        setLocation(name);
        setShowSelection(false);
    };

    function useOutsideAlerter(ref) {
        useEffect(() => {
            function handleClickOutside(event) {
                if (ref.current && !ref.current.contains(event.target)) {
                    setShowSelection(false);
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
            className='header-right__location-dropdown'
            id='custom-scrollbar'
            ref={wrapperRef}
        >
            {data.map((province) => (
                <li
                    key={province.id}
                    className='header-right__location-dropdown-list'
                    onClick={handleFilmSelection.bind(this, province.name)}
                >
                    {province.name}
                </li>
            ))}
        </ul>
    );
};

export default FilmDropdown;