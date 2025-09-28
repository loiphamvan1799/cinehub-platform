package com.cinehub.platform.be.adapters.persistence.cinemaFilm;

import com.cinehub.platform.be.domain.cinemaFilm.model.db.CinemaFilm;
import com.cinehub.platform.be.domain.cinemaFilm.model.db.FilmCinemaFormat;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.time.LocalDateTime;
import java.util.List;

public interface CinemaFilmRepository extends JpaRepository<CinemaFilm, Long> {

    @Query("SELECT cf FROM CinemaFilm cf " +
            "WHERE (cf.format = :format AND cf.startDate > :localDateTime) " +
            "OR (cf.format = :format AND cf.startDate <= :localDateTime " +
            "AND cf.endDate >= :localDateTime) " +
            "ORDER BY cf.startDate DESC")
    List<CinemaFilm> findFilmsImax(FilmCinemaFormat format,
                                          LocalDateTime localDateTime);

    @Query(value = "SELECT * FROM cinema_film WHERE start_date <= :localDateTime " +
            "AND end_date >= :localDateTime ORDER BY start_date DESC", nativeQuery = true)
    List<CinemaFilm> findFilmShowing(LocalDateTime localDateTime);

    @Query(value = "SELECT * FROM cinema_film WHERE start_date > :localDateTime " +
            "ORDER BY start_date DESC", nativeQuery = true)
    List<CinemaFilm> findFilmComming(LocalDateTime localDateTime);

    List<CinemaFilm> findByFilmIdOrderByStartDateAsc(String filmId);

    @Query(value = "SELECT * FROM cinema_film WHERE film_id = :filmId " +
            "AND cinema_id = :cinemaId ORDER BY start_date ASC", nativeQuery = true)
    List<CinemaFilm> findByFilmIdAndCinemaId(String filmId, String cinemaId);
}
