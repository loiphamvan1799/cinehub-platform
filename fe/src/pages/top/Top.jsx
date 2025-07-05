import React from "react";
import Header from "../../components/layout/header/Header";
import Banner from "../../components/banner/Banner";
import MovieShowing from "../../components/movie/movieShowing/movieShowing";
import MovieReview from "../../components/review/review";
import PromotionalNews from "../../components/promotionalNews/promotionalNews";
import AdvertiseSection from "../../components/Advertise/AdvertiseSection/AdvertiseSection";
import Description from "../../components/Description/Description";
import Footer from "../../components/layout/footer/Footer";

const Top = () => {
    return (
        <div className="top-page">
            <Header />
            <Banner />
            <MovieShowing />
            <MovieReview />
            <PromotionalNews />
            <AdvertiseSection />
            <Description />
            <Footer />
        </div>
    );
};

export default Top;