import React, { useState } from "react";
import ReviewCard from './ReviewCard';
import ButtonWrapper from '../layout/ButtonWrapper';
import './styles.css';
import "bootstrap/dist/css/bootstrap.min.css";

const reviewComingSoonMovies = [
    {
        imgSrc: "https://www.galaxycine.vn/media/2025/4/17/750_1744861121901.jpg",
        title: "Final Destination Bloodlines: Hé Lộ Bí Mật Về Vòng Lặp Tử Thần",
        view: 114,
    },
    {
        imgSrc: "https://www.galaxycine.vn/media/2025/3/14/750_1741938000122.jpg",
        title: "Bùi Thạc Chuyên Và 11 Năm Tâm Huyết Với Địa Đạo: Mặt Trời Trong Bóng Tối",
        view: 121,
    },
    {
        imgSrc: "https://www.galaxycine.vn/media/2025/1/18/750_1737219168624.jpg",
        title: "Nụ Hôn Bạc Tỷ: Thúy Kiều - Thúy Vân Phiên Bản 2025?",
        view: 112,
    },
    {
        imgSrc: "https://www.galaxycine.vn/media/2024/8/13/mufasa-750_1723533692413.jpg",
        title: "Mufasa: The Lion King Tiết Lộ Hành Trình Mufasa Trở Thành Vua Sư Tử Vĩ Đại",
        view: 152,
    },
];

const MovieReview = ({ filmComments }) => {
    const [activeTab, setActiveTab] = useState('nowShowing');

    const handleTabClick = (e, tab) => {
        e.preventDefault();
        setActiveTab(tab);
    };

    const currentReviewMovies = activeTab === 'nowShowing' ? filmComments : reviewComingSoonMovies;

    return (
        <div>
            <div className="reviewFilter">
                <div className="reviewNav">
                    <h1 className="reviewTitle">
                        <span className="review-vertical-bar"></span> GÓC ĐIỆN ẢNH
                    </h1>
                    <a
                        href="#"
                        className={activeTab === 'nowShowing' ? 'active' : ''}
                        onClick={(e) => handleTabClick(e, 'nowShowing')}
                    >
                        Bình luận phim
                    </a>
                    <a
                        href="#"
                        className={activeTab === 'comingSoon' ? 'active' : ''}
                        onClick={(e) => handleTabClick(e, 'comingSoon')}
                    >
                        Blog điện ảnh
                    </a>
                </div>
            </div>
            <div className="reviewWrapper">
                {currentReviewMovies.length === 0 ? (
                    <div className="alert alert-danger" role="alert">
                        Hiện tại Data máy chủ đang bị lỗi chúng tôi đang cố gắng sửa mong bạn chờ trong giây lát :))
                    </div>
                ) : (
                    <>
                        <article className="reviewArticle">
                            {currentReviewMovies.slice(0, 1).map((movie, index) => (
                                <ReviewCard key={index} {...movie} className={`review-card-${index + 1}`} />
                            ))}
                        </article>
                        <article className="reviewArticle">
                            {currentReviewMovies.slice(1, 4).map((movie, index) => (
                                <ReviewCard key={index + 1} {...movie} className={`review-card-${index + 2}`} />
                            ))}
                        </article>
                    </>
                )}
            </div>
            {currentReviewMovies.length > 0 && <ButtonWrapper />}
        </div>
    );
};

export default MovieReview;