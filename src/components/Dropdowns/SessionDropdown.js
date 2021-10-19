import React, { useRef, useEffect, useState } from 'react';
import { connect } from 'react-redux';

const SessionDropdown = ({
    setIsOpen,
    setShowingTime,
    listShowingTime,
    showingDate,
}) => {
    const handleFilmSelection = async (time) => {
        await setShowingTime(time);
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

    const handleShowingTime = () => {
        let buffer = [];

        listShowingTime.forEach((time) => {
            var showingDateBuffer = new Date(
                time.ngayChieuGioChieu
            ).toLocaleDateString('vi-VN');

            if (showingDateBuffer == showingDate) {
                var showingTime = new Date(
                    time.ngayChieuGioChieu
                ).toLocaleTimeString('vi-VN');
                buffer.push(showingTime);
            }
        });
        let uniqueTimeShowingBuffer = buffer.filter((c, index) => {
            return buffer.indexOf(c) == index;
        });
        return uniqueTimeShowingBuffer;
    };
    const [uniqueShowingTime, setUniqueShowingTime] = useState([]);

    useEffect(() => {
        const buffer = handleShowingTime();
        setUniqueShowingTime(buffer);
    }, [showingDate]);

    return (
        <ul
            className='select-session__dropdown'
            id='custom-scrollbar'
            ref={wrapperRef}
        >
            {showingDate === 'Ngày chiếu' ? (
                <li className='select-session__dropdown--error'>
                    Vui lòng chọn phim, rạp và ngày chiếu
                </li>
            ) : (
                uniqueShowingTime.map((time, index) => (
                    <li
                        key={index}
                        className='select-session__dropdown-list'
                        onClick={handleFilmSelection.bind(this, time)}
                    >
                        {time}
                    </li>
                ))
            )}
        </ul>
    );
};

const mapStateToProps = (state) => ({
    listShowingTime: state.cineplex.listShowingTime,
});

export default connect(mapStateToProps, null)(SessionDropdown);
