package com.cinehub.platform.be.domain.film.model.db;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.CreationTimestamp;

import java.time.LocalDateTime;
import java.util.UUID;

@Entity
@Table(name = "film_blogs")
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class FilmBlog {

    @Id
    private String id;
    private String idFilm;
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

    @CreationTimestamp
    @Column(name = "created_at", updatable = false)
    private LocalDateTime createdAt;

    private boolean isHot;
}