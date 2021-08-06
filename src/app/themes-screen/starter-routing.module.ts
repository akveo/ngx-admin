import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NgxStarterComponent} from './starter.component';

const routes: Routes = [{
  path: '',
  component: NgxStarterComponent,
  children: [
    {
      path: '',
      component: NgxStarterComponent,
    },
    ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StarterRoutingModule {
}
