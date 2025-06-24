import React from "react";
import './styles.css';

const MovieCard = ({ imgSrc, title, rating, age }) => {
    return (
        <div className="movieCard">
            <div className="poster-wrapper">
                <img src={imgSrc} alt={title} className="poster" />

                <>
                    <div className="button-overlay">
                        <button className="card-button">
                            <svg className="button-icon" width="20" height="20" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                                <path d="M21 4H3c-1.1 0-2 .9-2 2v2c1.1 0 2 .9 2 2s-.9 2-2 2v2c1.1 0 2 .9 2 2s-.9 2-2 2v2c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2v-2c-1.1 0-2-.9-2-2s.9-2 2-2v-2c-1.1 0-2-.9-2-2s.9-2 2-2V6c0-1.1-.9-2-2-2z" />
                            </svg>
                            Mua vé
                        </button>
                        <button className="card-button trailer-button">
                            <svg
                                className="button-icon"
                                width="20"
                                height="20"
                                viewBox="0 0 512 512"
                                fill="currentColor"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM188.3 147.1c-7.6 4.2-12.3 12.3-12.3 20.9V344c0 8.7 4.7 16.7 12.3 20.9s16.8 4.1 24.3-.5l144-88c7.1-4.4 11.5-12.1 11.5-20.5s-4.4-16.1-11.5-20.5l-144-88c-7.4-4.5-16.7-4.7-24.3-.5z" />
                            </svg>
                            Trailer
                        </button>
                    </div>
                </>

                <>
                    <div className="movie-info-overlay">
                        <div className="rating-badge">
                            <span className="star">★</span> {rating}
                        </div>
                        <div className="age-badge">{age}</div>
                    </div>
                </>
            </div>


            <div className="card-details">
                <h3 className="movie-title">{title}</h3>
            </div>
        </div>
    );
};

export default MovieCard;
