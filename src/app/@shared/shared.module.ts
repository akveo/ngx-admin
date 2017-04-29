import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgaCardModule } from '@nga/theme';
import { CKEditorModule } from 'ng2-ckeditor';

@NgModule ({
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    NgaCardModule,
    CKEditorModule,
  ],
})
export class NgxSharedModule { }
