package com.cinehub.platform.be.app.filmBlog;

import com.cinehub.platform.be.domain.response.filmBlog.FilmBlogHomeResponse;
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

    @GetMapping("/dispay-home")
    public ResponseEntity<List<FilmBlogHomeResponse>> getBlogsDisplayHome() {
        List<FilmBlogHomeResponse> blogs =filmBlogService.getBlogsDisplayHome();
        return ResponseEntity.ok(blogs);
    }
}

