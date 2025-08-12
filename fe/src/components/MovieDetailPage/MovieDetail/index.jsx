import React, { useState } from 'react';
import './styles.css';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import StarIcon from '@mui/icons-material/Star';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import YouTube from 'react-youtube';
import Modal from 'react-modal';
import MovieDetailShowing from '../MovieDetail_Showing';

const formatContent = (content) => {
  if (!content.includes('<p>')) {
    return `<p>${content}</p>`;
  }
  return content;
};

const MOVIE_INFO = {
  posterUrl: "https://cdn.galaxycine.vn/media/2025/7/14/conan-movie-28-2_1752485620208.jpg",
  sidePosterUrl: "https://cdn.galaxycine.vn/media/2025/7/21/fantastic-four-1_1753081324865.jpg",
  title: "Bộ Tứ Siêu Đẳng: Bước Đi Đầu Tiên",
  ageRating: "T13",
  duration: "115 Phút",
  releaseDate: "21/07/2025",
  country: "Mỹ",
  producer: "Marvel Studios",
  genres: "Giả Tưởng, Hành Động, Phiêu Lưu",
  director: "Matt Shakman",
  actors: "Pedro Pascal, Vanessa Kirby, Joseph Quinn, Ebon Moss-Bachrach",
  rating: "9.7",
  ratingVotes: "(281 votes)",
  trailerUrl: "zsIKAQX7Q9E",
  fullContent: `
    <p><b>Phim Điện Ảnh Thám Tử Lừng Danh Conan: Dư Ảnh Của Độc Nhãn</b> kể về một vụ án bí ẩn xảy ra trên những ngọn núi tuyết của Nagano, khiến Conan và các thám tử phải cùng giải bài toán khó từ quá khứ.</p>
    <p>Bị thương nặng trong trận tuyết lở nhiều năm trước, thanh tra Yamato Kansuke phải đối diện với kí ức đau thương khi điều tra vụ tấn công tại Đài quan sát Nobeyama. Cũng trong lúc này, ông bác thám tử ngủ gật Mori Kogoro lại nhận được cuộc gọi từ đồng nghiệp cũ, tiết lộ về mối liên hệ đáng ngờ giữa anh và một vụ án bị lãng quên.</p>
    <p>Sự góp mặt của “Khổng Minh” Morofushi Takaaki cùng với nhân viên cơ quan cảnh sát quốc gia Nhật Bản - Amuro Tooru, cấp dưới Kazami và cảnh sát Tokyo càng cuộc điều tra thêm phức tạp và gay cấn. Hiện tại và quá khứ đan xen, bí ẩn dần dần hé lộ.</p>
    <p>Kí ức của Yamato Kansuke chính là chìa khóa vấn đề!</p>
    <p><b>Detective Conan: One-Eyed Flashback</b>/ <b>Phim Điện Ảnh Thám Tử Lừng Danh Conan: Dư Ảnh Của Độc Nhãn</b> suất chiếu sớm 19-20.07 (Không áp dụng Movie Voucher), dự kiến khởi chiếu 25.07.2025 tại các <a href="https://www.galaxycine.vn/">rạp chiếu phim</a> toàn quốc.</p>
`,
};

const SHOWTIME_DATES = [
  { day: "Hôm nay", date: "30/07" },
  { day: "thứ năm", date: "31/07" },
  { day: "thứ sáu", date: "01/08" },
  { day: "thứ bảy", date: "02/08" },
  { day: "chủ nhật", date: "03/08" },
];

const SHOWTIME_CINEMAS = [
  {
    cinema: "Galaxy Nguyễn Du",
    schedules: [
      { type: "2D Lồng Tiếng", times: ["11:45", "12:30", "13:00", "14:00", "15:15", "16:15", "17:00", "18:00", "19:45", "20:30"] },
      { type: "2D Phụ Đề", times: ["22:15"] },
    ],
  },
  {
    cinema: "Galaxy Sala",
    schedules: [
      { type: "2D Lồng Tiếng", times: ["11:15", "12:30", "13:30", "14:45", "15:45", "17:00", "18:00", "20:00"] },
      { type: "LAGOM PREMIUM 2D Phụ Đề", times: ["16:15"] },
      { type: "Samsung Neo QLED 8K 2D Phụ Đề", times: ["22:00"] },
    ],
  },
  {
    cinema: "Galaxy Tân Bình",
    schedules: [
      { type: "2D Lồng Tiếng", times: ["11:30", "12:15", "13:00", "13:45", "14:30", "15:00", "15:30", "16:00", "16:45", "17:30", "18:15", "19:15", "20:15"] },
    ],
  },
  {
    cinema: "Galaxy Kinh Dương Vương",
    schedules: [
      { type: "2D Lồng Tiếng", times: ["11:15", "11:45", "12:15", "13:00", "13:30", "14:00", "14:30", "15:15", "16:00", "16:45", "17:30", "18:00", "19:00", "20:00", "21:00"] },
      { type: "2D Phụ Đề", times: ["22:15"] },
    ],
  },
];

export const MovieDetail = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handlePlayClick = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const youtubeOpts = {
    height: '360',
    width: '640',
    playerVars: {
      autoplay: 1,
      controls: 1,
      modestbranding: 1,
      rel: 0,
    },
  };

  Modal.setAppElement('#root');

  return (
    <div>
      <div className="movie-poster">
        <div className="movie-poster__container">
          <div className="movie-poster__overlay"></div>
          <div className="movie-poster__image-wrapper">
            <img
              alt="Movie Poster"
              loading="lazy"
              className="movie-poster__image"
              src={MOVIE_INFO.posterUrl}
            />
            <button className="movie-poster__play-button" onClick={handlePlayClick}>
              <PlayCircleIcon style={{ width: "85px", height: "85px", color: "white" }} className="movie-poster__play-icon" />
            </button>
          </div>
        </div>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        shouldCloseOnOverlayClick={true}
        className="video-modal"
      >
        <button
          onClick={closeModal}
          className="video-modal__close-btn"
        >
          &times;
        </button>
        <YouTube
          videoId={MOVIE_INFO.trailerUrl}
          opts={youtubeOpts}
          className="movie-poster__video"
        />
      </Modal>
      <div className='layout_content'>
        <div className='layout_content_left'>
          <div className="movie-poster__main">
            <div className="movie-poster__side-poster">
              <img
                alt="Side Poster"
                loading="lazy"
                className="movie-poster__side-image"
                src={MOVIE_INFO.sidePosterUrl}
              />
            </div>
            <div className="movie-poster__info-section">
              <h1 className="movie-poster__title">
                {MOVIE_INFO.title}
                <span className="movie-poster__age">{MOVIE_INFO.ageRating}</span>
              </h1>
              <div className="movie-poster__meta">
                <span className="movie-poster__duration"><AccessTimeIcon />{MOVIE_INFO.duration}</span>
                <span className="movie-poster__release-date"><CalendarTodayIcon />{MOVIE_INFO.releaseDate}</span>
              </div>
              <div className="movie-poster__rating">
                <span className="movie-poster__rating-value"><StarIcon />{MOVIE_INFO.rating}</span>
                <span className="movie-poster__rating-votes">{MOVIE_INFO.ratingVotes}</span>
              </div>
              <div className="movie-poster__details">
                <div className="movie-poster__detail-item">
                  <span className="movie-poster__detail-label">Quốc gia:</span>
                  <span className="movie-poster__detail-value">{MOVIE_INFO.country}</span>
                </div>
                <div className="movie-poster__detail-item">
                  <span className="movie-poster__detail-label">Nhà sản xuất:</span>
                  <span className="movie-poster__detail-value">{MOVIE_INFO.producer}</span>
                </div>
                <div className="movie-poster__detail-item">
                  <span className="movie-poster__detail-label">Thể loại:</span>
                  {MOVIE_INFO.genres.split(', ').map((genre, index) => (
                    <span key={index} className="movie-poster__detail-value movie-poster__detail-value--border">{genre.trim()}</span>
                  ))}
                </div>
                <div className="movie-poster__detail-item">
                  <span className="movie-poster__detail-label">Đạo diễn:</span>
                  {MOVIE_INFO.director.split(' ').map((director, index) => (
                    <span key={index} className="movie-poster__detail-value movie-poster__detail-value--border">{director}</span>
                  ))}
                </div>
                <div className="movie-poster__detail-item">
                  <span className="movie-poster__detail-label">Diễn viên:</span>
                  {MOVIE_INFO.actors.split(', ').map((actor, index) => (
                    <span key={index} className="movie-poster__detail-value movie-poster__detail-value--border">{actor.trim()}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="movie__content">
            <span className="content-border"></span>
            <h1 className="content-title">Nội dung phim</h1>
            <div className="content-text" dangerouslySetInnerHTML={{ __html: formatContent(MOVIE_INFO.fullContent) }} />
          </div>
          <div className="movie__showtime">
            <div className="movie__showtime-header">
              <span className="content-border"></span>
              <h1 className="content-title">Lịch chiếu</h1>
            </div>
            <div className="movie__filter">
              <div className="filter__date">
                <button className="date-prev">
                  <KeyboardArrowLeftIcon />
                </button>
                <div className="date-track">
                  {SHOWTIME_DATES.map((date, index) => (
                    <div key={index} className={`date-slide ${date.date === "30/07" ? "active" : ""}`}>
                      <a className={`date-item ${date.date === "30/07" ? "active" : ""}`}>
                        <span>{date.day}</span>
                        <span>{date.date}</span>
                      </a>
                    </div>
                  ))}
                </div>
                <button className="date-next">
                  <KeyboardArrowRightIcon />
                </button>
              </div>
              <div className="filter__location">
                <div className="location-item">
                  <div className="location-select">
                    <span>Toàn quốc</span>
                    <div className="location-dropdown">
                      <KeyboardArrowDownIcon />
                    </div>
                  </div>
                </div>
                <div className="location-item">
                  <div className="location-select">
                    <span>Tất cả rạp</span>
                    <div className="location-dropdown">
                      <KeyboardArrowDownIcon />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="line"></div>
            <div className="showtime__list">
              {SHOWTIME_CINEMAS.map((cinema, index) => (
                <div
                  key={index}
                  className="showtime__cinema">
                  <h1 className="cinema-title">{cinema.cinema}</h1>
                  {cinema.schedules.map((schedule, sIndex) => (
                    <div
                      key={sIndex}
                      className="showtime__bundle">
                      <label className="bundle-label">{schedule.type}</label>
                      <div className="time__show">
                        {schedule.times.map((time, tIndex) => (
                          <button
                            key={tIndex}
                            className="time-button">
                            {time}
                          </button>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className='layout_content_right'>
          <MovieDetailShowing />
        </div>
      </div>
    </div>
  );
};