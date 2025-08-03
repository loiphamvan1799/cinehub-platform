import React, { useState } from 'react';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
import HighlightOffTwoToneIcon from '@mui/icons-material/HighlightOffTwoTone';
import './styles.css';
import Signup from '../Singup';

const Login = ({ onClose, onSwitchToSignup }) => {
    const [showPassword, setShowPassword] = useState(false);

    const handleClose = () => {
        if (onClose) {
            onClose();
        }
    };

    const handleSwitchToSignup = () => {
        if (onSwitchToSignup) {
            onSwitchToSignup();
        }
    };

    return (
        <div className="login__container">
            <div className="login__content">
                <button className="login__close-button" onClick={handleClose}>
                    <span><HighlightOffTwoToneIcon /></span>
                </button>
                <div className="login__header">
                    <img
                        src="https://www.galaxycine.vn/_next/static/media/icon-login.fbbf1b2d.svg"
                        alt="Login icon"
                        className="login__icon-image"
                    />
                    <h5 className="login__title">
                        Đăng Nhập Tài Khoản
                    </h5>
                </div>
                <div className="login__form-container">
                    <form className="login__form">
                        <label htmlFor="email" className="login__label">Email</label>
                        <span className="login__input-wrapper">
                            <input
                                type="text"
                                placeholder="Nhập Email"
                                className="login__input"
                                id="email"
                            />
                        </span>
                        <label htmlFor="password" className="login__label">Mật Khẩu</label>
                        <span className="login__input-wrapper login__password-wrapper">
                            <input
                                type={showPassword ? 'text' : 'password'}
                                placeholder="Nhập Mật khẩu"
                                className="login__input"
                                id="password"
                            />
                            <span
                                onClick={() => setShowPassword(!showPassword)}
                                className="login__toggle-password"
                            >
                                {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                            </span>
                        </span>
                        <button className="login__submit-button" type="submit">Đăng Nhập</button>
                        <div className="login__forgot-password">
                            <a href="#" className="login__link">Quên mật khẩu?</a>
                        </div>
                    </form>
                </div>
                <div className="login__signup-section">
                    <span className="login__signup-text">Bạn chưa có tài khoản?</span>
                    <button
                        type="button"
                        className="login__signup-button"
                        onClick={handleSwitchToSignup}
                    >
                        <Signup />
                        <span>Đăng Kí</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Login;