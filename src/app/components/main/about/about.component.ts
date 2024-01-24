import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  personalInfo = {
    name: 'Anthony Barnett',
    age: '24',
    email: 'anthony@company.com',
    phone: '+1 718-111-0011',
    address: '140, City Center, New York, U.S.A',
    language: 'English, German, French'
  };
}
