import { NgModule } from '@angular/core';

import { ThemeModule } from '../../@theme/theme.module';
import { RecoPlaylistsComponent } from './reco-playlists.component';
import { RecommendationsComponent } from './recommendations/recommendations.component';
import { PlaylistSelectorComponent } from './recommendations/playlist/playlist-selector.component';
import { MusicPlayerComponent } from './recommendations/playlist/player/music-player.component';

@NgModule({
  imports: [
    ThemeModule,
  ],
  declarations: [
    RecoPlaylistsComponent,
    RecommendationsComponent,
    PlaylistSelectorComponent,
    MusicPlayerComponent,
  ],
})
export class RecoPlaylistsModule { }
