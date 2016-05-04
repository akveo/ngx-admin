import {Component, ViewEncapsulation} from 'angular2/core';

@Component({
  selector: 'typography',
  pipes: [],
  providers: [],
  styles: [],
  template: require('./typography.html'),
})
export class Typography {

  constructor() {
  }

  ngOnInit() {
    console.log('typography');
  }

}
