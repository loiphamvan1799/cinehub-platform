package com.cinehub.platform.be.app.filmComment;

import com.cinehub.platform.be.adapters.persistence.filmComment.FilmCommentRepository;
import com.cinehub.platform.be.domain.response.filmComment.FilmCommentHome;
import com.cinehub.platform.be.domain.response.filmComment.FilmCommentHomeResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class FilmCommentService {

    private final FilmCommentRepository filmCommentRepository;

    public List<FilmCommentHomeResponse> getCommentsDisplayHome() {
        List<FilmCommentHome> comments = filmCommentRepository.findCommentsDisplayHome();
        return comments.stream()
                .map(this::toResponse)
                .collect(Collectors.toList());
    }

    private FilmCommentHomeResponse toResponse(FilmCommentHome comment) {
        FilmCommentHomeResponse response = new FilmCommentHomeResponse();
        response.setIdComment(comment.getId());
        response.setName(comment.getName());
        response.setSlug(comment.getSlug());
        response.setViews(comment.getViews());
        response.setImageLandscape(comment.getImageLandscape());
        response.setImagePortrait(comment.getImagePortrait());
        response.setDisplayOrder(comment.getDisplayOrder());
        response.setCreatedAt(comment.getCreatedAt());
        return response;
    }

}