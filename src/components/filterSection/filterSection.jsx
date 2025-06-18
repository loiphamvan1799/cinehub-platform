import React from 'react';
import './styles.css';

const FilterSection = () => {
    return (
        <div className="filter-section">
            <button>Chọn Phim</button>
            <button>Chọn Rạp</button>
            <button>Chọn Ngày</button>
            <button>Chọn Suất</button>
            <button className="buy-ticket">Mua Vé Nhanh</button>
        </div>
    );
};

export default FilterSection;