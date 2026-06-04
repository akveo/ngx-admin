import { Component, Input, Output, EventEmitter, OnInit, OnDestroy } from '@angular/core';
import { combineLatest, Subject } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';
import { Song } from '../../../@core/models';
import { PlayerService } from '../../../@core/services/player.service';
import { FavoritesService } from '../../../@core/services/favorites.service';
import { AuthLocalService } from '../../../@core/services/auth-local.service';

@Component({
  selector: 'ngx-song-card',
  templateUrl: './song-card.component.html',
  styleUrls: ['./song-card.component.scss'],
})
export class SongCardComponent implements OnInit, OnDestroy {
  @Input() song: Song;
  @Output() addToPlaylist = new EventEmitter<Song>();

  /** True when THIS card's song is currently playing */
  isThisPlaying = false;
  /** True when THIS card's song is loaded (even if paused) */
  isThisActive = false;
  /** True when the player is buffering this song */
  isLoading = false;
  isFavorite = false;
  isLoggedIn = false;

  private destroy$ = new Subject<void>();

  constructor(
    public player: PlayerService,
    private favorites: FavoritesService,
    private auth: AuthLocalService,
  ) {}

  ngOnInit(): void {
    this.isLoggedIn = this.auth.isLoggedIn();
    this.isFavorite = this.favorites.isFavorite(this.song.trackId);

    // Single reactive subscription for play state
    combineLatest([this.player.currentSong$, this.player.isPlaying$, this.player.loading$]).pipe(
      map(([current, playing, loading]) => ({
        isActive: current?.trackId === this.song.trackId,
        isPlaying: current?.trackId === this.song.trackId && playing,
        isLoading: current?.trackId === this.song.trackId && loading,
      })),
      takeUntil(this.destroy$),
    ).subscribe(({ isActive, isPlaying, isLoading }) => {
      this.isThisActive = isActive;
      this.isThisPlaying = isPlaying;
      this.isLoading = isLoading;
    });

    // Favorites state
    this.favorites.favorites$.pipe(takeUntil(this.destroy$)).subscribe(() => {
      this.isFavorite = this.favorites.isFavorite(this.song.trackId);
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  togglePlay(): void {
    if (!this.song.previewUrl) return;
    this.player.toggle(this.song);
  }

  toggleFavorite(event: Event): void {
    event.stopPropagation();
    if (!this.isLoggedIn) return;
    if (this.isFavorite) {
      this.favorites.removeFavorite(this.song.trackId);
    } else {
      this.favorites.addFavorite(this.song);
    }
  }

  onAddToPlaylist(event: Event): void {
    event.stopPropagation();
    this.addToPlaylist.emit(this.song);
  }

  formatDuration(ms: number): string {
    if (!ms) return '0:00';
    const s = Math.floor(ms / 1000);
    return `${Math.floor(s / 60)}:${(s % 60).toString().padStart(2, '0')}`;
  }

  get playIcon(): string {
    if (this.isLoading) return 'loader-outline';
    if (this.isThisPlaying) return 'pause-circle-outline';
    return 'play-circle-outline';
  }
}
