import {Component, ViewEncapsulation} from '@angular/core';

import {BaCard} from '../../../../theme/components';

import {InlineForm} from './components/inlineForm';
import {BlockForm} from './components/blockForm';
import {HorizontalForm} from './components/horizontalForm';
import {BasicForm} from './components/basicForm';
import {WithoutLabelsForm} from './components/withoutLabelsForm';

@Component({
  selector: 'layouts',
  encapsulation: ViewEncapsulation.None,
  directives: [BaCard, InlineForm, BlockForm, HorizontalForm, BasicForm, WithoutLabelsForm],
  styles: [],
  template: require('./layouts.html'),
})
export class Layouts {

  constructor() {
  }

  ngOnInit() {
  }
}
