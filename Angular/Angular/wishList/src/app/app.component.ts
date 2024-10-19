import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { wishItem } from '../shared/modules/wishlist';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [CommonModule, RouterOutlet, FormsModule], // Add CommonModule and RouterOutlet here
})
export class AppComponent {
  newTarget = '';
  newTargetStatus: boolean = false;

  title = 'Sreeram';
  items: wishItem[] = [
    // new wishItem('angular', true),
    // new wishItem('move to another company', false),
    // new wishItem('be settle', false),
  ];
  toggleItem(event: wishItem) {
    event.isComplete = !event.isComplete;
  }
  addWish() {
    this.items.push(new wishItem(this.newTarget, this.newTargetStatus));
    this.newTarget = '';
    this.newTargetStatus = false;
  }
  account = 'Sreeram';
}
