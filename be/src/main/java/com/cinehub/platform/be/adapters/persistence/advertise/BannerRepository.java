package com.cinehub.platform.be.adapters.persistence.advertise;

import com.cinehub.platform.be.domain.advertise.model.db.Banner;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BannerRepository extends JpaRepository<Banner, String> {
}