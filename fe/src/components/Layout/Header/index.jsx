import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Login from '../Login';
import './styles.css';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import MoviesDropdown from './MovieDropdown';

const Header = ({ showingMovies, comingMovies }) => {
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

    const PRODUCT = [
        { label: "Anh Trai Vượt Ngàn Trông Gai" },
        { label: "Galaxy Merch" },
    ];

    const CINEMA_CORNER = [
        { label: "Thể Loại Phim" },
        { label: "Diễn Viên" },
        { label: "Đạo Diễn" },
        { label: "Bình Luận Phim" },
        { label: "Blog Điện Ảnh" },
    ];

    const EVENTS = [
        { label: "Ưu Đãi" },
        { label: "Phim Hay Tháng" },
        { label: "Anh Trai Vượt Ngàn Trông Gai" },
        { label: "Galaxy Merch" },
    ];

    const THEATERS_PRICES = [
        { label: "Galaxy Nguyễn Du" },
        { label: "Galaxy Tân Bình" },
        { label: "Galaxy Kinh Dương Vương" },
        { label: "Galaxy Quang Trung" },
        { label: "Galaxy Trung Chánh" },
        { label: "Galaxy Phạm Văn Chí" },
        { label: "Galaxy Huỳnh Tấn Phát" },
        { label: "Galaxy Đà Nẵng" },
    ];

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
                        <li className='buy-tickets'>
                            <Link to="/buy-tickets">
                                <img src="https://www.galaxycine.vn/_next/static/media/btn-ticket.42d72c96.webp" alt="" />
                            </Link>
                        </li>
                        <li className="relative group">
                            <Link to="/movies" className="py-7 flex text-sm justify-between items-center md:pr-0 pr-5 group hover:text-orange-500 transition-all duration-300 ease-in-out not-italic">
                                Phim
                                <span className="text-xs md:ml-2 md:block hidden group-hover:text-orange-500 transition-all duration-300 ease-in-out text-[#777777]">
                                    <KeyboardArrowDownIcon />
                                </span>
                            </Link>
                            <MoviesDropdown
                                showingMovies={showingMovies}
                                comingMovies={comingMovies}
                            />
                        </li>
                        <li>
                            <Link to="/products">Sản Phẩm <KeyboardArrowDownIcon /></Link>
                            <ul className="dropdownn">
                                {PRODUCT.map((item, index) => (
                                    <li key={index}>{item.label}</li>
                                ))}
                            </ul>
                        </li>
                        <li>
                            <Link to="/cinema-corner">Góc Điện Ảnh <KeyboardArrowDownIcon /></Link>
                            <ul className="dropdownn">
                                {CINEMA_CORNER.map((item, index) => (
                                    <li key={index}>{item.label}</li>
                                ))}
                            </ul>
                        </li>
                        <li>
                            <Link to="/events">Sự Kiện <KeyboardArrowDownIcon /></Link>
                            <ul className="dropdownn">
                                {EVENTS.map((item, index) => (
                                    <li key={index}>{item.label}</li>
                                ))}
                            </ul>
                        </li>
                        <li>
                            <Link to="/theaters-prices">Rạp/Giá Vé <KeyboardArrowDownIcon /></Link>
                            <ul className="dropdownn">
                                {THEATERS_PRICES.map((item, index) => (
                                    <li key={index}>{item.label}</li>
                                ))}
                            </ul>
                        </li>
                    </ul>
                </nav>
                <div className="search-bar">
                    <span className="search-icon" onClick={toggleSearch}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 16 16">
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