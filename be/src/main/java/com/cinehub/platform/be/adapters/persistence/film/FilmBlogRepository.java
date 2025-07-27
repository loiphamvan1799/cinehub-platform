package com.cinehub.platform.be.adapters.persistence.film;

import com.cinehub.platform.be.domain.film.model.db.FilmBlog;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface FilmBlogRepository extends JpaRepository<FilmBlog, UUID> {
}

