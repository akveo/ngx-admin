import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Playlist, Song } from '../models';
import { AuthLocalService } from './auth-local.service';

@Injectable({ providedIn: 'root' })
export class PlaylistService {
  private playlistsSubject = new BehaviorSubject<Playlist[]>([]);
  playlists$ = this.playlistsSubject.asObservable();

  constructor(private auth: AuthLocalService) {
    this.auth.currentUser$.subscribe(() => this.load());
    this.load();
  }

  private key(): string {
    const user = this.auth.getCurrentUser();
    return user ? `soundsphere_playlists_${user.id}` : 'soundsphere_playlists_guest';
  }

  private load(): void {
    try {
      const raw = localStorage.getItem(this.key());
      this.playlistsSubject.next(raw ? JSON.parse(raw) : []);
    } catch {
      this.playlistsSubject.next([]);
    }
  }

  private save(playlists: Playlist[]): void {
    localStorage.setItem(this.key(), JSON.stringify(playlists));
    this.playlistsSubject.next(playlists);
  }

  getPlaylists(): Playlist[] { return this.playlistsSubject.value; }

  createPlaylist(name: string): Playlist {
    const user = this.auth.getCurrentUser();
    const playlist: Playlist = {
      id: Date.now().toString(),
      name,
      userId: user?.id || 'guest',
      songs: [],
      createdAt: new Date().toISOString(),
    };
    this.save([...this.getPlaylists(), playlist]);
    return playlist;
  }

  deletePlaylist(id: string): void {
    this.save(this.getPlaylists().filter(p => p.id !== id));
  }

  addSongToPlaylist(playlistId: string, song: Song): void {
    const playlists = this.getPlaylists().map(p => {
      if (p.id !== playlistId) return p;
      if (p.songs.find(s => s.trackId === song.trackId)) return p;
      return { ...p, songs: [...p.songs, song] };
    });
    this.save(playlists);
  }

  removeSongFromPlaylist(playlistId: string, trackId: number): void {
    const playlists = this.getPlaylists().map(p => {
      if (p.id !== playlistId) return p;
      return { ...p, songs: p.songs.filter(s => s.trackId !== trackId) };
    });
    this.save(playlists);
  }

  renamePlaylist(id: string, name: string): void {
    const playlists = this.getPlaylists().map(p =>
      p.id === id ? { ...p, name } : p,
    );
    this.save(playlists);
  }
}
