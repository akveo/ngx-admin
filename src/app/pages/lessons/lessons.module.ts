// import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { Lesson1Component } from './lesson1/lesson1.component';
// import { LessonsComponent } from './lessons.component';

// @NgModule({
//   imports: [
//     CommonModule
//   ],
//   declarations: [Lesson1Component, LessonsComponent]
// })
// export class LessonsModule { }

import { NgModule } from '@angular/core';

import { ThemeModule } from '../../@theme/theme.module';
import { LessonsRoutingModule, routedComponents } from './lessons-routing.module';
import { Header1Component } from './lesson1/header1/header1.component';
import { ToCamelPipe } from './to-camel.pipe';
import { DemoDirective } from './demo.directive';

@NgModule({
  imports: [
    ThemeModule,
    LessonsRoutingModule,
  ],
  declarations: [
    ...routedComponents,
    Header1Component,
    ToCamelPipe,
    DemoDirective,
  ],
  // providers: [],
})
export class LessonsModule { }
