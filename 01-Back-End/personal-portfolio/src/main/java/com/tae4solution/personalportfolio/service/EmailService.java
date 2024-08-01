package com.tae4solution.personalportfolio.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

// QUI CREO UN SERVIZIO PER L'INVIO DELLA MAIL, PER VEDERE DA CONSOLE SE È ANDATO TUTTO BENE
@Service
public class EmailService {

    @Autowired
    private JavaMailSender mailSender;

    public void sendSimpleEmail(String toEmail, String subject, String body) {
        System.out.println("\n" + "Sending email to: " + toEmail);
        System.out.println("Subject: " + subject);
        System.out.println("\n" + body);

        SimpleMailMessage message = new SimpleMailMessage();
        message.setFrom("adama.emmanuel.traore.11@gmail.com");
        message.setTo(toEmail);
        message.setSubject(subject);
        message.setText(body);

        try {
            mailSender.send(message);
            System.out.println("Email sent successfully");
        } catch (Exception e) {
            System.out.println("Failed to send email: " + e.getMessage());
        }
    }

}
