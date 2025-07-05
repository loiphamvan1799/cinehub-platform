package com.cinehub.platform.be.domain.cinema.model.response;

import com.cinehub.platform.be.domain.cinema.model.db.CinemaFilm;
import com.cinehub.platform.be.domain.film.model.db.Film;

public record MapCinemaFilmFormat(CinemaFilm cinemaFilm, Film film) {}
