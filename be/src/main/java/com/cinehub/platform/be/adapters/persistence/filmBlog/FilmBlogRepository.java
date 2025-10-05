package com.cinehub.platform.be.adapters.persistence.filmBlog;

import com.cinehub.platform.be.domain.db.filmBlog.FilmBlog;
import com.cinehub.platform.be.domain.response.filmBlog.FilmBlogHome;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface FilmBlogRepository extends JpaRepository<FilmBlog, String> {

    @Query(value = "SELECT id, name, slug, views, image_landscape," +
            "image_portrait, display_order, created_at " +
            "FROM film_blogs " +
            "WHERE is_hot = true " +
            "AND display_order BETWEEN 1 AND 4 " +
            "ORDER BY display_order ASC", nativeQuery = true)
    List<FilmBlogHome> findBlogsDisplayHome();
}

