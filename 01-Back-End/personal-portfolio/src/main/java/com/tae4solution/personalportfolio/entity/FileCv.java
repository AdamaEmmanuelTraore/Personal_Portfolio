package com.tae4solution.personalportfolio.entity;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name = "filecv")
@Data
public class FileCv {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "name")
    private String name;

    @Column(name = "data")
    private String data;

    @ManyToOne(cascade = {
            CascadeType.PERSIST,
            CascadeType.MERGE,
            CascadeType.REFRESH,
            CascadeType.DETACH
    })
    @JoinColumn(name = "section_id", nullable = false)
    private Section section;
}
