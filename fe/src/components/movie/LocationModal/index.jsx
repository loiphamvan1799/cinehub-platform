import React, { useEffect, useState } from 'react';
import './styles.css';

const LocationModal = ({ isOpen, onClose, onSelectLocation }) => {
    const [locations, setLocations] = useState([
        { name: 'Toàn quốc', icon: 'https://www.galaxycine.vn/_next/static/media/all-location.fc6628d7.svg', selected: true },
        { name: 'TP Hồ Chí Minh', icon: 'https://www.galaxycine.vn/_next/static/media/icon-hcm.6d0e1bac.svg' },
        { name: 'Hà Nội', icon: 'https://www.galaxycine.vn/_next/static/media/icon-ha-noi.810005cd.svg' },
        { name: 'Đà Nẵng', icon: 'https://www.galaxycine.vn/_next/static/media/icon-da-nang.555c4227.svg' },
        { name: 'An Giang', icon: 'https://www.galaxycine.vn/_next/static/media/all-location.fc6628d7.svg' },
        { name: 'Bà Rịa - Vũng Tàu', icon: 'https://www.galaxycine.vn/_next/static/media/all-location.fc6628d7.svg' },
        { name: 'Bến Tre', icon: 'https://www.galaxycine.vn/_next/static/media/icon-ben-tre.d90154c5.svg' },
        { name: 'Cà Mau', icon: 'https://www.galaxycine.vn/_next/static/media/icon-ca-mau.ca0ab091.svg' },
        { name: 'Đắk Lắk', icon: 'https://www.galaxycine.vn/_next/static/media/icon-dak-lak.e81c5880.svg' },
        { name: 'Hải Phòng', icon: 'https://www.galaxycine.vn/_next/static/media/icon-hai-phong.0371e899.svg' },
        { name: 'Khánh Hòa', icon: 'https://www.galaxycine.vn/_next/static/media/icon-khanh-hoa.57bf3cfe.png' },
        { name: 'Nghệ An', icon: 'https://www.galaxycine.vn/_next/static/media/icon-nghe-an.c7a05c7b.svg' },
        { name: 'Thừa Thiên Huế', icon: 'https://www.galaxycine.vn/_next/static/media/all-location.fc6628d7.svg' },
    ]);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isOpen]);

    const handleLocationSelect = (locationName) => {
        const updatedLocations = locations.map(location =>
            ({ ...location, selected: location.name === locationName })
        );
        setLocations(updatedLocations);
        onSelectLocation(locationName);
    };

    if (!isOpen) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-container" onClick={(e) => e.stopPropagation()}>
                <button
                    className="close-button"
                    onClick={onClose}
                    aria-label="Close"
                >
                    <img
                        src="https://www.galaxycine.vn/_next/static/media/icon-close.7e22f021.svg"
                        alt="Close"
                    />
                </button>
                <h3 className="modal-title">Tỉnh / Thành phố</h3>
                <ul className="location-grid">
                    {locations.map((location, index) => (
                        <li
                            key={index}
                            className={`location-item ${location.selected ? 'selected' : ''}`}
                            onClick={() => handleLocationSelect(location.name)}
                        >
                            <img
                                src={location.icon}
                                alt={`Icon ${location.name}`}
                                loading="lazy"
                            />
                            <h4>{location.name}</h4>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default LocationModal;