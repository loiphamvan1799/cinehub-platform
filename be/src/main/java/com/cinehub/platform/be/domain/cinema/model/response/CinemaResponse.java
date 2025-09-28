package com.cinehub.platform.be.domain.cinema.model.response;

import lombok.Data;

import java.util.List;

@Data
public class CinemaResponse {

    private String id;
    private String name;
    private String slug;
    private String latitude;
    private String longitude;
    private String address;
    private String phone;
    private String cityId;
    private String imageLandscape;
    private String imagePortrait;
    private List<String> imageUrls;
    private boolean reward;
    private int order;
}
