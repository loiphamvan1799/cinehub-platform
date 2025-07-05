import React, { useState, useEffect, useRef } from 'react';
import './styles.css';

const FilterSection = () => {
    const [selectedValues, setSelectedValues] = useState({
        movie: 'Chọn Phim',
        theater: 'Chọn Rạp',
        day: 'Chọn Ngày',
        rate: 'Chọn Suất',
    });
    const [currentStep, setCurrentStep] = useState(0);
    const [openDropdown, setOpenDropdown] = useState(null);
    const filterSectionRef = useRef(null);

    const dropdownData = {
        movie: [
            'Ma Không Đầu',
            'Elio Cậu Bé Đến Từ Trái Đất',
            '28 Năm Sau Tận Thế',
            'Bí Kíp Luyện Rồng',
            'Út Lan: Oán Linh Giữ Của',
            'Trạng Quỳnh Nhí: Truyền Thuyết Kim Ngưu',
            'Mượn Rượu Đẩy Kèo',
            'F1®',
            'Kỳ Án Trên Đồi Tuyết',
            'Bóng Ma Cõi Mạng',
            'Dan Da Dan: Tà Nhãn',
            'Bộ 5 Siêu Đẳng Cấp',
            'Colorful Stage! Một Miku Không Thể Hát',
            'Dế Mèn: Cuộc Phiêu Lưu Tới Xóm Lầy Lội',
            'Nhiệm Vụ: Bất Khả Thi - Nghiệp Báo Cuối Cùng',
            'Lilo & Stitch',
            'Phim Điện Ảnh Doraemon: Nobita Và Cuộc Phiêu Lưu Vào Thế Giới Trong Tranh',
            'Mưa Lửa - Anh Trai Vượt Ngàn Chông Gai Movie',
            'Lật Mặt 8: Vòng Tay Nắng',
        ],
        theater: [
            'Galaxy Sala',
            'Galaxy Tân Bình',
            'Galaxy Kinh Dương Vương',
            'Galaxy Đà Nẵng',
            'Galaxy Aeon Mall Huế',
            'Galaxy Parc Mall Q8',
            'Galaxy Cine+ Thiso Phan Huy Ích',
            'Galaxy Cine+ Gold Coast Nha Trang',
            'Galaxy Huỳnh Tấn Phát',
            'Galaxy Vinh',
            'Galaxy Hải Phòng',
            'Galaxy Nguyễn Văn Quá',
            'Galaxy Buôn Ma Thuột',
            'Galaxy Trường Chinh',
            'Galaxy GO! Mall Bà Rịa',
        ],
        day: [
            'thứ ba, 24/06/2025',
            'thứ tư, 25/06/2025',
            'thứ năm, 26/06/2025',
        ],
        rate: [
            '10:15',
            '14:15',
            '12:00',
        ],
    };

    const handleSelect = (type, value) => {
        setSelectedValues(prev => {
            const newValues = { ...prev, [type]: value };
            if (type === 'movie' && value !== 'Chọn Phim') {
                newValues.theater = 'Chọn Rạp';
                newValues.day = 'Chọn Ngày';
                newValues.rate = 'Chọn Suất';
                setCurrentStep(1);
            } else if (type === 'theater' && value !== 'Chọn Rạp') {
                newValues.day = 'Chọn Ngày';
                newValues.rate = 'Chọn Suất';
                setCurrentStep(2);
            } else if (type === 'day' && value !== 'Chọn Ngày') {
                newValues.rate = 'Chọn Suất';
                setCurrentStep(3);
            } else if (type === 'rate' && value !== 'Chọn Suất') {
                setCurrentStep(4);
            } else if (value === 'Chọn movie' || value === 'Chọn Rạp' || value === 'Chọn Ngày' || value === 'Chọn Suất') {
                if (type === 'movie') {
                    newValues.theater = 'Chọn Rạp';
                    newValues.day = 'Chọn Ngày';
                    newValues.rate = 'Chọn Suất';
                    setCurrentStep(0);
                } else if (type === 'theater') {
                    newValues.day = 'Chọn Ngày';
                    newValues.rate = 'Chọn Suất';
                    setCurrentStep(1);
                } else if (type === 'day') {
                    newValues.rate = 'Chọn Suất';
                    setCurrentStep(2);
                }
            }
            return newValues;
        });
    };

    const toggleDropdown = (type) => {
        setOpenDropdown(prev => (prev === type ? null : type));
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (filterSectionRef.current && !filterSectionRef.current.contains(event.target)) {
                setOpenDropdown(null);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className="filter-section" ref={filterSectionRef}>
            <button
                data-number="1"
                onClick={() => toggleDropdown('movie')}
                className={openDropdown === 'movie' ? 'active' : ''}
            >
                <span className="button-text">{selectedValues.movie}</span>
                {openDropdown === 'movie' && (
                    <ul className="dropdown">
                        {dropdownData.movie.map((item) => (
                            <li
                                key={item}
                                className={selectedValues.movie === item ? 'selected' : ''}
                                onClick={() => handleSelect('movie', item)}
                            >
                                {item}
                            </li>
                        ))}
                    </ul>
                )}
            </button>
            <button
                data-number="2"
                onClick={() => toggleDropdown('theater')}
                className={openDropdown === 'theater' ? 'active' : currentStep < 1 ? 'disabled' : ''}
                disabled={currentStep < 1}
            >
                <span className="button-text">{selectedValues.theater}</span>
                {openDropdown === 'theater' && (
                    <ul className="dropdown">
                        {dropdownData.theater.map((item) => (
                            <li
                                key={item}
                                className={selectedValues.theater === item ? 'selected' : ''}
                                onClick={() => handleSelect('theater', item)}
                            >
                                {item}
                            </li>
                        ))}
                    </ul>
                )}
            </button>
            <button
                data-number="3"
                onClick={() => toggleDropdown('day')}
                className={openDropdown === 'day' ? 'active' : currentStep < 2 ? 'disabled' : ''}
                disabled={currentStep < 2}
            >
                <span className="button-text">{selectedValues.day}</span>
                {openDropdown === 'day' && (
                    <ul className="dropdown">
                        {dropdownData.day.map((item) => (
                            <li
                                key={item}
                                className={selectedValues.day === item ? 'selected' : ''}
                                onClick={() => handleSelect('day', item)}
                            >
                                {item}
                            </li>
                        ))}
                    </ul>
                )}
            </button>
            <button
                data-number="4"
                onClick={() => toggleDropdown('rate')}
                className={openDropdown === 'rate' ? 'active' : currentStep < 3 ? 'disabled' : ''}
                disabled={currentStep < 3}
            >
                <span className="button-text">{selectedValues.rate}</span>
                {openDropdown === 'rate' && (
                    <ul className="dropdown">
                        {dropdownData.rate.map((item) => (
                            <li
                                key={item}
                                className={selectedValues.rate === item ? 'selected' : ''}
                                onClick={() => handleSelect('rate', item)}
                            >
                                {item}
                            </li>
                        ))}
                    </ul>
                )}
            </button>
            <button
                className={currentStep < 4 ? 'buy-ticket disabled' : 'buy-ticket'}
                disabled={currentStep < 4}
                onClick={() => console.log('Buy ticket clicked')}
            >
                <span className="button-text">Mua vé nhanh</span>
            </button>
        </div>
    );
};

export default FilterSection;