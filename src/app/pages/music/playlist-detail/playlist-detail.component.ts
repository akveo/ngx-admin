import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Playlist, Song } from '../../../@core/models';
import { PlaylistService } from '../../../@core/services/playlist.service';
import { PlayerService } from '../../../@core/services/player.service';
import { NbToastrService } from '@nebular/theme';

@Component({
  selector: 'ngx-playlist-detail',
  templateUrl: './playlist-detail.component.html',
  styleUrls: ['./playlist-detail.component.scss'],
})
export class PlaylistDetailComponent implements OnInit, OnDestroy {
  playlist: Playlist | null = null;
  private destroy$ = new Subject<void>();

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private playlistService: PlaylistService,
    public player: PlayerService,
    private toastr: NbToastrService,
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.playlistService.playlists$
      .pipe(takeUntil(this.destroy$))
      .subscribe(playlists => {
        this.playlist = playlists.find(p => p.id === id) || null;
        if (!this.playlist) this.router.navigate(['/pages/music/playlists']);
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  removeSong(trackId: number): void {
    if (!this.playlist) return;
    this.playlistService.removeSongFromPlaylist(this.playlist.id, trackId);
    this.toastr.info('Canción eliminada de la playlist', 'Playlist');
  }

  trackBySong(_: number, song: Song): number { return song.trackId; }
}
