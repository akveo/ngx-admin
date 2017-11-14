import { NgModule } from '@angular/core';

import { ThemeModule } from '../../@theme/theme.module';
import { RecoPlaylistsComponent } from './reco-playlists.component';

@NgModule({
  imports: [
    ThemeModule,
  ],
  declarations: [
    RecoPlaylistsComponent,
  ],
})
export class RecoPlaylistsModule { }
