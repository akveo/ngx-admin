import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {StarterScreenComponent} from './starter-screen.component';
import {NgxStarterComponent} from './starter.component';

const routes: Routes = [{
  path: '',
  component: NgxStarterComponent,
  children: [
    {
      path: '',
      component: StarterScreenComponent,
    },
    ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StarterRoutingModule {
}
