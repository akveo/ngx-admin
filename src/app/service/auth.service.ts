import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user$: Observable<firebase.default.User | null>;

  constructor(private fireAuth: AngularFireAuth, private router: Router) {
    this.user$ = this.fireAuth.authState;
  }

  // logout method
  async logout(): Promise<void> {
    try {
      await this.fireAuth.signOut();
      localStorage.removeItem('accessToken');
      localStorage.removeItem('accessTokenExpiresIn');
      this.router.navigate(['auth/login'], { queryParams: { logout: true } });
    } catch (error: any) {
      throw error;
    }
  }
}
