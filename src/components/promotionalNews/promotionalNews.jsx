import React, { useRef, useEffect } from 'react';
import PromoCard from './PromoCard/PromoCard';
import './styles.css';

const PromotionalNews = () => {
    const promotions = [
        {
            href: '/khuyen-mai/xem-phim-real-chat--sieu-sieu-sang-khoai--kham-pha-vinwonders/',
            imgSrc: 'https://cdn.galaxycine.vn/media/2025/6/18/750_1750231329165.jpg',
            title: 'Xem Phim Real Chất – Siêu Siêu Sảng Khoái – Khám Phá Vinwonders',
        },
        {
            href: '/khuyen-mai/khoi-ngoan-xinh-yeu--qua-cute-de-kids/',
            imgSrc: 'https://cdn.galaxycine.vn/media/2025/5/30/750_1748599398039.jpg',
            title: 'Khối Ngoan Xinh Yêu – Quà Cute De Kids',
        },
        {
            href: '/khuyen-mai/snack-nong-hoi-vua-xem-phim-vua-thoi/',
            imgSrc: 'https://cdn.galaxycine.vn/media/2025/5/21/snack-nong-hoi--vua-xem-phim-vua-thoi---4_1747812972458.jpg',
            title: 'Snack Nóng Hổi, Vừa Xem Phim Vừa Thổi',
        },
        {
            href: '/khuyen-mai/fundiin-da-co-mat-tai-galaxy-cinema/',
            imgSrc: 'https://cdn.galaxycine.vn/media/2025/6/25/fundiin-2_1750864524792.jpg',
            title: 'Fundiin Đã Có Mặt Tại Galaxy Cinema',
        },
        {
            href: '/khuyen-mai/voucher-giam-khung-danh-tang-cac-stars/',
            imgSrc: 'https://cdn.galaxycine.vn/media/2025/6/3/shopee-4_1748923110247.jpg',
            title: 'Voucher ShopeePay Giảm 5K Dành Tặng Các Stars!',
        },
        {
            href: '/khuyen-mai/happy-day---ve-chi-tu-45k/',
            imgSrc: 'https://cdn.galaxycine.vn/media/2024/4/16/750_1713257524954.jpg',
            title: 'Happy Day - Vé Chỉ Từ 45K',
        },
        {
            href: '/khuyen-mai/hot-deal-xi-ne---thuong-thuc-bom-tan-sieu-phe/',
            imgSrc: 'https://cdn.galaxycine.vn/media/2025/4/16/resize-vnpaygalaxy-1800-x-1200_1744797992111.jpg',
            title: 'VNPAY Giảm Đến 10K!',
        },
        {
            href: '/khuyen-mai/uu-dai-thanh-vien-galaxy-cinema-2025/',
            imgSrc: 'https://cdn.galaxycine.vn/media/2025/1/22/bangqltv-digital-1350x900_1737516330683.jpg',
            title: 'Ưu Đãi Thành Viên Galaxy Cinema 2025',
        },
        {
            href: '/khuyen-mai/u22-vui-ve---bap-nuoc-sieu-hat-de/',
            imgSrc: 'https://cdn.galaxycine.vn/media/2022/11/1/combo-u22-digital-450x300_1667285240629.jpg',
            title: 'U22 Vui Vẻ - Bắp Nước Siêu Hạt Dẻ',
        },
        {
            href: '/khuyen-mai/snack-du-vi---xem-phim-hay-het-y/',
            imgSrc: 'https://cdn.galaxycine.vn/media/2025/3/21/750_1742541048119.jpg',
            title: 'Snack Đủ Vị - Xem Phim Hay Hết Ý',
        },
        {
            href: '/khuyen-mai/xem-phim-hay--ngat-ngay-cung-banh-phong-de-rec-rec/',
            imgSrc: 'https://cdn.galaxycine.vn/media/2025/3/31/banhrecrec-digital-1800x1200_1743389328312.jpg',
            title: 'Bánh Phồng Dế Rec Rec – Snack Dế Giàu Đạm Nhiều Dinh Dưỡng',
        },
        {
            href: '/khuyen-mai/ngay-tri-an-cua-galaxy-cinema---ngay-thu-hai-dau-tien-moi-thang/',
            imgSrc: 'https://cdn.galaxycine.vn/media/2025/5/30/750_1748600578834.jpg',
            title: 'Ngày Tri Ân Của Galaxy Cinema - Ngày Thứ Hai ĐẦU TIÊN Mỗi Tháng',
        },
        {
            href: '/khuyen-mai/gia-ve-u22---dong-gia-45k/',
            imgSrc: 'https://cdn.galaxycine.vn/media/2023/11/23/giaveu22-digital-1800x1200_1700731546949.jpg',
            title: 'Giá Vé U22 - Chỉ Từ 45k',
        },
        {
            href: '/khuyen-mai/tie-chi-phan-loai-phim-theo-lua-tuoi-cap-nhat-moi-tu-cuc-dien-anh/',
            imgSrc: 'https://cdn.galaxycine.vn/media/2023/5/23/quy-dinh-do-tuoi-digital-1350x900_1684835377244.jpg',
            title: 'Tiêu Chí Phân Loại Phim Theo Lứa Tuổi',
        },
        {
            href: '/khuyen-mai/co-hoi-tai-galaxy-hanoi-centre/',
            imgSrc: 'https://cdn.galaxycine.vn/media/2025/5/29/tuyen-dung-2_1748493240758.jpg',
            title: 'Tuyển Dụng Nhân Viên Phục Vụ Khách Hàng',
        },
    ];

    const carouselRef = useRef(null);
    let isDown = false;
    let startX;
    let scrollLeft;

    useEffect(() => {
        const carousel = carouselRef.current;

        const handleMouseDown = (e) => {
            isDown = true;
            carousel.classList.add('active');
            startX = e.pageX - carousel.offsetLeft;
            scrollLeft = carousel.scrollLeft;
        };

        const handleMouseLeave = () => {
            isDown = false;
            carousel.classList.remove('active');
        };

        const handleMouseUp = () => {
            isDown = false;
            carousel.classList.remove('active');
        };

        const handleMouseMove = (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - carousel.offsetLeft;
            const walk = (x - startX) * 2;
            carousel.scrollLeft = scrollLeft - walk;
        };

        carousel.addEventListener('mousedown', handleMouseDown);
        carousel.addEventListener('mouseleave', handleMouseLeave);
        carousel.addEventListener('mouseup', handleMouseUp);
        carousel.addEventListener('mousemove', handleMouseMove);

        return () => {
            carousel.removeEventListener('mousedown', handleMouseDown);
            carousel.removeEventListener('mouseleave', handleMouseLeave);
            carousel.removeEventListener('mouseup', handleMouseUp);
            carousel.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <div className="promo-container">
            <div className="promo-header">
                <div className="promo-header-inner">
                    <div className="promo-header-title hidden-md">
                        <span className="promo-vertical-bar"></span>
                        <h1 className="promo-header-text">Tin khuyến mãi</h1>
                    </div>
                </div>
            </div>
            <div className="promo-carousel" ref={carouselRef}>
                <div className="promo-track">
                    {promotions.map((promo, index) => (
                        <PromoCard
                            key={index}
                            href={promo.href}
                            imgSrc={promo.imgSrc}
                            title={promo.title}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PromotionalNews;
