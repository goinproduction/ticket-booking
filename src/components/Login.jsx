import React from 'react';
import HeaderLogo from '../assets/img/signin-header.png';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useHistory } from 'react-router-dom';

const Login = () => {
    const history = useHistory();

    const handleClose = () => {
        history.push('/');
    };

    const handleClick = () => {
        history.push('/register');
    };
    return (
        <div className='signin signin-vertical'>
            <div className='signin-wrapper'>
                <img src={HeaderLogo} alt='logo' className='signin-header' />
                <Form>
                    <Form.Group className='mb-3' controlId='formBasicEmail'>
                        <Form.Control
                            type='email'
                            placeholder='Email'
                            className='sigin-input'
                        />
                    </Form.Group>

                    <Form.Group className='mb-3' controlId='formBasicPassword'>
                        <Form.Control
                            type='password'
                            placeholder='Password'
                            className='sigin-input'
                        />
                    </Form.Group>
                    <Button
                        variant='primary'
                        type='submit'
                        className='signin-button'
                    >
                        Đăng nhập
                    </Button>
                </Form>
                <div className='signin-remember'>
                    <span className='signin-remember_checkbox'>
                        <input
                            type='checkbox'
                            checked
                            className='signin-remember_checkbox-icon'
                        />
                        <p className='signin-remember_text'>Ghi nhớ tôi</p>
                    </span>
                    <p className='signin-remember_text'>Bạn cần trợ giúp?</p>
                </div>
                <div className='has-no-account'>
                    <p className='has-no-account_text'>
                        Bạn chưa có tài khoản?
                        <a
                            className='has-no-account_text--link'
                            onClick={handleClick.bind(this)}
                        >
                            Đăng ký ngay
                        </a>
                    </p>
                </div>
                <div className='recaptcha'>
                    <p className='recaptcha-text'>
                        Trang này được Google reCAPTCHA bảo vệ để đảm bảo bạn
                        không phải là robot.
                        <a className='recaptcha-text--link'>Tìm hiểu thêm</a>
                    </p>
                </div>
                <div
                    className='signin-close'
                    onClick={handleClose.bind(this)}
                ></div>
            </div>
        </div>
    );
};

export default Login;
