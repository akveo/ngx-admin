import { Component, OnInit } from '@angular/core';

import { FeedService } from './feed.service';
import 'style-loader!./feed.component.scss';

@Component({
  selector: 'feed',
  templateUrl: './feed.component.html'
})
export class FeedComponent implements OnInit {

  feed: Array<any>;

  constructor(private _feedService: FeedService) { }

  ngOnInit(): void {
    this._loadFeed();
  }

  expandMessage(message: any): void {
    message.expanded = !message.expanded;
  }

  private _loadFeed(): void {
    this.feed = this._feedService.getData();
  }
}
