import React, { useState, useEffect } from "react";
import MovieCard from './movieCard/MovieCard';
import ButtonWrapper from '../../layout/ButtonWrapper/ButtonWrapper';
import LocationModal from '../LocationModal/LocationModal';
import './styles.css';

const movies = [
    {
        imgSrc: "https://cdn.galaxycine.vn/media/2025/2/17/bi-kip-luyen-rong-500_1739776695143.jpg",
        title: "Bí Kíp Luyện Rồng",
        rating: "9.3",
        age: "K",
    },
    {
        imgSrc: "https://cdn.galaxycine.vn/media/2025/6/3/cuon-bang-qu-am-500_1748940630172.jpg",
        title: "Cuốn Băng Quỷ Ám",
        rating: "7.3",
        age: "T13",
    },
    {
        imgSrc: "https://cdn.galaxycine.vn/media/2025/5/27/hi5-500_1748319635634.jpg",
        title: "Bộ Sưu Đăng Cá",
        rating: "8.7",
        age: "T16",
    },
    {
        imgSrc: "https://cdn.galaxycine.vn/media/2025/6/10/miku-sneak-500_1749529927610.jpg",
        title: "Colorful Stage! Một Miku Không Thể Hát",
        rating: "9.5",
        age: "K",
    },
    {
        imgSrc: "https://cdn.galaxycine.vn/media/2024/2/27/anatomy-of-a-fall_1709024807223.png",
        title: "Kỳ Án Trên Đồi Tuyet",
        rating: "8.7",
        age: "T16",
    },
    {
        imgSrc: "https://cdn.galaxycine.vn/media/2025/6/11/horror-express_1749624500017.jpg",
        title: "Bóng Ma Cõi Mạng",
        rating: "7.6",
        age: "T16",
    },
    {
        imgSrc: "https://cdn.galaxycine.vn/media/2025/6/2/dan-da-dan-1_1748857295325.jpg",
        title: "Dan Da Dan: Tà Nhãn",
        rating: "9.1",
        age: "T16",
    },
    {
        imgSrc: "https://cdn.galaxycine.vn/media/2025/6/20/28-year-later-500_1750407074215.jpg",
        title: "28 Năm Sau Tận Thế",
        rating: "7.5",
        age: "T18",
    },
    {
        imgSrc: "https://cdn.galaxycine.vn/media/2025/6/20/mot-nua-hoan-hao-500_1750391504780.jpg",
        title: "Một Nửa Hoàn Hảo",
        rating: "7.2",
        age: "T18",
    },
    {
        imgSrc: "https://cdn.galaxycine.vn/media/2025/6/3/cuon-bang-qu-am-500_1748940630172.jpg",
        title: "Cuốn Băng Quỷ Ám",
        rating: "7.3",
        age: "T13",
    },
];

const comingSoonMovies = [
    {
        imgSrc: "https://cdn.galaxycine.vn/media/2025/6/20/28-year-later-500_1750407074215.jpg",
        title: "28 Năm Sau Tận Thế",
        rating: "7.5",
        age: "T18",
    },
    {
        imgSrc: "https://cdn.galaxycine.vn/media/2025/6/19/ultraman-2_1750321630539.jpg",
        title: "Phim Điện Ảnh Ultraman Arc: Ánh Sáng Và Ác Quỷ Đối Đầu",
        rating: "7.4",
        age: "K",
    },
    {
        imgSrc: "https://cdn.galaxycine.vn/media/2025/6/10/halaba-500_1749539454772.jpg",
        title: "Halabala: Rừng Ma Tế Xác",
        rating: "8.1",
        age: "T18",
    },
    {
        imgSrc: "https://cdn.galaxycine.vn/media/2025/4/11/megan-500_1744365069100.jpg",
        title: "M3GAN 2.0",
        rating: "8.3",
        age: "T16",
    },
    {
        imgSrc: "https://cdn.galaxycine.vn/media/2025/6/10/halaba-500_1749539454772.jpg",
        title: "Cuộc Sống Màu Hồng",
        rating: "7.0",
        age: "T13",
    },
    {
        imgSrc: "https://cdn.galaxycine.vn/media/2025/6/19/dieu-uoc-cuoi-cung-500_1750327555016.jpg",
        title: "Điều Ước Cuối Cùng",
        rating: "7.4",
        age: "T16",
    },
    {
        imgSrc: "https://cdn.galaxycine.vn intl/media/2025/6/20/mot9631454780.jpg",
        title: "Một Nửa Hoàn Hảo",
        rating: "7.2",
        age: "T18",
    },
    {
        imgSrc: "https://cdn.galaxycine.vn/media/2025/6/3/cuon-bang-qu-am-500_1748940630172.jpg",
        title: "Cuốn Băng Quỷ Ám",
        rating: "7.3",
        age: "T13",
    },
    {
        imgSrc: "https://cdn.galaxycine.vn/media/2025/6/20/mot-nua-hoan-hao-500_1750391504780.jpg",
        title: "Một Nửa Hoàn Hảo",
        rating: "7.2",
        age: "T18",
    },
    {
        imgSrc: "https://cdn.galaxycine.vn/media/2025/6/3/cuon-bang-qu-am-500_1748940630172.jpg",
        title: "Cuốn Băng Quỷ Ám",
        rating: "7.3",
        age: "T13",
    },
];

const movieImax = [
    {
        imgSrc: "https://cdn.galaxycine.vn/media/2025/6/19/dieu-uoc-cuoi-cung-500_1750327555016.jpg",
        title: "Điều Ước Cuối Cùng",
        rating: "7.4",
        age: "T16",
    },
    {
        imgSrc: "https://cdn.galaxycine.vn/media/2025/6/20/mot-nua-hoan-hao-500_1750391504780.jpg",
        title: "Một Nửa Hoàn Hảo",
        rating: "7.2",
        age: "T18",
    },
    {
        imgSrc: "https://cdn.galaxycine.vn/media/2025/6/3/cuon-bang-qu-am-500_1748940630172.jpg",
        title: "Cuốn Băng Quỷ Ám",
        rating: "7.3",
        age: "T13",
    },
    {
        imgSrc: "https://cdn.galaxycine.vn/media/2025/6/19/ultraman-2_1750321630539.jpg",
        title: "Phim Điện Ảnh Ultraman Arc: Ánh Sáng Và Ác Quỷ Đối Đầu",
        rating: "7.4",
        age: "K",
    },
    {
        imgSrc: "https://cdn.galaxycine.vn/media/2025/6/11/horror-express_1749624500017.jpg",
        title: "Bóng Ma Cõi Mạng",
        rating: "7.6",
        age: "T16",
    },
];

const MovieShowing = () => {
    const [activeTab, setActiveTab] = useState('nowShowing');
    const [displayCount, setDisplayCount] = useState(8);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedLocation, setSelectedLocation] = useState('Toàn Quốc');

    const handleTabClick = (e, tab) => {
        e.preventDefault();
        setActiveTab(tab);
        setDisplayCount(8);
    };

    const handleShowMore = () => {
        setDisplayCount(Infinity);
    };

    const handleOpenModal = (e) => {
        e.preventDefault();
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    const handleSelectLocation = (location) => {
        setSelectedLocation(location);
        setIsModalOpen(false);
    };

    const currentMovies =
        activeTab === 'nowShowing' ? movies :
            activeTab === 'comingSoon' ? comingSoonMovies :
                movieImax;

    const displayedMovies = currentMovies.slice(0, displayCount);

    return (
        <div>
            <div className="movieFilter">
                <div className="filterNav">
                    <h1 className="filterTitle">
                        <span className="vertical-bar"></span> PHIM
                    </h1>
                    <a
                        href="#"
                        className={activeTab === 'nowShowing' ? 'active' : ''}
                        onClick={(e) => handleTabClick(e, 'nowShowing')}
                    >
                        Đang chiếu
                    </a>
                    <a
                        href="#"
                        className={activeTab === 'comingSoon' ? 'active' : ''}
                        onClick={(e) => handleTabClick(e, 'comingSoon')}
                    >
                        Sắp chiếu
                    </a>
                    <a
                        href="#"
                        className={activeTab === 'movieImax' ? 'active' : ''}
                        onClick={(e) => handleTabClick(e, 'movieImax')}
                    >
                        Phim IMAX
                    </a>
                    <a href="#" className="with-icon green-text" onClick={handleOpenModal}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="14" height="14">
                            <path fill="currentColor" d="M256 0c17.7 0 32 14.3 32 32V66.7C368.4 80.1 431.9 143.6 445.3 224H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H445.3C431.9 368.4 368.4 431.9 288 445.3V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V445.3C143.6 431.9 80.1 368.4 66.7 288H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H66.7C80.1 143.6 143.6 80.1 224 66.7V32c0-17.7 14.3-32 32-32zM128 256a128 128 0 1 0 256 0 128 128 0 1 0 -256 0zm128-80a80 80 0 1 1 0 160 80 80 0 1 1 0-160z"></path>
                        </svg>
                        {selectedLocation}
                    </a>
                </div>
            </div>
            <section className="moviesSection">
                {displayedMovies.map((movie, index) => (
                    <MovieCard key={index} {...movie} />
                ))}
            </section>
            <ButtonWrapper
                movieCount={currentMovies.length}
                displayCount={displayCount}
                onShowMore={handleShowMore}
            />
            <LocationModal
                isOpen={isModalOpen}
                onClose={handleCloseModal}
                onSelectLocation={handleSelectLocation}
            />
        </div>
    );
};

export default MovieShowing;