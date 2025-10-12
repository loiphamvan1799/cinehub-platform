package com.cinehub.platform.be.domain.response.film.projection;

import java.time.LocalDateTime;

public interface IFilmCardResponse {

    String getId();
    String getName();
    String getImageLandscape();
    String getImagePortrait();
    String getSlug();
    double getRate();
    Integer getViews();
    LocalDateTime getStartDate();
    LocalDateTime getEndDate();
}
