package com.cinehub.platform.be.adapters.persistence.advertise;

import com.cinehub.platform.be.domain.db.advertise.Banner;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BannerRepository extends JpaRepository<Banner, String> {
}