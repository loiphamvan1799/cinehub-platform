package com.cinehub.platform.be.domain.cinema.model.db;

import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDateTime;

@Entity
@Table(name = "cinema_film")
@Data
public class CinemaFilm {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String cinemaId;
    private String filmId;
    private FilmCinemaFormat format;
    private LocalDateTime startDate;
    private LocalDateTime endDate;
}