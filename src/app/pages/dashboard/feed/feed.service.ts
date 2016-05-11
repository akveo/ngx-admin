import {Injectable} from '@angular/core';

@Injectable()
export class FeedService {

  private _data = [
    {
      type: 'text-message',
      author: 'Kostya',
      surname: 'Danovsky',
      header: 'Posted new message',
      text: 'Guys, check this out: \nA police officer found a perfect hiding place for watching for speeding motorists. One day, the officer was amazed when everyone was under the speed limit, so he investigated and found the problem. A 10 years old boy was standing on the side of the road with a huge hand painted sign which said "Radar Trap Ahead." A little more investigative work led the officer to the boy\'s accomplice: another boy about 100 yards beyond the radar trap with a sign reading "TIPS" and a bucket at his feet full of change.',
      time: 'Today 11:55 pm',
      ago: '25 minutes ago',
      expanded: false,
    }, {
      type: 'video-message',
      author: 'Andrey',
      surname: 'Hrabouski',
      header: 'Added new video',
      text: '"Vader and Me"',
      preview: 'app/feed/vader-and-me-preview.png',
      link: 'https://www.youtube.com/watch?v=IfcpzBbbamk',
      time: 'Today 9:30 pm',
      ago: '3 hrs ago',
      expanded: false,
    }, {
      type: 'image-message',
      author: 'Vlad',
      surname: 'Lugovsky',
      header: 'Added new image',
      text: '"My little kitten"',
      preview: 'app/feed/my-little-kitten.png',
      link: 'http://api.ning.com/files/DtcI2O2Ry7A7VhVxeiWfGU9WkHcMy4WSTWZ79oxJq*h0iXvVGndfD7CIYy-Ax-UAFCBCdqXI4GCBw3FOLKTTjQc*2cmpdOXJ/1082127884.jpeg',
      time: 'Today 2:20 pm',
      ago: '10 hrs ago',
      expanded: false,
    }, {
      type: 'text-message',
      author: 'Nasta',
      surname: 'Linnie',
      header: 'Posted new message',
      text: 'Haha lol',
      time: '11.11.2015',
      ago: '2 days ago',
      expanded: false,
    }, {
      type: 'geo-message',
      author: 'Nick',
      surname: 'Cat',
      header: 'Posted location',
      text: '"New York, USA"',
      preview: 'app/feed/new-york-location.png',
      link: 'https://www.google.by/maps/place/New+York,+NY,+USA/@40.7201111,-73.9893872,14z',
      time: '11.11.2015',
      ago: '2 days ago',
      expanded: false,
    }, {
      type: 'text-message',
      author: 'Vlad',
      surname: 'Lugovsky',
      header: 'Posted new message',
      text: "First snake: I hope I'm not poisonous. Second snake: Why? First snake: Because I bit my lip!",
      time: '12.11.2015',
      ago: '3 days ago',
      expanded: false,
    }, {
      type: 'text-message',
      author: 'Andrey',
      surname: 'Hrabouski',
      header: 'Posted new message',
      text: 'How do you smuggle an elephant across the border? Put a slice of bread on each side, and call him "lunch".',
      time: '14.11.2015',
      ago: '5 days ago',
      expanded: false,
    }, {
      type: 'text-message',
      author: 'Nasta',
      surname: 'Linnie',
      header: 'Posted new message',
      text: 'When your hammer is C++, everything begins to look like a thumb.',
      time: '14.11.2015',
      ago: '5 days ago',
      expanded: false,
    }, {
      type: 'text-message',
      author: 'Alexander',
      surname: 'Demeshko',
      header: 'Posted new message',
      text: '“I mean, they say you die twice. One time when you stop breathing and a second time, a bit later on, when somebody says your name for the last time." ©',
      time: '15.11.2015',
      ago: '6 days ago',
      expanded: false,
    }, {
      type: 'image-message',
      author: 'Nick',
      surname: 'Cat',
      header: 'Posted photo',
      text: '"Protein Heroes"',
      preview: 'app/feed/genom.png',
      link: 'https://dribbble.com/shots/2504810-Protein-Heroes',
      time: '16.11.2015',
      ago: '7 days ago',
      expanded: false,
    },
    {
      type: 'text-message',
      author: 'Kostya',
      surname: 'Danovsky',
      header: 'Posted new message',
      text: 'Why did the CoffeeScript developer keep getting lost? Because he couldn\'t find his source without a map',
      time: '18.11.2015',
      ago: '9 days ago',
      expanded: false,
    }
  ];

  getData() {
    return this._data;
  }
}
