import React, { useState, useEffect, useRef } from "react";
import "./styles.css";
import {
  getCinemasByFilmId,
  getFilmShowingInfo,
} from "../../service/api/top/APIFilter";

const FilterSection = ({ showingMovies, comingMovies }) => {
  const [selectedValues, setSelectedValues] = useState({
    movie: "Chọn Phim",
    theater: "Chọn Rạp",
    day: "Chọn Ngày",
    rate: "Chọn Suất",
  });

  const [selectedMovieId, setSelectedMovieId] = useState(null);
  const [theaters, setTheaters] = useState([]);
  const [dropdownData, setDropdownData] = useState({ day: [], rate: [] });
  const [currentStep, setCurrentStep] = useState(0);
  const [openDropdown, setOpenDropdown] = useState(null);
  const filterSectionRef = useRef(null);

  const allMovies = [...showingMovies, ...comingMovies]
    .map((movie) => ({ id: movie.id, title: movie.title }))
    .filter(
      (movie, index, self) =>
        index === self.findIndex((m) => m.title === movie.title)
    );

  const handleSelect = async (type, value) => {
    if (type === "movie") {
      setSelectedValues((prev) => ({
        ...prev,
        movie: value.title,
        theater: "Chọn Rạp",
        day: "Chọn Ngày",
        rate: "Chọn Suất",
      }));
      setSelectedMovieId(value.id);
      setCurrentStep(1);

      try {
        const theaterList = await getCinemasByFilmId(value.id);
        setTheaters(theaterList);
      } catch (err) {
        console.error("Error fetching theaters:", err);
        setTheaters([]);
      }
      return;
    }

    if (type === "theater" && value !== "Chọn Rạp") {
      setSelectedValues((prev) => ({
        ...prev,
        theater: value,
        day: "Chọn Ngày",
        rate: "Chọn Suất",
      }));
      setCurrentStep(2);

      const selectedTheater = theaters.find((t) => t.name === value);
      if (selectedTheater && selectedMovieId) {
        try {
          const showingInfo = await getFilmShowingInfo(
            selectedMovieId,
            selectedTheater.id
          );

          setDropdownData({
            day: showingInfo.map((i) => i.date),
            rate: showingInfo[0]?.times || [],
          });
        } catch (error) {
          console.error("Error fetching showing info:", error);
          setDropdownData({ day: [], rate: [] });
        }
      }
      return;
    }

    if (type === "day" && value !== "Chọn Ngày") {
      const selectedDate = dropdownData.day.find((d) => d === value);
      const times =
        dropdownData.rate && selectedDate ? dropdownData.rate : [];
      setSelectedValues((prev) => ({
        ...prev,
        day: value,
        rate: "Chọn Suất",
      }));
      setDropdownData((prev) => ({ ...prev, rate: times }));
      setCurrentStep(3);
      return;
    }

    if (type === "rate" && value !== "Chọn Suất") {
      setSelectedValues((prev) => ({ ...prev, rate: value }));
      setCurrentStep(4);
      return;
    }
  };

  const toggleDropdown = (type) => {
    setOpenDropdown((prev) => (prev === type ? null : type));
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        filterSectionRef.current &&
        !filterSectionRef.current.contains(event.target)
      ) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="filter-section" ref={filterSectionRef}>
      <button
        data-number="1"
        onClick={() => toggleDropdown("movie")}
        className={openDropdown === "movie" ? "active" : ""}
      >
        <span className="button-text">{selectedValues.movie}</span>
        {openDropdown === "movie" && (
          <ul className="dropdown">
            {allMovies.map((movie) => (
              <li
                key={movie.id}
                className={
                  selectedValues.movie === movie.title ? "selected" : ""
                }
                onClick={() => handleSelect("movie", movie)}
              >
                {movie.title}
              </li>
            ))}
          </ul>
        )}
      </button>

      <button
        data-number="2"
        onClick={() => toggleDropdown("theater")}
        className={
          openDropdown === "theater"
            ? "active"
            : currentStep < 1
            ? "disabled"
            : ""
        }
        disabled={currentStep < 1}
      >
        <span className="button-text">{selectedValues.theater}</span>
        {openDropdown === "theater" && (
          <ul className="dropdown">
            {theaters.length > 0 ? (
              theaters.map((item) => (
                <li
                  key={item.id}
                  className={
                    selectedValues.theater === item.name ? "selected" : ""
                  }
                  onClick={() => handleSelect("theater", item.name)}
                >
                  {item.name}
                </li>
              ))
            ) : (
              <li className="disabled">Không có rạp</li>
            )}
          </ul>
        )}
      </button>

      <button
        data-number="3"
        onClick={() => toggleDropdown("day")}
        className={
          openDropdown === "day" ? "active" : currentStep < 2 ? "disabled" : ""
        }
        disabled={currentStep < 2}
      >
        <span className="button-text">{selectedValues.day}</span>
        {openDropdown === "day" && (
          <ul className="dropdown">
            {dropdownData.day.length > 0 ? (
              dropdownData.day.map((item) => (
                <li
                  key={item}
                  className={selectedValues.day === item ? "selected" : ""}
                  onClick={() => handleSelect("day", item)}
                >
                  {item}
                </li>
              ))
            ) : (
              <li className="disabled">Không có ngày chiếu</li>
            )}
          </ul>
        )}
      </button>

      <button
        data-number="4"
        onClick={() => toggleDropdown("rate")}
        className={
          openDropdown === "rate" ? "active" : currentStep < 3 ? "disabled" : ""
        }
        disabled={currentStep < 3}
      >
        <span className="button-text">{selectedValues.rate}</span>
        {openDropdown === "rate" && (
          <ul className="dropdown">
            {dropdownData.rate.length > 0 ? (
              dropdownData.rate.map((item) => (
                <li
                  key={item}
                  className={selectedValues.rate === item ? "selected" : ""}
                  onClick={() => handleSelect("rate", item)}
                >
                  {item}
                </li>
              ))
            ) : (
              <li className="disabled">Không có suất chiếu</li>
            )}
          </ul>
        )}
      </button>

      <button
        className={currentStep < 4 ? "buy-ticket disabled" : "buy-ticket"}
        disabled={currentStep < 4}
        onClick={() =>
          console.log("Buy ticket clicked with filmId:", selectedMovieId)
        }
      >
        <span className="button-text">Mua vé nhanh</span>
      </button>
    </div>
  );
};

export default FilterSection;
