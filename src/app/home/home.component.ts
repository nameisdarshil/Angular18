// src/app/home/home.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  template: `
    <h1>Welcome to Our Application</h1>
    <p>This is the home page of our Angular application.</p>
  `,
  styles: [`
    h1 {
      text-align: center;
      color: #007bff;
    }
    p {
      text-align: center;
      color: #555;
    }
  `]
})
export class HomeComponent {}
