package com.cinehub.platform.be.app.film.filmComment;

import com.cinehub.platform.be.adapters.persistence.film.FilmCommentRepository;
import com.cinehub.platform.be.domain.film.model.db.FilmComment;
import com.cinehub.platform.be.domain.film.model.response.FilmCommentResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Comparator;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class FilmCommentService {

    private final FilmCommentRepository filmCommentRepository;

    public List<FilmCommentResponse> getAllComments() {
        List<FilmComment> filmComments = filmCommentRepository.findAll();
        return filmComments.stream().map(this::toResponse).collect(Collectors.toList());
    }

    public List<FilmCommentResponse> getHotComments() {
        return filmCommentRepository.findAll()
                .stream()
                .filter(FilmComment::isHot)
                .sorted(Comparator.comparing(FilmComment::getCreatedAt).reversed())
                .limit(4)
                .map(this::toResponse)
                .collect(Collectors.toList());
    }

    public FilmCommentResponse toResponse(FilmComment filmComment) {
        return FilmCommentResponse.builder()
                .id(filmComment.getId())
                .idFilm(filmComment.getIdFilm())
                .name(filmComment.getName())
                .slug(filmComment.getSlug())
                .views(filmComment.getViews())
                .type(filmComment.getType())
                .shortDescription(filmComment.getShortDescription())
                .imageLandscape(filmComment.getImageLandscape())
                .imagePortrait(filmComment.getImagePortrait())
                .description(filmComment.getDescription())
                .createdAt(filmComment.getCreatedAt())
                .isHot(filmComment.isHot())
                .build();
    }
}