import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthLocalService } from '../../../@core/services/auth-local.service';

@Component({
  selector: 'ngx-ss-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  name = '';
  email = '';
  password = '';
  error = '';
  success = false;
  loading = false;

  constructor(private auth: AuthLocalService, private router: Router) {}

  private isValidEmail(email: string): boolean {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  private isValidPassword(password: string): string | null {
    if (password.length < 8) return 'La contraseña debe tener al menos 8 caracteres.';
    if (!/[A-Z]/.test(password)) return 'La contraseña debe contener al menos una letra mayúscula.';
    if (!/[0-9]/.test(password)) return 'La contraseña debe contener al menos un número.';
    if (!/[^A-Za-z0-9]/.test(password)) return 'La contraseña debe contener al menos un carácter especial (!@#$%...).';
    return null;
  }

  onSubmit(): void {
    this.error = '';
    if (!this.name || !this.email || !this.password) {
      this.error = 'Todos los campos son requeridos.';
      return;
    }
    if (!this.isValidEmail(this.email)) {
      this.error = 'Ingresa un correo electrónico válido (ej: usuario@dominio.com).';
      return;
    }
    const passwordError = this.isValidPassword(this.password);
    if (passwordError) {
      this.error = passwordError;
      return;
    }
    this.loading = true;
    const result = this.auth.register(this.name, this.email, this.password);
    this.loading = false;
    if (result.success) {
      this.success = true;
      setTimeout(() => this.router.navigate(['/soundsphere/login']), 2000);
    } else {
      this.error = result.error || 'Error al registrar.';
    }
  }
}
