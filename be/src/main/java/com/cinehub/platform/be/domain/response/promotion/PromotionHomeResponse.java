package com.cinehub.platform.be.domain.response.promotion;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Builder;
import lombok.Data;

import java.time.LocalDateTime;

@Data
@Builder
public class PromotionHomeResponse {
    private String idPromotion;
    private String name;
    private String slug;
    private String imageLandscape;
    private String imagePortrait;
    private Integer displayOrder;
    private LocalDateTime createdAt;
}
