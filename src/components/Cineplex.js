import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import {
    getCineplexes,
    getCineplexById,
    getFilmByCineplex,
} from '../store/actions/cineplexAction';

const Cineplex = ({
    cineplexes,
    cineplexById,
    getCineplexes,
    getCineplexById,
    getFilmByCineplex,
    listCineplexGroup,
}) => {
    const [cineplexId, setCineplexId] = useState('BHDStar');
    const [groupId, setGroupId] = useState(null);
    const [lstGroup, setListGroup] = useState([]);
    const [lstFilm, setLstFilm] = useState([]);

    useEffect(() => {
        getCineplexes();
    }, []);

    useEffect(() => {
        let lstGroupBuff = getCineplexGroupFromCineplexId();
        let lstFilmBuff = getFilmFromCineplexGroup();
        setListGroup(lstGroupBuff);
        setLstFilm(lstFilmBuff);
    }, [groupId]);

    useEffect(() => {
        getCineplexById(cineplexId);
        getFilmByCineplex(cineplexId);
        handleDefaultCineplexAddress();
    }, [cineplexId]);
    console.log(groupId);
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

    // Get cineplex group from cineplexId
    const getCineplexGroupFromCineplexId = () => {
        let lstGroup = [];
        listCineplexGroup.forEach((item) => {
            if (item.maCumRap === groupId) {
                lstGroup.push(item);
            }
        });
        return lstGroup;
    };

    // Get films from cineplex group
    const getFilmFromCineplexGroup = () => {
        let films = [];
        lstGroup.forEach((item) => {
            item.danhSachPhim.forEach((item) => {
                films.push(item);
            });
        });
        return films;
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
                                        onClick={setCineplexId.bind(
                                            this,
                                            cineplex.maHeThongRap
                                        )}
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
                    <div
                        className='col-sm-7 line cinema__showingtime-container'
                        id='custom-scrollbar'
                    >
                        {lstFilm.map((lst, index) => (
                            <div className='cinema__showingtime' key={index}>
                                <div className='row'>
                                    <div className='col-sm-2'>
                                        <img src={lst.hinhAnh} alt='phim' />
                                    </div>
                                    <div className='col-sm-7'>
                                        <div className='cinema_showingtime-empty'>
                                            <p className='cinema__showingtime-text'>
                                                {lst.tenPhim}
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
                        ))}
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
