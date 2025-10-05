package com.cinehub.platform.be.app.filmBlog;

import com.cinehub.platform.be.adapters.persistence.filmBlog.FilmBlogRepository;
import com.cinehub.platform.be.domain.response.filmBlog.FilmBlogHome;
import com.cinehub.platform.be.domain.response.filmBlog.FilmBlogHomeResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class FilmBlogService {

    private final FilmBlogRepository filmBlogRepository;

    public List<FilmBlogHomeResponse> getBlogsDisplayHome() {
        List<FilmBlogHome> blogs = filmBlogRepository.findBlogsDisplayHome();
        return blogs.stream()
                .map(this::toResponse)
                .collect(Collectors.toList());
    }

    private FilmBlogHomeResponse toResponse(FilmBlogHome blog) {
        FilmBlogHomeResponse response = new FilmBlogHomeResponse();
        response.setIdBlog(blog.getId());
        response.setName(blog.getName());
        response.setSlug(blog.getSlug());
        response.setViews(blog.getViews());
        response.setImageLandscape(blog.getImageLandscape());
        response.setImagePortrait(blog.getImagePortrait());
        response.setDisplayOrder(blog.getDisplayOrder());
        response.setCreatedAt(blog.getCreatedAt());
        return response;
    }
}