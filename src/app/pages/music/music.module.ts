import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import {
  NbCardModule,
  NbButtonModule,
  NbIconModule,
  NbInputModule,
  NbSpinnerModule,
  NbToastrModule,
  NbBadgeModule,
  NbListModule,
  NbActionsModule,
  NbTagModule,
  NbFormFieldModule,
  NbDialogModule,
} from '@nebular/theme';

import { ThemeModule } from '../../@theme/theme.module';
import { CatalogComponent } from './catalog/catalog.component';
import { SearchComponent } from './search/search.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { PlaylistsComponent } from './playlists/playlists.component';
import { PlaylistDetailComponent } from './playlist-detail/playlist-detail.component';

const routes: Routes = [
  { path: 'catalog', component: CatalogComponent },
  { path: 'search', component: SearchComponent },
  { path: 'favorites', component: FavoritesComponent },
  { path: 'playlists', component: PlaylistsComponent },
  { path: 'playlists/:id', component: PlaylistDetailComponent },
  { path: '', redirectTo: 'catalog', pathMatch: 'full' },
];

@NgModule({
  declarations: [
    CatalogComponent,
    SearchComponent,
    FavoritesComponent,
    PlaylistsComponent,
    PlaylistDetailComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
    ThemeModule,
    NbCardModule,
    NbButtonModule,
    NbIconModule,
    NbInputModule,
    NbSpinnerModule,
    NbToastrModule,
    NbBadgeModule,
    NbListModule,
    NbActionsModule,
    NbTagModule,
    NbFormFieldModule,
    NbDialogModule,
  ],
})
export class MusicModule {}
