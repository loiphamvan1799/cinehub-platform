import React, { useState } from "react";
import ButtonWrapper from '../../Layout/ButtonWrapper';
import LocationModal from '../LocationModal';
import './styles.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { Movie } from '../../../types/Movie';
import MovieCard from "../MovieCard";
import MyLocationIcon from '@mui/icons-material/MyLocation';

interface MovieProps {
    showingMovies: Movie[];
    comingMovies: Movie[];
}

const MovieShowing = ({ showingMovies, comingMovies }: MovieProps) => {
    const MAX_MOVIE_SHOWMORE = 8;
    const [activeTab, setActiveTab] = useState<'nowShowing' | 'comingSoon' | 'movieImax'>('nowShowing');
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [selectedLocation, setSelectedLocation] = useState<string>('Toàn Quốc');

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

    const handleTabClick = (e: React.MouseEvent<HTMLAnchorElement>, tab: 'nowShowing' | 'comingSoon' | 'movieImax') => {
        e.preventDefault();
        setActiveTab(tab);
    };

    const handleOpenModal = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    const handleSelectLocation = (location: string) => {
        setSelectedLocation(location);
        setIsModalOpen(false);
    };

    const currentMovies: Movie[] =
        activeTab === 'nowShowing' ? showingMovies :
            activeTab === 'comingSoon' ? comingMovies :
                movieImax;

    const displayCount = currentMovies.length > MAX_MOVIE_SHOWMORE ? MAX_MOVIE_SHOWMORE : currentMovies.length;
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
                        <MyLocationIcon />
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
                    Hiện tại Data máy chủ đang bị lỗi chúng tôi đang cố gắng sửa mong bạn chờ trong giây lát :))
                </div>
            )}
            <ButtonWrapper movieCount={currentMovies.length} />
            <LocationModal
                isOpen={isModalOpen}
                onClose={handleCloseModal}
                onSelectLocation={handleSelectLocation}
            />
        </div>
    );
};

export default MovieShowing;