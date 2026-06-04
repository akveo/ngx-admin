import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Playlist } from '../../../@core/models';
import { PlaylistService } from '../../../@core/services/playlist.service';
import { NbToastrService } from '@nebular/theme';

@Component({
  selector: 'ngx-playlists',
  templateUrl: './playlists.component.html',
  styleUrls: ['./playlists.component.scss'],
})
export class PlaylistsComponent implements OnInit, OnDestroy {
  playlists: Playlist[] = [];
  newPlaylistName = '';
  showCreateForm = false;
  renamingId: string | null = null;
  renameValue = '';
  confirmDeleteId: string | null = null;
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

  startRename(playlist: Playlist): void {
    this.renamingId = playlist.id;
    this.renameValue = playlist.name;
  }

  saveRename(): void {
    if (!this.renamingId || !this.renameValue.trim()) return;
    this.playlistService.renamePlaylist(this.renamingId, this.renameValue.trim());
    this.toastr.success('Playlist renombrada', 'Playlists');
    this.renamingId = null;
    this.renameValue = '';
  }

  cancelRename(): void {
    this.renamingId = null;
    this.renameValue = '';
  }

  requestDelete(id: string): void {
    this.confirmDeleteId = id;
  }

  confirmDelete(): void {
    if (!this.confirmDeleteId) return;
    this.playlistService.deletePlaylist(this.confirmDeleteId);
    this.toastr.info('Playlist eliminada', 'Playlists');
    this.confirmDeleteId = null;
  }

  cancelDelete(): void {
    this.confirmDeleteId = null;
  }

  formatDate(isoDate: string): string {
    return new Date(isoDate).toLocaleDateString('es-MX', { day: 'numeric', month: 'short', year: 'numeric' });
  }

  trackByPlaylist(_: number, p: Playlist): string { return p.id; }
}
