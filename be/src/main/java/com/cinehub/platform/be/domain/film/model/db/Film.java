package com.cinehub.platform.be.domain.film.model.db;

import jakarta.persistence.*;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Entity
@Table(name = "films")
@Getter
@Setter
public class Film {

    @Id
    private String id;
    private String name;
    private String age;
    private int duration;
    private String startDate;
    private String endDate;
    private String imageLandscape;
    private String imagePortrait;
    private String slug;
    private String trailer;
    private double rate;
    private int totalVotes;
    private int views;
    private LocalDateTime createdAt;
}