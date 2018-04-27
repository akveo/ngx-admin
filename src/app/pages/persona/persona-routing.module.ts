import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersonaComponent } from './persona.component';
import { ListPersonaComponent } from './list-persona/list-persona.component';
import { CrudPersonaComponent } from './crud-persona/crud-persona.component';



const routes: Routes = [{
  path: '',
  component: PersonaComponent,
  children: [{
    path: 'list-persona',
    component: ListPersonaComponent,
  }, {
    path: 'crud-persona',
    component: CrudPersonaComponent,
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

export class PersonaRoutingModule { }

export const routedComponents = [
  PersonaComponent,
  ListPersonaComponent,
  CrudPersonaComponent,
];
