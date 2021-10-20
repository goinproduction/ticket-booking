import React from 'react';
import cgv from '../../../assets/img/cgv.png';
import bhd from '../../../assets/img/bhd.png';
import galaxy from '../../../assets/img/galaxycine.png';
import cinestar from '../../../assets/img/cinestar.png';
import lotte from '../../../assets/img/LotteCinima.jpg';
import megaGS from '../../../assets/img/megags.png';
import beta from '../../../assets/img/bt.jpg';
import ddc from '../../../assets/img/dongdacinema.png';
import touch from '../../../assets/img/TOUCH.png';
import cinemax from '../../../assets/img/cnx.jpg';
import starlight from '../../../assets/img/STARLIGHT.png';
import dcine from '../../../assets/img/dcine.png';
import zalo from '../../../assets/img/zalopay_icon.png';
import payoo from '../../../assets/img/payoo.jpg';
import vcb from '../../../assets/img/VCB.png';
import agri from '../../../assets/img/AGRIBANK.png';
import viettin from '../../../assets/img/VIETTINBANK.png';
import ivb from '../../../assets/img/IVB.png';
import go from '../../../assets/img/123go.png';
import laban from '../../../assets/img/laban.png';
import apple from '../../../assets/img/apple-logo.png';
import zaloLogo from '../../../assets/img/zalo-logo.png';
import fb from '../../../assets/img/facebook-logo.png';
import android from '../../../assets/img/android-logo.png';
import zion from '../../../assets/img/zion-logo.jpg';
import bct from '../../../assets/img/bct.png';

let href = '#';

const Footer = () => {
    return (
        <div className='footer'>
            <div className='container footer__content'>
                <div className='row'>
                    <div className='col-sm-4 footer__content-about'>
                        <p>TIX</p>
                        <div className='row'>
                            <div className='col-sm-6'>
                                <div className='footer__content-about-left'>
                                    <a>FAQ</a>
                                    <a>Brand Guidelines</a>
                                </div>
                            </div>
                            <div className='col-sm-6'>
                                <div className='footer__content-about-right'>
                                    <a>Thoả thuận sử dụng</a>
                                    <a>Chính sách bảo mật</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-sm-4'>
                        <div className='footer__content-partner'>
                            <p>Đối tác</p>
                        </div>
                        <div className='row mg'>
                            <div className='col-sm-12'>
                                <a>
                                    <img
                                        className='footer__content-partner-logo'
                                        src={cgv}
                                        alt='CGV'
                                    />
                                </a>
                                <a href={href}>
                                    <img
                                        className='footer__content-partner-logo'
                                        src={bhd}
                                        alt='BHD'
                                    />
                                </a>
                                <a
                                    href={href}
                                    target='_blank'
                                    rel='noopener noreferrer'
                                >
                                    <img
                                        className='footer__content-partner-logo'
                                        src={galaxy}
                                        alt='galaxycine'
                                    />
                                </a>
                                <a href={href}>
                                    <img
                                        className='footer__content-partner-logo'
                                        src={cinestar}
                                        alt='cinestar'
                                    />
                                </a>
                                <a href={href}>
                                    <img
                                        className='footer__content-partner-logo'
                                        src={lotte}
                                        alt='Lotte'
                                    />
                                </a>
                            </div>
                        </div>
                        <div className='row mg'>
                            <div className='col-sm-12'>
                                <a href={href}>
                                    <img
                                        className='footer__content-partner-logo'
                                        src={megaGS}
                                        alt='megagscinemas'
                                    />
                                </a>
                                <a href={href}>
                                    <img
                                        className='footer__content-partner-logo'
                                        src={beta}
                                        alt='betacinemas'
                                    />
                                </a>
                                <a href={href}>
                                    <img
                                        className='footer__content-partner-logo'
                                        src={ddc}
                                        alt='ddcinema'
                                    />
                                </a>
                                <a href={href}>
                                    <img
                                        className='footer__content-partner-logo'
                                        src={touch}
                                        alt='touchcinema'
                                    />
                                </a>
                                <a href={href}>
                                    <img
                                        className='footer__content-partner-logo'
                                        src={cinemax}
                                        alt='cinemaxvn'
                                    />
                                </a>
                            </div>
                        </div>
                        <div className='row mg'>
                            <div className='col-sm-12'>
                                <a href={href}>
                                    <img
                                        className='footer__content-partner-logo'
                                        src={starlight}
                                        alt='starlight'
                                    />
                                </a>
                                <a href={href}>
                                    <img
                                        className='footer__content-partner-logo'
                                        src={dcine}
                                        alt='dcine'
                                    />
                                </a>
                                <a href={href}>
                                    <img
                                        className='footer__content-partner-logo'
                                        src={zalo}
                                        alt='zalopay'
                                    />
                                </a>
                                <a href={href}>
                                    <img
                                        className='footer__content-partner-logo'
                                        src={payoo}
                                        alt='payoo'
                                    />
                                </a>
                                <a href={href}>
                                    <img
                                        className='footer__content-partner-logo'
                                        src={vcb}
                                        alt='VCB'
                                    />
                                </a>
                            </div>
                        </div>
                        <div className='row mg'>
                            <div className='col-sm-12'>
                                <a href={href}>
                                    <img
                                        className='footer__content-partner-logo'
                                        src={agri}
                                        alt='agribank'
                                    />
                                </a>
                                <a href={href}>
                                    <img
                                        className='footer__content-partner-logo'
                                        src={viettin}
                                        alt='vietinbank'
                                    />
                                </a>
                                <a href={href}>
                                    <img
                                        className='footer__content-partner-logo'
                                        src={ivb}
                                        alt='IVB'
                                    />
                                </a>
                                <a href={href}>
                                    <img
                                        className='footer__content-partner-logo'
                                        src={go}
                                        alt='123go'
                                    />
                                </a>
                                <a href={href}>
                                    <img
                                        className='footer__content-partner-logo'
                                        src={laban}
                                        alt='laban'
                                    />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className='col-sm-4'>
                        <div className='row'>
                            <div className='col-sm-6'>
                                <div className='footer__content-apps'>
                                    <p>Mobile App</p>
                                    <div className='footer__content__apps-logo'>
                                        <a href={href}>
                                            <img
                                                src={apple}
                                                alt='apple'
                                                className='footer__content-apps-img'
                                            />
                                        </a>
                                        <a href={href}>
                                            <img
                                                src={android}
                                                alt='android'
                                                className='footer__content-apps-img'
                                            />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className='col-sm-6'>
                                <div className='footer__content-apps'>
                                    <p>Social</p>
                                    <div className='footer__content__apps-logo'>
                                        <a href={href}>
                                            <img
                                                src={fb}
                                                alt='facebook'
                                                className='footer__content-apps-img'
                                            />
                                        </a>
                                        <a href={href}>
                                            <img
                                                src={zaloLogo}
                                                alt='zalo'
                                                className='footer__content-apps-img'
                                            />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='hr' />
                    <div className='row'>
                        <div className='col-sm-1'>
                            <img src={zion} alt='zion' className='zion-logo' />
                        </div>
                        <div className='col-sm-9 footer__content-info'>
                            <span>TAC – SẢN PHẨM CỦA CÔNG TY CỔ PHẦN ZION</span>
                            <span>
                                Địa chỉ: Z06 Đường số 13, Phường Tân Thuận Đông,
                                Quận 7, Tp. Hồ Chí Minh, Việt Nam.
                            </span>
                            <span>
                                Giấy chứng nhận đăng ký kinh doanh số:
                                0101659783,
                            </span>
                            <span>
                                đăng ký thay đổi lần thứ 30, ngày 22 tháng 01
                                năm 2020 do Sở kế hoạch và đầu tư Thành phố Hồ
                                Chí Minh cấp.
                            </span>
                            <span>
                                Số Điện Thoại (Hotline): 0374586530 <br />
                                Email:{' '}
                                <a
                                    href={href}
                                    style={{
                                        color: '#FB4226',
                                        textDecoration: 'none',
                                        fontWeight: 600,
                                    }}
                                >
                                    itdev.126@gmail.com
                                </a>
                            </span>
                        </div>
                        <div className='col-sm-2'>
                            <img
                                src={bct}
                                alt='bocongthuong'
                                className='bct-logo'
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
