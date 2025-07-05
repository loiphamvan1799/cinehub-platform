package com.cinehub.platform.be.app.advertise;

import com.cinehub.platform.be.domain.advertise.model.db.Banner;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@RestController
@RequestMapping("/api/banners")
public class BannerController {

    private final BannerService bannerService;

    public BannerController(BannerService bannerService) {
        this.bannerService = bannerService;
    }

    @GetMapping
    public List<Banner> getAllBanners() {
        return bannerService.getAllBanners();
    }

    @PostMapping("/upload")
    public Banner uploadBanner(@RequestParam("file") MultipartFile file,
                               @RequestParam(value = "alt", required = false) String alt,
                               @RequestParam(value = "title", required = false) String title,
                               @RequestParam(value = "link", required = false) String link)
            throws IOException {
        return bannerService.uploadBanner(file, alt, title, link);
    }
}
