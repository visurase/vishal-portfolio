import { Component } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {NgClass, NgIf} from '@angular/common';
import {PortfolioService} from '../../services/portfolio.service';
import {HttpClient, HttpClientModule} from '@angular/common/http';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    NgClass,
    ReactiveFormsModule,
    NgIf,
    HttpClientModule
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  contactForm: FormGroup;
  submitted = false;
  success = false;

  constructor(private fb: FormBuilder,private http: HttpClient) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', [Validators.required]],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  get f() { return this.contactForm.controls; }

  onSubmit(event: Event)  {
    this.submitted = true;

    if (this.contactForm.invalid) {
      return;

    }
    event.preventDefault();
    this.http.post('https://formspree.io/f/xpwpwdae', this.contactForm.value)
      .subscribe(response => {
        alert('Message sent successfully!');
        this.success = true;
        this.contactForm.reset();
        this.submitted = false;
      }, error => {
        alert('Failed to send message. Please try again.');
      });

    // Here you would typically send the form data to a backend service
    console.log('Form data:', this.contactForm.value);

    // Simulate successful submission


    // Reset success message after 5 seconds
    setTimeout(() => {
      this.success = false;
    }, 5000);
  }
}
