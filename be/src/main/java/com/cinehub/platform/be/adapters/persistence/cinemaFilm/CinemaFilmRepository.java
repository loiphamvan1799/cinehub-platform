package com.cinehub.platform.be.adapters.persistence.cinemaFilm;

import com.cinehub.platform.be.domain.cinemaFilm.model.db.CinemaFilm;
import com.cinehub.platform.be.domain.cinemaFilm.model.db.FilmCinemaFormat;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.time.LocalDateTime;
import java.util.List;

public interface CinemaFilmRepository extends JpaRepository<CinemaFilm, Long> {
    List<CinemaFilm> findByStartDateBeforeAndEndDateAfter(LocalDateTime time1,
                                                          LocalDateTime time2);
    List<CinemaFilm> findByStartDateAfter(LocalDateTime localDateTime);

    @Query("SELECT cf FROM CinemaFilm cf " +
            "WHERE (cf.format = :format AND cf.startDate > :localDateTime) " +
            "OR (cf.format = :format AND cf.startDate <= :localDateTime " +
            "AND cf.endDate >= :localDateTime)")
    List<CinemaFilm> findFilmsImaxIsGoing(FilmCinemaFormat format,
                                          LocalDateTime localDateTime);

    List<CinemaFilm> findByFilmIdOrderByStartDateAsc(String filmId);

    @Query(value = "SELECT * FROM cinema_film WHERE film_id = :filmId " +
            "AND cinema_id = :cinemaId ORDER BY start_date ASC", nativeQuery = true)
    List<CinemaFilm> findByFilmIdAndCinemaId(String filmId, String cinemaId);
}
