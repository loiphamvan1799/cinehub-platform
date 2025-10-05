package com.cinehub.platform.be.domain.response.filmBlog;

import java.time.LocalDateTime;

public interface FilmBlogHome {
    String getId();
    String getName();
    String getSlug();
    Integer getViews();
    String getImageLandscape();
    String getImagePortrait();
    Integer getDisplayOrder();
    LocalDateTime getCreatedAt();
}
