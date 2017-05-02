import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgaCardModule } from '@nga/theme';
import { NgaBootstrapModule } from '@nga/bootstrap';

@NgModule ({
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    NgaCardModule,
    NgaBootstrapModule,
  ],
})
export class NgxSharedModule { }
