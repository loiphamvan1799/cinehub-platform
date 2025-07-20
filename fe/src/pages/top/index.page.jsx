import React, { useState, useEffect } from "react";
import Header from "../../components/layout/header/Header";
import Banner from "../../components/banner/Banner";
import MovieReview from "../../components/review/review";
import PromotionalNews from "../../components/promotionalNews/promotionalNews";
import AdvertiseSection from "../../components/Advertise/AdvertiseSection/AdvertiseSection";
import Description from "../../components/Description/Description";
import Footer from "../../components/layout/footer/Footer";
import { ApiHandlerBanner } from "../../service/api/top/ApiHandlerBanner";
import { dataFakebanners } from "../../service/api/top/fixtureBannerData"
import { ApiHandlerShowing, ApiHandlerComming } from "../../service/api/top/ApiFilms";
import MovieShowing from "../../components/movie/movieShowing/movie.tsx";
const TopPage = () => {
    // API Banner
    const [banners, setBanners] = useState([]);
    // API Showing and Coming Films
    const [showingMovies, setShowingMovies] = useState([]);
    const [comingMovies, setComingMovies] = useState([]);

    useEffect(() => {
        const fetchBanners = async () => {
            try {
                const response = await ApiHandlerBanner.fetchAllDataBanners();
                setBanners(response?.data?.result || dataFakebanners);
            } catch (error) {
                console.error("Error fetching banners:", error);
                setBanners(dataFakebanners);
            }
        };

        const fetchShowingFilms = async () => {
            try {
                const response = await ApiHandlerShowing.fetchShowingFilms();
                const movies = response?.data?.result?.map(movie => ({
                    imgSrc: movie.imagePortrait,
                    title: movie.name,
                    rating: movie.rate.toString(),
                    age: movie.age,
                })) || [];
                setShowingMovies(movies);
            } catch (error) {
                console.error("Error fetching showing films:", error);
            }
        };

        const fetchComingFilms = async () => {
            try {
                const response = await ApiHandlerComming.fetchComingFilms();
                const movies = response?.data?.result?.map(movie => ({
                    imgSrc: movie.imagePortrait,
                    title: movie.name,
                    rating: movie.rate.toString(),
                    age: movie.age,
                })) || [];
                setComingMovies(movies);
            } catch (error) {
                console.error("Error fetching coming films:", error);
            }
        };

        fetchBanners();
        fetchShowingFilms();
        fetchComingFilms();
    }, []);

    return (
        <div className="top-page">
            <Header />
            <Banner banners={banners} />
            <MovieShowing showingMovies={showingMovies} comingMovies={comingMovies} />
            <MovieReview />
            <PromotionalNews />
            <AdvertiseSection />
            <Description />
            <Footer />
        </div>
    );
};

export default TopPage;