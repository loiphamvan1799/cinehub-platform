package com.cinehub.platform.be.app.cinema;

import com.cinehub.platform.be.domain.cinema.mapper.CinemaMapper;
import com.cinehub.platform.be.domain.cinema.model.db.Cinema;
import com.cinehub.platform.be.domain.cinema.model.response.CinemaFilmResponse;
import com.cinehub.platform.be.domain.cinema.repository.CinemaRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class CinemaService {
    private final CinemaRepository cinemaRepository;
    private final CinemaMapper cinemaMapper;

    public List<Cinema> getAllCinemas() {
        return cinemaRepository.findAll();
    }

    public List<CinemaFilmResponse> getAllCinemaFilms() {
        List<Cinema> cinemas = cinemaRepository.findAll();
        return cinemaMapper.toCinemaFilmResponses(cinemas);
    }
}
