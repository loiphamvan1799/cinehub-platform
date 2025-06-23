import React, { useState } from 'react';
import './styles.css';

const FilterSection = () => {
    const [selectedValues, setSelectedValues] = useState({
        phim: 'Chọn Phim',
        rap: 'Chọn Rạp',
        ngay: 'Chọn Ngày',
        suat: 'Chọn Suất',
    });
    const [currentStep, setCurrentStep] = useState(0);
    const [openDropdown, setOpenDropdown] = useState(null);

    const handleSelect = (type, value) => {
        setSelectedValues(prev => {
            const newValues = { ...prev, [type]: value };
            if (type === 'phim' && value !== 'Chọn Phim') {
                newValues.rap = 'Chọn Rạp';
                newValues.ngay = 'Chọn Ngày';
                newValues.suat = 'Chọn Suất';
                setCurrentStep(1);
            } else if (type === 'rap' && value !== 'Chọn Rạp') {
                newValues.ngay = 'Chọn Ngày';
                newValues.suat = 'Chọn Suất';
                setCurrentStep(2);
            } else if (type === 'ngay' && value !== 'Chọn Ngày') {
                newValues.suat = 'Chọn Suất';
                setCurrentStep(3);
            } else if (type === 'suat' && value !== 'Chọn Suất') {
                setCurrentStep(4);
            } else if (value === 'Chọn Phim' || value === 'Chọn Rạp' || value === 'Chọn Ngày' || value === 'Chọn Suất') {
                if (type === 'phim') {
                    newValues.rap = 'Chọn Rạp';
                    newValues.ngay = 'Chọn Ngày';
                    newValues.suat = 'Chọn Suất';
                    setCurrentStep(0);
                } else if (type === 'rap') {
                    newValues.ngay = 'Chọn Ngày';
                    newValues.suat = 'Chọn Suất';
                    setCurrentStep(1);
                } else if (type === 'ngay') {
                    newValues.suat = 'Chọn Suất';
                    setCurrentStep(2);
                }
            }
            return newValues;
        });
        setOpenDropdown(null);
    };

    const toggleDropdown = (type) => {
        setOpenDropdown(prev => (prev === type ? null : type));
    };

    return (
        <div className="filter-section">
            <button
                data-number="1"
                onClick={() => toggleDropdown('phim')}
                className={openDropdown === 'phim' ? 'active' : ''}
            >
                {selectedValues.phim}
                {openDropdown === 'phim' && (
                    <ul className="dropdown">
                        <li onClick={() => handleSelect('phim', 'Thể loại phim')}>Thể loại phim</li>
                        <li onClick={() => handleSelect('phim', 'Diễn viên')}>Diễn viên</li>
                        <li onClick={() => handleSelect('phim', 'Đạo diễn')}>Đạo diễn</li>
                        <li onClick={() => handleSelect('phim', 'Bình luận phim')}>Bình luận phim</li>
                        <li onClick={() => handleSelect('phim', 'Blog Điện ảnh')}>Blog Điện ảnh</li>
                    </ul>
                )}
            </button>
            <button
                data-number="2"
                onClick={() => toggleDropdown('rap')}
                className={openDropdown === 'rap' ? 'active' : (currentStep < 1 ? 'disabled' : '')}
                disabled={currentStep < 1}
            >
                {selectedValues.rap}
                {openDropdown === 'rap' && (
                    <ul className="dropdown">
                        <li onClick={() => handleSelect('rap', 'Galaxy Nguyễn Du')}>Galaxy Nguyễn Du</li>
                        <li onClick={() => handleSelect('rap', 'Galaxy Tân Bình')}>Galaxy Tân Bình</li>
                        <li onClick={() => handleSelect('rap', 'Galaxy Kinh Dương Vương')}>Galaxy Kinh Dương Vương</li>
                        <li onClick={() => handleSelect('rap', 'Galaxy Quang Trung')}>Galaxy Quang Trung</li>
                        <li onClick={() => handleSelect('rap', 'Galaxy Trung Chánh')}>Galaxy Trung Chánh</li>
                        <li onClick={() => handleSelect('rap', 'Galaxy Phạm Văn Chí')}>Galaxy Phạm Văn Chí</li>
                        <li onClick={() => handleSelect('rap', 'Galaxy Huỳnh Tấn Phát')}>Galaxy Huỳnh Tấn Phát</li>
                        <li onClick={() => handleSelect('rap', 'Galaxy Đà Nẵng')}>Galaxy Đà Nẵng</li>
                    </ul>
                )}
            </button>
            <button
                data-number="3"
                onClick={() => toggleDropdown('ngay')}
                className={openDropdown === 'ngay' ? 'active' : (currentStep < 2 ? 'disabled' : '')}
                disabled={currentStep < 2}
            >
                {selectedValues.ngay}
                {openDropdown === 'ngay' && (
                    <ul className="dropdown">
                        <li onClick={() => handleSelect('ngay', 'Thứ Hai')}>Thứ Hai</li>
                        <li onClick={() => handleSelect('ngay', 'Thứ Ba')}>Thứ Ba</li>
                        <li onClick={() => handleSelect('ngay', 'Thứ Tư')}>Thứ Tư</li>
                        <li onClick={() => handleSelect('ngay', 'Thứ Năm')}>Thứ Năm</li>
                        <li onClick={() => handleSelect('ngay', 'Thứ Sáu')}>Thứ Sáu</li>
                        <li onClick={() => handleSelect('ngay', 'Thứ Bảy')}>Thứ Bảy</li>
                        <li onClick={() => handleSelect('ngay', 'Chủ Nhật')}>Chủ Nhật</li>
                    </ul>
                )}
            </button>
            <button
                data-number="4"
                onClick={() => toggleDropdown('suat')}
                className={openDropdown === 'suat' ? 'active' : (currentStep < 3 ? 'disabled' : '')}
                disabled={currentStep < 3}
            >
                {selectedValues.suat}
                {openDropdown === 'suat' && (
                    <ul className="dropdown">
                        <li onClick={() => handleSelect('suat', '8:00')}>8:00</li>
                        <li onClick={() => handleSelect('suat', '10:00')}>10:00</li>
                        <li onClick={() => handleSelect('suat', '12:00')}>12:00</li>
                        <li onClick={() => handleSelect('suat', '14:00')}>14:00</li>
                        <li onClick={() => handleSelect('suat', '16:00')}>16:00</li>
                        <li onClick={() => handleSelect('suat', '18:00')}>18:00</li>
                        <li onClick={() => handleSelect('suat', '20:00')}>20:00</li>
                    </ul>
                )}
            </button>
            <button
                className={currentStep < 4 ? 'buy-ticket disabled' : 'buy-ticket'}
                disabled={currentStep < 4}
            >
                Mua vé nhanh
            </button>
        </div>
    );
};

export default FilterSection;