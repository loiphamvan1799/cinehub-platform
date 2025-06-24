import React from "react";
import MovieCard from './movieCard/MovieCard';
import ButtonWrapper from '././ButtonWrapper/ButtonWrapper';
import './styles.css'


const movies = [
    {
        imgSrc: "https://cdn.galaxycine.vn/media/2025/2/17/bi-kip-luyen-rong-500_1739776695143.jpg",
        title: "Bi Kíp Luyện Rồng",
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
        title: "Colorful Stage! Miku Không Thể",
        rating: "9.5",
        age: "K",
    },
    {
        imgSrc: "https://cdn.galaxycine.vn/media/2024/2/27/anatomy-of-a-fall_1709024807223.png",
        title: "Kỳ Án Trên Đồi Tuyết",
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
];

const MovieShowing = () => {
    return (
        <div>
            <div className="movieFilter">
                <div className="filterNav">
                    <h1 className="filterTitle">
                        <span className="vertical-bar"></span> PHIM
                    </h1>
                    <a href="#" className="active">Đang chiếu</a>
                    <a href="#">Sắp chiếu</a>
                    <a href="#">Phim IMAX</a>
                    <a href="#" className="with-icon green-text">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="14" height="14">
                            <path fill="currentColor" d="M256 0c17.7 0 32 14.3 32 32V66.7C368.4 80.1 431.9 143.6 445.3 224H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H445.3C431.9 368.4 368.4 431.9 288 445.3V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V445.3C143.6 431.9 80.1 368.4 66.7 288H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H66.7C80.1 143.6 143.6 80.1 224 66.7V32c0-17.7 14.3-32 32-32zM128 256a128 128 0 1 0 256 0 128 128 0 1 0 -256 0zm128-80a80 80 0 1 1 0 160 80 80 0 1 1 0-160z"></path>
                        </svg>
                        Toàn Quốc
                    </a>
                </div>
            </div>
            <section className="moviesSection">
                {movies.map((movie, index) => (
                    <MovieCard key={index} {...movie} />
                ))}
            </section>

            <ButtonWrapper />
        </div>
    );
};

export default MovieShowing;
