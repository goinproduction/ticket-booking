import React from 'react';
import HeaderLogo from '../assets/img/signin-header.png';
// import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useHistory } from 'react-router-dom';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

const Register = () => {
    const history = useHistory();

    const handleClose = () => {
        history.push('/');
    };

    const handleClick = () => {
        history.push('/login');
    };

    // Validation
    const RegisterSchema = Yup.object().shape({
        username: Yup.string()
            .email('Địa chỉ email không hợp lệ')
            .required('Vui lòng nhập email'),
        password: Yup.string()
            .min(4, 'Mật khẩu phải từ 4 đến 60 kí tự')
            .max(60, 'Mật khẩu phải từ 4 đến 60 kí tự')
            .required('Vui lòng nhập mật khẩu'),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref('password'), null], 'Mật khẩu chưa khớp')
            .required('Vui lòng nhập trường này'),
    });

    return (
        <div className='signin signin-vertical'>
            <Formik
                initialValues={{
                    username: '',
                    password: '',
                    confirmPassword: '',
                }}
                validationSchema={RegisterSchema}
            >
                {({ errors, touched }) => (
                    <>
                        <div className='signin-wrapper'>
                            <img
                                src={HeaderLogo}
                                alt='logo'
                                className='signin-header'
                            />
                            <Form>
                                <Field
                                    type='text'
                                    placeholder='Name'
                                    className='sigin-input'
                                    name='name'
                                />

                                <Field
                                    type='email'
                                    placeholder='Email'
                                    className='sigin-input'
                                    name='username'
                                />
                                {errors.username && touched.username ? (
                                    <p className='error-message'>
                                        {errors.username}
                                    </p>
                                ) : null}
                                <Field
                                    type='password'
                                    placeholder='Password'
                                    className='sigin-input'
                                    name='password'
                                />
                                {errors.password && touched.password ? (
                                    <p className='error-message'>
                                        {errors.password}
                                    </p>
                                ) : null}

                                <Field
                                    type='password'
                                    placeholder='Confirm password'
                                    className='sigin-input'
                                    name='confirmPassword'
                                />
                                {errors.confirmPassword &&
                                touched.confirmPassword ? (
                                    <p className='error-message'>
                                        {errors.confirmPassword}
                                    </p>
                                ) : null}

                                <Button
                                    variant='primary'
                                    type='submit'
                                    className='signin-button'
                                >
                                    Đăng ký
                                </Button>
                            </Form>
                            <div className='signin-remember'>
                                <span className='signin-remember_checkbox'>
                                    <input
                                        type='checkbox'
                                        defaultChecked
                                        className='signin-remember_checkbox-icon'
                                    />
                                    <p className='signin-remember_text'>
                                        Ghi nhớ tôi
                                    </p>
                                </span>
                                <p className='signin-remember_text'>
                                    Bạn cần trợ giúp?
                                </p>
                            </div>
                            <div className='has-no-account'>
                                <p className='has-no-account_text'>
                                    Bạn đã có tài khoản?
                                    <a
                                        className='has-no-account_text--link'
                                        onClick={handleClick.bind(this)}
                                    >
                                        Đăng nhập
                                    </a>
                                </p>
                            </div>
                            <div className='recaptcha'>
                                <p className='recaptcha-text'>
                                    Trang này được Google reCAPTCHA bảo vệ để
                                    đảm bảo bạn không phải là robot.
                                    <a className='recaptcha-text--link'>
                                        Tìm hiểu thêm
                                    </a>
                                </p>
                            </div>
                            <div
                                className='signin-close'
                                onClick={handleClose.bind(this)}
                            ></div>
                        </div>
                    </>
                )}
            </Formik>
        </div>
    );
};

export default Register;
