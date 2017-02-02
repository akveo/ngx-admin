import { Component, OnInit } from '@angular/core';

import { TreeModel } from 'ng2-tree';

@Component({
  selector: 'tree-view',
  templateUrl: './tree-view.component.html',
})
export class TreeViewComponent implements OnInit {

  tree: TreeModel;

  constructor() { }

  ngOnInit(): void {
    this.tree = {
      value: 'Programming languages by programming paradigm',
      children: [
        {
          value: 'Object-oriented programming',
          children: [
            { value: 'Java' },
            { value: 'C++' },
            { value: 'C#' },
          ]
        },
        {
          value: 'Prototype-based programming',
          children: [
            { value: 'JavaScript' },
            { value: 'CoffeeScript' },
            { value: 'Lua' },
          ]
        }
      ]
    };
  }

}
