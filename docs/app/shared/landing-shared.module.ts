import { NgModule } from '@angular/core';
import { NbPopoverModule } from '@nebular/theme';
import { MaterialThemeLinkComponent } from './components/material-theme-link/material-theme-link.component';
import { CapitalizePipe } from './pipes/capitalize.pipe';
import { EvaIconsPipe } from './pipes/eva-icons.pipe';
import { RouterModule } from '@angular/router';

const component = [MaterialThemeLinkComponent];
const pipes = [CapitalizePipe, EvaIconsPipe];

@NgModule({
  imports: [RouterModule, NbPopoverModule],
  declarations: [...component, ...pipes],
  exports: [NbPopoverModule, ...component, ...pipes],
})
export class LandingSharedModule {}
