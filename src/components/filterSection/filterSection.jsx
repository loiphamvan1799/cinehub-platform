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
                <span className="button-text">{selectedValues.phim}</span>
                {openDropdown === 'phim' && (
                    <ul className="dropdown">
                        <li className={selectedValues.phim === 'Ma Không Đầu' ? 'selected' : ''} onClick={() => handleSelect('phim', 'Ma Không Đầu')}>Ma Không Đầu</li>
                        <li className={selectedValues.phim === 'Elio Cậu Bé Đến Từ Trái Đất' ? 'selected' : ''} onClick={() => handleSelect('phim', 'Elio Cậu Bé Đến Từ Trái Đất')}>Elio Cậu Bé Đến Từ Trái Đất</li>
                        <li className={selectedValues.phim === '28 Năm Sau Tận Thế' ? 'selected' : ''} onClick={() => handleSelect('phim', '28 Năm Sau Tận Thế')}>28 Năm Sau Tận Thế</li>
                        <li className={selectedValues.phim === 'Bí Kíp Luyện Rồng' ? 'selected' : ''} onClick={() => handleSelect('phim', 'Bí Kíp Luyện Rồng')}>Bí Kíp Luyện Rồng</li>
                        <li className={selectedValues.phim === 'Út Lan: Oán Linh Giữ Của' ? 'selected' : ''} onClick={() => handleSelect('phim', 'Út Lan: Oán Linh Giữ Của')}>Út Lan: Oán Linh Giữ Của</li>
                        <li className={selectedValues.phim === 'Trạng Quỳnh Nhí: Truyền Thuyết Kim Ngưu' ? 'selected' : ''} onClick={() => handleSelect('phim', 'Trạng Quỳnh Nhí: Truyền Thuyết Kim Ngưu')}>Trạng Quỳnh Nhí: Truyền Thuyết Kim Ngưu</li>
                        <li className={selectedValues.phim === 'Mượn Rượu Đẩy Kèo' ? 'selected' : ''} onClick={() => handleSelect('phim', 'Mượn Rượu Đẩy Kèo')}>Mượn Rượu Đẩy Kèo</li>
                        <li className={selectedValues.phim === 'F1®' ? 'selected' : ''} onClick={() => handleSelect('phim', 'F1®')}>F1®</li>
                        <li className={selectedValues.phim === 'Kỳ Án Trên Đồi Tuyết' ? 'selected' : ''} onClick={() => handleSelect('phim', 'Kỳ Án Trên Đồi Tuyết')}>Kỳ Án Trên Đồi Tuyết</li>
                        <li className={selectedValues.phim === 'Bóng Ma Cõi Mạng' ? 'selected' : ''} onClick={() => handleSelect('phim', 'Bóng Ma Cõi Mạng')}>Bóng Ma Cõi Mạng</li>
                        <li className={selectedValues.phim === 'Dan Da Dan: Tà Nhãn' ? 'selected' : ''} onClick={() => handleSelect('phim', 'Dan Da Dan: Tà Nhãn')}>Dan Da Dan: Tà Nhãn</li>
                        <li className={selectedValues.phim === 'Bộ 5 Siêu Đẳng Cấp' ? 'selected' : ''} onClick={() => handleSelect('phim', 'Bộ 5 Siêu Đẳng Cấp')}>Bộ 5 Siêu Đẳng Cấp</li>
                        <li className={selectedValues.phim === 'Colorful Stage! Một Miku Không Thể Hát' ? 'selected' : ''} onClick={() => handleSelect('phim', 'Colorful Stage! Một Miku Không Thể Hát')}>Colorful Stage! Một Miku Không Thể Hát</li>
                        <li className={selectedValues.phim === 'Dế Mèn: Cuộc Phiêu Lưu Tới Xóm Lầy Lội' ? 'selected' : ''} onClick={() => handleSelect('phim', 'Dế Mèn: Cuộc Phiêu Lưu Tới Xóm Lầy Lội')}>Dế Mèn: Cuộc Phiêu Lưu Tới Xóm Lầy Lội</li>
                        <li className={selectedValues.phim === 'Nhiệm Vụ: Bất Khả Thi - Nghiệp Báo Cuối Cùng' ? 'selected' : ''} onClick={() => handleSelect('phim', 'Nhiệm Vụ: Bất Khả Thi - Nghiệp Báo Cuối Cùng')}>Nhiệm Vụ: Bất Khả Thi - Nghiệp Báo Cuối Cùng</li>
                        <li className={selectedValues.phim === 'Lilo & Stitch' ? 'selected' : ''} onClick={() => handleSelect('phim', 'Lilo & Stitch')}>Lilo & Stitch</li>
                        <li className={selectedValues.phim === 'Phim Điện Ảnh Doraemon: Nobita Và Cuộc Phiêu Lưu Vào Thế Giới Trong Tranh' ? 'selected' : ''} onClick={() => handleSelect('phim', 'Phim Điện Ảnh Doraemon: Nobita Và Cuộc Phiêu Lưu Vào Thế Giới Trong Tranh')}>Phim Điện Ảnh Doraemon: Nobita Và Cuộc Phiêu Lưu Vào Thế Giới Trong Tranh</li>
                        <li className={selectedValues.phim === 'Mưa Lửa - Anh Trai Vượt Ngàn Chông Gai Movie' ? 'selected' : ''} onClick={() => handleSelect('phim', 'Mưa Lửa - Anh Trai Vượt Ngàn Chông Gai Movie')}>Mưa Lửa - Anh Trai Vượt Ngàn Chông Gai Movie</li>
                        <li className={selectedValues.phim === 'Lật Mặt 8: Vòng Tay Nắng' ? 'selected' : ''} onClick={() => handleSelect('phim', 'Lật Mặt 8: Vòng Tay Nắng')}>Lật Mặt 8: Vòng Tay Nắng</li>
                    </ul>
                )}
            </button>
            <button
                data-number="2"
                onClick={() => toggleDropdown('rap')}
                className={openDropdown === 'rap' ? 'active' : currentStep < 1 ? 'disabled' : ''}
                disabled={currentStep < 1}
            >
                <span className="button-text">{selectedValues.rap}</span>
                {openDropdown === 'rap' && (
                    <ul className="dropdown">
                        <li className={selectedValues.rap === 'Galaxy Sala' ? 'selected' : ''} onClick={() => handleSelect('rap', 'Galaxy Sala')}>Galaxy Sala</li>
                        <li className={selectedValues.rap === 'Galaxy Tân Bình' ? 'selected' : ''} onClick={() => handleSelect('rap', 'Galaxy Tân Bình')}>Galaxy Tân Bình</li>
                        <li className={selectedValues.rap === 'Galaxy Kinh Dương Vương' ? 'selected' : ''} onClick={() => handleSelect('rap', 'Galaxy Kinh Dương Vương')}>Galaxy Kinh Dương Vương</li>
                        <li className={selectedValues.rap === 'Galaxy Đà Nẵng' ? 'selected' : ''} onClick={() => handleSelect('rap', 'Galaxy Đà Nẵng')}>Galaxy Đà Nẵng</li>
                        <li className={selectedValues.rap === 'Galaxy Aeon Mall Huế' ? 'selected' : ''} onClick={() => handleSelect('rap', 'Galaxy Aeon Mall Huế')}>Galaxy Aeon Mall Huế</li>
                        <li className={selectedValues.rap === 'Galaxy Parc Mall Q8' ? 'selected' : ''} onClick={() => handleSelect('rap', 'Galaxy Parc Mall Q8')}>Galaxy Parc Mall Q8</li>
                        <li className={selectedValues.rap === 'Galaxy Cine+ Thiso Phan Huy Ích' ? 'selected' : ''} onClick={() => handleSelect('rap', 'Galaxy Cine+ Thiso Phan Huy Ích')}>Galaxy Cine+ Thiso Phan Huy Ích</li>
                        <li className={selectedValues.rap === 'Galaxy Cine+ Gold Coast Nha Trang' ? 'selected' : ''} onClick={() => handleSelect('rap', 'Galaxy Cine+ Gold Coast Nha Trang')}>Galaxy Cine+ Gold Coast Nha Trang</li>
                        <li className={selectedValues.rap === 'Galaxy Huỳnh Tấn Phát' ? 'selected' : ''} onClick={() => handleSelect('rap', 'Galaxy Huỳnh Tấn Phát')}>Galaxy Huỳnh Tấn Phát</li>
                        <li className={selectedValues.rap === 'Galaxy Vinh' ? 'selected' : ''} onClick={() => handleSelect('rap', 'Galaxy Vinh')}>Galaxy Vinh</li>
                        <li className={selectedValues.rap === 'Galaxy Hải Phòng' ? 'selected' : ''} onClick={() => handleSelect('rap', 'Galaxy Hải Phòng')}>Galaxy Hải Phòng</li>
                        <li className={selectedValues.rap === 'Galaxy Nguyễn Văn Quá' ? 'selected' : ''} onClick={() => handleSelect('rap', 'Galaxy Nguyễn Văn Quá')}>Galaxy Nguyễn Văn Quá</li>
                        <li className={selectedValues.rap === 'Galaxy Buôn Ma Thuột' ? 'selected' : ''} onClick={() => handleSelect('rap', 'Galaxy Buôn Ma Thuột')}>Galaxy Buôn Ma Thuột</li>
                        <li className={selectedValues.rap === 'Galaxy Trường Chinh' ? 'selected' : ''} onClick={() => handleSelect('rap', 'Galaxy Trường Chinh')}>Galaxy Trường Chinh</li>
                        <li className={selectedValues.rap === 'Galaxy GO! Mall Bà Rịa' ? 'selected' : ''} onClick={() => handleSelect('rap', 'Galaxy GO! Mall Bà Rịa')}>Galaxy GO! Mall Bà Rịa</li>
                    </ul>
                )}
            </button>
            <button
                data-number="3"
                onClick={() => toggleDropdown('ngay')}
                className={openDropdown === 'ngay' ? 'active' : currentStep < 2 ? 'disabled' : ''}
                disabled={currentStep < 2}
            >
                <span className="button-text">{selectedValues.ngay}</span>
                {openDropdown === 'ngay' && (
                    <ul className="dropdown">
                        <li className={selectedValues.ngay === 'thứ ba, 24/06/2025' ? 'selected' : ''} onClick={() => handleSelect('ngay', 'thứ ba, 24/06/2025')}>thứ ba, 24/06/2025</li>
                        <li className={selectedValues.ngay === 'thứ tư, 25/06/2025' ? 'selected' : ''} onClick={() => handleSelect('ngay', 'thứ tư, 25/06/2025')}>thứ tư, 25/06/2025</li>
                        <li className={selectedValues.ngay === 'thứ năm, 26/06/2025' ? 'selected' : ''} onClick={() => handleSelect('ngay', 'thứ năm, 26/06/2025')}>thứ năm, 26/06/2025</li>
                    </ul>
                )}
            </button>
            <button
                data-number="4"
                onClick={() => toggleDropdown('suat')}
                className={openDropdown === 'suat' ? 'active' : currentStep < 3 ? 'disabled' : ''}
                disabled={currentStep < 3}
            >
                <span className="button-text">{selectedValues.suat}</span>
                {openDropdown === 'suat' && (
                    <ul className="dropdown">
                        <li className={selectedValues.suat === '10:15' ? 'selected' : ''} onClick={() => handleSelect('suat', '10:15')}>10:15</li>
                        <li className={selectedValues.suat === '14:15' ? 'selected' : ''} onClick={() => handleSelect('suat', '14:15')}>14:15</li>
                        <li className={selectedValues.suat === '12:00' ? 'selected' : ''} onClick={() => handleSelect('suat', '12:00')}>12:00</li>
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