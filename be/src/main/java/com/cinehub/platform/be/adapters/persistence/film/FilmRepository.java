package com.cinehub.platform.be.adapters.persistence.film;

import com.cinehub.platform.be.domain.film.model.db.Film;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FilmRepository extends JpaRepository<Film, String> {
}