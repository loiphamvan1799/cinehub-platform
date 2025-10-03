package com.cinehub.platform.be.domain.response.promotion;

import java.time.LocalDateTime;

public interface PromotionHome {
    String getId();
    String getName();
    String getSlug();
    String getImageLandscape();
    String getImagePortrait();
    Integer getDisplayOrder();
    LocalDateTime getCreatedAt();
}
