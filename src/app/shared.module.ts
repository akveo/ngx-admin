import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgaCardModule, NgaThemeModule } from '@akveo/nga-theme';
import { ThemeModule } from './@theme/theme.module';

@NgModule({
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    NgaCardModule,
    NgaThemeModule,
    ThemeModule,
  ],
})
export class SharedModule { }
