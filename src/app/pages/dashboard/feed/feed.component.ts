import {Component, ViewEncapsulation} from '@angular/core';

import {FeedService} from './feed.service';

@Component({
  selector: 'feed',
  encapsulation: ViewEncapsulation.None,
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
