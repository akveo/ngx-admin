import { Component, HostBinding, Input } from '@angular/core';
import { PlayerService, Track } from '../../../@core/data/player.service';


@Component({
  selector: 'ngx-player',
  styleUrls: ['./player.component.scss'],
  templateUrl: './player.component.html',
})
export class PlayerComponent {
  @Input()
  @HostBinding('class.collapsed')
  collapsed: boolean;

  track: Track;
  player: HTMLAudioElement;
  shuffle: boolean;

  constructor(private playerService: PlayerService) {
    this.track = this.playerService.random();
    this.createPlayer();
  }

  prev() {
    if (this.shuffle) {
      this.track = this.playerService.random();
    } else {
      this.track = this.playerService.prev();
    }

    this.reload();
  }

  next() {
    if (this.shuffle) {
      this.track = this.playerService.random();
    } else {
      this.track = this.playerService.next();
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
    return this.player.volume * 100;
  }

  setProgress(duration: number) {
    this.player.currentTime = this.player.duration * duration / 100;
  }

  getProgress(): number {
    return this.player.currentTime / this.player.duration * 100 || 0;
  }

  private createPlayer() {
    this.player = new Audio();
    this.player.onended = () => this.next();
    this.setTrack();
  }

  private reload() {
    this.setTrack();
    this.player.play();
  }

  private setTrack() {
    this.player.src = this.track.url;
    this.player.load();
  }
}
