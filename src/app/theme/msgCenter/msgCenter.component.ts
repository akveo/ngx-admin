import {Component, ViewEncapsulation} from 'angular2/core';
import {ProfilePicturePipe} from '../pipes/image/profile-picture.pipe';

@Component({
    selector: 'msg-center',
    styles: [ require('./msgCenter.scss') ],
    template: require('./msgCenter.html'),
    pipes: [ProfilePicturePipe]
})
export class MsgCenter  {
  users = {
    0: {
      name: 'Vlad'
    },
    1: {
      name: 'Kostya'
    },
    2: {
      name: 'Andrey'
    },
    3: {
      name: 'Nasta'
    }
  };

  notifications = [
    {
      userId: 0,
      template: '&name posted a new article.',
      time: '1 min ago'
    },
    {
      userId: 1,
      template: '&name changed his contact information.',
      time: '2 hrs ago'
    },
    {
      image: 'assets/img/shopping-cart.svg',
      template: 'New orders received.',
      time: '5 hrs ago'
    },
    {
      userId: 2,
      template: '&name replied to your comment.',
      time: '1 day ago'
    },
    {
      userId: 3,
      template: 'Today is &name\'s birthday.',
      time: '2 days ago'
    },
    {
      image: 'assets/img/comments.svg',
      template: 'New comments on your post.',
      time: '3 days ago'
    },
    {
      userId: 1,
      template: '&name invited you to join the event.',
      time: '1 week ago'
    }
  ];

  messages = [
    {
      userId: 3,
      text: 'After you get up and running, you can place Font Awesome icons just about...',
      time: '1 min ago'
    },
    {
      userId: 0,
      text: 'You asked, Font Awesome delivers with 40 shiny new icons in version 4.2.',
      time: '2 hrs ago'
    },
    {
      userId: 1,
      text: 'Want to request new icons? Here\'s how. Need vectors or want to use on the...',
      time: '10 hrs ago'
    },
    {
      userId: 2,
      text: 'Explore your passions and discover new ones by getting involved. Stretch your...',
      time: '1 day ago'
    },
    {
      userId: 3,
      text: 'Get to know who we are - from the inside out. From our history and culture, to the...',
      time: '1 day ago'
    },
    {
      userId: 1,
      text: 'Need some support to reach your goals? Apply for scholarships across a variety of...',
      time: '2 days ago'
    },
    {
      userId: 0,
      text: 'Wrap the dropdown\'s trigger and the dropdown menu within .dropdown, or...',
      time: '1 week ago'
    }
  ];

  getMessage(msg) {
    var text = msg.template;
    if (msg.userId || msg.userId === 0) {
      text = text.replace('&name', '<strong>' + this.users[msg.userId].name + '</strong>');
    }
    return text;
  };
}
