import { useState, useEffect } from "react";
import Header from "../../components/Layout/Header";
import MovieReview from "../../components/Review";
import PromotionalNews from "../../components/PromotionalNews/PromotionalNews";
import Description from "../../components/Description";
import Footer from "../../components/Layout/Footer";
import { ApiHandlerBanner } from "../../service/api/top/ApiHandlerBanner";
import { dataFakebanners } from "../../service/api/top/fixtureBannerData"
import { ApiHandlerShowing, ApiHandlerComming } from "../../service/api/top/ApiFilms";
import MovieShowing from "../../components/Movie/Movie";
import AdvertiseSection from "../../components/Advertise/AdvertiseSection";
import Banner from "../../components/Banner";
import { ApiHandlerFilmComment } from "../../service/api/top/APiFilmComment";
import { MovieDetail } from "../../components/MovieDetailPage/MovieDetail";

const TopPage = () => {
    // API Banner
    const [banners, setBanners] = useState([]);
    // API Showing and Coming Films
    const [showingMovies, setShowingMovies] = useState([]);
    const [comingMovies, setComingMovies] = useState([]);
    // API Film comment 
    const [filmComments, setFilmComments] = useState([]);
    useEffect(() => {
        const fetchBanners = async () => {
            try {
                const response = await ApiHandlerBanner.fetchAllDataBanners();
                const result = response?.data?.result;
                setBanners(Array.isArray(result) && result.length > 0 ? result : dataFakebanners);
            } catch (error) {
                console.error("Error fetching banners:", error);
                setBanners(dataFakebanners);
            }
        };

        const fetchShowingFilms = async () => {
            try {
                const response = await ApiHandlerShowing.fetchShowingFilms();
                console.log("API response for showing films:", response);
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

        const fetchFilmComment = async () => {
            try {
                const response = await ApiHandlerFilmComment.fetchFilmComment();
                const Comments = response?.data?.result?.map(comment => ({
                    imgSrc: comment.imagePortrait,
                    title: comment.name,
                    view: comment.views,
                })) || [];
                setFilmComments(Comments);
            } catch (error) {
                console.error("Error fetching comment films:", error);
            }
        };

        fetchFilmComment();
        fetchBanners();
        fetchShowingFilms();
        fetchComingFilms();
    }, []);

    return (
        <div className="top-page">
            <Header showingMovies={showingMovies} comingMovies={comingMovies} />
            <div className="main-content">
                {/* <Banner banners={banners} />
            <MovieShowing showingMovies={showingMovies} comingMovies={comingMovies} />
            <MovieReview filmComments={filmComments} />
            <PromotionalNews />
            <AdvertiseSection />
            <Description /> */}
                <MovieDetail />
            </div>
            <Footer />
        </div>
    );
};

export default TopPage;