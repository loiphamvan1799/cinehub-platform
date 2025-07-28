package com.cinehub.platform.be.domain.film.model.response;

import lombok.Builder;
import lombok.Data;

import java.time.LocalDateTime;

@Data
@Builder
public class FilmCommentResponse {

    private String id;
    private String idFilm;
    private String name;
    private String slug;
    private Integer views;
    private String type;
    private String shortDescription;
    private String imageLandscape;
    private String imagePortrait;
    private String description;
    private LocalDateTime createdAt;
    private boolean isHot;
}