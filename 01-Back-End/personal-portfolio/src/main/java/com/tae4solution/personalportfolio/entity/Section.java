package com.tae4solution.personalportfolio.entity;

import jakarta.persistence.*;
import lombok.Data;

import java.util.List;

@Entity
@Table(name = "section")
@Data
public class Section {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "title")
    private String title;

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
    @JoinColumn(name = "category_id", nullable = false)
    private SectionCategory sectionCategory;

    @OneToMany(cascade = CascadeType.ALL, mappedBy = "section")
    private List<Experience> experiences;

    @OneToMany(cascade = CascadeType.ALL, mappedBy = "section")
    private List<FileCv> fileCvs;
}
