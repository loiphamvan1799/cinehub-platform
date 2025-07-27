package com.cinehub.platform.be.adapters.persistence.film;

import com.cinehub.platform.be.domain.cinema.model.db.CinemaFilm;
import com.cinehub.platform.be.domain.cinema.model.db.FilmCinemaFormat;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.time.LocalDateTime;
import java.util.List;

public interface CinemaFilmRepository extends JpaRepository<CinemaFilm, Long> {
    List<CinemaFilm> findByStartDateBeforeAndEndDateAfter(LocalDateTime now1,
                                                          LocalDateTime now2);
    List<CinemaFilm> findByStartDateAfter(LocalDateTime now);

    @Query("SELECT cf FROM CinemaFilm cf " +
            "WHERE (cf.format = :format AND cf.startDate > :localDateTime) " +
            "OR (cf.format = :format AND cf.startDate <= :localDateTime " +
            "AND cf.endDate >= :localDateTime)")
    List<CinemaFilm> findFilmsImaxIsGoing(FilmCinemaFormat format,
                                          LocalDateTime localDateTime);

}
