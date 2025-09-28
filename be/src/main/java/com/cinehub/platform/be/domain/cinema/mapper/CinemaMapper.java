package com.cinehub.platform.be.domain.cinema.mapper;

import com.cinehub.platform.be.domain.cinema.model.db.Cinema;
import com.cinehub.platform.be.domain.cinema.model.response.CinemaResponse;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Optional;

@Component
public class CinemaMapper {

    public List<CinemaResponse> toCinemaResponse(List<Cinema> cinemas) {
        return cinemas.stream()
                .map(this::convertToCinemaResponse)
                .toList();
    }

    private CinemaResponse convertToCinemaResponse(Cinema cinema) {
        CinemaResponse response = new CinemaResponse();
        response.setId(cinema.getId());
        response.setName(cinema.getName());
        response.setSlug(cinema.getSlug());
        response.setLatitude(cinema.getLatitude());
        response.setLongitude(cinema.getLongitude());
        response.setAddress(cinema.getAddress());
        response.setPhone(cinema.getPhone());
        response.setCityId(cinema.getCityId());
        response.setImageLandscape(cinema.getImageLandscape());
        response.setImagePortrait(cinema.getImagePortrait());
        response.setImageUrls(new ArrayList<>(
                Optional.ofNullable(cinema.getImageUrls())
                        .orElseGet(Collections::emptyList)
        ));
        response.setReward(cinema.isReward());
        response.setOrder(cinema.getDisplayOrder());
        return response;
    }
}

