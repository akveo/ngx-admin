import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private fireauth: AngularFireAuth, private router: Router) { }

  login(email: string, password: string) {
    this.fireauth.signInWithEmailAndPassword(email, password).then(() => {
      localStorage.setItem('token', 'true');
      this.router.navigate(['/home']);
    }, err => {
      alert('Login Again')
      this.router.navigate(['/login'])
    })
  }

  //register
  register(email: string, password: string) {
    this.fireauth.createUserWithEmailAndPassword(email, password).then(() => {
      alert('Registration Successful')
      this.router.navigate(['/login']);
    }, err => {
      alert("Error Registering")
      this.router.navigate(['/register'])
    })
  }

  logout() {
    this.fireauth.signOut().then( () => {
      localStorage.removeItem('token');
      this.router.navigate(['/login']);
    }, err => {
      alert(err.message)
    })
  }
}
