import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NavbarComponent } from './components/navbar/navbar.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { MaterialModule } from './material/material.module';
import { StudentFormComponent } from './components/student-form/student-form.component';
import { TableComponent } from './components/table/table.component';
import { ModalComponent } from './components/ModalFormStudent/modal-form-student.component';
import { PipesModule } from './pipes/pipes.module';
import { DirectivesModule } from './directives/directives.module';

const COMPONENTS = [
  NavbarComponent,
  ToolbarComponent,
  StudentFormComponent,
  TableComponent,
  ModalComponent
]

@NgModule({
  declarations: COMPONENTS,
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    PipesModule,
    DirectivesModule
  ],
  exports: COMPONENTS
})

export class SharedModule { }
