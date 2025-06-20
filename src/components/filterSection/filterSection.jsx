import React from 'react';
import './styles.css';

const FilterSection = () => {
    return (
        <div className="filter-section">
            <button data-number="1">Chọn Phim</button>
            <button data-number="2">Chọn Rạp</button>
            <button data-number="3">Chọn Ngày</button>
            <button data-number="4">Chọn Suất</button>
            <button className="buy-ticket">Mua vé nhanh</button>
        </div>
    );
};

export default FilterSection;