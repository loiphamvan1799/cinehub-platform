package com.cinehub.platform.be.domain.cinema.model.db;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

import java.time.LocalDateTime;

@Entity
@Table(name = "cinema")
@Data
public class Cinema {
    @Id
    private String id;
    private String name;
    private String address;
    private String city;
    private LocalDateTime createdAt;
}
