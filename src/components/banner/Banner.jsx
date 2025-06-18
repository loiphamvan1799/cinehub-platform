import React, { useState } from "react";
import "./styles.css"
import FilterSection from "../filterSection/filterSection";
const Banner = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slides = [
        {
            src: 'https://cdn.galaxycine.vn/media/2025/6/11/cuon-bang-qu-am-2048_1749635966149.jpg',
            alt: 'Cuốn Băng Quỷ Ám',
        },
        {
            src: 'https://cdn.galaxycine.vn/media/2025/6/6/bi-kip-luyen-rong-2048_1749195168873.jpg',
            alt: 'Bí Kíp Luyện Rồng',
        },
        {
            src: 'https://cdn.galaxycine.vn/media/2025/6/14/trang-qunh-3_1749874488932.jpg',
            alt: 'Truyền Thuyết Kim Ngưu',
        },
    ];

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    const goToSlide = (index) => {
        setCurrentSlide(index);
    };

    return (
        <div className="banner">
            {slides.map((slide, index) => (
                <img
                    key={index}
                    src={slide.src}
                    alt={slide.alt}
                    className={index === currentSlide ? 'active' : ''}
                />
            ))}
            <FilterSection />

            <button className="banner-prev" onClick={prevSlide}>
                ❮
            </button>
            <button className="banner-next" onClick={nextSlide}>
                ❯
            </button>
            <div className="banner-nav">
                {slides.map((_, index) => (
                    <span
                        key={index}
                        className={index === currentSlide ? 'active' : ''}
                        onClick={() => goToSlide(index)}
                    ></span>
                ))}
            </div>
        </div>

    );
};
export default Banner;