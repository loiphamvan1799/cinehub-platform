package com.cinehub.platform.be.domain.cinemaFilm.model.db;

import jakarta.persistence.*;
import lombok.Data;
import org.hibernate.annotations.CreationTimestamp;

import java.time.LocalDateTime;

@Entity
@Table(name = "cinemas_films")
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
    private String note;
    @CreationTimestamp
    private LocalDateTime createdAt;
}