import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  personalInfo = {
    name: 'Anthony Barnett',
    age: '24',
    email: 'anthony@company.com',
    phone: '+1 718-111-0011',
    address: '140, City Center, New York, U.S.A',
    language: 'English, German, French'
  };

  onSubmit(contactForm: NgForm) {
    console.log('Contact Form Data:', contactForm.value);
  };
}
