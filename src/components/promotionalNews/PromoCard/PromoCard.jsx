import React from 'react';
import './styles.css';

const PromoCard = ({ imgSrc, title, href }) => {
    return (
        <a
            href={href}
            className="promo-card-link"
            style={{ width: '312px', display: 'inline-block' }}
            draggable="false"
        >
            <div className="promoCard">
                <div className="promo-poster-wrapper">
                    <img
                        src={imgSrc}
                        alt={title}
                        className="promo-poster"
                        width="255"
                        height="148"
                        loading="lazy"
                        draggable="false"
                    />
                </div>
                <span className="promo-title">{title}</span>
            </div>
        </a>
    );
};

export default PromoCard;