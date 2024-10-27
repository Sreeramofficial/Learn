import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'], // Fixed styleUrls to be plural
})
export class LoginComponent {
  userName = '';
  password = '';
  error = '';
  errorClass = '';

  login() {
    this.error = '';

    // Check if username or password is empty
    if (this.userName.trim().length === 0) {
      console.log(this.password);
      this.errorClass = 'error-message';
      this.error = 'Please enter UserName';
    } else if (this.password.trim().length === 0) {
      this.error = 'Please enter Password';
      this.errorClass = 'error-message';
    } else {
      this.error = 'Login SuccessFull!!';
      this.errorClass = 'error-message success';
    }

    // Optionally, handle successful login here
  }
}
