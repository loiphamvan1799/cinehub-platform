package com.cinehub.platform.be.app.CinemaFilm;

import com.cinehub.platform.be.adapters.persistence.cinema.CinemaRepository;
import com.cinehub.platform.be.adapters.persistence.cinemaFilm.CinemaFilmRepository;
import com.cinehub.platform.be.domain.cinema.model.db.Cinema;
import com.cinehub.platform.be.domain.cinemaFilm.model.db.CinemaFilm;
import com.cinehub.platform.be.domain.response.cinemaFilm.CinemaFilmResponse;
import com.cinehub.platform.be.domain.response.cinemaFilm.ShowTimeFilmResponse;
import com.cinehub.platform.be.common.exception.ResourceNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.Collections;
import java.util.List;
import java.util.Map;
import java.util.Objects;
import java.util.stream.Collectors;

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

        if (Objects.isNull(cinemaFilms)) {
            return Collections.emptyList();
        }

        Map<LocalDate, List<LocalTime>> showTimesByDate = cinemaFilms.stream()
                .collect(Collectors.groupingBy(
                        cinemaFilm -> cinemaFilm.getStartDate().toLocalDate(),
                        Collectors.mapping(
                                cinemaFilm -> cinemaFilm.getStartDate().toLocalTime(),
                                Collectors.toList()
                        )
                ));

        return showTimesByDate.entrySet().stream()
                .map(entry -> ShowTimeFilmResponse.builder()
                        .showDate(entry.getKey())
                        .showTime(entry.getValue())
                        .build())
                .toList();
    }

    private List<CinemaFilmResponse> toResponses(List<CinemaFilm> cinemaFilms) {
        return cinemaFilms.stream()
                .map(this::toResponse)
                .toList();
    }

    private CinemaFilmResponse toResponse(CinemaFilm cinemaFilm) {
        Cinema cinema = cinemaRepository.findById(cinemaFilm.getCinemaId())
                .orElseThrow(() -> new ResourceNotFoundException("Cinema not found with id: " + cinemaFilm.getCinemaId()));

        return CinemaFilmResponse.builder()
                .cinemaId(cinemaFilm.getCinemaId())
                .name(cinema.getName())
                .format(cinemaFilm.getFormat())
                .startDate(cinemaFilm.getStartDate())
                .endDate(cinemaFilm.getEndDate())
                .build();
    }
}
