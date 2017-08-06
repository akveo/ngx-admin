import { Injectable } from '@angular/core';
import 'rxjs/add/observable/of';

export class Track {
  name: string;
  artist: string;
  url: string;
  cover: string;
}

@Injectable()
export class PlayerService {
  current: number;
  playlist: Track[] = [
    {
      name: 'Don\'t Wanna Fight',
      artist: 'Alabama Shakes',
      url: 'https://p.scdn.co/mp3-preview/6156cdbca425a894972c02fca9d76c0b70e001af',
      cover: './assets/images/cover1.jpg',
    },
    {
      name: 'Good Vibrations',
      artist: 'Marky Mark And The Funky Bunch',
      url: 'https://p.scdn.co/mp3-preview/d502c5fa63d28442808779a3832524b4fb1c44fa',
      cover: './assets/images/cover2.jpg',
    },
    {
      name: 'Come Together',
      artist: 'Beatles',
      url: 'https://p.scdn.co/mp3-preview/83090a4db6899eaca689ae35f69126dbe65d94c9',
      cover: './assets/images/cover3.jpg',
    },
  ];

  random(): Track {
    this.current = Math.floor(Math.random() * this.playlist.length);
    return this.playlist[this.current];
  }

  next(): Track {
    return this.getNextTrack();
  }

  prev() {
    return this.getPrevTrack();
  }

  private getNextTrack(): Track {
    if (this.current === this.playlist.length - 1) {
      this.current = 0;
    } else {
      this.current++;
    }

    return this.playlist[this.current];
  }

  private getPrevTrack(): Track {
    if (this.current === 0) {
      this.current = this.playlist.length - 1;
    } else {
      this.current--;
    }

    return this.playlist[this.current];
  }
}
