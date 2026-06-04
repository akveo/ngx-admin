import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Song } from '../models';
import { AuthLocalService } from './auth-local.service';

@Injectable({ providedIn: 'root' })
export class FavoritesService {
  private favoritesSubject = new BehaviorSubject<Song[]>([]);
  favorites$ = this.favoritesSubject.asObservable();

  constructor(private auth: AuthLocalService) {
    this.auth.currentUser$.subscribe(() => this.load());
    this.load();
  }

  private key(): string {
    const user = this.auth.getCurrentUser();
    return user ? `soundsphere_favorites_${user.id}` : 'soundsphere_favorites_guest';
  }

  private load(): void {
    try {
      const raw = localStorage.getItem(this.key());
      this.favoritesSubject.next(raw ? JSON.parse(raw) : []);
    } catch {
      this.favoritesSubject.next([]);
    }
  }

  private save(songs: Song[]): void {
    localStorage.setItem(this.key(), JSON.stringify(songs));
    this.favoritesSubject.next(songs);
  }

  getFavorites(): Song[] { return this.favoritesSubject.value; }

  addFavorite(song: Song): void {
    const current = this.getFavorites();
    if (!current.find(s => s.trackId === song.trackId)) {
      this.save([...current, song]);
    }
  }

  removeFavorite(trackId: number): void {
    this.save(this.getFavorites().filter(s => s.trackId !== trackId));
  }

  isFavorite(trackId: number): boolean {
    return this.getFavorites().some(s => s.trackId === trackId);
  }
}
