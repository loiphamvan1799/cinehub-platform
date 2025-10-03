package com.cinehub.platform.be.domain.db.filmComment;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.CreationTimestamp;

import java.time.LocalDateTime;

@Entity
@Table(name = "film_comments")
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class FilmComment {

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
    @Column(nullable = false, updatable = false)
    private LocalDateTime createdAt;
}