import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavbarComponent } from './components/navbar/navbar.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { MaterialModule } from './material/material.module';
import { StudentFormComponent } from './components/student-form/student-form.component';

@NgModule({
  declarations: [
    NavbarComponent,
    ToolbarComponent,
    StudentFormComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    NavbarComponent,
    ToolbarComponent,
    StudentFormComponent
  ]
})

export class SharedModule { }
