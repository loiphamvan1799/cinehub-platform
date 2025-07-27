package com.cinehub.platform.be.app.advertise;

import com.cinehub.platform.be.adapters.persistence.advertise.BannerRepository;
import com.cinehub.platform.be.domain.advertise.model.db.Banner;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.util.List;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class BannerService {

    private final BannerRepository bannerRepository;

    public List<Banner> getAllBanners() {
        return bannerRepository.findAll();
    }

    public Banner uploadBanner(MultipartFile file, String alt,
                               String title, String link) throws IOException {
        String uploadDir = "uploads/banners";
        File dir = new File(uploadDir);
        if (!dir.exists()) dir.mkdirs();

        String filename = UUID.randomUUID() + "_" + file.getOriginalFilename();
        String filepath = uploadDir + "/" + filename;

        file.transferTo(new File(filepath));

        Banner banner = new Banner();
        banner.setId(UUID.randomUUID().toString());
        banner.setSrc("/" + filepath);
        banner.setAlt(alt);
        banner.setTitle(title);
        banner.setLink(link);
        banner.setSortOrder(0);

        return bannerRepository.save(banner);
    }
}