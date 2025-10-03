package com.cinehub.platform.be.app.filmComment;

import com.cinehub.platform.be.domain.response.filmComment.FilmCommentHomeResponse;
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

    @GetMapping("/dispay-home")
    public ResponseEntity<List<FilmCommentHomeResponse>> getCommentsDisplayHome() {
        List<FilmCommentHomeResponse> comments =filmCommentService.getCommentsDisplayHome();
        return ResponseEntity.ok(comments);
    }
}

