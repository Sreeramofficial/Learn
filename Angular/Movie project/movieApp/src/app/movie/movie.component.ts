import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-movie',
  standalone: true,
  imports: [HttpClientModule, CommonModule, HeaderComponent],
  templateUrl: './movie.component.html',
  styleUrl: './movie.component.css',
})
export class MovieComponent {
  champions: any;
  constructor(private http: HttpClient) {}
  ngOnInit(): void {
    this.getMovies();
  }
  getMovies() {
    //should be in public folder
    this.http.get('/champions.json').subscribe((movies) => {
      this.champions = movies;
      console.log(movies);
    });
  }
}
