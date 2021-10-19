import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import {
    getCineplexes,
    getCineplexById,
    getFilmByCineplex,
} from '../store/actions/cineplexAction';
import test from '../assets/img/android-logo.png';

const Cineplex = ({
    cineplexes,
    cineplexById,
    getCineplexes,
    getCineplexById,
    getFilmByCineplex,
}) => {
    const [cineplexId, setCineplexId] = useState('BHDStar');
    const [groupId, setGroupId] = useState('');

    useEffect(() => {
        getCineplexes();
    }, []);

    useEffect(() => {
        getCineplexById(cineplexId);
        getFilmByCineplex(cineplexId);
        handleDefaultCineplexAddress();
    }, [cineplexId]);

    // Dirty code
    const handleDefaultCineplexAddress = () => {
        if (cineplexId === 'BHDStar') {
            setGroupId('bhd-star-cineplex-3-2');
        } else if (cineplexId === 'CGV') {
            setGroupId('cgv-aeon-binh-tan');
        } else if (cineplexId === 'CGV') {
            setGroupId('cgv-aeon-binh-tan');
        } else if (cineplexId === 'CineStar') {
            setGroupId('cns-hai-ba-trung');
        } else if (cineplexId === 'Galaxy') {
            setGroupId('glx-huynh-tan-phat');
        } else if (cineplexId === 'LotteCinima') {
            setGroupId('lotte-cantavil');
        } else if (cineplexId === 'MegaGS') {
            setGroupId('megags-cao-thang');
        }
    };
    return (
        <>
            <div className='cinema' id='cineplex'>
                <div className='row line'>
                    <div className='col-sm-1 line'>
                        <div className='cinema__brand-logo'>
                            <ul className='cinema__brand-logo-list'>
                                {cineplexes.map((cineplex, index) => (
                                    <li
                                        key={index}
                                        className={
                                            cineplexId === cineplex.maHeThongRap
                                                ? 'cinema__brand-logo-list-item cinema__brand-logo-list-item--active'
                                                : 'cinema__brand-logo-list-item'
                                        }
                                        onClick={() =>
                                            setCineplexId(cineplex.maHeThongRap)
                                        }
                                    >
                                        <a>
                                            <img
                                                src={cineplex.logo}
                                                alt={cineplex.biDanh}
                                                className='cinema__brand-logo-list-img'
                                            />
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div
                        className='col-sm-4 line scrollBar'
                        id='custom-scrollbar'
                    >
                        {cineplexById.map((cineById, index) => {
                            return (
                                <div
                                    key={index}
                                    onClick={() =>
                                        setGroupId(cineById.maCumRap)
                                    }
                                    className={
                                        groupId === cineById.maCumRap
                                            ? 'cinema__brand-location cinema__brand-location--active'
                                            : 'cinema__brand-location'
                                    }
                                >
                                    <div className='cinema__brand-location-info'>
                                        <p className='cinema__brand-location-info-name'>
                                            {cineById.tenCumRap}
                                        </p>
                                        <p className='cinema__brand-location-info-address'>
                                            {cineById.diaChi}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                    <div className='col-sm-7 line'>
                        {/* <div className='cinema__showingtime'>
                            <div className='cinema_showingtime-empty'>
                                <p className='cinema__showingtime-text'>
                                    Không có lịch chiếu
                                </p>
                            </div>
                        </div> */}
                        <div className='cinema__showingtime-container'>
                            <div className='cinema__showingtime'>
                                <div className='row'>
                                    <div className='col-sm-3'>
                                        <img src={test} alt='' />
                                    </div>
                                    <div className='col-sm-6'>
                                        <div className='cinema_showingtime-empty'>
                                            <p className='cinema__showingtime-text'>
                                                Không có lịch chiếu
                                            </p>
                                        </div>
                                    </div>
                                    <div className='col-sm-3'>
                                        <div className='icon'>
                                            <i className='fa fa-chevron-down' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='spacer'></div>
        </>
    );
};

const mapStateToProps = (state) => ({
    cineplexes: state.cineplex.cineplexes,
    cineplexById: state.cineplex.cineplexById,
    listCineplexGroup: state.cineplex.listCineplexGroup,
});

export default connect(mapStateToProps, {
    getCineplexes,
    getCineplexById,
    getFilmByCineplex,
})(Cineplex);
