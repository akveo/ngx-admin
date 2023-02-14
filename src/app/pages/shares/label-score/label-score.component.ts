import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-label-score',
  templateUrl: './label-score.component.html',
  styleUrls: ['./label-score.component.scss']
})
export class LabelScoreComponent implements OnInit {


  selectedImage!: number;
  showOverlay = false;

  constructor() { }

  ngOnInit() {
  }

  images = [
    { id: 1, url: 'https://via.placeholder.com/150x150', selected: false, labelscore: [{ "label": "live-casino", "score": 99.6 }, { "label": "baccarat", "score": 96.8 }, { "label": "roulette", "score": 94.2 }, { "label": "dragon-tiger", "score": 80.5 }, { "label": "sicbo", "score": 22.2 }, { "label": "slot", "score": 12.3 }] },
    // { id: 2, url: 'https://via.placeholder.com/150x150', selected: false, labelscore: [{ "label": "live-casino", "score": 99.6 }, { "label": "baccarat", "score": 96.8 }, { "label": "roulette", "score": 94.2 }, { "label": "dragon-tiger", "score": 80.5 }, { "label": "sicbo", "score": 22.2 }, { "label": "slot", "score": 12.3 }] },
    // { id: 3, url: 'https://via.placeholder.com/150x150', selected: false, labelscore: [{ "label": "live-casino", "score": 99.6 }, { "label": "baccarat", "score": 96.8 }, { "label": "roulette", "score": 94.2 }, { "label": "dragon-tiger", "score": 80.5 }, { "label": "sicbo", "score": 22.2 }, { "label": "slot", "score": 12.3 }] },
  ];




  toggleImageSelection(mImage: any) {
    // console.log(mImage)
    // this.images.forEach(image => {
    //   if (image.id === mImage.imageId) {
    //     image.selected = !image.selected;
    //   }
    // });
  }

  toggleSelection(image: any) {
    image.selected = !image.selected;
  }

}
