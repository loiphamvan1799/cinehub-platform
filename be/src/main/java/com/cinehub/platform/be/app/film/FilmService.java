package com.cinehub.platform.be.app.film;

import com.cinehub.platform.be.adapters.persistence.film.CinemaFilmRepository;
import com.cinehub.platform.be.adapters.persistence.film.FilmRepository;
import com.cinehub.platform.be.domain.cinema.model.db.CinemaFilm;
import com.cinehub.platform.be.domain.cinema.model.db.FilmCinemaFormat;
import com.cinehub.platform.be.domain.cinema.model.response.MapCinemaFilmFormat;
import com.cinehub.platform.be.domain.film.model.db.Film;
import com.cinehub.platform.be.domain.film.model.response.FilmResponse;
import lombok.Data;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

import java.util.stream.Collectors;

@Data
@Service
public class FilmService {

    private final FilmRepository filmRepository;
    private final CinemaFilmRepository cinemaFilmRepository;

    public FilmService(CinemaFilmRepository cinemaFilmRepository, FilmRepository filmRepository) {
        this.cinemaFilmRepository = cinemaFilmRepository;
        this.filmRepository = filmRepository;
    }

    public List<FilmResponse> getShowingFilms() {
        return getFilmResponses(getFilmsByFormat(FilmCinemaFormat.SHOWING));
    }

    public List<FilmResponse> getComingFilms() {
        return getFilmResponses(getFilmsByFormat(FilmCinemaFormat.COMING));
    }

    public List<FilmResponse> getImaxFilms() {
        return getFilmResponses(getFilmsByFormat(FilmCinemaFormat.IMAX));
    }

    private List<CinemaFilm> getFilmsByFormat(FilmCinemaFormat format) {
        LocalDateTime now = LocalDateTime.now();

        return switch (format) {
            case FilmCinemaFormat.SHOWING ->
                    cinemaFilmRepository.findByStartDateBeforeAndEndDateAfter(now, now);
            case FilmCinemaFormat.COMING ->
                    cinemaFilmRepository.findByStartDateAfter(now);
            case FilmCinemaFormat.IMAX ->
                    cinemaFilmRepository.findFilmsImaxIsGoing(FilmCinemaFormat.IMAX, now);
        };
    }

    private List<FilmResponse> getFilmResponses(List<CinemaFilm> cinemaFilms) {
        return cinemaFilms.stream()
                .map(cf -> {
                    Film film = filmRepository.findById(cf.getFilmId()).orElse(null);
                    return new MapCinemaFilmFormat(cf, film);
                })
                .filter(mCf -> mCf.film() != null)
                .map(mCf -> toResponse(mCf.film(), mCf.cinemaFilm().getFormat()))
                .collect(Collectors.toList());
    }

    private FilmResponse toResponse(Film film, FilmCinemaFormat format) {
        FilmResponse res = new FilmResponse();
        res.id = film.getId();
        res.name = film.getName();
        res.age = film.getAge();
        res.format = String.valueOf(format);
        res.duration = film.getDuration();
        res.startDate = film.getStartDate();
        res.endDate = film.getEndDate();
        res.imageLandscape = film.getImageLandscape();
        res.imagePortrait = film.getImagePortrait();
        res.slug = film.getSlug();
        res.trailer = film.getTrailer();
        res.rate = film.getRate();
        res.totalVotes = film.getTotalVotes();
        res.views = film.getViews();
        res.createdAt = film.getCreatedAt();
        return res;
    }
}
