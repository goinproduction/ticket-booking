import React from 'react';

const Cinema = () => {
    return (
        <div className='cinema' id='cineplex'>
            <div className='row line'>
                <div className='col-sm-1 line'>
                    <div className='cinema__brand-logo'>
                        <ul className='cinema__brand-logo-list'>
                            <li className='cinema__brand-logo-list-item cinema__brand-logo-list-item--active'>
                                <a>
                                    <img
                                        src='./assets/img/bhd.png'
                                        alt='brand logo'
                                        className='cinema__brand-logo-list-img'
                                    />
                                </a>
                            </li>
                            <li className='cinema__brand-logo-list-item'>
                                <a>
                                    <img
                                        src='./assets/img/cinestar.png'
                                        alt='brand logo'
                                        className='cinema__brand-logo-list-img'
                                    />
                                </a>
                            </li>
                            <li className='cinema__brand-logo-list-item'>
                                <a>
                                    <img
                                        src='./assets/img/beta.png'
                                        alt='brand logo'
                                        className='cinema__brand-logo-list-img'
                                    />
                                </a>
                            </li>
                            <li className='cinema__brand-logo-list-item'>
                                <a>
                                    <img
                                        src='./assets/img/ddc.png'
                                        alt='brand logo'
                                        className='cinema__brand-logo-list-img'
                                    />
                                </a>
                            </li>
                            <li className='cinema__brand-logo-list-item'>
                                <a>
                                    <img
                                        src='./assets/img/mega.png'
                                        alt='brand logo'
                                        className='cinema__brand-logo-list-img'
                                    />
                                </a>
                            </li>
                            <li className='cinema__brand-logo-list-item'>
                                <a>
                                    <img
                                        src='./assets/img/dcine.png'
                                        alt='brand logo'
                                        className='cinema__brand-logo-list-img'
                                    />
                                </a>
                            </li>
                            <li className='cinema__brand-logo-list-item'>
                                <a>
                                    <img
                                        src='./assets/img/lotte.png'
                                        alt='brand logo'
                                        className='cinema__brand-logo-list-img'
                                    />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='col-sm-4 line'>
                    <div className='cinema__brand-location cinema__brand-location--active'>
                        <div className='cinema__brand-location-img'>
                            <img src='./assets/img/brand-img.png' alt />
                        </div>
                        <div className='cinema__brand-location-info'>
                            <p className='cinema__brand-location-info-name'>
                                <span className='cinema__brand-location-info-name-style'>
                                    BHD Star
                                </span>
                                - Bitexco
                            </p>
                            <p className='cinema__brand-location-info-address'>
                                L3-Bitexco Icon 68, 2 Hải Triều, Q.1
                            </p>
                            <a className='cinema__brand-location-info-detail'>
                                [chi tiết]
                            </a>
                        </div>
                    </div>
                    <div className='cinema__brand-location'>
                        <div className='cinema__brand-location-img'>
                            <img src='./assets/img/brand-img.png' alt />
                        </div>
                        <div className='cinema__brand-location-info'>
                            <p className='cinema__brand-location-info-name'>
                                <span className='cinema__brand-location-info-name-style'>
                                    BHD Star
                                </span>
                                - Bitexco
                            </p>
                            <p className='cinema__brand-location-info-address'>
                                L3-Bitexco Icon 68, 2 Hải Triều, Q.1
                            </p>
                            <a className='cinema__brand-location-info-detail'>
                                [chi tiết]
                            </a>
                        </div>
                    </div>
                    <div className='cinema__brand-location'>
                        <div className='cinema__brand-location-img'>
                            <img src='./assets/img/brand-img.png' alt />
                        </div>
                        <div className='cinema__brand-location-info'>
                            <p className='cinema__brand-location-info-name'>
                                <span className='cinema__brand-location-info-name-style'>
                                    BHD Star
                                </span>
                                - Bitexco
                            </p>
                            <p className='cinema__brand-location-info-address'>
                                L3-Bitexco Icon 68, 2 Hải Triều, Q.1
                            </p>
                            <a className='cinema__brand-location-info-detail'>
                                [chi tiết]
                            </a>
                        </div>
                    </div>
                </div>
                <div className='col-sm-7 line'>
                    <div className='cinema__showingtime'>
                        <div className='cinema_showingtime-empty'>
                            <p className='cinema__showingtime-text'>
                                Không có lịch chiếu
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cinema;
