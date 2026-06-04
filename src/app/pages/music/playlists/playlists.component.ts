import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Playlist } from '../../../@core/models';
import { PlaylistService } from '../../../@core/services/playlist.service';
import { NbToastrService, NbDialogService } from '@nebular/theme';

@Component({
  selector: 'ngx-playlists',
  templateUrl: './playlists.component.html',
  styleUrls: ['./playlists.component.scss'],
})
export class PlaylistsComponent implements OnInit, OnDestroy {
  playlists: Playlist[] = [];
  newPlaylistName = '';
  showCreateForm = false;
  private destroy$ = new Subject<void>();

  constructor(
    public playlistService: PlaylistService,
    private toastr: NbToastrService,
  ) {}

  ngOnInit(): void {
    this.playlistService.playlists$
      .pipe(takeUntil(this.destroy$))
      .subscribe(pl => this.playlists = pl);
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  createPlaylist(): void {
    if (!this.newPlaylistName.trim()) return;
    this.playlistService.createPlaylist(this.newPlaylistName.trim());
    this.toastr.success('Playlist creada', 'Listo');
    this.newPlaylistName = '';
    this.showCreateForm = false;
  }

  deletePlaylist(id: string): void {
    this.playlistService.deletePlaylist(id);
    this.toastr.info('Playlist eliminada', 'Playlists');
  }

  trackByPlaylist(_: number, p: Playlist): string { return p.id; }
}
