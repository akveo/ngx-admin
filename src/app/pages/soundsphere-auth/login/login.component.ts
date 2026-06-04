import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthLocalService } from '../../../@core/services/auth-local.service';

@Component({
  selector: 'ngx-ss-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  email = '';
  password = '';
  error = '';
  loading = false;

  constructor(private auth: AuthLocalService, private router: Router) {}

  onSubmit(): void {
    this.error = '';
    if (!this.email || !this.password) {
      this.error = 'Correo y contraseña son requeridos.';
      return;
    }
    this.loading = true;
    const result = this.auth.login(this.email, this.password);
    this.loading = false;
    if (result.success) {
      this.router.navigate(['/pages/music-dashboard']);
    } else {
      this.error = result.error || 'Credenciales inválidas.';
    }
  }
}
