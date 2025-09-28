package com.cinehub.platform.be.domain.cinemaFilm.model.response;

import lombok.Builder;
import lombok.Data;

import java.time.LocalDate;
import java.time.LocalTime;

@Data
@Builder
public class ShowTimeFilmResponse {
    private String cinemaId;
    private String FilmId;
    private LocalDate showDate;
    private LocalTime showTime;
}
