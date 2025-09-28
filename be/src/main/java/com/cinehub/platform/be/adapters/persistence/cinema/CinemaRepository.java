package com.cinehub.platform.be.adapters.persistence.cinema;

import com.cinehub.platform.be.domain.cinema.model.db.Cinema;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CinemaRepository extends JpaRepository<Cinema, String> {
}

