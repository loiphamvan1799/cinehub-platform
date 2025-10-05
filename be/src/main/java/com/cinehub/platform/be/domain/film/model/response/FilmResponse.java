package com.cinehub.platform.be.domain.film.model.response;

import com.cinehub.platform.be.domain.film.model.db.Genre;

import java.time.LocalDate;
import java.time.LocalDateTime;

public class FilmResponse {
    public String id;
    public String name;
    public String age;

    //format from table cinema_film
    public String format;

    public int duration;
    public LocalDateTime startDate;
    public LocalDateTime endDate;
    public String imageLandscape;
    public String imagePortrait;
    public String slug;
    public String trailer;
    public double rate;
    public int totalVotes;
    public int views;
    public LocalDateTime createdAt;
}
