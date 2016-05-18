import {Component, ViewEncapsulation} from '@angular/core';

import {BaProfilePicturePipe, BaAppPicturePipe} from '../../../theme/pipes';
import {FeedService} from './feed.service';

@Component({
  selector: 'feed',
  encapsulation: ViewEncapsulation.None,
  providers: [FeedService],
  pipes: [BaProfilePicturePipe, BaAppPicturePipe],
  styles: [require('./feed.scss')],
  template: require('./feed.html')
})
export class Feed {

  public feed:Array<Object>;

  constructor(private _feedService:FeedService) {
  }

  ngOnInit() {
    this._loadFeed();
  }

  expandMessage (message){
    message.expanded = !message.expanded;
  }

  private _loadFeed() {
    this.feed = this._feedService.getData();
  }
}
