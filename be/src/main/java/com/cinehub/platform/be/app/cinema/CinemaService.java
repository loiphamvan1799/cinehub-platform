package com.cinehub.platform.be.app.cinema;

import com.cinehub.platform.be.domain.cinema.mapper.CinemaMapper;
import com.cinehub.platform.be.adapters.persistence.cinema.CinemaRepository;
import com.cinehub.platform.be.domain.cinema.model.response.CinemaResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class CinemaService {
    private final CinemaRepository cinemaRepository;
    private final CinemaMapper cinemaMapper;

    public List<CinemaResponse> getAllCinemas() {
        return cinemaMapper.toCinemaResponse(cinemaRepository.findAll());
    }
}
