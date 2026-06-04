import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthLocalService } from '../services/auth-local.service';

@Injectable({ providedIn: 'root' })
export class AdminGuard implements CanActivate {
  constructor(private auth: AuthLocalService, private router: Router) {}

  canActivate(): boolean {
    if (this.auth.isAdmin()) return true;
    this.router.navigate(['/pages/music-dashboard']);
    return false;
  }
}
