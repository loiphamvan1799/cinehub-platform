import { useState } from 'react';
import HighlightOffTwoToneIcon from '@mui/icons-material/HighlightOffTwoTone';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
import CloseIcon from '@mui/icons-material/Close';
import './styles.css';
import Login from '../Login';

const Singup = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [dateValue, setDateValue] = useState('');

    const handleClearDate = () => {
        setDateValue('');
    };

    return (
        <div className='singup__overlay'>
            <div className='singup__container'>
                <button className="singup__close-button">
                    <span><HighlightOffTwoToneIcon /></span>
                </button>
                <div className="singup__header">
                    <img
                        src="https://www.galaxycine.vn/_next/static/media/icon-login.fbbf1b2d.svg"
                        alt="singup icon"
                        className="singup__icon-image"
                    />
                    <h5 className="singup__title">
                        Đăng Kí Tài Khoản
                    </h5>
                </div>
                <div className="singup__form-container">
                    <form className="singup__form">
                        <label htmlFor="fullName" className="singup__label">Họ và tên</label>
                        <span className="singup__input-wrapper">
                            <input
                                type="text"
                                id="fullName"
                                placeholder="Nhập Họ và tên"
                                className="singup__input"
                                name="fullName"
                            />
                        </span>
                        <label htmlFor="email" className="singup__label">Email</label>
                        <span className="singup__input-wrapper">
                            <input
                                type="text"
                                id="email"
                                placeholder="Nhập Email"
                                className="singup__input"
                                name="email"
                            />
                        </span>
                        <label htmlFor="phone" className="singup__label">Số điện thoại</label>
                        <span className="singup__input-wrapper">
                            <input
                                type="text"
                                id="phone"
                                placeholder="Nhập Số điện thoại"
                                className="singup__input"
                                name="phone"
                            />
                        </span>
                        <div className="singup__gender-wrapper">
                            <div className="singup__gender-option">
                                <input
                                    type="radio"
                                    className="singup__radio"
                                    name="gender"
                                    value="Male"
                                />
                                <label className="singup__radio-label">Nam</label>
                            </div>
                            <div className="singup__gender-option">
                                <input
                                    type="radio"
                                    className="singup__radio"
                                    name="gender"
                                    value="Female"
                                />
                                <label className="singup__radio-label">Nữ</label>
                            </div>
                        </div>
                        <label htmlFor="dob" className="singup__label">Ngày sinh</label>
                        <div className="singup__date-wrapper">
                            <div className="singup__date-container">
                                <span className="singup__input-wrapper">
                                    <input
                                        type="date"
                                        id="dob"
                                        className="singup__date-input"
                                        name="date"
                                        value={dateValue}
                                        onChange={(e) => setDateValue(e.target.value)}
                                        placeholder="Chọn ngày"
                                    />
                                    <button className="singup__clear-date" type="button" onClick={handleClearDate}>
                                        <CloseIcon />
                                    </button>
                                </span>
                            </div>
                        </div>
                        <label htmlFor="password" className="singup__label">Mật khẩu</label>
                        <span className="singup__input-wrapper">
                            <input
                                type={showPassword ? 'text' : 'password'}
                                id="password"
                                placeholder="Nhập Mật khẩu"
                                className="singup__input"
                                name="password"
                            />
                            <span
                                onClick={() => setShowPassword(!showPassword)}
                                className="singup__toggle-password"
                            >
                                {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                            </span>
                        </span>
                        <label htmlFor="confirmPassword" className="singup__label">Nhập lại mật khẩu</label>
                        <span className="singup__input-wrapper">
                            <input
                                type={showConfirmPassword ? 'text' : 'password'}
                                id="confirmPassword"
                                placeholder="Nhập lại mật khẩu"
                                className="singup__input"
                                name="confirmPassword"
                            />
                            <span
                                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                className="singup__toggle-password"
                            >
                                {showConfirmPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                            </span>
                        </span>
                        <div className="singup__checkbox">
                            <input
                                type="checkbox"
                                className="singup__checkbox-input"
                                aria-label="Checkbox"
                            />
                            <p className="singup__checkbox-text">
                                Bằng việc đăng ký tài khoản, tôi đồng ý với{' '}
                                <a href="" target="_blank" rel="" className="singup__link">
                                    Điều khoản dịch vụ
                                </a>{' '}
                                và{' '}
                                <a href="" target="_blank" rel="" className="singup__link">
                                    Chính sách bảo mật
                                </a>{' '}
                                của Galaxy Cinema.
                            </p>
                        </div>
                        <button className="singup__submit-button" type="submit">
                            <span>Hoàn thành</span>
                        </button>
                        <div id="recaptcha-container"></div>
                    </form>
                </div>
                <div className="singup__signup-section">
                    <span className="singup__signup-text">Bạn đả có tài khoản?</span>
                    <button
                        type="button"
                        className="singup__signup-button"
                    >
                        <Login />
                        <span>Đăng Nhập</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Singup;