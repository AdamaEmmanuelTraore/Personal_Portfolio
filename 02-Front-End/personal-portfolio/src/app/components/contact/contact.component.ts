import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contactForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient
  ) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      title: ['', Validators.required],
      message: ['', Validators.required]
    });
  }

  public ngOnInit(): void { }

  public onSubmit(): void {
    if (this.contactForm.valid) {
      this.http.post('/api/send-email', this.contactForm.value).subscribe(
        response => {
          console.log('Email sent successfully', response);
        },
        error => {
          console.error('Error sending email', error);
        }
      );
    }
  }
}
