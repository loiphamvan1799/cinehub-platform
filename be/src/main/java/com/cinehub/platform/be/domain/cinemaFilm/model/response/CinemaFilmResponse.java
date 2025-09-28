package com.cinehub.platform.be.domain.cinemaFilm.model.response;

import com.cinehub.platform.be.domain.cinemaFilm.model.db.FilmCinemaFormat;
import lombok.Builder;
import lombok.Data;

import java.time.LocalDateTime;
import java.time.LocalTime;

@Data
@Builder
public class CinemaFilmResponse {
    private String cinemaId;
    private String name;
    private FilmCinemaFormat format;
    private LocalTime showTime;
    private LocalDateTime startDate;
    private LocalDateTime endDate;
    private String note;
}
