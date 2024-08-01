package com.tae4solution.personalportfolio.controller;

import com.tae4solution.personalportfolio.entity.ContactForm;
import com.tae4solution.personalportfolio.service.EmailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

// PER GESTIRE L'INVIO DEL FORM ALLA MAIL
@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class EmailController {

    @Autowired
    private EmailService emailService;

    @PostMapping("/sendMail")
    public void sendEmail(@RequestBody ContactForm contactForm) {
        String subject = "New message from " + contactForm.getName() + " - " + contactForm.getTitle();
        //  MODIFICARE QUI PER MIGLIORARE IL DESIGN
        String body = "Name: " + contactForm.getName() + "\n" +
                      "Email: " + contactForm.getEmail() + "\n" +
                      "Message: " + contactForm.getMessage() + "\n\n";

        emailService.sendSimpleEmail("adama.emmanuel.traore.11@gmail.com", subject, body);
    }

}
