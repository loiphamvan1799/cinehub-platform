package com.cinehub.platform.be.domain.response.filmComment;

import java.time.LocalDateTime;

public interface FilmCommentHome {
    String getId();
    String getName();
    String getSlug();
    Integer getViews();
    String getImageLandscape();
    String getImagePortrait();
    Integer getDisplayOrder();
    LocalDateTime getCreatedAt();
}
