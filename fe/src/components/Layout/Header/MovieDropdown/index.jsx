import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';
import LocalActivityOutlinedIcon from '@mui/icons-material/LocalActivityOutlined';
import StarIcon from '@mui/icons-material/Star';

const MoviesDropdown = ({ showingMovies, comingMovies }) => {
    const imax = [
        {
            title: "F1®",
            imgSrc: "https://cdn.galaxycine.vn/media/2025/4/28/f1-500_1745833699523.jpg",
            rating: 7.8,
            age: "T16",
        },
        {
            title: "The Fantastic Four: First Steps",
            imgSrc: "https://cdn.galaxycine.vn/media/2025/7/21/fantastic-four-1_1753081324865.jpg",
            rating: 9.5,
            age: "T13",
        },
        {
            title: "Demon Slayer -Kimetsu No Yaiba- The Movie: Infinity Castle",
            imgSrc: "https://cdn.galaxycine.vn/media/2025/8/5/banner-fan-screening-1200x1800-copy_1754388013574.jpg",
            rating: 9.8,
            age: "T16",
        },
        {
            title: "Tron: Ares",
            imgSrc: "https://cdn.galaxycine.vn/media/2025/7/21/tron-ares-500_1753081742548.jpg",
            rating: 8,
            age: null,
        },
    ];

    return (
        <div className="dropdown-container">
            <div className="dropdown-content">
                <div className="movie-section">
                    <div>
                        <Link to="/phim-dang-chieu/" className="section-title">
                            <span className="section-indicator"></span>
                            Phim Đang Chiếu
                        </Link>
                    </div>
                    <ul className="movie-list">
                        {Array.isArray(showingMovies) && showingMovies.length > 0 ? (
                            showingMovies.map((movie, index) => (
                                <li key={movie.id || index} className="movie-item">
                                    <div className="movie-card">
                                        <div className="card-image">
                                            <div className="hover-overlay">
                                                <div className="hover-content">
                                                    <Link className="buy-ticket-btn">
                                                        <LocalActivityOutlinedIcon className="ticket-icon" />
                                                        Mua vé
                                                    </Link>
                                                </div>
                                            </div>
                                            <Link>
                                                <img
                                                    alt={movie.title}
                                                    src={movie.imgSrc}
                                                    width="140"
                                                    height="200"
                                                    className="movie-poster"
                                                    style={{ color: 'transparent' }}
                                                />
                                            </Link>
                                            <div className="rating">
                                                <p className="rating-text rating-frame">
                                                    <StarIcon className="star-icon" />
                                                    <span className="rating-value">{movie.rating}</span>
                                                </p>
                                            </div>
                                            {movie.age && (
                                                <div className="age-limit">
                                                    <span className="age-badge">{movie.age}</span>
                                                </div>
                                            )}
                                        </div>
                                        <div className="card-title">
                                            <Link className="movie-title">{movie.title}</Link>
                                        </div>
                                    </div>
                                </li>
                            ))
                        ) : (
                            <li>Không có phim nào đang chiếu</li>
                        )}
                    </ul>
                </div>
                <div className="movie-section">
                    <div>
                        <Link to="/phim-sap-chieu/" className="section-title">
                            <span className="section-indicator"></span>
                            Phim sắp chiếu
                        </Link>
                    </div>
                    <ul className="movie-list">

                        {Array.isArray(comingMovies) && comingMovies.length > 0 ? (
                            comingMovies.map((movie, index) => (
                                <li key={movie.id || index} className="movie-item">
                                    <div className="movie-card">
                                        <div className="card-image">
                                            <div className="hover-overlay">
                                                <div className="hover-content">
                                                    <Link className="buy-ticket-btn">
                                                        <LocalActivityOutlinedIcon className="ticket-icon" />
                                                        Mua vé
                                                    </Link>
                                                </div>
                                            </div>
                                            <Link>
                                                <img alt={movie.title} src={movie.imgSrc} width="140" height="200" className="movie-poster" style={{ color: 'transparent' }} />
                                            </Link>
                                            <div className="rating">
                                                <p className="rating-text rating-frame">
                                                    <StarIcon className="star-icon" />
                                                    <span className="rating-value">{movie.rating}</span>
                                                </p>
                                            </div>
                                            {movie.age && (
                                                <div className="age-limit">
                                                    <span className="age-badge">{movie.age}</span>
                                                </div>
                                            )}
                                        </div>
                                        <div className="card-title">
                                            <Link className="movie-title">{movie.title}</Link>
                                        </div>
                                    </div>
                                </li>
                            ))
                        ) : (
                            <li>Không có phim nào sắp chiếu</li>
                        )}
                    </ul>
                </div>
                <div className="movie-section">
                    <div>
                        <Link to="/phim-imax/" className="section-title">
                            <span className="section-indicator"></span>
                            Phim IMAX
                        </Link>
                    </div>
                    <ul className="movie-list">
                        {imax.map((movie, index) => (
                            <li key={index} className="movie-item">
                                <div className="movie-card">
                                    <div className="card-image">
                                        <div className="hover-overlay">
                                            <div className="hover-content">
                                                <Link className="buy-ticket-btn">
                                                    <LocalActivityOutlinedIcon className="ticket-icon" />
                                                    Mua vé
                                                </Link>
                                            </div>
                                        </div>
                                        <Link>
                                            <img alt={movie.title} src={movie.imgSrc} width="140" height="200" className="movie-poster" style={{ color: 'transparent' }} />
                                        </Link>
                                        <div className="rating">
                                            <p className="rating-text rating-frame">
                                                <StarIcon className="star-icon" />
                                                <span className="rating-value">{movie.rating}</span>
                                            </p>
                                        </div>
                                        {movie.age && (
                                            <div className="age-limit">
                                                <span className="age-badge">{movie.age}</span>
                                            </div>
                                        )}
                                    </div>
                                    <div className="card-title">
                                        <Link className="movie-title">{movie.title}</Link>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default MoviesDropdown;