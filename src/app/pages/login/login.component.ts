import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private afAuth: AngularFireAuth, private router: Router) {}

  async login() {
    try {
      const userCredential = await this.afAuth.signInWithEmailAndPassword(this.email, this.password);
      // If login successful, navigate to the home page or any other desired route
      this.router.navigate(['/home']);
    } catch (error) {
      // Handle authentication errors
      this.errorMessage = error.message;
    }
  }
}
