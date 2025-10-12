package com.cinehub.platform.be.app.film;

import com.cinehub.platform.be.domain.cinemaFilm.model.db.FilmCinemaFormat;
import com.cinehub.platform.be.domain.film.model.response.FilmResponse;
import com.cinehub.platform.be.domain.response.film.FilmCardResponse;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/v1/films")
public class FilmController {

    private final FilmService filmService;

    public FilmController(FilmService filmService) {
        this.filmService = filmService;
    }

    @GetMapping("/showing")
    public List<FilmCardResponse> getShowingFilms() {
        return filmService.getFilmsByFormat(FilmCinemaFormat.SHOWING);
    }

    @GetMapping("/comming")
    public List<FilmCardResponse> getComingFilm() {
        return filmService.getFilmsByFormat(FilmCinemaFormat.COMING);
    }

    @GetMapping("/imax")
    public List<FilmCardResponse> getImaxFilm() {
        return filmService.getFilmsByFormat(FilmCinemaFormat.IMAX);
    }
}
