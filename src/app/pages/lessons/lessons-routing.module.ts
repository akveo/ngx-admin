import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LessonsComponent } from './lessons.component';
import { Lesson1Component } from './lesson1/lesson1.component';

const routes: Routes = [{
  path: '',
  component: LessonsComponent,
  children: [{
    path: 'lesson1',
    component: Lesson1Component,
  }],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LessonsRoutingModule { }

export const routedComponents = [
  LessonsComponent,
  Lesson1Component,
];
