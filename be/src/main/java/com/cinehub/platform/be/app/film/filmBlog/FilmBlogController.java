package com.cinehub.platform.be.app.film.filmBlog;

import com.cinehub.platform.be.domain.film.model.response.FilmBlogResponse;
import com.cinehub.platform.be.domain.film.model.response.FilmCommentResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/v1/film-blog")
@RequiredArgsConstructor
public class FilmBlogController {

    private final FilmBlogService filmBlogService;

    @GetMapping
    public ResponseEntity<List<FilmBlogResponse>> getAllBlogs() {
        return ResponseEntity.ok(filmBlogService.getAllBlogs());
    }

    @GetMapping("/hot")
    public ResponseEntity<List<FilmBlogResponse>> getHotBlogs() {
        return ResponseEntity.ok(filmBlogService.getHotBlogs());
    }
}

