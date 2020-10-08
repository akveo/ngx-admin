import { NgModule } from '@angular/core';
import {NbBadgeModule, NbButtonModule, NbCardModule, NbDialogModule, NbPopoverModule} from '@nebular/theme';
import { MaterialThemeLinkComponent } from './components/material-theme-link/material-theme-link.component';
import { CapitalizePipe } from './pipes/capitalize.pipe';
import { EvaIconsPipe } from './pipes/eva-icons.pipe';
import { RouterModule } from '@angular/router';
import { DownloadAdminComponent } from './components/download-admin/download-admin.component';
import { DownloadFormComponent } from './components/download-form/download-form.component';
import { PremiumComponent } from './components/premium/premium.component';
import { PremiumFormComponent } from './components/premium-form/premium-form.component';

const component = [
  MaterialThemeLinkComponent,
  DownloadAdminComponent,
  DownloadFormComponent,
  PremiumComponent,
  PremiumFormComponent,
];
const pipes = [
  CapitalizePipe,
  EvaIconsPipe,
];

@NgModule({
  imports: [
    RouterModule,
    NbPopoverModule,
    NbBadgeModule,
    NbCardModule,
    NbDialogModule.forChild(),
    NbButtonModule,
  ],
  declarations: [
    ...component,
    ...pipes,
  ],
  exports: [
    NbPopoverModule,
    ...component,
    ...pipes,
  ],
})
export class LandingSharedModule {}
