import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-register',
  templateUrl: './register.component.html',
})
export class NgxRegisterComponent {
  user = {
    fullName: '',
    email: '',
    password: '',
    confirmPassword: ''
  };
  submitted = false;
  errors: string[] = [];

  constructor(private fireAuth: AngularFireAuth, private router: Router) {}

  async register() {
    this.submitted = true;
    try {
      if (this.user.password !== this.user.confirmPassword) {
        throw new Error('Password does not match the confirm password.');
      }

      await this.fireAuth.createUserWithEmailAndPassword(this.user.email, this.user.password);
      // Registration successful, redirect to login page or dashboard
      this.router.navigate(['auth/login']);
    } catch (error) {
      // Handle registration errors
      console.error('Error registering user:', error);
      this.errors.push(error.message || 'An error occurred. Please try again later.');
    }
    this.submitted = false;
  }

  getConfigValue(key: string): any {
    // Implement this method based on your configuration retrieval logic
  }
}
