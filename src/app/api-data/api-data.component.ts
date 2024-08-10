// src/app/api-data/api-data.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-api-data',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  template: `
    <h2>API Data</h2>
    <div *ngFor="let post of posts" class="post-card">
      <h3>{{ post.title }}</h3>
      <p>{{ post.body }}</p>
    </div>
  `,
  styles: [`
    .post-card {
      background-color: #f8f9fa;
      padding: 15px;
      margin-bottom: 15px;
      border-radius: 5px;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
    }
    h3 {
      color: #007bff;
    }
  `]
})
export class ApiDataComponent implements OnInit {
  posts: any[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getPosts().subscribe((data) => {
      this.posts = data;
    });
  }
}
