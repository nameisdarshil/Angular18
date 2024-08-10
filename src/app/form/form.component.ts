// src/app/form/form.component.ts
import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <h2>Feedback Form</h2>
    <form [formGroup]="feedbackForm" (ngSubmit)="onSubmit()">
      <div>
        <label for="name">Name:</label>
        <input id="name" formControlName="name" />
        <div *ngIf="feedbackForm.get('name')?.invalid && feedbackForm.get('name')?.touched" class="error-message">
          Name is required.
        </div>
      </div>
      <div>
        <label for="email">Email:</label>
        <input id="email" formControlName="email" />
        <div *ngIf="feedbackForm.get('email')?.invalid && feedbackForm.get('email')?.touched" class="error-message">
          Enter a valid email.
        </div>
      </div>
      <div>
        <label for="feedback">Feedback:</label>
        <textarea id="feedback" formControlName="feedback"></textarea>
        <div *ngIf="feedbackForm.get('feedback')?.invalid && feedbackForm.get('feedback')?.touched" class="error-message">
          Feedback is required.
        </div>
      </div>
      <button type="submit" [disabled]="feedbackForm.invalid">Submit</button>
    </form>
  `,
  styles: [`
    form {
      display: flex;
      flex-direction: column;
    }
    label {
      font-weight: bold;
      margin-top: 10px;
    }
    input, textarea {
      margin-bottom: 10px;
      border: 1px solid #ced4da;
      border-radius: 4px;
      padding: 8px;
    }
    .error-message {
      color: red;
      font-size: 0.875em;
    }
    button {
      margin-top: 10px;
    }
  `]
})
export class FormComponent implements OnInit {
  feedbackForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.feedbackForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      feedback: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.feedbackForm.valid) {
      console.log('Form Submitted!', this.feedbackForm.value);
      alert('Thank you for your feedback!');
      this.feedbackForm.reset();
    } else {
      // Mark all controls as touched to trigger validation messages
      this.feedbackForm.markAllAsTouched();
    }
  }
}
