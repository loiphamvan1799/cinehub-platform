package com.cinehub.platform.be.app.promotion;

import com.cinehub.platform.be.adapters.persistence.promotion.PromotionRepository;
import com.cinehub.platform.be.domain.response.promotion.PromotionHome;
import com.cinehub.platform.be.domain.response.promotion.PromotionHomeResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class PromotionService {

    private final PromotionRepository promotionRepository;

    public List<PromotionHomeResponse> getPromotionsDisplayHome() {
        List<PromotionHome> promotions = promotionRepository.getPromotionsDisplayHome();
        return promotions.stream()
                .map(this::toResponse)
                .collect(Collectors.toList());
    }

    private PromotionHomeResponse toResponse(PromotionHome promotion) {
        return PromotionHomeResponse.builder()
                .idPromotion(promotion.getId())
                .name(promotion.getName())
                .slug(promotion.getSlug())
                .imageLandscape(promotion.getImageLandscape())
                .imagePortrait(promotion.getImagePortrait())
                .displayOrder(promotion.getDisplayOrder())
                .createdAt(promotion.getCreatedAt())
                .build();
    }
}
