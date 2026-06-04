import { Component, OnInit, OnDestroy } from '@angular/core';
import { combineLatest, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Song } from '../../../@core/models';
import { PlayerService } from '../../../@core/services/player.service';

@Component({
  selector: 'ngx-mini-player',
  templateUrl: './mini-player.component.html',
  styleUrls: ['./mini-player.component.scss'],
})
export class MiniPlayerComponent implements OnInit, OnDestroy {
  currentSong: Song | null = null;
  isPlaying = false;
  isLoading = false;
  progress = 0;
  duration = 0;

  private destroy$ = new Subject<void>();

  constructor(public player: PlayerService) {}

  ngOnInit(): void {
    combineLatest([
      this.player.currentSong$,
      this.player.isPlaying$,
      this.player.loading$,
      this.player.progress$,
      this.player.duration$,
    ]).pipe(takeUntil(this.destroy$)).subscribe(
      ([song, playing, loading, progress, duration]) => {
        this.currentSong = song;
        this.isPlaying = playing;
        this.isLoading = loading;
        this.progress = progress;
        this.duration = duration;
      },
    );
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  get progressPercent(): number {
    return this.duration > 0 ? (this.progress / this.duration) * 100 : 0;
  }

  onSeek(event: Event): void {
    const val = +(event.target as HTMLInputElement).value;
    this.player.seek(val);
  }

  formatTime(sec: number): string {
    if (!sec || isNaN(sec)) return '0:00';
    const m = Math.floor(sec / 60);
    const s = Math.floor(sec % 60);
    return `${m}:${s.toString().padStart(2, '0')}`;
  }

  get playIcon(): string {
    if (this.isLoading) return 'loader-outline';
    return this.isPlaying ? 'pause-circle-outline' : 'play-circle-outline';
  }
}
