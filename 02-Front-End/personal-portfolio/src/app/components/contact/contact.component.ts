import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { faEarthEurope, faEnvelope, faMapLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  contactForm: FormGroup;
  faPhone = faPhone;
  faMapLocationDot = faMapLocationDot;
  faEnvelope = faEnvelope;
  faEarthEurope = faEarthEurope;

  constructor(
    private fb: FormBuilder,
    private portfolioService: PortfolioService
  ) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      title: ['', Validators.required],
      message: ['', Validators.required]
    });
  }

  public onSubmit(): void {
    if (this.contactForm.valid) {
      // Estraggo i valori del modulo
      const formValues = this.contactForm.getRawValue();

      this.portfolioService.postContactForm(formValues).subscribe(
        response => {
          alert('Email sent successfully');
          this.contactForm.reset();
        },
        error => {
          alert('Error sending email, Please try again!');
        }
      );
    }
  }
}
