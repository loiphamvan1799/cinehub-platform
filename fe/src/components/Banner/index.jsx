import { useState, useEffect, useRef } from "react";
import "./styles.css";
import FilterSection from "../FilterSection";

const Banner = ({ banners }) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [dragStart, setDragStart] = useState(null);
    const [dragEnd, setDragEnd] = useState(null);
    const carouselRef = useRef(null);

    const minDragDistance = 50;

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % banners.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + banners.length) % banners.length);
    };

    const goToSlide = (index) => {
        setCurrentSlide(index);
    };

    const onMouseDown = (e) => {
        setDragStart(e.clientX);
        setDragEnd(null);
        carouselRef.current.style.cursor = "grabbing";
    };

    const onMouseMove = (e) => {
        if (dragStart !== null) {
            setDragEnd(e.clientX);
        }
    };

    const onMouseUp = () => {
        if (!dragStart || !dragEnd) {
            carouselRef.current.style.cursor = "grab";
            return;
        }
        const distance = dragStart - dragEnd;
        const isLeftDrag = distance > minDragDistance;
        const isRightDrag = distance < -minDragDistance;

        if (isLeftDrag) {
            nextSlide();
        } else if (isRightDrag) {
            prevSlide();
        }

        setDragStart(null);
        setDragEnd(null);
        carouselRef.current.style.cursor = "grab";
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
            <div
                className="carousel__wrapper"
                ref={carouselRef}
                onMouseDown={onMouseDown}
                onMouseMove={onMouseMove}
                onMouseUp={onMouseUp}
                onMouseLeave={onMouseUp}
            >
                {banners.map((banner, index) => (
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
                            className={index === currentSlide ? "active" : ""}
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