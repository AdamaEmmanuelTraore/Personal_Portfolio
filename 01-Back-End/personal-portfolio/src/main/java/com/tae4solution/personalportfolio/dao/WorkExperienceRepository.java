package com.tae4solution.personalportfolio.dao;

import com.tae4solution.personalportfolio.entity.WorkExperience;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.CrossOrigin;

@Repository
@CrossOrigin("http://localhost:4200")
@RepositoryRestResource(collectionResourceRel = "workExperiences", path = "work-experience")
public interface WorkExperienceRepository extends JpaRepository<WorkExperience, Long> {
}
