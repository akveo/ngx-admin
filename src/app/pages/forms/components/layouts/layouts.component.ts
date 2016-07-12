import {Component, ViewEncapsulation} from '@angular/core';

import {BaCard} from '../../../../theme/components';

import {InlineForm} from './components/inlineForm';
import {BlockForm} from './components/blockForm';
import {HorizontalForm} from './components/horizontalForm';
import {BasicForm} from './components/basicForm';
import {WithoutLabelsForm} from './components/withoutLabelsForm';
import {BaPictureUploader} from '../../../../theme/components';

@Component({
  selector: 'layouts',
  encapsulation: ViewEncapsulation.None,
  directives: [BaCard, InlineForm, BlockForm, HorizontalForm, BasicForm, WithoutLabelsForm, BaPictureUploader],
  styles: [],
  template: require('./layouts.html'),
})
export class Layouts {

  public defaultPicture = 'assets/img/theme/no-photo.png';
  public profile:any = {
    picture: 'assets/img/app/profile/Nasta.png'
  };
  public uploaderOptions:any = {
    // url: 'http://website.com/upload'
  };

  constructor() {
  }

  ngOnInit() {
  }
}
