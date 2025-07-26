package com.cinehub.platform.be.domain.film.model.response;

import lombok.Builder;
import lombok.Data;

import java.util.UUID;

@Data
@Builder
public class FilmCommentResponse {

    private UUID id;
    private UUID idFilm;
    private String name;
    private String slug;
    private Integer views;
    private String type;
    private String shortDescription;
    private String imageLandscape;
    private String imagePortrait;
    private String description;
}