import { Component, OnInit, OnDestroy } from '@angular/core';
import { NbDialogService, NbToastrService } from '@nebular/theme';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Song } from '../../../@core/models';
import { MusicService } from '../../../@core/services/music.service';
import { PlaylistService } from '../../../@core/services/playlist.service';
import { AuthLocalService } from '../../../@core/services/auth-local.service';

@Component({
  selector: 'ngx-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss'],
})
export class CatalogComponent implements OnInit, OnDestroy {
  songs: Song[] = [];
  loading = true;
  error = false;
  selectedSongForPlaylist: Song | null = null;
  showPlaylistPicker = false;

  private destroy$ = new Subject<void>();

  constructor(
    private music: MusicService,
    public playlistService: PlaylistService,
    private auth: AuthLocalService,
    private toastr: NbToastrService,
  ) {}

  ngOnInit(): void {
    this.music.getCatalog()
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: songs => {
          this.songs = songs;
          this.loading = false;
        },
        error: () => {
          this.error = true;
          this.loading = false;
        },
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  isLoggedIn(): boolean { return this.auth.isLoggedIn(); }

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
}
