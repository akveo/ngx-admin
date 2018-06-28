import { Component , OnInit} from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { ViewChild } from '@angular/core';
import { TreeComponent, TREE_ACTIONS, KEYS, IActionMapping, ITreeOptions } from 'angular-tree-component';
import * as _ from 'lodash';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { InputComponent } from './input.component';
@Component({
  selector: 'ngx-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.scss'],
})
export class TreeComponent implements OnInit{

  nodes = [{
    name: 'Programming languages by programming paradigm',
    children: [{
      name: 'Object-oriented programming',
      children: [{
        name: 'Java',
      }, {
        name: 'C++',
      }, {
        name: 'C#',
      }],
    }, {
      name: 'Prototype-based programming',
      children: [{
        name: 'JavaScript',
      }, {
        name: 'CoffeeScript',
      }, {
        name: 'Lua',
      }],
    }],
  }];
  options: ITreeOptions = {
    displayField: 'name',
    isExpandedField: 'expanded',
    idField: 'id',
    hasChildrenField: 'children',
    actionMapping: {
      mouse: {
        dblClick: (tree, node, $event) => {
          if (node.hasChildren) TREE_ACTIONS.TOGGLE_EXPANDED(tree, node, $event);
        }
      }
    },
    animateExpand: true,
    animateSpeed: 30,
    animateAcceleration: 1.2
  }
  constructor(
    private http: Http,
    private modalService: NgbModal,
  ) { }

  ngOnInit() {
  }
  @ViewChild(TreeComponent)
  private tree: TreeComponent;
  actionClick(node, tree, op) {
    // const inputs = document.getElementsByClassName('actionPane');
    // for (let i = 0; i < inputs.length; i++) {
    //   // inputs[i].style.visibility = 'hidden';
    // }
    switch (op) {
      case 1:
        this.openPopup(node, tree , 'Edit' , 1);
        break;
      case 2:
        this.openPopup(node, tree , 'Add Node' , 2);
        break;
      case 3:
        this.openPopup(node, tree , 'Add Catagery', 3);
        break;
      default: alert('Invalid Action');
    }
    // const wrapper = document.getElementsByClassName('node-content-wrapper');
    // for (let i = 0; i < wrapper.length; i++) {
    //   // wrapper[i].style.height = '20px';
    // }
    // document.getElementById(node.data.id).style.visibility = 'visible';
    // if (op == 1)
    //   term.value = node.data.name;
    // else
    //   term.value = '';
    // this.operation = op;
    // document.getElementById('content' + node.data.id).style.height = '50px';
  }


  openPopup(node , tree , header , ops) {
    const activeModal = this.modalService.open(InputComponent, { size: 'lg', container: 'nb-layout' });
    activeModal.componentInstance.modalHeader = header;
    activeModal.componentInstance.modalOperation = ops;
    activeModal.componentInstance.modalNode = node;
    activeModal.componentInstance.modalTree = tree;
    activeModal.result.then(() => {
      console.log('When user closes');
      this.tree.treeModel.update();
    }, () => { console.log('Backdrop click')
    });


  }
  deleteNode(node, tree) {
    if (confirm('Are you sure to delete ' + node.data.name)) {
      const parentNode = node.realParent ? node.realParent : node.treeModel.virtualRoot;
      _.remove(parentNode.data.children, function (child) {
        return child === node.data;
      });
      tree.treeModel.update();
      if (node.parent.data.children.length === 0) {
        node.parent.data.hasChildren = false;
      }
    }
  }
}
