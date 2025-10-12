package com.cinehub.platform.be.app.film;

import com.cinehub.platform.be.adapters.persistence.cinemaFilm.CinemaFilmRepository;
import com.cinehub.platform.be.domain.cinemaFilm.model.db.CinemaFilm;
import com.cinehub.platform.be.domain.cinemaFilm.model.db.FilmCinemaFormat;
import com.cinehub.platform.be.domain.response.film.FilmCardResponse;
import com.cinehub.platform.be.domain.response.film.projection.IFilmCardResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.Comparator;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class FilmService {
    private final CinemaFilmRepository cinemaFilmRepository;

    public List<FilmCardResponse> getFilmsByFormat(FilmCinemaFormat format) {
        LocalDateTime now = LocalDateTime.now();
        List<IFilmCardResponse> films;

        switch (format) {
            case SHOWING -> films = cinemaFilmRepository.findCurrentFilms(now);
            case COMING -> films = cinemaFilmRepository.findUpcomingFilms(now);
            case IMAX -> films = cinemaFilmRepository.findFilmsImax(format, now);
            default -> films = List.of();
        }

        if (films.isEmpty()) {
            return List.of();
        }

        List<String> filmIds = films.stream()
                .map(IFilmCardResponse::getId)
                .collect(Collectors.toList());

        // Get all cinema films for the given film IDs
        List<CinemaFilm> allCinemaFilms = cinemaFilmRepository.findByFilmIdIn(filmIds);

        // Group cinema films by filmId and calculate min start date and max end date
        Map<String, LocalDateTime> minStartDates = allCinemaFilms.stream()
                .collect(Collectors.groupingBy(
                        CinemaFilm::getFilmId,
                        Collectors.collectingAndThen(
                                Collectors.minBy(Comparator.comparing(CinemaFilm::getStartDate)),
                                optionalCinemaFilm -> optionalCinemaFilm.map(CinemaFilm::getStartDate).orElse(null)
                        )
                ));

        Map<String, LocalDateTime> maxEndDates = allCinemaFilms.stream()
                .collect(Collectors.groupingBy(
                        CinemaFilm::getFilmId,
                        Collectors.collectingAndThen(
                                Collectors.maxBy(Comparator.comparing(CinemaFilm::getEndDate)),
                                optionalCinemaFilm -> optionalCinemaFilm.map(CinemaFilm::getEndDate).orElse(null)
                        )
                ));

        // Map to final response
        return films.stream()
                .map(film -> FilmCardResponse.builder()
                        .id(film.getId())
                        .name(film.getName())
                        .imageLandscape(film.getImageLandscape())
                        .imagePortrait(film.getImagePortrait())
                        .slug(film.getSlug())
                        .rate(film.getRate())
                        .views(film.getViews())
                        .format(null)
                        .minStartDate(minStartDates.get(film.getId()))
                        .maxEndDate(maxEndDates.get(film.getId()))
                        .build())
                .collect(Collectors.toList());
    }
}
