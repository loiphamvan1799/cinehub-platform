package com.cinehub.platform.be.domain.cinema.model.db;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

import java.time.LocalDateTime;
import java.util.List;

@Entity
@Table(name = "cinema")
@Data
public class Cinema {
    @Id
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
    private int displayOrder;
}
