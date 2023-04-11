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
      name: 'Mauro',
      surname: 'Gauto',
      dni: '42175350',
      email: 'mauro.gauto@gmail.com',
      phone: '1122334455',
      courseSelected: 'JavaScript'
    },
    {
      id: 2,
      name: 'Aquiles',
      surname: 'Tendon',
      dni: '42134432',
      email: 'aquiles.tendon@gmail.com',
      phone: '1122334456',
      courseSelected: 'Java'
    },
    {
      id: 3,
      name: 'Rogelia',
      surname: 'Buendia',
      dni: '42134432',
      email: 'Rogelia.Buendia@gmail.com',
      phone: '1122334470',
      courseSelected: 'My SQL'
    }
  ];

  addStudentForm(): void {
    const dialogo = this.dialogService.open(ModalComponent, {
      data: {
        alumno: {
          name: '',
          surname: '',
          dni: '',
          email: '',
          phone: '',
          courseSelected: ''
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

  removeStudent(ev: number): void {
    const studentId = this.alumnos.findIndex((obj) => obj.id === ev);
    if (studentId > -1) {
      this.alumnos.splice(studentId, 1);
    };

    this.alumnos = [ ...this.alumnos ];
  }

  editStudent(ev: number): void {
    const studentId = this.alumnos.find((obj) => obj.id === ev);
    if (studentId) {
      const { id, name, surname, dni, email, phone, courseSelected } = studentId;
      const dialogo = this.dialogService.open(ModalComponent, {
        data: {
          alumno: {
            id,
            name,
            surname,
            dni,
            email,
            phone,
            courseSelected
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
