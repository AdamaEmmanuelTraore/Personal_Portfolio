package com.tae4solution.personalportfolio.controller;

import com.tae4solution.personalportfolio.entity.EmailRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "*")
public class EmailController {

    @Autowired
    private JavaMailSender javaMailSender;

    @PostMapping("/send-email")
    public String sendEmail(@RequestBody EmailRequest emailRequest) {
        try {
            sendEmailMessage(emailRequest);
            return "Email sent successfully";
        } catch (Exception e) {
            return "Error sending email: " + e.getMessage();
        }
    }

    private void sendEmailMessage(EmailRequest emailRequest) {
        SimpleMailMessage message = new SimpleMailMessage();
        message.setTo("adama.emmanuel.traore.11@gmail.com");
        message.setSubject(emailRequest.getTitle());
        message.setText("Name: " + emailRequest.getName() + "\nEmail: " + emailRequest.getEmail() + "\n\n" + emailRequest.getMessage());
        javaMailSender.send(message);
    }

}
