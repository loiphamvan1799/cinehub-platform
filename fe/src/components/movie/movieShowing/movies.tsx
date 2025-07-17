import React, { useState } from "react";
import ButtonWrapper from '../../layout/ButtonWrapper/ButtonWrapper';
import LocationModal from '../LocationModal/LocationModal';
import './styles.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { Movie } from '../../../types/Movie';
import MovieCard from "./movieCard/MovieCard";

interface MovieShowingProps {
    showingMovies: Movie[];
    comingMovies: Movie[];
}

const MovieShowing = ({ showingMovies, comingMovies }: MovieShowingProps) => {
    const MAX_MOVIE_SHOWMORE = 8;
    const [activeTab, setActiveTab] = useState<'nowShowing' | 'comingSoon' | 'movieImax'>('nowShowing');
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [selectedLocation, setSelectedLocation] = useState<string>('Toàn Quốc');

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