import { Component, Inject } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Alumno } from '../table/table.component';

interface DialogData {
  alumno: Alumno;
}

@Component({
  selector: 'app-modal',
  templateUrl: './modal-form-student.component.html',
  styleUrls: ['./modal-form-student.component.css']
})
export class ModalComponent {

  studentForm: FormGroup;
  nombreCtrl: FormControl<string | null>;
  apellidoCtrl: FormControl<string | null>;
  dniCtrl: FormControl<string | null>;
  anioDeCursadaCtrl: FormControl<string | null>;
  debeMateriasCtrl: FormControl<string | null>;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private dialogRef: MatDialogRef<ModalComponent>,
    public formBuilder: FormBuilder
  ) {
    const { id, dni, nombre, apellido, anioDeCursada, debeMaterias } = data.alumno;
    
    this.nombreCtrl = new FormControl(nombre, [ Validators.required ]);
    this.apellidoCtrl = new FormControl(apellido, [ Validators.required ]);
    this.dniCtrl = new FormControl(dni, [ Validators.required ]);
    this.anioDeCursadaCtrl = new FormControl(anioDeCursada, [ Validators.required ]);
    this.debeMateriasCtrl = new FormControl(debeMaterias, [ Validators.required ]);

    this.studentForm = this.formBuilder.group({
      id: new FormControl(id, []), 
      dni: this.dniCtrl,
      nombre: this.nombreCtrl,
      apellido: this.apellidoCtrl,
      anioDeCursada: this.anioDeCursadaCtrl,
      debeMaterias: this.debeMateriasCtrl,
    });
  }

  onSubmit(): void {
    this.dialogRef.close(this.studentForm.value);
  }

  onClose(): void {
    this.dialogRef.close();
  }
}
