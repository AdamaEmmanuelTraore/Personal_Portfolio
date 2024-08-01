package com.tae4solution.personalportfolio.service;

import com.tae4solution.personalportfolio.dao.FileCvRepository;
import com.tae4solution.personalportfolio.entity.FileCv;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.rest.webmvc.ResourceNotFoundException;
import org.springframework.stereotype.Service;

import java.util.List;

// CREO UN SERVIZIO PER GESTIRE I PDF
@Service
public class FileCvService {
    @Autowired
    private FileCvRepository fileCvRepository;

    public List<FileCv> findAll() {
        return fileCvRepository.findAll();
    }

}
