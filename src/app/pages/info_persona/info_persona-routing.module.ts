import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InfoPersonaComponent } from './info_persona.component';
import { ListInfoPersonaComponent } from './list-info_persona/list-info_persona.component';
import { CrudInfoPersonaComponent } from './crud-info_persona/crud-info_persona.component';



const routes: Routes = [{
  path: '',
  component: InfoPersonaComponent,
  children: [{
    path: 'list-info_persona',
    component: ListInfoPersonaComponent,
  }, {
    path: 'crud-info_persona',
    component: CrudInfoPersonaComponent,
  }],
}];

@NgModule({
  imports: [
      RouterModule.forChild(routes),
  ],
  exports: [
      RouterModule,
  ],
})

export class InfoPersonaRoutingModule { }

export const routedComponents = [
  InfoPersonaComponent,
  ListInfoPersonaComponent,
  CrudInfoPersonaComponent,
];
