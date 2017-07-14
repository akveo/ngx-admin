import { Component } from '@angular/core';
import { Range } from 'immutable';

@Component({
  selector: 'ngx-player',
  styleUrls: ['./player.component.scss'],
  templateUrl: './player.component.html',
})
export class PlayerComponent {

  selectedVolume: number = 10;
  volume = Range(0, 30, 1);
  playlistCommandsModel = {
    left: true,
    middle: true,
    right: false,
  };

  minus() {
    if (this.selectedVolume !== 0) {
      this.selectedVolume--;
    }
  }

  plus() {
    if (this.selectedVolume !== 29) {
      this.selectedVolume++;
    }
  }
}
