package com.cinehub.platform.be.domain.cinema.mapper;

import com.cinehub.platform.be.domain.cinema.model.db.Cinema;
import com.cinehub.platform.be.domain.cinema.model.response.CinemaFilmResponse;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

@Component
public class CinemaMapper {

    public List<CinemaFilmResponse> toCinemaFilmResponses(List<Cinema> cinemas) {
        List<CinemaFilmResponse> responses = new ArrayList<>();
        for (Cinema cinema : cinemas) {
            responses.add(toCinemaFilmResponse(cinema));
        }
        return responses;
    }

    private CinemaFilmResponse toCinemaFilmResponse(Cinema cinema) {
        CinemaFilmResponse response = new CinemaFilmResponse();
        response.setFilmId(cinema.getId());
        response.setFilmName(cinema.getName());
        response.setFilmImagePortrait(cinema.getImagePortrait());
        response.setFilmSlug(cinema.getSlug());
        // Note: startDate and endDate would need to come from additional business logic
        return response;
    }
}

