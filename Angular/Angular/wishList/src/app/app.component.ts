import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { wishItem } from '../shared/modules/wishlist';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { FormsModule } from '@angular/forms';
import { retry } from 'rxjs';

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
  listFilter: String = '0';
  title = 'Sreeram';
  emptyWish: wishItem[] = [];
  get filteredWish(): wishItem[] {
    let val = this.listFilter;
    if (val == '1') {
      return this.items.filter((item) => item.isComplete);
    } else if (val == '2') {
      return this.items.filter((item) => !item.isComplete);
    } else if (val == '0') {
      return this.items;
    } else {
      return this.items;
    }
  }
  items: wishItem[] = [
    new wishItem('angular', true),
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
