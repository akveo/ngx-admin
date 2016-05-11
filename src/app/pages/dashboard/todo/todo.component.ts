import {Component, ViewEncapsulation} from '@angular/core';

import {TodoService} from './todo.service';

@Component({
  selector: 'todo',
  encapsulation: ViewEncapsulation.None,
  providers: [TodoService],
  styles: [require('./todo.scss')],
  template: require('./todo.html')
})
export class Todo {

  public marks:Array<any>;
  public todoList:Array<any>;
  public newTodoText:string = '';

  constructor(private _todoService:TodoService) {
    this.marks = this._todoService.getMarks();
    this.todoList = this._todoService.getTodoList();
  }

  getNotDeleted() {
    return this.todoList.filter((item:any) => {return !item.deleted})
  }

  getMarkColor(id) {
    return this.marks.filter((item) => { return item.id === id;} )[0].color || '';
  }

  changeColor(todo) {
    for (var i = 0; i < this.marks.length; ++i) {
      if (this.marks[i].id === todo.markId) {
        var next = (i + 1 !== this.marks.length) ? i + 1 : 0;
        todo.markId = this.marks[next].id;
        return false;
      }
    }
  }

  blurOnEnter(event, item) {
    if (event.which === 13) {
      item.edit = false;
    }
  }

  addToDoItem($event) {

    if ($event.which === 1 || $event.which === 13) {

      this.todoList.unshift({
        text: this.newTodoText,
        edit: false,
        markId: 0
      });
      this.newTodoText = '';
    }
  }
}
