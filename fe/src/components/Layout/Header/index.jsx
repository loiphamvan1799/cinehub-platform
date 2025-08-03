import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Login from '../Login';
import './styles.css';

const Header = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [isSearchVisible, setIsSearchVisible] = useState(false);
    const [isLoginVisible, setIsLoginVisible] = useState(false);
    const loginModalRef = useRef(null);

    const handleSearch = (e) => {
        if (e.key === 'Enter') {
            console.log('Search query:', searchQuery);
            setSearchQuery('');
        }
    };

    const toggleSearch = () => {
        setIsSearchVisible(!isSearchVisible);
    };

    const toggleLogin = () => {
        setIsLoginVisible(!isLoginVisible);
    };

    const handleOutsideClick = (e) => {
        if (loginModalRef.current && !loginModalRef.current.contains(e.target)) {
            setIsLoginVisible(false);
        }
    };

    useEffect(() => {
        if (isLoginVisible) {
            document.body.classList.add('login-modal-open');
            document.addEventListener('mousedown', handleOutsideClick);
        } else {
            document.body.classList.remove('login-modal-open');
            document.removeEventListener('mousedown', handleOutsideClick);
        }
        return () => {
            document.body.classList.remove('login-modal-open');
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, [isLoginVisible]);

    return (
        <>
            <header className="header">
                <div className="logo">
                    <Link to="/">
                        <img
                            src="https://www.galaxycine.vn/_next/static/media/galaxy-logo-mobile.074abeac.png"
                            alt="Galaxy Cinema Logo"
                        />
                    </Link>
                </div>
                <nav>
                    <ul>
                        <li className='buy-tickets'><Link to="/buy-tickets"><img src="https://www.galaxycine.vn/_next/static/media/btn-ticket.42d72c96.webp" alt="" /></Link></li>
                        <li>
                            <Link to="/movies">Phim <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="10" height="10"><path fill="currentColor" d="M201.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 274.7 86.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" /></svg></Link>
                        </li>
                        <li>
                            <Link to="/products">Sản Phẩm <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="10" height="10"><path fill="currentColor" d="M201.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 274.7 86.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" /></svg></Link>
                            <ul className="dropdownn">
                                <li>Anh Trai Vượt Ngàn Trông Gai</li>
                                <li>Galaxy Merch</li>
                            </ul>
                        </li>
                        <li>
                            <Link to="/cinema-corner">Góc Điện Ảnh <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="10" height="10"><path fill="currentColor" d="M201.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 274.7 86.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" /></svg></Link>
                            <ul className="dropdownn" >
                                <li>Thể Loại Phim</li>
                                <li>Diễn Viên</li>
                                <li>Đạo Diễn</li>
                                <li>Bình Luận Phim</li>
                                <li>Blog Điện Ảnh</li>
                            </ul>
                        </li>
                        <li>
                            <Link to="/events">Sự Kiện <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="10" height="10"><path fill="currentColor" d="M201.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 274.7 86.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" /></svg></Link>
                            <ul className="dropdownn">
                                <li>Ưu Đãi</li>
                                <li>Phim Hay Tháng</li>
                                <li>Anh Trai Vượt Ngàn Trông Gai</li>
                                <li>Galaxy Merch</li>
                            </ul>
                        </li>
                        <li>
                            <Link to="/theaters-prices">Rạp/Giá Vé <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="10" height="10"><path fill="currentColor" d="M201.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 274.7 86.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" /></svg></Link>
                            <ul className="dropdownn">
                                <li>Galaxy Nguyễn Du</li>
                                <li>Galaxy Tân Bình</li>
                                <li>Galaxy Kinh Dương Vương</li>
                                <li>Galaxy Quang Trung</li>
                                <li>Galaxy Trung Chánh</li>
                                <li>Galaxy Phạm Văn Chí</li>
                                <li>Galaxy Huỳnh Tấn Phát</li>
                                <li>Galaxy Đà Nẵng</li>
                            </ul>
                        </li>
                    </ul>
                </nav>
                <div className="search-bar">
                    <span className="search-icon" onClick={toggleSearch}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                        </svg>
                    </span>
                    {isSearchVisible && (
                        <input
                            type="text"
                            placeholder="Tìm kiếm..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            onKeyPress={handleSearch}
                        />
                    )}
                </div>
                <div className="user-options">
                    <span onClick={toggleLogin} className="login-link">Đăng Nhập</span>
                </div>
            </header>
            {isLoginVisible && (
                <div className="login-modal">
                    <div ref={loginModalRef} className="login-modal-content">
                        <Login onClose={toggleLogin} />
                    </div>
                </div>
            )}
        </>
    );
};

export default Header;