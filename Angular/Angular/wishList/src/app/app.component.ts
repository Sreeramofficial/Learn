import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { wishItem } from '../shared/modules/wishlist';
import { CommonModule } from '@angular/common'; // Import CommonModule

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [CommonModule, RouterOutlet], // Add CommonModule and RouterOutlet here
})
export class AppComponent {
  title = 'Sreeram';
  items: wishItem[] = [
    new wishItem('angular', true),
    new wishItem('move to another company', false),
    new wishItem('be settle', false),
  ];
}
