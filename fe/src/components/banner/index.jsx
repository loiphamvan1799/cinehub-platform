import { useState, useEffect } from "react";
import "./styles.css";
import FilterSection from "../FilterSection";

const Banner = ({ banners }) => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % banners.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + banners.length) % banners.length);
    };

    const goToSlide = (index) => {
        setCurrentSlide(index);
    };

    useEffect(() => {
        if (banners.length === 0) return;
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % banners.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [banners.length]);


    return (
        <div className="banner">
            <div className="carousel__wrapper">
                {banners.length > 0 && banners.map((banner, index) => (
                    <img
                        key={banner.id || index}
                        src={banner.src}
                        alt={banner.alt || ""}
                        className={index === currentSlide ? "active" : ""}
                        draggable="false"
                    />
                ))}
                <button className="banner-prev" onClick={prevSlide}>
                    ❮
                </button>
                <button className="banner-next" onClick={nextSlide}>
                    ❯
                </button>
                <div className="banner-nav">
                    {banners.map((_, index) => (
                        <span
                            key={index}
                            className={index === currentSlide ? 'active' : ''}
                            onClick={() => goToSlide(index)}
                        ></span>
                    ))}
                </div>
            </div>
            <FilterSection />
        </div>
    );
};

export default Banner;