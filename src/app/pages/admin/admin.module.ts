import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import {
  NbCardModule, NbButtonModule, NbIconModule, NbInputModule,
  NbSpinnerModule, NbToastrModule,
} from '@nebular/theme';
import { AdminSongsComponent } from './songs/admin-songs.component';

const routes: Routes = [
  { path: 'songs', component: AdminSongsComponent },
  { path: '', redirectTo: 'songs', pathMatch: 'full' },
];

@NgModule({
  declarations: [AdminSongsComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
    NbCardModule,
    NbButtonModule,
    NbIconModule,
    NbInputModule,
    NbSpinnerModule,
    NbToastrModule,
  ],
})
export class AdminModule {}
