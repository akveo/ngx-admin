import { Component, EventEmitter, OnInit, Input, ChangeDetectorRef } from '@angular/core';
import { Recommendations } from '../../../../@core/data/model/recommendations.model';
import { Item } from '../../../../@core/data/model/item.model';

@Component({
  selector: 'ngx-playlist-selector',
  template: `
  <nb-tabset>
    <nb-tab *ngFor="let playlist of items" [tabTitle]="playlist.name">
      <div class="contact" *ngFor="let track of playlist.items">
           <nb-user [name]="track.name" size="small">
           </nb-user>
      </div>
    </nb-tab>
  </nb-tabset>
  `,
})
export class PlaylistSelectorComponent implements OnInit{
  @Input()
  recommendations : Recommendations;

  items: Item[];

  constructor(private cdRef: ChangeDetectorRef) {
  }

  ngOnInit() {
    this.items = this.recommendations.items;
  }

  /**
   * Fix for ExpressionChangedAfterItHasBeenCheckedError issue in angular 4
   */
  ngAfterViewChecked()
  {
    this.cdRef.detectChanges();
  }
}
