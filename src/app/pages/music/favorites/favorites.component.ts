import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Song, Playlist } from '../../../@core/models';
import { FavoritesService } from '../../../@core/services/favorites.service';
import { PlaylistService } from '../../../@core/services/playlist.service';
import { PlayerService } from '../../../@core/services/player.service';
import { NbToastrService } from '@nebular/theme';

@Component({
  selector: 'ngx-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss'],
})
export class FavoritesComponent implements OnInit, OnDestroy {
  favorites: Song[] = [];
  selectedSongForPlaylist: Song | null = null;
  showPlaylistPicker = false;
  private destroy$ = new Subject<void>();

  constructor(
    public favoritesService: FavoritesService,
    public playlistService: PlaylistService,
    public player: PlayerService,
    private toastr: NbToastrService,
  ) {}

  ngOnInit(): void {
    this.favoritesService.favorites$
      .pipe(takeUntil(this.destroy$))
      .subscribe(favs => this.favorites = favs);
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  onAddToPlaylist(song: Song): void {
    this.selectedSongForPlaylist = song;
    this.showPlaylistPicker = true;
  }

  addToPlaylist(playlistId: string): void {
    if (!this.selectedSongForPlaylist) return;
    this.playlistService.addSongToPlaylist(playlistId, this.selectedSongForPlaylist);
    this.toastr.success('Canción agregada a la playlist', 'Listo');
    this.showPlaylistPicker = false;
    this.selectedSongForPlaylist = null;
  }

  cancelPlaylistPicker(): void {
    this.showPlaylistPicker = false;
    this.selectedSongForPlaylist = null;
  }

  trackBySong(_: number, song: Song): number { return song.trackId; }
  trackByPlaylist(_: number, p: Playlist): string { return p.id; }
}
