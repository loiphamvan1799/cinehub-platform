package com.cinehub.platform.be.adapters.persistence.filmComment;

import com.cinehub.platform.be.domain.db.filmComment.FilmComment;
import com.cinehub.platform.be.domain.response.filmComment.FilmCommentHome;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface FilmCommentRepository extends JpaRepository<FilmComment, String> {
    @Query(value = "SELECT id, name, slug, views, image_landscape," +
            "image_portrait, display_order, created_at " +
            "FROM film_comments " +
            "WHERE is_hot = true " +
            "AND display_order BETWEEN 1 AND 4 " +
            "ORDER BY display_order ASC", nativeQuery = true)
    List<FilmCommentHome> findCommentsDisplayHome();
}
