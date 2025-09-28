package com.cinehub.platform.be.app.CinemaFilm;

import com.cinehub.platform.be.adapters.persistence.cinema.CinemaRepository;
import com.cinehub.platform.be.adapters.persistence.cinemaFilm.CinemaFilmRepository;
import com.cinehub.platform.be.domain.cinema.model.db.Cinema;
import com.cinehub.platform.be.domain.cinemaFilm.model.db.CinemaFilm;
import com.cinehub.platform.be.domain.cinemaFilm.model.response.CinemaFilmResponse;
import com.cinehub.platform.be.domain.cinemaFilm.model.response.ShowTimeFilmResponse;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class CinemaFilmService {
    private final CinemaFilmRepository cinemaFilmRepository;
    private final CinemaRepository cinemaRepository;

    public List<CinemaFilmResponse> getCinemaByFilm(String filmId) {
        return toResponses(cinemaFilmRepository.findByFilmIdOrderByStartDateAsc(filmId));
    }

    public List<ShowTimeFilmResponse> getShowTimeInformation(String filmId, String cinemaId) {
        List<CinemaFilm> cinemaFilms = cinemaFilmRepository.findByFilmIdAndCinemaId(filmId, cinemaId);
        return cinemaFilms.stream()
                .map(cinemaFilm -> ShowTimeFilmResponse.builder()
                        .cinemaId(cinemaId)
                        .FilmId(filmId)
                        .showDate(cinemaFilm.getStartDate().toLocalDate())
                        .showTime(cinemaFilm.getStartDate().toLocalTime())
                        .build())
                .toList();
    }

    public List<CinemaFilmResponse> toResponses(List<CinemaFilm> cinemaFilms) {
        return cinemaFilms.stream()
                .map(this::toResponses)
                .toList();
    }

    private CinemaFilmResponse toResponses(CinemaFilm cinemaFilm) {
        Cinema cinema = cinemaRepository.findById(cinemaFilm.getCinemaId())
                .orElseThrow(() -> new EntityNotFoundException(
                        "Cinema not found with id: " + cinemaFilm.getCinemaId()
                ));

        return CinemaFilmResponse.builder()
                .cinemaId(cinemaFilm.getCinemaId())
                .name(cinema.getName())
                .format(cinemaFilm.getFormat())
                .startDate(cinemaFilm.getStartDate())
                .endDate(cinemaFilm.getEndDate())
                .note(cinemaFilm.getNote())
                .build();
    }
}
