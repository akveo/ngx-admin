import { Component, OnInit } from '@angular/core';
import { NbToastrService } from '@nebular/theme';
import { Song } from '../../../@core/models';
import { MusicService } from '../../../@core/services/music.service';

interface AdminSong extends Song {
  isEditing?: boolean;
  editName?: string;
  editArtist?: string;
}

const ADMIN_SONGS_KEY = 'soundsphere_admin_songs';

@Component({
  selector: 'ngx-admin-songs',
  templateUrl: './admin-songs.component.html',
  styleUrls: ['./admin-songs.component.scss'],
})
export class AdminSongsComponent implements OnInit {
  songs: AdminSong[] = [];
  filteredSongs: AdminSong[] = [];
  loading = true;
  showAddForm = false;
  searchQuery = '';
  selectedGenre = '';
  newSong = { trackName: '', artistName: '', collectionName: '', primaryGenreName: '' };
  confirmDeleteId: number | null = null;

  get genres(): string[] {
    const set = new Set(this.songs.map(s => s.primaryGenreName).filter(Boolean));
    return Array.from(set).sort();
  }

  constructor(
    private music: MusicService,
    private toastr: NbToastrService,
  ) {}

  ngOnInit(): void {
    const saved = localStorage.getItem(ADMIN_SONGS_KEY);
    if (saved) {
      this.songs = JSON.parse(saved);
      this.applyFilter();
      this.loading = false;
    } else {
      this.music.getCatalog().subscribe(songs => {
        this.songs = songs;
        this.saveSongs();
        this.applyFilter();
        this.loading = false;
      });
    }
  }

  private saveSongs(): void {
    localStorage.setItem(ADMIN_SONGS_KEY, JSON.stringify(this.songs));
  }

  applyFilter(): void {
    const q = this.searchQuery.trim().toLowerCase();
    this.filteredSongs = this.songs.filter(s => {
      const matchesQuery = !q ||
        s.trackName.toLowerCase().includes(q) ||
        s.artistName.toLowerCase().includes(q);
      const matchesGenre = !this.selectedGenre || s.primaryGenreName === this.selectedGenre;
      return matchesQuery && matchesGenre;
    });
  }

  clearFilters(): void {
    this.searchQuery = '';
    this.selectedGenre = '';
    this.applyFilter();
  }

  addSong(): void {
    if (!this.newSong.trackName.trim() || !this.newSong.artistName.trim()) {
      this.toastr.warning('Título y artista son requeridos', 'Agregar canción');
      return;
    }
    const song: AdminSong = {
      trackId: Date.now(),
      trackName: this.newSong.trackName.trim(),
      artistName: this.newSong.artistName.trim(),
      collectionName: this.newSong.collectionName.trim(),
      primaryGenreName: this.newSong.primaryGenreName.trim() || 'Desconocido',
      artworkUrl100: '',
      previewUrl: '',
      trackTimeMillis: 0,
    };
    this.songs = [song, ...this.songs];
    this.saveSongs();
    this.applyFilter();
    this.toastr.success('Canción agregada', 'Administración');
    this.newSong = { trackName: '', artistName: '', collectionName: '', primaryGenreName: '' };
    this.showAddForm = false;
  }

  startEdit(song: AdminSong): void {
    song.isEditing = true;
    song.editName = song.trackName;
    song.editArtist = song.artistName;
  }

  saveEdit(song: AdminSong): void {
    if (!song.editName?.trim()) return;
    song.trackName = song.editName.trim();
    song.artistName = song.editArtist?.trim() || song.artistName;
    song.isEditing = false;
    this.saveSongs();
    this.applyFilter();
    this.toastr.success('Canción actualizada', 'Administración');
  }

  cancelEdit(song: AdminSong): void {
    song.isEditing = false;
  }

  requestDelete(trackId: number): void {
    this.confirmDeleteId = trackId;
  }

  confirmDelete(): void {
    this.songs = this.songs.filter(s => s.trackId !== this.confirmDeleteId);
    this.saveSongs();
    this.applyFilter();
    this.toastr.info('Canción eliminada', 'Administración');
    this.confirmDeleteId = null;
  }

  cancelDelete(): void {
    this.confirmDeleteId = null;
  }

  trackBySong(_: number, song: Song): number { return song.trackId; }
}
