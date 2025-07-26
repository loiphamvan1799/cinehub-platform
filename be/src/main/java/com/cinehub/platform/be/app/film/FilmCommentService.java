package com.cinehub.platform.be.app.film;

import com.cinehub.platform.be.adapters.persistence.film.FilmCommentRepository;
import com.cinehub.platform.be.domain.film.model.response.FilmCommentResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

@Service
@RequiredArgsConstructor
public class FilmCommentService {

    private final FilmCommentRepository filmCommentRepository;




}