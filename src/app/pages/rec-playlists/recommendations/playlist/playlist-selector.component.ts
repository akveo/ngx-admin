import { Component, EventEmitter, OnInit, Input } from '@angular/core';
import { Recommendations } from '../../../../@core/data/model/recommendations.model';

@Component({
  selector: 'ngx-playlist-selector',
  template: `
  <nb-tabset>
    <nb-tab tabTitle="Test" *ngFor="let playlist of recommendations.items">
      <div class="contact">
           <nb-user [name]="playlist.title" size="small">
          </nb-user>
      </div>
    </nb-tab>
  </nb-tabset>
  `,
})
export class PlaylistSelectorComponent implements OnInit{
  @Input()
  recommendations : Recommendations;

  constructor() {
  }

  ngOnInit() {
    this.recommendations.items
  }
}
