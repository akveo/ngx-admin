import { Component, HostBinding, Input, OnDestroy, Inject, PLATFORM_ID, Renderer2 } from '@angular/core';
import { PlayerService, Track } from '../../../../@core/data/player.service';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'ngx-player',
  styleUrls: ['./player.component.scss'],
  templateUrl: './player.component.html',
})
export class PlayerComponent implements OnDestroy {
  @Input()
  @HostBinding('class.collapsed')
  collapsed: boolean;

  track: Track;
  player: HTMLAudioElement;
  shuffle: boolean;

  constructor(
    private playerService: PlayerService,
    private renderer: Renderer2,
    @Inject(PLATFORM_ID) private platformId: Object,
  ) {
    this.track = this.playerService.random();
    this.createPlayer();
  }

  ngOnDestroy() {
    this.player.src = '';
    if (isPlatformBrowser(this.platformId)) {
      this.player.pause();
      this.player.load();
    }
  }

  prev() {
    if (!this.player.loop) {
      if (this.shuffle) {
        this.track = this.playerService.random();
      } else {
        this.track = this.playerService.prev();
      }
    }

    this.reload();
  }

  next() {
    if (!this.player.loop) {
      if (this.shuffle) {
        this.track = this.playerService.random();
      } else {
        this.track = this.playerService.next();
      }
    }

    this.reload();
  }

  playPause() {
    if (this.player.paused) {
      this.player.play();
    } else {
      this.player.pause();
    }
  }

  toggleShuffle() {
    this.shuffle = !this.shuffle;
  }

  toggleLoop() {
    this.player.loop = !this.player.loop;
  }

  setVolume(volume: number) {
    this.player.volume = volume / 100;
  }

  getVolume(): number {
    return isPlatformBrowser(this.platformId)
      ? this.player.volume * 100
      : 50;
  }

  setProgress(duration: number) {
    this.player.currentTime = this.player.duration * duration / 100;
  }

  getProgress(): number {
    return this.player.currentTime / this.player.duration * 100 || 0;
  }

  private createPlayer() {
    this.player = this.renderer.createElement('audio');
    this.player.onended = () => this.next();
    this.setTrack();
  }

  private reload() {
    this.setTrack();
    this.player.play();
  }

  private setTrack() {
    this.player.src = this.track.url;
    if (isPlatformBrowser(this.platformId)) {
      this.player.load();
    }
  }
}
