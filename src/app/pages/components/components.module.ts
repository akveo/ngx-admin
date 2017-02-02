import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { TreeModule } from 'ng2-tree';
import { NgaModule } from '../../theme/nga.module';

import { routing } from './components.routing';
import { ComponentsComponent } from './components.component';

import { TreeViewComponent } from './components/tree-view/tree-view.component';

@NgModule({
  imports: [
    CommonModule,
    NgaModule,
    routing,
    TreeModule
  ],
  declarations: [
    ComponentsComponent,
    TreeViewComponent
  ]
})
export class ComponentsModule { }
