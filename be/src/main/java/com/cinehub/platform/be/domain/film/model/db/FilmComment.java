package com.cinehub.platform.be.domain.film.model.db;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.UUID;

@Entity
@Table(name = "film_comments")
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class FilmComment {

    @Id
    private UUID id;
    private UUID idFilm;
    private String name;
    private String slug;
    private Integer views;
    private String type;

    @Column(columnDefinition = "TEXT")
    private String shortDescription;

    private String imageLandscape;
    private String imagePortrait;

    @Lob
    @Column(columnDefinition = "LONGTEXT")
    private String description;
}