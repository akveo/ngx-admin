import { Component, OnInit } from '@angular/core';
import { NbToastrService } from '@nebular/theme';
import { AuthLocalService } from '../../@core/services/auth-local.service';
import { User } from '../../@core/models';

@Component({
  selector: 'ngx-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  user: User | null = null;
  name = '';
  currentPassword = '';
  newPassword = '';
  confirmPassword = '';
  avatarPreview = '';
  error = '';
  success = '';

  constructor(private auth: AuthLocalService, private toastr: NbToastrService) {}

  ngOnInit(): void {
    this.user = this.auth.getCurrentUser();
    if (this.user) {
      this.name = this.user.name;
      this.avatarPreview = this.user.avatarUrl || '';
    }
  }

  onAvatarChange(event: Event): void {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = e => {
      this.avatarPreview = e.target?.result as string;
    };
    reader.readAsDataURL(file);
  }

  saveProfile(): void {
    this.error = '';
    this.success = '';
    if (!this.name.trim()) {
      this.error = 'El nombre no puede estar vacío.';
      return;
    }
    const update: Partial<User> = { name: this.name.trim() };
    if (this.avatarPreview) update.avatarUrl = this.avatarPreview;

    if (this.newPassword) {
      if (this.newPassword.length < 8) {
        this.error = 'La nueva contraseña debe tener al menos 8 caracteres.';
        return;
      }
      if (this.newPassword !== this.confirmPassword) {
        this.error = 'Las contraseñas no coinciden.';
        return;
      }
      if (!this.currentPassword || btoa(this.currentPassword) !== this.user?.password) {
        this.error = 'La contraseña actual es incorrecta.';
        return;
      }
      update.password = btoa(this.newPassword);
    }

    this.auth.updateUser(update);
    this.user = this.auth.getCurrentUser();
    this.currentPassword = '';
    this.newPassword = '';
    this.confirmPassword = '';
    this.toastr.success('Perfil actualizado correctamente', 'Perfil');
    this.success = 'Cambios guardados.';
  }
}
