import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Route, Router } from '@angular/router';

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
  constructor(private auth: AuthService, private router: Router) {}

  login() {
    this.error = '';

    // Check if username or password is empty
    if (this.userName.trim().length === 0) {
      this.router.navigate(['home']);
      console.log(this.password);
      this.errorClass = 'error-message';
      this.error = 'Please enter UserName';
    } else if (this.password.trim().length === 0) {
      this.error = 'Please enter Password';
      this.errorClass = 'error-message';
    } else {
      this.error = 'Login SuccessFull!!';
      this.errorClass = 'error-message success';
      let res = this.auth.login(this.userName, this.password);
      if (res == 200) {
        console.log(res);
        this.router.navigate(['home']);
      } else {
        if (res == 403) {
          this.error = 'invalid credentials';
          this.errorClass = 'error-message';
        }
      }
    }

    // Optionally, handle successful login here
  }
}
