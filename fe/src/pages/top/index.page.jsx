import React, { useState, useEffect } from "react";
import Header from "../../components/layout/header/Header";
import Banner from "../../components/banner/Banner";
import MovieShowing from "../../components/movie/movieShowing/movieShowing";
import MovieReview from "../../components/review/review";
import PromotionalNews from "../../components/promotionalNews/promotionalNews";
import AdvertiseSection from "../../components/Advertise/AdvertiseSection/AdvertiseSection";
import Description from "../../components/Description/Description";
import Footer from "../../components/layout/footer/Footer";
import { ApiHandlerBanner } from "../../service/api/top/ApiHandlerBanner";

const TopPage = () => {

    //API Banner
    const [banners, setBanners] = useState([]);
    useEffect(() => {
        const fetchBanners = async () => {
            try {
                const response = await ApiHandlerBanner.fetchAllDataBanners();
                setBanners(response?.data?.result || []);
            } catch (error) {
                console.error("Error fetching banners:", error);
            }
        };
        fetchBanners();
    }, []);

    return (
        <div className="top-page">
            <Header />
            <Banner banners={banners} />
            <MovieShowing />
            <MovieReview />
            <PromotionalNews />
            <AdvertiseSection />
            <Description />
            <Footer />
        </div>
    );
};

export default TopPage;