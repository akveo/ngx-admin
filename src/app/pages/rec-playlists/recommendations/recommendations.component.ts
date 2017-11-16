import { Component, Input, OnInit } from '@angular/core';
import { Playlists } from '../../../@core/data/model/playlists.model';
import { Recommendations } from '../../../@core/data/model/recommendations.model';

@Component({
  selector: 'ngx-recommendations',
  template: `
    <nb-card [size]='medium'>
      <ngx-playlist-selector [recommendations]="recommendations"></ngx-playlist-selector>
    </nb-card>
  `,
})
export class RecommendationsComponent implements OnInit{
  @Input()
  playlists: Playlists;

  recommendations: Recommendations;


  ngOnInit() {
    this.recommendations = this.playlists.fields.recommendations;
    console.log(" Playlist inside RecommendationsComponent :"+this.playlists.intent);
  }

  constructor() {
  }
}
