package com.tae4solution.personalportfolio.entity;

import jakarta.persistence.*;
import lombok.Data;

import java.util.List;

@Entity
@Table(name = "portfolio")
@Data
public class Portfolio {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "title")
    private String title;

    @Column(name = "methode")
    private String methode;

    @Column(name = "objective")
    private String objective;

    @Column(name = "description")
    private String description;

    @Column(name = "image_url")
    private String image_url;

    @ManyToOne(cascade = {
            CascadeType.PERSIST,
            CascadeType.MERGE,
            CascadeType.REFRESH,
            CascadeType.DETACH
    })
    @JoinColumn(name = "section_id", nullable = false)
    private Section section;

}
