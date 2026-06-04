import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Song } from '../models';

@Injectable({ providedIn: 'root' })
export class PlayerService implements OnDestroy {
  /**
   * Single Audio instance — guarantees only one song plays at a time.
   * Loading a new src automatically stops the previous one.
   */
  private audio = new Audio();
  private audio$ = this.audio; // reference kept for clarity in event bindings

  private currentSongSubject = new BehaviorSubject<Song | null>(null);
  private isPlayingSubject = new BehaviorSubject<boolean>(false);
  private progressSubject = new BehaviorSubject<number>(0);
  private durationSubject = new BehaviorSubject<number>(0);
  private loadingSubject = new BehaviorSubject<boolean>(false);

  readonly currentSong$ = this.currentSongSubject.asObservable();
  readonly isPlaying$ = this.isPlayingSubject.asObservable();
  readonly progress$ = this.progressSubject.asObservable();
  readonly duration$ = this.durationSubject.asObservable();
  /** True while the browser is fetching/buffering audio */
  readonly loading$ = this.loadingSubject.asObservable();

  get currentSongValue(): Song | null { return this.currentSongSubject.value; }
  get isPlayingValue(): boolean { return this.isPlayingSubject.value; }

  constructor() {
    this.audio$.addEventListener('timeupdate', () => {
      this.progressSubject.next(this.audio$.currentTime);
    });

    this.audio$.addEventListener('loadedmetadata', () => {
      this.durationSubject.next(this.audio$.duration);
      this.loadingSubject.next(false);
    });

    this.audio$.addEventListener('waiting', () => {
      this.loadingSubject.next(true);
    });

    this.audio$.addEventListener('canplay', () => {
      this.loadingSubject.next(false);
    });

    this.audio$.addEventListener('ended', () => {
      this.isPlayingSubject.next(false);
      this.progressSubject.next(0);
    });

    this.audio$.addEventListener('error', () => {
      this.isPlayingSubject.next(false);
      this.loadingSubject.next(false);
    });

    this.audio$.addEventListener('pause', () => {
      this.isPlayingSubject.next(false);
    });

    this.audio$.addEventListener('play', () => {
      this.isPlayingSubject.next(true);
    });
  }

  /**
   * Play a song. If a different song is already loaded, the previous one
   * is stopped first (one active song at a time invariant).
   */
  play(song: Song): void {
    if (!song.previewUrl) return;

    // Stop and reset if it's a different song
    if (this.currentSongSubject.value?.trackId !== song.trackId) {
      this.audio$.pause();
      this.audio$.currentTime = 0;
      this.audio$.src = song.previewUrl;
      this.audio$.load();
      this.currentSongSubject.next(song);
      this.progressSubject.next(0);
      this.durationSubject.next(0);
      this.loadingSubject.next(true);
    }

    this.audio$.play().catch(() => {
      this.isPlayingSubject.next(false);
      this.loadingSubject.next(false);
    });
  }

  pause(): void {
    this.audio$.pause();
  }

  /**
   * Toggle play/pause for the given song.
   * If a different song is passed, stops the current one and starts the new one.
   */
  toggle(song: Song): void {
    if (this.currentSongSubject.value?.trackId === song.trackId) {
      if (this.isPlayingValue) {
        this.pause();
      } else {
        this.audio$.play().catch(() => this.isPlayingSubject.next(false));
      }
    } else {
      this.play(song);
    }
  }

  /** Seek to a specific time in seconds */
  seek(time: number): void {
    if (isNaN(time)) return;
    this.audio$.currentTime = Math.max(0, Math.min(time, this.audio$.duration || 0));
  }

  /** Stop playback and clear the current song */
  stop(): void {
    this.audio$.pause();
    this.audio$.currentTime = 0;
    this.audio$.src = '';
    this.isPlayingSubject.next(false);
    this.progressSubject.next(0);
    this.durationSubject.next(0);
    this.currentSongSubject.next(null);
    this.loadingSubject.next(false);
  }

  ngOnDestroy(): void {
    this.audio$.pause();
    this.audio$.src = '';
  }
}
