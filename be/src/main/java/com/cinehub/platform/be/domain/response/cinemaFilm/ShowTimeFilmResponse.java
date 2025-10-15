package com.cinehub.platform.be.domain.response.cinemaFilm;

import lombok.Builder;
import lombok.Data;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.List;

@Data
@Builder
public class ShowTimeFilmResponse {
    private LocalDate showDate;
    private List<LocalTime> showTime;
}
