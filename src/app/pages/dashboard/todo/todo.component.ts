import { Component } from '@angular/core';

import { BaThemeConfigProvider } from '../../../theme';

import { TodoService } from './todo.service';

import 'style-loader!./todo.component.scss';

@Component({
  selector: 'todo',
  templateUrl: './todo.component.html'
})
export class TodoComponent {

  dashboardColors: any;
  newTodoText: string;
  todoList: Array<any>;

  constructor(private _baConfig: BaThemeConfigProvider, private _todoService: TodoService) {
    this.dashboardColors = this._baConfig.get().colors.dashboard;
    this.newTodoText = '';
    this.todoList = this._todoService.getTodoList();

    this.todoList.forEach((item: any) => {
      item.color = this._getRandomColor();
    });
  }

  getNotDeleted() {
    return this.todoList.filter((item: any) => {
      return !item.deleted;
    });
  }

  addToDoItem($event: any) {
    if (($event.which === 1 || $event.which === 13) && this.newTodoText.trim() !== '') {

      this.todoList.unshift({
        text: this.newTodoText,
        color: this._getRandomColor(),
      });
      this.newTodoText = '';
    }
  }

  private _getRandomColor() {
    const colors: Array<any> = Object.keys(this.dashboardColors).map(key => this.dashboardColors[key]);

    const i: number = Math.floor(Math.random() * (colors.length - 1));
    return colors[i];
  }
}
