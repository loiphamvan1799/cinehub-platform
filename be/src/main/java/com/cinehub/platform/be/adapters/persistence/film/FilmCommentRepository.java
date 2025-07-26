package com.cinehub.platform.be.adapters.persistence.film;

import com.cinehub.platform.be.domain.film.model.db.FilmComment;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;
import java.util.UUID;

public interface FilmCommentRepository extends JpaRepository<FilmComment, UUID> {
    Optional<FilmComment> findBySlug(String slug);
}

