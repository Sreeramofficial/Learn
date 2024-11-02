import { Component } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { HeaderComponent } from '../header/header.component';
import { ChartjsComponent } from '@coreui/angular-chartjs';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ApiconsumeService } from '../services/apiconsume.service';
import { ChartComponentApp } from '../chart/chart.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    LoginComponent,
    HeaderComponent,
    ChartjsComponent,
    CommonModule,
    HttpClientModule,
    ChartComponentApp,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  champions: any;

  labels: never[] = [];
  constructor(
    private http: HttpClient,
    private apiService: ApiconsumeService
  ) {}
  ngOnInit(): void {
    this.getMovies();
  }

  getMovies() {
    // should be in public folder
    this.http
      .get<
        {
          year: number;
          Winner: never;
          Captain: string;
          ManoftheMatch: string;
          PlayeroftheTournament: string;
          image: string;
        }[]
      >('/champions.json')
      .subscribe({
        next: (movies) => {
          // Clear existing labels if necessary

          // Extract winners
          movies.forEach((movie) => {
            if (!this.labels.includes(movie.Winner)) {
              this.labels.push(movie.Winner);
            }
          });

          console.log(this.labels);
          this.udpatelabels();
          // Output the array of winners
        },
        error: (error) => {
          console.error('Error fetching movies:', error);
        },
      });
  }

  udpatelabels() {
    this.data.labels = this.labels;
  }

  data = {
    labels: this.labels,
    datasets: [
      {
        backgroundColor: [
          '#8200ed',
          '#f2ff00',
          '#003c7d',
          '#00ccff',
          '#ff6f00',
          '#021c42',
          '#001aff',
        ],
        data: [40, 20, 80, 10, 40, 20, 80],
      },
    ],
  };
}
