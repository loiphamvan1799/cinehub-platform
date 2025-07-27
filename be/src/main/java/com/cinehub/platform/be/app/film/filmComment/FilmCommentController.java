package com.cinehub.platform.be.app.film.filmComment;

import com.cinehub.platform.be.domain.film.model.response.FilmCommentResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/v1/film-comment")
@RequiredArgsConstructor
public class FilmCommentController {

    private final FilmCommentService filmCommentService;

    @GetMapping
    public ResponseEntity<List<FilmCommentResponse>> getAllComments() {
        return ResponseEntity.ok(filmCommentService.getAllComments());
    }

    @GetMapping("/hot")
    public ResponseEntity<List<FilmCommentResponse>> getHotComments() {
        return ResponseEntity.ok(filmCommentService.getHotComments());
    }
}

