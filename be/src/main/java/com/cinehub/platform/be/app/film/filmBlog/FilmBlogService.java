package com.cinehub.platform.be.app.film.filmBlog;

import com.cinehub.platform.be.adapters.persistence.film.FilmBlogRepository;
import com.cinehub.platform.be.domain.film.model.db.FilmBlog;
import com.cinehub.platform.be.domain.film.model.response.FilmBlogResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Comparator;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class FilmBlogService {

    private final FilmBlogRepository filmBlogRepository;

    public List<FilmBlogResponse> getAllBlogs() {
        List<FilmBlog> filmBlogs = filmBlogRepository.findAll();
        return filmBlogs.stream().map(this::toResponse).collect(Collectors.toList());
    }

    public List<FilmBlogResponse> getHotBlogs() {
        return filmBlogRepository.findAll()
                .stream()
                .filter(FilmBlog::isHot)
                .sorted(Comparator.comparing(FilmBlog::getCreatedAt).reversed())
                .limit(4)
                .map(this::toResponse)
                .collect(Collectors.toList());
    }

    public FilmBlogResponse toResponse(FilmBlog filmBlog) {
        return FilmBlogResponse.builder()
                .id(filmBlog.getId())
                .idFilm(filmBlog.getIdFilm())
                .name(filmBlog.getName())
                .slug(filmBlog.getSlug())
                .views(filmBlog.getViews())
                .type(filmBlog.getType())
                .shortDescription(filmBlog.getShortDescription())
                .imageLandscape(filmBlog.getImageLandscape())
                .imagePortrait(filmBlog.getImagePortrait())
                .description(filmBlog.getDescription())
                .createdAt(filmBlog.getCreatedAt())
                .isHot(filmBlog.isHot())
                .build();
    }
}