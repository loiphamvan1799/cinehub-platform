import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

const Header = () => {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearch = (e) => {
        if (e.key === 'Enter') {
            console.log('Search query:', searchQuery);
            setSearchQuery('');
        }
    };

    return (
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
                    <li><Link to="/buy-tickets">Mua Vé</Link></li>
                    <li><Link to="/movies">Phim</Link></li>
                    <li><Link to="/products">Sản Phẩm</Link></li>
                    <li><Link to="/cinema-corner">Góc Điện Ảnh</Link></li>
                    <li><Link to="/events">Sự Kiện</Link></li>
                    <li><Link to="/theaters-prices">Rạp/Giá Vé</Link></li>
                </ul>
            </nav>
            <div className="search-bar">
                <input
                    type="text"
                    placeholder="Tìm kiếm..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onKeyPress={handleSearch}
                />
            </div>
            <div className="user-options">
                <Link to="/login">Đăng Nhập</Link>
            </div>
        </header>
    );
};

export default Header;