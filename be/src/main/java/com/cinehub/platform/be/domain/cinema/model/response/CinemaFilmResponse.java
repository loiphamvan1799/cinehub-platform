package com.cinehub.platform.be.domain.cinema.model.response;

import lombok.Data;

import java.time.LocalDateTime;

@Data
public class CinemaFilmResponse {
    private String filmId;
    private String filmName;
    private String filmImagePortrait;
    private String filmSlug;
    private LocalDateTime startDate;
    private LocalDateTime endDate;
}
