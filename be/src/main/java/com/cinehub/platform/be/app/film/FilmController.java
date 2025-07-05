package com.cinehub.platform.be.app.film;

import com.cinehub.platform.be.domain.film.model.response.FilmResponse;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/films")
public class FilmController {

    private final FilmService filmService;

    public FilmController(FilmService filmService) {
        this.filmService = filmService;
    }

    @GetMapping("/showing")
    public List<FilmResponse> getShowingFilms() {
        return filmService.getShowingFilms();
    }

    @GetMapping("/comming")
    public List<FilmResponse> getComingFilm() {
        return filmService.getComingFilms();
    }

    @GetMapping("/imax")
    public List<FilmResponse> getImaxFilm() {
        return filmService.getImaxFilms();
    }
}
