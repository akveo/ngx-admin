import { Component, HostBinding, Input, OnDestroy } from '@angular/core';
import { PlayerService } from '../../../../../@core/data/player.service';
import { Playlists } from '../../../../../@core/data/model/playlists.model';
import { Track } from '../../../../../@core/data/model/track.model';

@Component({
  selector: 'ngx-music-player',
  styleUrls: ['./music-player.component.scss'],
  templateUrl: './music-player.component.html',
})

export class MusicPlayerComponent implements OnDestroy {
  playlists: Playlists;
  player: HTMLAudioElement;
  shuffle: boolean;
  //track: Track;

  constructor() {
    this.createPlayer();
  }

  ngOnDestroy() {
    this.player.pause();
    this.player.src = '';
    this.player.load();
  }

  prev() {
    if (!this.player.loop) {
      // if (this.shuffle) {
      //   this.track = this.playlists.fields.recommendations.items[0].items[0];
      // }
      //  else {
      //   this.track = this.playerService.prev();
      // }
    }

    this.reload();
  }

  next() {
    if (!this.player.loop) {
      // if (this.shuffle) {
      //   this.track = this.playlists.fields.recommendations.items[0].items[0];
      // }
      // else {
      //   this.track = this.playerService.next();
      // }
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
    //this.player.src = (this.track != null) ? this.track.stream_url : "";
    this.player.load();
  }
}
