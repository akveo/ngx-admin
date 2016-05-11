import {Injectable} from '@angular/core';

@Injectable()
export class TodoService {

  private _marks = [
    {
      id: 0,
      color: 'default'
    },
    {
      id: 1,
      color: 'primary'
    },
    {
      id: 2,
      color: 'success'
    },
    {
      id: 3,
      color: 'warning'
    },
    {
      id: 4,
      color: 'danger'
    }
  ];

  private _todoList = [
    {
      text: 'Check me out',
      edit: false,
      markId: 4
    },
    {
      text: 'Lorem ipsum dolor sit amet, possit denique oportere at his, etiam corpora deseruisse te pro',
      edit: false,
      markId: 3
    },
    {
      text: 'Ex has semper alterum, expetenda dignissim',
      edit: false,
      markId: 2
    },
    {
      text: 'Vim an eius ocurreret abhorreant, id nam aeque persius ornatus.',
      edit: false,
      markId: 1
    },
    {
      text: 'Simul erroribus ad usu',
      edit: false,
      markId: 0
    },
    {
      text: 'Ei cum solet appareat, ex est graeci mediocritatem',
      edit: false,
      markId: 4
    },
    {
      text: 'Get in touch with akveo team',
      edit: false,
      markId: 1
    },
    {
      text: 'Write email to business cat',
      edit: false,
      markId: 3
    },
    {
      text: 'Have fun with blur admin',
      edit: false,
      markId: 2
    },
  ];

  getMarks() {
    return this._marks;
  }

  getTodoList() {
    return this._todoList;
  }
}
