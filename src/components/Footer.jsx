import React from 'react';
import cgv from '../assets/img/cgv.png';
import bhd from '../assets/img/bhd.png';
import galaxy from '../assets/img/galaxycine.png';
import cinestar from '../assets/img/cinestar.png';
import lotte from '../assets/img/lotte.png';
import megaGS from '../assets/img/mega.png';
import beta from '../assets/img/beta.png';
import ddc from '../assets/img/ddc.png';
import touch from '../assets/img/TOUCH.png';
import cinemax from '../assets/img/cnx.jpg';
import starlight from '../assets/img/STARLIGHT.png';
import dcine from '../assets/img/dcine.png';
import zalo from '../assets/img/zalopay_icon.png';
import payoo from '../assets/img/payoo.jpg';
import vcb from '../assets/img/VCB.png';
import agri from '../assets/img/AGRIBANK.png';
import viettin from '../assets/img/VIETTINBANK.png';
import ivb from '../assets/img/IVB.png';
import go from '../assets/img/123go.png';
import laban from '../assets/img/laban.png';
import apple from '../assets/img/apple-logo.png';
import zaloLogo from '../assets/img/zalo-logo.png';
import fb from '../assets/img/facebook-icon.png';
import android from '../assets/img/android-logo.png';
import zion from '../assets/img/zion-logo.jpg';
import bct from '../assets/img/bct.png';

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
                                    <a href>FAQ</a>
                                    <a href>Brand Guidelines</a>
                                </div>
                            </div>
                            <div className='col-sm-6'>
                                <div className='footer__content-about-right'>
                                    <a href>Thoả thuận sử dụng</a>
                                    <a href>Chính sách bảo mật</a>
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
                                <a
                                    href='https://www.cgv.vn/'
                                    target='_blank'
                                    title='CGV'
                                >
                                    <img
                                        className='footer__content-partner-logo'
                                        src={cgv}
                                        alt='CGV'
                                    />
                                </a>
                                <a
                                    href='https://www.bhdstar.vn/'
                                    target='_blank'
                                    title='D'
                                >
                                    <img
                                        className='footer__content-partner-logo'
                                        src={bhd}
                                        alt='BHD'
                                    />
                                </a>
                                <a
                                    href='http://galaxycine.vn/'
                                    target='_blank'
                                    title='Galaxycine'
                                >
                                    <img
                                        className='footer__content-partner-logo'
                                        src={galaxy}
                                        alt='galaxycine'
                                    />
                                </a>
                                <a
                                    href='http://cinestar.com.vn/'
                                    target='_blank'
                                    title='Cinestar'
                                >
                                    <img
                                        className='footer__content-partner-logo'
                                        src={cinestar}
                                        alt='cinestar'
                                    />
                                </a>
                                <a
                                    href='https://lottecinemavn.com/'
                                    target='_blank'
                                    title='Lotte'
                                >
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
                                <a
                                    href='https://www.megagscinemas.vn/'
                                    target='_blank'
                                    title='Megagscinemas'
                                >
                                    <img
                                        className='footer__content-partner-logo'
                                        src={megaGS}
                                        alt='megagscinemas'
                                    />
                                </a>
                                <a
                                    href='https://www.betacinemas.vn/'
                                    target='_blank'
                                    title='Betacinemas'
                                >
                                    <img
                                        className='footer__content-partner-logo'
                                        src={beta}
                                        alt='betacinemas'
                                    />
                                </a>
                                <a
                                    href='http://ddcinema.vn/'
                                    target='_blank'
                                    title='DDC'
                                >
                                    <img
                                        className='footer__content-partner-logo'
                                        src={ddc}
                                        alt='ddcinema'
                                    />
                                </a>
                                <a
                                    href='https://touchcinema.com/'
                                    target='_blank'
                                    title
                                >
                                    <img
                                        className='footer__content-partner-logo'
                                        src={touch}
                                        alt='touchcinema'
                                    />
                                </a>
                                <a
                                    href='https://cinemaxvn.com/'
                                    target='_blank'
                                    title='Cinemaxvn'
                                >
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
                                <a
                                    href='http://starlight.vn/'
                                    target='_blank'
                                    title='Starlight'
                                >
                                    <img
                                        className='footer__content-partner-logo'
                                        src={starlight}
                                        alt='starlight'
                                    />
                                </a>
                                <a
                                    href='https://www.dcine.vn/'
                                    target='_blank'
                                    title='Dcine'
                                >
                                    <img
                                        className='footer__content-partner-logo'
                                        src={dcine}
                                        alt='dcine'
                                    />
                                </a>
                                <a
                                    href='https://zalopay.vn/'
                                    target='_blank'
                                    title='Zalopay'
                                >
                                    <img
                                        className='footer__content-partner-logo'
                                        src={zalo}
                                        alt='zalopay'
                                    />
                                </a>
                                <a
                                    href='https://www.payoo.vn/'
                                    target='_blank'
                                    title='Payoo'
                                >
                                    <img
                                        className='footer__content-partner-logo'
                                        src={payoo}
                                        alt='payoo'
                                    />
                                </a>
                                <a
                                    href='https://portal.vietcombank.com.vn/Pages/Home.aspx'
                                    target='_blank'
                                    title='VCB'
                                >
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
                                <a
                                    href='https://www.agribank.com.vn/'
                                    target='_blank'
                                    title='Agribank'
                                >
                                    <img
                                        className='footer__content-partner-logo'
                                        src={agri}
                                        alt='agribank'
                                    />
                                </a>
                                <a
                                    href='https://www.vietinbank.vn/web/home/vn/index.html'
                                    target='_blank'
                                    title='Vietinbank'
                                >
                                    <img
                                        className='footer__content-partner-logo'
                                        src={viettin}
                                        alt='vietinbank'
                                    />
                                </a>
                                <a
                                    href='https://www.indovinabank.com.vn/'
                                    target='_blank'
                                    title='IVB'
                                >
                                    <img
                                        className='footer__content-partner-logo'
                                        src={ivb}
                                        alt='IVB'
                                    />
                                </a>
                                <a
                                    href='https://webv3.123go.vn/'
                                    target='_blank'
                                    title='123GO'
                                >
                                    <img
                                        className='footer__content-partner-logo'
                                        src={go}
                                        alt='123go'
                                    />
                                </a>
                                <a
                                    href='https://laban.vn/'
                                    target='_blank'
                                    title='Laban'
                                >
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
                                        <a href target='_black'>
                                            <img
                                                src={apple}
                                                alt='apple'
                                                className='footer__content-apps-img'
                                            />
                                        </a>
                                        <a href target='_black'>
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
                                        <a href target='_black'>
                                            <img
                                                src={fb}
                                                alt='facebook'
                                                className='footer__content-apps-img'
                                            />
                                        </a>
                                        <a href target='_black'>
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
                                    href='mailto:itdev.126@gmail.com'
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
