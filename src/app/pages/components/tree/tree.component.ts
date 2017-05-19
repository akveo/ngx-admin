import { Component } from '@angular/core';
import { TreeModel } from 'ng2-tree';

@Component({
  selector: 'ngx-tree',
  templateUrl: './tree.component.html',
})
export class TreeComponent {

  tree: TreeModel = {
    value: 'Programming languages by programming paradigm',
    children: [{
      value: 'Object-oriented programming',
      children: [{
        value: 'Java',
      }, {
        value: 'C++',
      }, {
        value: 'C#',
      }],
    }, {
      value: 'Prototype-based programming',
      children: [{
        value: 'JavaScript',
      }, {
        value: 'CoffeeScript',
      }, {
        value: 'Lua',
      }],
    }],
  };

}
