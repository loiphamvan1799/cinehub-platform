package com.cinehub.platform.be.domain.response.film;

import lombok.Builder;
import lombok.Data;

import java.time.LocalDateTime;

@Data
@Builder
public class FilmCardResponse {

    public String id;
    public String name;
    public String format;
    public String imageLandscape;
    public String imagePortrait;
    public String slug;
    public LocalDateTime minStartDate;
    public LocalDateTime maxEndDate;
    public Double rate;
    public Integer views;
}
