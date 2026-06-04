import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap, takeUntil } from 'rxjs/operators';
import { Song } from '../../../@core/models';
import { MusicService } from '../../../@core/services/music.service';
import { PlaylistService } from '../../../@core/services/playlist.service';
import { FavoritesService } from '../../../@core/services/favorites.service';
import { AuthLocalService } from '../../../@core/services/auth-local.service';
import { NbToastrService } from '@nebular/theme';

type SearchFilter = 'all' | 'song' | 'artist';

@Component({
  selector: 'ngx-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit, OnDestroy {
  query = '';
  filter: SearchFilter = 'all';
  songs: Song[] = [];
  filteredSongs: Song[] = [];
  loading = false;
  searched = false;
  selectedSongForPlaylist: Song | null = null;
  showPlaylistPicker = false;

  private searchSubject = new Subject<string>();
  private destroy$ = new Subject<void>();

  constructor(
    private music: MusicService,
    public playlistService: PlaylistService,
    public favoritesService: FavoritesService,
    private auth: AuthLocalService,
    private toastr: NbToastrService,
  ) {}

  ngOnInit(): void {
    this.searchSubject.pipe(
      debounceTime(450),
      distinctUntilChanged(),
      switchMap(term => {
        this.loading = true;
        this.searched = true;
        // iTunes API searches both song name and artist by default; we'll post-filter client side
        return this.music.search(term);
      }),
      takeUntil(this.destroy$),
    ).subscribe({
      next: songs => {
        this.songs = songs;
        this.applyFilter();
        this.loading = false;
      },
      error: () => {
        this.loading = false;
        this.toastr.danger('Error al buscar. Verifica tu conexión.', 'Error');
      },
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  isLoggedIn(): boolean { return this.auth.isLoggedIn(); }

  onQueryChange(): void {
    if (this.query.trim().length >= 2) {
      this.searchSubject.next(this.query.trim());
    } else if (!this.query.trim()) {
      this.clearSearch();
    }
  }

  onFilterChange(f: SearchFilter): void {
    this.filter = f;
    this.applyFilter();
  }

  /**
   * Post-filters results client-side based on the selected filter tab.
   * 'song'   → trackName must include the query (case-insensitive)
   * 'artist' → artistName must include the query (case-insensitive)
   * 'all'    → show everything returned by the API
   */
  private applyFilter(): void {
    const q = this.query.trim().toLowerCase();
    if (this.filter === 'song') {
      this.filteredSongs = this.songs.filter(s =>
        s.trackName.toLowerCase().includes(q),
      );
    } else if (this.filter === 'artist') {
      this.filteredSongs = this.songs.filter(s =>
        s.artistName.toLowerCase().includes(q),
      );
    } else {
      this.filteredSongs = [...this.songs];
    }
  }

  clearSearch(): void {
    this.query = '';
    this.songs = [];
    this.filteredSongs = [];
    this.searched = false;
    this.filter = 'all';
  }

  onAddToPlaylist(song: Song): void {
    this.selectedSongForPlaylist = song;
    this.showPlaylistPicker = true;
  }

  addToPlaylist(playlistId: string): void {
    if (!this.selectedSongForPlaylist) return;
    this.playlistService.addSongToPlaylist(playlistId, this.selectedSongForPlaylist);
    this.toastr.success('Canción agregada a la playlist', 'Playlist');
    this.showPlaylistPicker = false;
    this.selectedSongForPlaylist = null;
  }

  cancelPlaylistPicker(): void {
    this.showPlaylistPicker = false;
    this.selectedSongForPlaylist = null;
  }

  trackBySong(_: number, song: Song): number { return song.trackId; }
}
