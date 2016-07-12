import {Component} from '@angular/core';
import {BranchyComponent, TreeModel} from 'ng2-branchy';
import {BaCard} from '../../../../theme/components/baCard';

@Component({
  selector: 'tree-view',
  directives: [BranchyComponent, BaCard],
  template: require('./treeView.html'),
})

export class TreeView {

  constructor() {
  }
  private tree: TreeModel = {
    value: 'Programming languages by programming paradigm',
    children: [
      {
        value: 'Object-oriented programming',
        children: [
          {value: 'Java'},
          {value: 'C++'},
          {value: 'C#'},
        ]
      },
      {
        value: 'Prototype-based programming',
        children: [
          {value: 'JavaScript'},
          {value: 'CoffeeScript'},
          {value: 'Lua'},
        ]
      }
    ]
  };

}
