import React, { useEffect, useState } from 'react';
import './styles.css';

const AdvertiseLeft = () => {
    const slides = [
        { src: 'https://www.galaxycine.vn/_next/static/media/Splash.de33f19c.png', alt: 'Splash' },
        { src: 'https://www.galaxycine.vn/_next/static/media/screen-slider-iphone.3339b3ed.png', alt: 'Screen' },
        { src: 'https://www.galaxycine.vn/_next/static/media/Profile.767d60ee.png', alt: 'Profile' },
        { src: 'https://www.galaxycine.vn/_next/static/media/MovieDetail.52d031b0.png', alt: 'MovieDetail' },
    ];

    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 3000);
        return () => clearInterval(interval);
    }, [slides.length]);

    return (
        <div className="advertise-left relative z-20">
            <img
                alt="img-iphone"
                loading="lazy"
                width="200"
                height="409"
                decoding="async"
                className="advertise-left__phone-img"
                src="https://www.galaxycine.vn/_next/static/media/Frame-iphone-x.78ef1223.svg"
            />
            <div className="advertise-left__carousel">
                <div className="advertise-left__slider-wrapper">
                    <div
                        className="advertise-left__slider-tray"
                        style={{ display: 'flex', transform: `translateX(-${currentSlide * 25}%)`, transition: 'transform 0.5s ease' }}
                    >
                        {slides.map((slide, index) => (
                            <div
                                key={index}
                                className="advertise-left__slide"
                                style={{ width: '25%', paddingBottom: 'unset', height: 'unset' }}
                            >
                                <div className="advertise-left__slide-inner">
                                    <img
                                        alt={slide.alt}
                                        loading="lazy"
                                        width="200"
                                        height="409"
                                        decoding="async"
                                        className="advertise-left__slide-img"
                                        src={slide.src}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdvertiseLeft;