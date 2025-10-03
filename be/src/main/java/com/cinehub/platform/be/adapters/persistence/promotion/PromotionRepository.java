package com.cinehub.platform.be.adapters.persistence.promotion;

import com.cinehub.platform.be.domain.response.promotion.PromotionHome;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface PromotionRepository {

    @Query(value = "SELECT id, name, slug, image_landscape, image_portrait, " +
            "display_order, created_at " +
            "FROM promotions " +
            "ORDER BY display_order ASC", nativeQuery = true)
    List<PromotionHome> getPromotionsDisplayHome();
}
