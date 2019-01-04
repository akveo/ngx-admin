import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MFXComponent } from './mfx.component';
import { ThingsComponent } from './things/things.component';
import { ChannelsComponent } from './channels/channels.component';
import { ButtonRenderComponent } from './channels/button.render.component';


const routes: Routes = [{
  path: '',
  component: MFXComponent,
  children: [{
    path: 'things',
    component: ThingsComponent,
  },
  {
    path: 'channels',
    component: ChannelsComponent,
  }],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MFXRoutingModule { }

export const routedComponents = [
  MFXComponent,
  ChannelsComponent,
  ThingsComponent,
];

