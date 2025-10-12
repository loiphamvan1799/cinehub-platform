package com.cinehub.platform.be.domain.db.advertise;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Table(name = "banners")
@Data
public class Banner {
    @Id
    private String id;
    private String src;
    private String alt;
    private String title;
    private String link;
    private Integer sortOrder;
}

