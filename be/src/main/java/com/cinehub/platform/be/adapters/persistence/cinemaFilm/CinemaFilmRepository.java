package com.cinehub.platform.be.adapters.persistence.cinemaFilm;

import com.cinehub.platform.be.domain.cinemaFilm.model.db.CinemaFilm;
import com.cinehub.platform.be.domain.cinemaFilm.model.db.FilmCinemaFormat;
import com.cinehub.platform.be.domain.response.film.projection.IFilmCardResponse;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.time.LocalDateTime;
import java.util.List;

@Repository
public interface CinemaFilmRepository extends JpaRepository<CinemaFilm, String> {
    @Query("""
            SELECT DISTINCT f.id as id, f.name as name, f.imageLandscape as imageLandscape,
                   f.imagePortrait as imagePortrait, f.slug as slug, f.rate as rate,
                   f.views as views
            FROM Film f
            JOIN CinemaFilm cf ON f.id = cf.filmId
            WHERE cf.startDate <= :currentDateTime
            AND cf.endDate >= :currentDateTime
            """)
    List<IFilmCardResponse> findCurrentFilms(@Param("currentDateTime") LocalDateTime currentDateTime);

    @Query("""
            SELECT DISTINCT f.id as id, f.name as name, f.imageLandscape as imageLandscape,
                   f.imagePortrait as imagePortrait, f.slug as slug, f.rate as rate,
                   f.views as views
            FROM Film f
            JOIN CinemaFilm cf ON f.id = cf.filmId
            WHERE cf.startDate > :currentDateTime
            """)
    List<IFilmCardResponse> findUpcomingFilms(@Param("currentDateTime") LocalDateTime currentDateTime);

    @Query("""
            SELECT DISTINCT f.id as id, f.name as name, f.imageLandscape as imageLandscape,
                   f.imagePortrait as imagePortrait, f.slug as slug, f.rate as rate,
                   f.views as views
            FROM Film f
            JOIN CinemaFilm cf ON f.id = cf.filmId
            WHERE cf.format = :format
            AND cf.startDate <= :currentDateTime
            AND cf.endDate >= :currentDateTime
            """)
    List<IFilmCardResponse> findFilmsImax(@Param("format") FilmCinemaFormat format,
                                         @Param("currentDateTime") LocalDateTime currentDateTime);

    @Query("""
            SELECT cf FROM CinemaFilm cf
            WHERE cf.filmId = :filmId
            ORDER BY cf.startDate ASC
            """)
    List<CinemaFilm> findByFilmIdOrderByStartDateAsc(@Param("filmId") String filmId);

    List<CinemaFilm> findByFilmIdAndCinemaId(String filmId, String cinemaId);

    @Query("""
            SELECT cf FROM CinemaFilm cf
            WHERE cf.filmId IN :filmIds
            ORDER BY cf.filmId, cf.startDate
            """)
    List<CinemaFilm> findByFilmIdIn(@Param("filmIds") List<String> filmIds);
}
