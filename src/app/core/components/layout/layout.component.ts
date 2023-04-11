import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from 'src/app/shared/components/ModalFormStudent/modal-form-student.component';
import { Alumno } from 'src/app/shared/components/table/table.component';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  constructor(
    private dialogService: MatDialog
  ) {}

  alumnos: Alumno[] = [
    {
      id: 1,
      nombre: 'Perez',
      apellido: 'Gonzales',
      dni: '42132321',
      anioDeCursada: '5to',
      debeMaterias: 'si'
    }
  ];

  addStudentForm(): void {
    const dialogo = this.dialogService.open(ModalComponent, {
      data: {
        alumno: {
          nombre: '',
          apellido: '',
          dni: '',
          anioDeCursada: '',
          debeMaterias: ''
        }
      }
    });

    dialogo.afterClosed().subscribe(result => {
      if (result.dni) {
        const newStudent = { ...result, id: this.alumnos.length + 1 }
        this.alumnos = [ ...this.alumnos, newStudent ];
      }
    });
  }

  removeStudent(ev: string): void {
    const studentId = this.alumnos.findIndex((obj) => obj.dni === ev);
    if (studentId > -1) {
      this.alumnos.splice(studentId, 1);
    };

    this.alumnos = [ ...this.alumnos ];
  }

  editStudent(ev: string): void {
    const studentId = this.alumnos.find((obj) => obj.dni === ev);
    if (studentId) {
      const { id, nombre, apellido, dni, anioDeCursada, debeMaterias } = studentId;
      const dialogo = this.dialogService.open(ModalComponent, {
        data: {
          alumno: {
            id,
            nombre,
            apellido,
            dni,
            anioDeCursada,
            debeMaterias
          }
        }
      });

      dialogo.afterClosed().subscribe((result: Alumno) => {
        const newAlumnosList = this.alumnos.map(obj => {
          if (obj.id === result.id) {
            return { ...obj, ...result }
          }
          return obj;
        })
        this.alumnos = [ ...newAlumnosList ];
      });

    }
  }
}
