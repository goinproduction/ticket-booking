import React, { useRef, useEffect, useState } from 'react';
import { connect } from 'react-redux';

const DateDropdown = ({
    setIsOpen,
    setShowingDate,
    listShowingTime,
    cineplex,
}) => {
    const handleFilmSelection = async (date) => {
        await setShowingDate(date);
        setIsOpen('');
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
        }, []);
    }

    const wrapperRef = useRef(null);
    useOutsideAlerter(wrapperRef);

    const handleShowingDateDuplication = () => {
        // Push unique elements to new array
        let buffer = [];
        listShowingTime.forEach((date) => {
            var showingDateBuffer = new Date(
                date.ngayChieuGioChieu
            ).toLocaleDateString('vi-VN');
            buffer.push(showingDateBuffer);
        });

        let uniqueDateShowingDateBuffer = buffer.filter((c, index) => {
            return buffer.indexOf(c) == index;
        });
        return uniqueDateShowingDateBuffer;
    };

    let uniqueShowingDate = handleShowingDateDuplication();
    return (
        <ul
            className='select-date__dropdown'
            id='custom-scrollbar'
            ref={wrapperRef}
        >
            {cineplex === 'Rạp' ? (
                <li className='select-date__dropdown--error'>
                    Vui lòng chọn phim và rạp
                </li>
            ) : (
                uniqueShowingDate.map((uniqueDate, index) => (
                    <li
                        key={index}
                        className='select-date__dropdown-list'
                        onClick={handleFilmSelection.bind(this, uniqueDate)}
                    >
                        {uniqueDate}
                    </li>
                ))
            )}
        </ul>
    );
};

const mapStateToProps = (state) => ({
    listShowingTime: state.cineplex.listShowingTime,
});

export default connect(mapStateToProps, null)(DateDropdown);
