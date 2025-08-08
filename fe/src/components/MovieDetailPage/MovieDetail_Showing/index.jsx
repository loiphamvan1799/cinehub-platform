import React from 'react';
import './styles.css';
import ButtonWrapper from '../../Layout/ButtonWrapper';
import LocalActivityOutlinedIcon from '@mui/icons-material/LocalActivityOutlined';
import StarIcon from '@mui/icons-material/Star';

const MovieDetailShowing = () => {
  const movies = [
    {
      title: "Bộ Tứ Siêu Đẳng: Bước Đi Đầu Tiên",
      image: "https://cdn.galaxycine.vn/media/2025/7/21/fantastic-four-2_1753081328582.jpg",
      rating: "9.6",
      ageRating: "T13",
      link: "/dat-ve/the-fantastic-four-first-steps/",
    },
    {
      title: "Mang Mẹ Đi Bỏ",
      image: "https://cdn.galaxycine.vn/media/2025/7/21/mang-me-di-bo-750_1753070226466.jpg",
      rating: "9.2",
      ageRating: "K",
      link: "/dat-ve/mang-me-di-bo/",
    },
    {
      title: "Phim Điện Ảnh Thám Tử Lừng Danh Conan: Dư Ảnh Của Độc Nhãn",
      image: "https://cdn.galaxycine.vn/media/2025/7/14/conan-movie-28-2_1752485620208.jpg",
      rating: "9.7",
      ageRating: "K",
      link: "/dat-ve/detective-conan-one-eyed-flashback/",
    },
  ];

  return (
    <div className="showing-container">
      <div className="showing-header">
        <span className="title-border"></span>
        <h1 className="title-text">Phim đang chiếu</h1>
      </div>
      <div>
        <ul className="showing-list">
          {movies.map((movie, index) => (
            <li key={index} className="showing-item">
              <div className="showing-card">
                <div className="showing-card-inner">
                  <div className="showing-image-wrapper">
                    <a href={movie.link}>
                      <img
                        alt={movie.title}
                        loading="lazy"
                        className="showing-image"
                        src={movie.image}
                      />
                    </a>
                    <div className="showing-overlay">
                      <div className="showing-overlay-content">
                        <a
                          href={movie.link}
                          className="showing-buy-btn"
                        >
                          <LocalActivityOutlinedIcon />
                          Mua vé
                        </a>
                      </div>
                    </div>
                    <div className="showing-rating rating-frame">
                      <StarIcon className="star_icon" />
                      <span className="rating-text">{movie.rating}</span>
                    </div>
                    <div className="showing-age">
                      <span>{movie.ageRating}</span>
                    </div>
                  </div>
                </div>
                <div className="showing-title">
                  <a href={movie.link}>{movie.title}</a>
                </div>
              </div>
            </li>
          ))}
        </ul>
        <div className="showing-more">
          <ButtonWrapper />
        </div>
      </div>
    </div>
  );
};

export default MovieDetailShowing;