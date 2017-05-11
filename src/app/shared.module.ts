import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgaCardModule, NgaBootstrapModule } from '@nga/theme';

@NgModule({
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    NgaCardModule,
    NgaBootstrapModule,
  ],
})
export class SharedModule { }
