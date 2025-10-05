package com.cinehub.platform.be.app.promotion;

import com.cinehub.platform.be.domain.response.promotion.PromotionHomeResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/v1/promotion")
@RequiredArgsConstructor
public class PromotionController {

    private final PromotionService promotionService;

    @GetMapping("/display-home")
    public ResponseEntity<List<PromotionHomeResponse>> getPromotionsDisplayHome() {
        List<PromotionHomeResponse> promotions = promotionService.getPromotionsDisplayHome();
        return ResponseEntity.ok(promotions);
    }
}
