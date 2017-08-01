import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NbCardModule, NbThemeModule } from '@nebular/theme';
import { ThemeModule } from './@theme/theme.module';

@NgModule({
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    NbCardModule,
    NbThemeModule,
    ThemeModule,
  ],
})
export class SharedModule { }
