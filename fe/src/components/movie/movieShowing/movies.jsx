import React, { useState } from "react";
import MovieCard from './movieCard/MovieCard';
import ButtonWrapper from '../../layout/ButtonWrapper/ButtonWrapper';
import LocationModal from '../LocationModal/LocationModal';
import './styles.css';
import "bootstrap/dist/css/bootstrap.min.css";

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

const MovieShowing = ({ showingMovies, comingMovies }) => {
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
        activeTab === 'nowShowing' ? showingMovies :
            activeTab === 'comingSoon' ? comingMovies :
                movieImax;

    const displayedMovies = currentMovies.slice(0, displayCount);

    return (
        <div>
            <div className="movieFilter">
                <div className="filterNav ">
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
                    <MovieCard key={movie.id || index} {...movie} />
                ))}
            </section>
            {displayedMovies.length === 0 && (
                <div className="alert alert-danger" role="alert">
                    Hiện tại Data máy chủ đang bị lỗi chúng tôi đang cố gắng sữa mong bạn chờ trong giây lát :))
                </div>
            )}
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