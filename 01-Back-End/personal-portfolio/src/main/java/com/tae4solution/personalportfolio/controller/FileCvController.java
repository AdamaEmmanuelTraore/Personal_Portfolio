package com.tae4solution.personalportfolio.controller;

import com.tae4solution.personalportfolio.entity.FileCv;
import com.tae4solution.personalportfolio.service.FileCvService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;


// PER GESTIRE LE RICHIESTE DI DOWNLOAD
@RestController
@RequestMapping("/api/pdf")
public class FileCvController {
    @Autowired
    private FileCvService fileCvService;

    @GetMapping
    public List<FileCv> findAll() {
        return fileCvService.findAll();
    }
}
