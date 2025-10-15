package com.cinehub.platform.be.app.CinemaFilm;

import com.cinehub.platform.be.domain.response.cinemaFilm.CinemaFilmResponse;
import com.cinehub.platform.be.domain.response.cinemaFilm.ShowTimeFilmResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/cinema-films")
@RequiredArgsConstructor
public class CinemaFilmController {
    private final CinemaFilmService cinemaFilmService;

    @GetMapping("/film")
    public ResponseEntity<List<CinemaFilmResponse>> getCinemaByFilm(@RequestParam String filmId) {
        List<CinemaFilmResponse> cinemas = cinemaFilmService.getCinemaByFilm(filmId);
        return ResponseEntity.ok(cinemas);
    }

    @GetMapping("/showingInfo")
    public ResponseEntity<List<ShowTimeFilmResponse>> getShowingInformation(@RequestParam String filmId,
                                                                    @RequestParam String cinemaId) {
        List<ShowTimeFilmResponse> showTimeFilm = cinemaFilmService.getShowTimeInformation(filmId,
                cinemaId);
        return ResponseEntity.ok(showTimeFilm);
    }
}
