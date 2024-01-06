package com.tae4solution.personalportfolio.entity;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name = "academy_experience")
@Data
public class AcademyExperience {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "title")
    private String title;

    @Column(name = "start_date")
    private String start;

    @Column(name = "end_date")
    private String end;

    @Column(name = "address")
    private String address;

    @Column(name = "description")
    private String description;

    @ManyToOne(cascade = {
            CascadeType.PERSIST,
            CascadeType.MERGE,
            CascadeType.REFRESH,
            CascadeType.DETACH
    })
    @JoinColumn(name = "section_id", nullable = false)
    private Section section;

}
