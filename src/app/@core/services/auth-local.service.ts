import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from '../models';

const USERS_KEY = 'soundsphere_users';
const CURRENT_USER_KEY = 'soundsphere_current_user';

@Injectable({ providedIn: 'root' })
export class AuthLocalService {
  private currentUserSubject = new BehaviorSubject<User | null>(this.loadCurrentUser());
  currentUser$ = this.currentUserSubject.asObservable();

  private loadCurrentUser(): User | null {
    try {
      const raw = localStorage.getItem(CURRENT_USER_KEY);
      return raw ? JSON.parse(raw) : null;
    } catch {
      return null;
    }
  }

  private getUsers(): User[] {
    try {
      const raw = localStorage.getItem(USERS_KEY);
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  }

  private saveUsers(users: User[]): void {
    localStorage.setItem(USERS_KEY, JSON.stringify(users));
  }

  register(name: string, email: string, password: string): { success: boolean; error?: string } {
    if (!name || !email || !password) {
      return { success: false, error: 'Todos los campos son requeridos.' };
    }
    if (password.length < 8) {
      return { success: false, error: 'La contraseña debe tener al menos 8 caracteres.' };
    }
    const users = this.getUsers();
    if (users.find(u => u.email.toLowerCase() === email.toLowerCase())) {
      return { success: false, error: 'Ya existe una cuenta con ese correo.' };
    }
    const newUser: User = {
      id: Date.now().toString(),
      name,
      email: email.toLowerCase(),
      password: btoa(password),
      role: 'user',
      createdAt: new Date().toISOString(),
    };
    users.push(newUser);
    this.saveUsers(users);
    return { success: true };
  }

  login(email: string, password: string): { success: boolean; error?: string } {
    const users = this.getUsers();
    const user = users.find(
      u => u.email.toLowerCase() === email.toLowerCase() && u.password === btoa(password),
    );
    if (!user) {
      return { success: false, error: 'Correo o contraseña incorrectos.' };
    }
    localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(user));
    this.currentUserSubject.next(user);
    return { success: true };
  }

  logout(): void {
    localStorage.removeItem(CURRENT_USER_KEY);
    this.currentUserSubject.next(null);
  }

  getCurrentUser(): User | null {
    return this.currentUserSubject.value;
  }

  isLoggedIn(): boolean {
    return !!this.currentUserSubject.value;
  }

  isAdmin(): boolean {
    return this.currentUserSubject.value?.role === 'admin';
  }

  updateUser(updated: Partial<User>): void {
    const current = this.getCurrentUser();
    if (!current) return;
    const users = this.getUsers();
    const idx = users.findIndex(u => u.id === current.id);
    if (idx === -1) return;
    const merged = { ...users[idx], ...updated };
    users[idx] = merged;
    this.saveUsers(users);
    localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(merged));
    this.currentUserSubject.next(merged);
  }
}
