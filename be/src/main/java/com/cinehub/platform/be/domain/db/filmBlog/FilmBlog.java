package com.cinehub.platform.be.domain.db.filmBlog;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.CreationTimestamp;

import java.time.LocalDateTime;

@Entity
@Table(name = "film_blogs")
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class FilmBlog {

    @Id
    private String id;
    private String name;
    private String slug;
    private Integer views;
    private String type;

    @Column(columnDefinition = "TEXT")
    private String shortDescription;

    private String imageLandscape;
    private String imagePortrait;

    @Lob
    @Column(columnDefinition = "LONGTEXT")
    private String description;

    private boolean isHot;

    private Integer displayOrder;

    @CreationTimestamp
    @Column(name = "created_at", updatable = false)
    private LocalDateTime createdAt;
}