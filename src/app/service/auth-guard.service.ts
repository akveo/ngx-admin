import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(): boolean {
    const accessToken = localStorage.getItem('accessToken');
    const accessTokenExpiresIn = localStorage.getItem('accessTokenExpiresIn');

    // Check if access token and expiration time exist
    if (accessToken && accessTokenExpiresIn) {
      // Check if the access token is not expired
      const currentTime = new Date().getTime();
      const expiresIn = +accessTokenExpiresIn;
      if (currentTime < expiresIn) {
        return true; // Allow access to the route
      }
    }

    // If access token is not found or expired, navigate to login page
    this.router.navigate(['/auth/login']);
    return false;
  }
}
