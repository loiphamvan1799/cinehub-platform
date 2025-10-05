package com.cinehub.platform.be.domain.response.filmComment;

import lombok.*;

import java.time.LocalDateTime;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class FilmCommentHomeResponse {

    private String idComment;
    private String name;
    private String slug;
    private Integer views;
    private String imageLandscape;
    private String imagePortrait;
    private Integer displayOrder;
    private LocalDateTime createdAt;
}